var mongoose    = require( 'mongoose' ) ;

var bountySchema = {
  type:      { type: String, required: true, enum: ['video', 'article', 'code'] } ,
  title:     { type: String, required: true } ,
  desc:      { type: String, required: true } ,
  cat:       { type: String, required: true, enum: ['html', 'css', 'javascript', 'angular', 'mongo', 'mongoose', 'node', 'express', 'react'] } ,
  tags:      [ { type: String } ] ,
  value:     { type: Number, required: true } ,
  posts:     [ { type: mongoose.Schema.Types.ObjectId, ref: 'Post' } ] ,
  isClaimed: { type: Boolean, required: true, default: false }
};

module.exports = new mongoose.Schema( bountySchema );