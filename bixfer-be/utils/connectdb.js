const mongoose = require("mongoose")
const url = process.env.MONGO_DB_CONNECTION_STRING
const connect = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
//   useCreateIndex: true,
// true in Mongoose 6 even without specifying
})
connect
  .then(db => {
    console.log("connected to db")
  })
  .catch(err => {
    console.log(err)
  })
