const mongoose = require('mongoose');
const { Schema } = mongoose;

const productVariantSchema = new Schema({
    color: { type: String, trim: true, required: true },
    size: { type: String, trim: true, required: true },
    price: { type: Number, required: true },
    stockQuantity: { type: Number, default: 0 },
    images: [{ type: String }],
    productId: { type: Schema.Types.ObjectId, ref: "Product", required: true }
}, { timestamps: true });

productVariantSchema.index({ color: 1, size: 1, productId: 1 }, { unique: true });

const ProductVariant = mongoose.model("ProductVariant", productVariantSchema);
module.exports = ProductVariant;