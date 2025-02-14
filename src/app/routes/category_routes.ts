import express from 'express';
import { CategoryController } from '../controllers/category_controller';

const router = express.Router();

router.get('/getAllCategory', CategoryController.getAll);

export default router;