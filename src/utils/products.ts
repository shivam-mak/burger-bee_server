import Products from "../modules/Products";
import Option from "../modules/Option";

type option = {
    title: string,
    additionalPrice: number
}

export const addProduct = async (title: string, price:number, productType: string, desc?:string, img?:string, options?:option[]) => { 
    let optArr:string[] = [];
    if(options){
        options.map(async elem=>{
            const newOption = new Option({title: elem.title, additionalPrice: elem.additionalPrice});
            let optionId = newOption._id.toString();
            optArr.push(optionId);
            await newOption.save();
        })
    }
    const newProduct = new Products({title, desc, img, price, productType, options: optArr})
    await newProduct.save();
    return newProduct;
}

export const getAllProduct = async () => {
    const products = await Products.find().populate("options");
    return products
}