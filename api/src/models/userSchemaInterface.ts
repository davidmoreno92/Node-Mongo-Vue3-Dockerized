import * as mongoose from 'mongoose';

export interface UserSchemaInterface extends mongoose.Document {
  count: any,
  findOne: any,
  find: any
}