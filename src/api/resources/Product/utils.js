import Joi from 'joi';

export const validateRequestBody = requestBody => {
    const schema = Joi.object({
        title: Joi.string().min(3).max(50).required(),
        category: Joi.string().required(),
    });
    const { value, error } = schema.validate(requestBody);
    if (error && error.details) {
      return { validationErrors: error.details };
    }
    return { requestParams: value };
}