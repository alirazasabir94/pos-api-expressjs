import express from 'express';
import { ProductCategoryRouter } from './resources/ProductCategory';
import { ProductRouter } from './resources/Product';

export const restRouter = express.Router();
restRouter.use('/product_categories', ProductCategoryRouter);
restRouter.use('/products', ProductRouter);
