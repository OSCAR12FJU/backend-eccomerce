import { IProduct, Product } from "../../domain/product_model";
import fs from 'fs';
interface ProductData {
    products: IProduct[];
}
const pathProducts = './store/storeProducts.json';
if(!fs.existsSync(pathProducts)){
    fs.writeFileSync(pathProducts, JSON.stringify({products:[]}, null, 2));
}

class ProductRepository{

    pathProducts: string;

    constructor(){
        this.pathProducts = pathProducts;
    }
    readData(): ProductData{
        const data = fs.readFileSync(this.pathProducts, 'utf-8');
        return JSON.parse(data);
    }
    writeData(data: ProductData){
        fs.writeFileSync(this.pathProducts, JSON.stringify(data, null, 2));
    }

    async save(product: IProduct){
        //Nos devuelve el contenido actualizado de lo que hay en el store
        const data = this.readData();
        //Como esto se guarda dentro de una propiedad llamada products la cual es un array de datos, para insertar el nuevo dato tenemos que utilizar un metodo de array;
        data.products.push(product);
        //Con esa data hacemos una conversión y la subimos al archivo store con los demás datos.
        this.writeData(data);
    }

    async getAllProducts(){
        const data = this.readData();
        return data.products;
    }
    async findTitleProduct(title: string){
        const data = this.readData();
        return data.products.find((product) => product.title.toLocaleLowerCase() === title.toLocaleLowerCase());
    }
    async findProduct(id: string){
        const data = this.readData();
        return data.products.find((product) => Number(product.id) === Number(id));
    }
    async filterCategory(category: string){
        const data = this.readData();
        return data.products.filter((product) => product.category.toLowerCase() === category.toLowerCase());
    }

}

const productRepositoryI = new ProductRepository();

export {productRepositoryI, ProductRepository}