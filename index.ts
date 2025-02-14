import express from 'express';
import cors from 'cors';
import productRoutes from './src/app/routes/product_routes'
import categoryRoutes from './src/app/routes/category_routes'
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api/product', productRoutes);
app.use('/api/category', categoryRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`server runing http://localhost:${PORT}`);
});