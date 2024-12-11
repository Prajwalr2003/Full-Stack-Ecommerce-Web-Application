const mongoose = require('mongoose');
const { Schema } = mongoose;

const orderShippingAddressSchema = new Schema(
  {
    orderId: {
      type: Schema.Types.ObjectId,
      ref: "Order",
      required: true,
      index: true
    },
    shippingAddressId: {
      type: Schema.Types.ObjectId,
      ref: "ShippingAddress",
      required: true
    },
    // Duplicate fields for historical purposes:
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
    }
  },
  {
    timestamps: true
  }
);

// Ensure a unique combination of orderId and shippingAddressId if required
orderShippingAddressSchema.index({ orderId: 1, shippingAddressId: 1 }, { unique: true });

const OrderShippingAddress = mongoose.model("OrderShippingAddress", orderShippingAddressSchema);

module.exports = OrderShippingAddress;