const mongoose = require('mongoose');
const { Schema } = mongoose;
const {v4: uuidv4} = require('uuid');

const orderSchema = new Schema(
  {
    orderNumber: {
      type: String,
      required: true,
      unique: true, // Ensures each order has a unique order number
      default: () => uuidv4()
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    totalAmount: {
      type: Number,
      required: true // Total price of all items before discounts or charges
    },
    discountAmount: {
      type: Number,
      default: 0, // Default discount amount is 0
      min: [0, "Discount should be non-negative"]
    },
    grossAmount: {
      type: Number, // Total price after discounts but before shipping
      default: 0,
      min: [0, "Gross Amount should be non-negative"]
    },
    shippingAmount: {
      type: Number,
      default: 0, // Default shipping charge is 0
      min: [0, "Shipping Amount should be non-negative"]
    },
    netAmount: {
      type: Number, // Total payable amount
      default: 0,
      min: [0, "Net Amount should be non-negative"]
    },
    status: {
      type: String,
      enum: ["Placed", "Processing", "Shipping", "Delivered"],
      default: "Placed", // Default status when the order is created
      required: true
    }
  },
  {
    timestamps: true
  }
);

// Pre-save hook to calculate `grossAmount` and `netAmount`
orderSchema.pre("save", function (next) {
  this.grossAmount = this.totalAmount - this.discountAmount; // Calculate gross amount
  this.netAmount = this.grossAmount + this.shippingAmount; // Calculate net amount
  next();
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
