import { Schema, model, connect } from 'mongoose';

interface IUser extends Document {
  name: string;
  bio?: string;

  email: string;
  password: string;
}