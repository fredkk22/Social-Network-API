const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema({
    thoughtText: { type: String, required: true, minlength: 1, maxlength: 280 },
    createdAt: { type: Date, default: Date.now, get: formatDate },
    username: { type: String, required: true },
    reactions: [{
        reactionId: {
            type: Schema.Types.ObjectId
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280
        },
        username: {
            type: String,
            required: true
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: formatDate
        }
    }]
})

const Thought = model('Thought', thoughtSchema);

Thought.create([
    { thoughtText: 'wewefwef', username: 'bob33', reactions: [{ reactionBody: 'fwefwefweg', username: 'bob44' }] }
])