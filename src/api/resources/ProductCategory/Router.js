import express from 'express';
import ProductCategoryController from './Controller';

const router = express.Router();

router
  .route('/')
  .post(ProductCategoryController.create)
  .get(ProductCategoryController.index);

router
  .route('/:id')
  .get(ProductCategoryController.show)
  .delete(ProductCategoryController.delete)
  .put(ProductCategoryController.update);

export default router;