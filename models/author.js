const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const BookSchema = new Schema({
  title: String,
  pages: Number
});

const AuthorSchema = new Schema({
  name: String,
  age: Number,
  books: [BookSchema]
});

// create model

const Author = mongoose.model('author', AuthorSchema); // collection, Schema

module.exports = Author;
