import mongoose from 'mongoose';
import Joi from 'joi';

const { Schema, model } = mongoose;
export const ProductCategory = model('ProductCategory', new Schema({
  title: {
    type: String,
    required: [true, 'ProductCategory must have title'],
    unique: true
  },
}));

export const validate = record => {
  const schema = Joi.object({
    title: Joi.string().min(3).max(50).required(),
  });
  return schema.validate(record);
}

