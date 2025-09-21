import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  region: { type: String, required: true },
  type: { type: String, enum: ["Individual", "Business"], required: true }
});

const Customer = mongoose.model("Customer", customerSchema);

export default Customer;
