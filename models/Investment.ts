import mongoose, {Document, Model, Schema} from "mongoose";

export interface IInvestment extends Document {
  walletAddress: string;
  amountUSDT: number;
  tokensReceived: number;
  transactionHash?: string;
  paymentMethod: "usdt" | "card";
  timestamp: Date;
}

const InvestmentSchema = new Schema<IInvestment>({
  walletAddress: { type: String, required: true },
  amountUSDT: { type: Number, required: true, min: 10 },
  tokensReceived: { type: Number, required: true },
  transactionHash: { type: String },
  paymentMethod: { type: String, enum: ["usdt", "card"], required: true },
  timestamp: { type: Date, default: Date.now },
});

const Investment: Model<IInvestment> =
  mongoose.models.Investment ||
  mongoose.model<IInvestment & Document>("Investment", InvestmentSchema);

export default Investment;
