import { Schema, model, connect } from 'mongoose';

export default interface IUser extends Document {
  name: string;
  bio?: string;

  email: string;
  password: string;
}