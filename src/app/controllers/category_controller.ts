import { Request, Response } from "express"
import { ProductServices } from "../../service/product_services";
import { CategoryServices } from "../../service/category_services";

export const CategoryController = {
    getAll: async (req: Request, res: Response) =>{
        try{ 
            const category = await CategoryServices.getAllCategory();
            res.status(201).json({
                message: "Successfully completed",
                category: category
            })
        }catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                error: error.message,});
            }
        }
    },
    insert: async (req: Request, res: Response) =>{
        const {category} = req.body;
        try{
            const newCategory = await CategoryServices.insertCategory(category);
            res.status(201).json({
                message: 'category created exit',
                category: newCategory
            })
        }catch(error: unknown){
            if (error instanceof Error) {
                res.status(400).json({
                error: error.message,});
            }
        }
    }

}