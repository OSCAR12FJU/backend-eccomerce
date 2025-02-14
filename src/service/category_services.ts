import { categoryRepoInsta, CategoryRepository } from "../infraestructure/repositories/category_repository"

export const CategoryServices = {
    getAllCategory: async () =>{
      const category = await categoryRepoInsta.getAllCategory();
      if(category.length <= 0){
        throw new Error('no exist category');
      }
      return category;
    },

    insertCategory: async (category: string) =>{
      const categoryInsert = await categoryRepoInsta.findCategory(category);
      if(categoryInsert){
        throw new Error('category no existing');
      }
      await categoryRepoInsta.saveCategory(category);
    
      return category;
    }
    
}