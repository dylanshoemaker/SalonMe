const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const commentSchema = new Schema(
  {
    commentBody: {
      type: String,
      preferences: {type : { preference1 : String, preference2 : String}, default : null},
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
