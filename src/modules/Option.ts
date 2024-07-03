import mongoose from "mongoose";

const optionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    additionalPrice: {
        type: Number,
        required: true,
    }
});

const Option = mongoose.model("Option", optionSchema);

export default Option;