import express from 'express';
import { ProductController } from '../controllers/product_controller';

const router = express.Router();

router.get('/getAllProducts', ProductController.getAll);

export default router;