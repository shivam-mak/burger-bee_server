 import { Request, Response } from "express";
import {addProduct, getAllProduct} from "../utils/products"

export const addProducts = async (req: Request, res: Response) => {
    try {
        const { title, desc, img, price, options, productType } = req.body;
        const addResult = await addProduct(title, price, productType, desc, img, options);
        if (!addResult)
            return res.status(400).json({ message: "Error adding product", success: false, data: null });
        res.status(200).json({
            message: "Product added successfully",
            success: true,
            data: addResult,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong",
            success: false,
            data: err,
        });
    }
}


export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const data = await getAllProduct();
        if(!data)
            return res.status(400).json({ message: "Error getting product", success: false, data: null });
        return res.status(200).json({
            message: "Views fetched successfully",
            success: true,
            data
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "Something went wrong",
            success: false,
            data: err,
        });
    }
}

