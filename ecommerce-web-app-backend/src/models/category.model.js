const mongoose = require('mongoose');
const { Schema } = mongoose;

const allowedCategories = [
    'electronics',
    'clothing',
    'books',
    'home appliances',
    'sports',
    'toys'
];

const categorySchema = new Schema(
    {
        categoryName: {
            type: String,
            required: [true, 'Category name is required'],
            unique: true,
            enum: allowedCategories,
            trim: true,
            lowercase: true
        },
        isActive: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true
    }
);

categorySchema.index({ categoryName: 1 });

const Category = mongoose.model('Category', categorySchema);

module.exports = {
    Category
};