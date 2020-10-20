import express from 'express';
import { ProductCategoryRouter } from './resources/ProductCategory';

export const restRouter = express.Router();
restRouter.use('/product_categories', ProductCategoryRouter);
