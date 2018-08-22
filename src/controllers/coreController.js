import mongoose from 'mongoose';
import { anythingSchema } from '../models/core';

const Anything = mongoose.model('anything', anythingSchema);

export const addAnything = (req, res) => {
  let data = new Anything(req.body);
  data.save((err, anyData) => {
    if (err) {
      res.send(err);
    }
    res.json(anyData);
  });
};
