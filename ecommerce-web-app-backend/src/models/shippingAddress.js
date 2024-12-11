const mongoose = require('mongoose');
const { Schema } = mongoose;

const shippingAddressSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    address: {
      type: String,
      required: true,
      trim: true
    },
    state: {
      type: String,
      required: true,
      trim: true,
      uppercase: true
    },
    city: {
      type: String,
      required: true,
      trim: true
    },
    zipCode: {
      type: String,
      required: true,
      trim: true
    },
    default: {
      type: Boolean,
      default: false
    },
    geoLocation: {
      lat: { type: Number },
      lng: { type: Number }
    }
  },
  {
    timestamps: true
  }
);

const ShippingAddress = mongoose.model("ShippingAddress", shippingAddressSchema);

module.exports = ShippingAddress;