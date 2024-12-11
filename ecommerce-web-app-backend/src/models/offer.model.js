const mongoose = require('mongoose');
const { Schema } = mongoose;

const offerSchema = new Schema(
  {
    couponCode: {
      type: String,
      required: [true, "Coupon code is required"],
      unique: true,
      trim: true,
      uppercase: true
    },
    discountType: {
      type: String,
      required: [true, "Discount type is required"],
      lowercase: true,
      enum: {
        values: ["fixed", "rate"],
        message: "Discount type must be either 'fixed' or 'rate'"
      }
    },
    discountValue: {
      type: Number,
      required: [true, "Discount value is required"],
      min: [0, "Discount value must be positive"]
    },
    startDate: {
      type: Date,
      required: [true, "Start date is required"]
    },
    endDate: {
      type: Date,
      required: [true, "End date is required"],
      validate: {
        validator: function (value) {
          return value > this.startDate;
        },
        message: "End date must be after start date"
      }
    },
    description: {
      type: String,
      trim: true,
      maxlength: [500, "Description cannot exceed 500 characters"]
    },
    isActive: {
      type: Boolean,
      required: [true, "Activation and Deactivation of coupon code is required"],
      default: true
    }
  },
  {
    timestamps: true
  }
);

offerSchema.pre("save", function (next) {
  if (this.endDate < new Date()) {
    this.isActive = false;
  }
  next();
});

const Offer = mongoose.model("Offer", offerSchema);

module.exports = Offer;

