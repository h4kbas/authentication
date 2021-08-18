import { Schema, model, Model, Document } from 'mongoose';
import hash from '../utils/hash';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
};

export const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = model<IUser>('User', UserSchema);
export default User;