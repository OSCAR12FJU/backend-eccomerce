import { Request, Response } from "express"
import { ProductServices } from "../../service/product_services";

export const ProductController = {
    getAll: async (req: Request, res: Response) =>{
        try{ 
            const products = await ProductServices.getAllProduct();
            res.status(201).json({
                message: "Successfully completed",
                products: products
            })
        }catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                error: error.message,});
            }
        }

    },
    //Falta configurar el formateo de la imagen
    insert: async (req: Request, res: Response) =>{
        const {title, price, description, quantity, image, productType, category} = req.body;

        // if(!req.file){
        //     return res.status(400).json({message: 'no file u'})
        // }

        try{ 
            const newProduct  = await ProductServices.insertProduct({title, price, description, quantity, category, image, productType});
            res.status(201).json({
                message: "Successfully completed",
                products: newProduct
            })
        }catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                error: error.message,});
            }
        }

    },
    getCategory: async (req: Request, res: Response) =>{
        const {category} =  req.params;
        try{
            const products = await ProductServices.fillProductCategory(category);
            res.status(201).json({
                message:'Successfully completed',
                products: products
            })
        }catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                error: error.message,});
            }
        }
    }
}