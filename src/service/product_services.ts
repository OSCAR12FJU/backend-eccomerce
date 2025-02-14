import { IProduct, Product } from "../domain/product_model";
import { productRepositoryI } from "../infraestructure/repositories/product_repository";

export const ProductServices = {
    getAllProduct : async ()=>{
        const products = await productRepositoryI.getAllProducts();
        if(products.length <= 0){
            throw new Error("no existing products");
        }
        return products;
    },
    insertProduct : async ({title, price, description, quantity, category, image, productType} : IProduct) =>{

        const newProduct = new Product({title, price, description, quantity, category, image, productType});
        if(!newProduct.isValid()){
            throw new Error("invalid product data");
        }
        const existProduct = await productRepositoryI.findTitleProduct(title);
        if(existProduct) {
            throw new Error('product exist');
        }

        await productRepositoryI.save(newProduct);

        return newProduct
    },
    fillProductCategory: async(category: string) => {
        const products = await productRepositoryI.filterCategory(category);
        if(products.length <= 0){
            throw new Error('no exist products')
        }
        return products;
    }

}