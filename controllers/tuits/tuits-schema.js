import mongoose from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
  username: String,
  handle: String,
  image: String,
  replies: Number,
  retuits: Number,
  userProfile: String
}, {collection: 'tuits'});

export default schema;