const mongoose = require('mongoose');
const { Schema } = mongoose;

const wishListSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
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
    }
  },
  {
    timestamps: true
  }
);

wishListSchema.index({ ususerIder: 1, productId: 1 }, { unique: true });

const WishList = mongoose.model("WishList", wishListSchema);

module.exports = WishList;
