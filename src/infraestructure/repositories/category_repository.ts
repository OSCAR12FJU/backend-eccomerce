import fs from 'fs';
import { resourceUsage } from 'process';
// interface ProductData {
//     products: IProduct[];
// }
const pathCategory = './store/storeCategory.json';
if(!fs.existsSync(pathCategory)){
    fs.writeFileSync(pathCategory, JSON.stringify({products:[]}, null, 2));
}

class CategoryRepository{

    category: string;

    constructor(){
        this.category = pathCategory;
    }
    readData(){
        const data = fs.readFileSync(this.category, 'utf-8');
        return JSON.parse(data);
    }
    insertData(data: string){
        fs.writeFileSync(this.category, JSON.stringify(data, null, 2))
    }
    async saveCategory(category: string){
        const data = this.readData();
        data.category.push(category);
        this.insertData(data);
    }
    async findCategory(category: string){
        const data = this.readData();
        return data.category.find((cate:string) => cate === category)
    }
    async getAllCategory(){
        const data = this.readData();
        return data.category;
    }
    
}

const categoryRepoInsta = new CategoryRepository();

export {categoryRepoInsta, CategoryRepository}