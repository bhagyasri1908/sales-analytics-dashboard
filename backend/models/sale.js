import mongoose from "mongoose";

const saleSchema = new mongoose.Schema({
  customer: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true },
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  quantity: { type: Number, required: true },
  totalRevenue: { type: Number, required: true },
  reportDate: { type: Date, default: Date.now }
});

const Sale = mongoose.model("Sale", saleSchema);

export default Sale;
