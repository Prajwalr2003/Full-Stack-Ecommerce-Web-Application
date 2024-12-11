const mongoose = require('mongoose');
const { Schema } = mongoose;

const cartSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true
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
    quantity: {
      type: Number,
      required: true,
      default: 1,
      min: [1, "Quantity must be at least 1"]
    }
  },
  {
    timestamps: true
  }
);

// Ensure a user cannot add the same product (variant) multiple times
cartSchema.index({ userId: 1, productId: 1, productVariantId: 1 }, { unique: true });

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;