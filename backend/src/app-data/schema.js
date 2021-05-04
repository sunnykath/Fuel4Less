import mongoose from 'mongoose';

const Schema = mongoose.Schema;

// TODO: Implement Schema

// const articleSchema = new Schema({
//     title: { type: String, required: true },
//     date: Date,
//     image: String,
//     content: String
// }, {
//     timestamps: {}
// });

const Article = mongoose.model('Article', articleSchema);

export { Article };