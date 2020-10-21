import express from 'express';
import ProductController from './Controller';

const router = express.Router();

router
  .route('/')
  .post(ProductController.create)
  .get(ProductController.index);

router
  .route('/:id')
  .get(ProductController.show)
  .delete(ProductController.delete)
  .put(ProductController.update);

export default router;