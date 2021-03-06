import mongoose from 'mongoose';
const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});

let User = mongoose.model('User', userSchema);

export default User;