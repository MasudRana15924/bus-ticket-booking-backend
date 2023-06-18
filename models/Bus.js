const mongoose = require("mongoose");

const busSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    time:{
        type: String,
        required: true,
    },
    seats:{
        type: Number,
        required: true,
    },
    ratings: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        // required: true,
    },
    images: [
        {
            public_id: {
                type: String,
                // required: true,
            },
            url: {
                type: String,
                // required: true,
            },
        },
    ],
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [
        {
              user: {
                type: mongoose.Schema.ObjectId,
                ref: "User",
                // required: true,
              },
            name: {
                type: String,
                // required: true,
            },
            rating: {
                type: Number,
                // required: true,
            },
            comment: {
                type: String,
                // required: true,
            },
        },
    ],
   
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        // required: true,
      },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Bus", busSchema);