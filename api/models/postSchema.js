var mongoose    = require( 'mongoose' ) ;
    // userSchema  = require( './userSchema.js' ) ;

var userSchema = {
  type:         { type: String, required: true, enum: ['video', 'article', 'code'] } ,
  url:          { type: String, required: true } ,
  title:        { type: String, required: true } ,
  desc:         { type: String, required: true } ,
  cat:          { type: String, required: true, enum: ['html', 'css', 'javascript', 'angular'] } ,
  tags:         [ { type: String } ] ,
  user:         { type: mongoose.Schema.Types.ObjectId, ref: 'User' } ,
  isApproved:   { type: Boolean, required: true, default: false } ,
  // rank:         { type: Number, required: true }
};

module.exports = new mongoose.Schema( userSchema );