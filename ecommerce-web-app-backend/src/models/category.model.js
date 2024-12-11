const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const { Schema } = mongoose;

const subCategorySchema = new Schema(
  {
    subCategoryName: {
      type: String,
      required: [true, 'SubCategory name is required'],
      unique: true,
      minlength: [3, 'SubCategory name must be at least 3 characters'],
      maxlength: [100, 'SubCategory name cannot exceed 100 characters'],
      trim: true 
    },
    description: {
      type: String,
      maxlength: 500, 
      trim: true
    },
    urlSlug: {
      type: String,
      required: true,
      unique: true
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }, 
  {
    timestamps: true
  }
)

subCategorySchema.plugin(slug, { path: 'urlSlug', lower: true });
subCategorySchema.index({ subCategoryName: 1 });

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: [true, 'Category name is required'],
      unique: true,
      minlength: [3, 'Category name must be at least 3 characters'],
      maxlength: [100, 'Category name cannot exceed 100 characters'],
      trim: true
    },
    urlSlug: {
      type: String,
      required: [true, 'URL Slug is required'],
      unique: true,
    },
    description: {
      type: String,
      maxlength: 1000, 
      trim: true
    },
    subCategoryId: [
      {
        type: Schema.Types.ObjectId,
        ref: 'SubCategory',
        required: [true, 'At least one subcategory is required']
      }
    ],
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
)

categorySchema.index({ categoryName: 1, urlSlug: 1 });
categorySchema.plugin(slug, { path: 'urlSlug', lower: true });

const SubCategory = mongoose.model('SubCategory', subCategorySchema);
const Category = mongoose.model('Category', categorySchema);

module.exports = {
  Category,
  SubCategory
};