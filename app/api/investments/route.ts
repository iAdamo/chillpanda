import dbConnect from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import Investment from "@/models/Investment";
import PresaleStats from "@/models/PresaleStats";

export async function GET(req: NextRequest) {
  await dbConnect();

  // get wallet address from query string: /api/investments?address=0x...
  const url = new URL(req.url);
  const address = url.searchParams.get("address");
  if (!address) {
    return NextResponse.json(
      { error: "Wallet address query param required" },
      { status: 400 }
    );
  }

  const investments = await Investment.find({ walletAddress: address }).sort({
    timestamp: -1,
  });
  const totalInvested = investments.reduce(
    (sum, inv) => sum + (inv.amountUSDT ?? 0),
    0
  );
  const totalTokens = investments.reduce(
    (sum, inv) => sum + (inv.tokensReceived ?? 0),
    0
  );
  return NextResponse.json({ investments, totalInvested, totalTokens });
}

export async function POST(req: NextRequest) {
  await dbConnect();
  try {
    const { walletAddress, amountUSDT, paymentMethod, transactionHash } =
      (await req.json()) as {
        walletAddress: string;
        amountUSDT: number;
        paymentMethod: string;
        transactionHash?: string;
      };

    if (amountUSDT < 10) {
      return NextResponse.json(
        { error: "Minimum investment amount is 10 USDT" },
        { status: 400 }
      );
    }

    // Calculate tokens (1500 tokens per $100 USDT)
    const tokensReceived = (amountUSDT / 100) * 1500;

    const investment = await Investment.create({
      walletAddress,
      amountUSDT,
      tokensReceived,
      paymentMethod,
      transactionHash: paymentMethod === "usdt" ? transactionHash : undefined,
    });

    // update PresaleStats
    await PresaleStats.findOneAndUpdate(
      {},
      {
        $inc: {
          totalRaised: amountUSDT,
          totalInvestors: 1,
        },
      },
      { upsert: true, new: true }
    );

    return NextResponse.json({ investment }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process investment" },
      { status: 500 }
    );
  }
}
