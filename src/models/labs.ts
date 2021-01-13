import mongoose, { Document, Model } from 'mongoose';

export interface Labs {
  _id?: string;
  name: string;
  addr: string;
  status: boolean;
}

const schema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    address: { type: String, require: true },
    status: { type: Boolean, required: true },
  },
  {
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

interface LabsModel extends Omit<Labs, '_id'>, Document {}
export const Labs: Model<LabsModel> = mongoose.model('Labs', schema);
