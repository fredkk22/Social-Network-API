const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true, trimmed: true },
    email: { type: String, unique: false, required: true, match: /.+\@.+\..+/ },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }]
  },
  {
    tJSON: {
      virtual: true
    },
    id: false
  }
);

// Using mongoose.model() to compile a model based on the schema 'bookSchema'
const User = mongoose.model('User', userSchema);

// Create new instances of the model, a document
User.create([
  { username: 'bob33', email: 'bob33@gmail.com' },
  { username: 'bob44', email: 'bob44@gmail.com' },
  { username: 'theo49', email: 'theo@gmail.com' },
  { username: 'paul402', email: 'paul@gmail.com' },
  { username: 'fred22', email: 'fred@gmail.com' },
  { username: 'young04', email: 'young@gmail.com' },
  { username: 'rhett39', email: 'rhett@gmail.com' }
]);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });
  
module.exports = User;