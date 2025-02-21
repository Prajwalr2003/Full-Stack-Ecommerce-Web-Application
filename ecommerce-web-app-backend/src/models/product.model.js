const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = mongoose;

mongoose.plugin(slug);

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, 'Product name is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Product name must be at least 3 characters'],
      maxlength: [100, 'Product name cannot exceed 100 characters'],
      index: true
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
      trim: true,
      maxlength: [1000, 'Description cannot exceed 1000 characters']
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: [0, 'Price must be a positive number']
    },
    stockQuantity: {
      type: Number,
      default: 0,
      min: [0, 'Stock quantity cannot be negative']
    },
    isActive: {
      type: Boolean,
      default: false,
      index: true
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Category is required']
    },
    urlSlug: {
      type: String,
      slug: 'productName',
      unique: true,
      slugPaddingSize: 4,
      index: true,
      required: true
    },
    images: [{
      imageUrl: { type: String, required: true },
      altText: String,
      order: Number
    }]
  },
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

module.exports = {
  Product
};
