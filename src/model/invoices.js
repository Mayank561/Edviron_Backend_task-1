const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
  {
    dues: [{ type: mongoose.Schema.Types.ObjectId, ref: "Dues" }], // Assuming dues are references to another model
    status: {
      type: String,
      enum: ["pending", "paid", "cancelled"], 
      default: "pending",
    },
    payments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "payments",
      },
    ],
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
    },
    school: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "school",
    },

    fine_days: {
      type: Number,
      default: 0, 
    },
    fine_amount: {
      type: Number,
      default: 0, 
    },
    timestamp:{
      type: Date,
      require: true
    },
   
    fee_total:{
       type: Number
    }
  },
  {
    timestamps: true,
  }
);

const Invoice = mongoose.model("Invoice", invoiceSchema);

module.exports = Invoice;
