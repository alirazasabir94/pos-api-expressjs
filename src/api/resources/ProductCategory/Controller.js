import { ProductCategory, validate } from './Model';

export default {
  async create(req, res) {
    try {
      const { error } = validate(req.body);
      if (error && error.details) {
        return res.status(421).send(error.details);
      }
      const newRecordParams = { 
        title: req.body.title,
      };
      const newRecord = await ProductCategory.create(newRecordParams);
      return res.send(newRecord);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async index(req, res) {
    try {
      const records = await ProductCategory.find()
      return res.send(records);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async show(req, res) {
    try {
      const record = await ProductCategory.findById(req.params.id);
      if (!record) {
        return res.status(404).send({ error: 'could not find ProductCategory' });
      }
      return res.send(record);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const record = await ProductCategory.findOneAndRemove({ _id: id });
      if (!record) {
        return res.status(404).send({ error: 'could not find ProductCategory' });
      }
      return res.send(record);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
  async update(req, res) {
    try {
      const { error } = validate(req.body);
      if (error && error.details) {
        return res.status(421).send(error.details);
      }
      let toBeUpdateParams = {
        title: req.body.title,
      };
      const updatedRecord = await ProductCategory.findOneAndUpdate({ _id: req.params.id }, toBeUpdateParams, { new: true });
      if (!updatedRecord) {
        return res.status(404).send({ error: 'could not find ProductCategory' });
      }
      return res.send(updatedRecord);
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};
