import mongoose from 'mongoose';

var anythingSchema = new mongoose.Schema({ any: {} });
var anythingSchema = new mongoose.Schema({ any: Object });
var anythingSchema = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed });

export default anythingSchema;
