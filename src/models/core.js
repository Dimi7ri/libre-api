import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var anythingSchema = new Schema({ any: {} });
var anythingSchema = new Schema({ any: Object });
var anythingSchema = new Schema({ any: Schema.Types.Mixed });

export default anythingSchema;
