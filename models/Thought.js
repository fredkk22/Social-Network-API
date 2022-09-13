const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
        createdAt: { type: Date, default: Date.now, get: formatDate },
        username: { type: String, required: true },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtual: true
        },
        id: false
    }
)

const Thought = model('Thought', thoughtSchema);

Thought.create([
    { thoughtText: 'wewefwef', username: 'bob33', reactions: [{ reactionBody: 'fwefwefweg', username: 'bob44' }] }
])

module.exports = Thought;