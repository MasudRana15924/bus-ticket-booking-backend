const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
 name: {
    type: String,
     required: true,
  },
email: {
    type: String,
     required: true,
  },
  phone: {
    type:Number,
     required: true,
  },
  // orderItems: [
  //   {
  //     name: {
  //       type: String,
  //       // required: true,
  //     },
  //     price: {
  //       type: Number,
  //       // required: true,
  //     },
  //     quantity: {
  //       type: Number,
  //       // required: true,
  //     },
  //     image: {
  //       type: String,
  //       // required: true,
  //     },
  //     product: {
  //       type: mongoose.Schema.ObjectId,
  //       ref: "Product",
  //       // required: true,
  //     },
  //   },
  // ],
     
      busname: {
        type: String,
        // required: true,
      },
      price: {
        type: Number,
        // required: true,
      },
      quantity: {
        type: Number,
        // required: true,
      },
      image: {
        type: String,
        // required: true,
      },
      busId: {
        type: mongoose.Schema.ObjectId,
        ref: "Bus",
        // required: true,
      },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    // required: true,
  },
  paidAt: {
    type: Date,
    // required: true,
  },
  // itemsPrice: {
  //   type: Number,
  //   required: true,
  //   default: 0,
  // },

  // totalPrice: {
  //   type: Number,
  //   // required: true,
  //   default: 0,
  // },
  // orderStatus: {
  //   type: String,
  //   // required: true,
  //   default: "Processing",
  // },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Order", orderSchema);