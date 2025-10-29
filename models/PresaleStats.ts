import mongoose, { Document, Model, Schema } from "mongoose";

// const PresaleStatsSchema = new mongoose.Schema({
//   totalRaised: { type: Number, default: 0 },
//   totalInvestors: { type: Number, default: 0 },
//   softCap: { type: Number, default: 50000000 },
//   hardCap: { type: Number, default: 50000000 },
// });

// export default mongoose.models.PresaleStats ||
//   mongoose.model("PresaleStats", PresaleStatsSchema);

export interface IPresaleStats extends Document {
  totalRaised: number;
  totalInvestors: number;
  softCap: number;
  hardCap: number;
}

const PresaleStatsSchema = new Schema<IPresaleStats>({
  totalRaised: { type: Number, default: 0 },
  totalInvestors: { type: Number, default: 0 },
  softCap: { type: Number, default: 50000000 },
  hardCap: { type: Number, default: 50000000 },
});

const PresaleStats: Model<IPresaleStats> =
  mongoose.models.PresaleStats ||
  mongoose.model<IPresaleStats & Document>("PresaleStats", PresaleStatsSchema);
export default PresaleStats;
