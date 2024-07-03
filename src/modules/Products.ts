import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
    },
    img: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    productType: {
        type: String,
        required: true
    },
    options: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Option",
        }
    ]
});

const Product = mongoose.model("Product", productSchema);

export default Product;