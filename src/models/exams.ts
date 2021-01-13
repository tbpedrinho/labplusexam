import mongoose, {Document, Model} from 'mongoose';

export interface Exams {
    _id?: string;
    name: string;
    tipo: string;
    status: boolean;
}

const schema = new mongoose.Schema(
  {
    
    name: { type: String, require: true },
    tipo: { type: String, require: true },
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

interface ExamsModel extends Omit<Exams,'_id'>, Document {}
export const Exams: Model<ExamsModel> = mongoose.model('Exams', schema);
