/**
 * Created by husong on 31/05/2018.
 */
import * as mongoose from 'mongoose'

const blogSchema = new mongoose.Schema({
  _id: {type: Number},
  title: String,
  content: String,
  date: {type: Date, default: Date.now},
  tags: [String]
})

export const Blog = mongoose.model('blog', blogSchema);

blogSchema.pre('save', function (next) {
  if (this.isNew) {
    Blog.count({}, (err, count) => {
      this._id = count
      next()
    })
  } else {
    next();
  }
});

