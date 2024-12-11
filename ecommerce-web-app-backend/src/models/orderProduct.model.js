const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderProductSchema = new Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    productVariantId: {
      type: Schema.Types.ObjectId,
      ref: "ProductVariant"
    },
    price: {
      type: Number,
      min: [0, "Price must be non-negative"],
      required: true
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quanity must be at least 1"],
      default: 1
    },
    totalAmount: {
      type: Number,
      min: [0, "Total Amount must be non-negative"],
    },
    paymentStatus: {
      type: String,
      lowercase: true,
      enum: ["paid", "unpaid"],
      default: "unpaid",
      required: true
    },
    paymentType: {
      type: String,
      enum: ["Net Banking", "UPI", "Cash On Delivery"],
      required: true,
      default: "Cash On Delivery"
    },
    paymentTransactionId: {
      type: String,
      required: function (){
        return this.paymentStatus === "paid";
      }
    }
  },
  {
    timestamps: true
  }
)

orderProductSchema.pre("save", function (next) {
  this.totalAmount = this.price * this.quantity;
  next();
});


const OrderProduct = mongoose.model("OrderProduct", orderProductSchema);

module.exports = OrderProduct;