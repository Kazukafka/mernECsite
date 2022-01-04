import mongoose from 'mongoose'

const connectDB = () => {
  if (mongoose.connections[0].readyState) {
    console.log('Already connected.')
    return;
  }
  // mongoose.connect(process.env.MONGODB_URL, {
  //   useCreateIndex: true,
  //   useFindAndModify: false,
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true
  // }, err => {
  //   if (err) throw err;
  //   console.log('Connected to mongodb.')
  // })

  // ↑だとMongoParseError: options useCreateIndex useFindAndModify are not supportedというエラーが発生
  // ↓バージョン６の書き方　https://exerror.com/mongoparseerror-options-usecreateindex-usefindandmodify-are-not-supported/
  mongoose.connect(process.env.MONGODB_URL, err => {
    if (err) throw err;
    console.log('Connected to mongodb.')
  })
}


export default connectDB
