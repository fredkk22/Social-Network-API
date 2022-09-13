const { Schema, model } = require('mongoose');

const userSchema = new Schema(
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
      virtuals: true
    },
    id: false
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });

const User = model('User', userSchema);

User.create([
  { username: 'bob33', email: 'bob33@gmail.com' },
  { username: 'bob44', email: 'bob44@gmail.com' },
  { username: 'theo49', email: 'theo@gmail.com' },
  { username: 'paul402', email: 'paul@gmail.com' },
  { username: 'fred22', email: 'fred@gmail.com' },
  { username: 'young04', email: 'young@gmail.com' },
  { username: 'rhett39', email: 'rhett@gmail.com' }
]);


  
module.exports = User;