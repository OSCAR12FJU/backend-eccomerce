import fs from 'fs';

export interface IProduct {
    id?: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
    category: string;
    productType: string;
}
export class Product {
    id: string;
    title: string;
    price: number;
    quantity: number;
    image: string;
    description: string;
    category: string;
    productType: string;

    constructor({ title, price, quantity, image, description, category, productType }: IProduct) {
        const productJson = JSON.parse(fs.readFileSync('./store/storeProducts.json', 'utf-8'));
        const data = productJson.products.length > 0 ? productJson.products[productJson.products.length - 1].id + 1 : 1;
        
        this.id = String(data);
        this.title = title;
        this.price = price;
        this.quantity = quantity;
        this.image = image;
        this.description = description;
        this.category = category;
        this.productType = productType;
    }
    isValid(){
        return this.title && this.price && this.description && this.quantity && this.category && this.image && this.productType;
    }
}
