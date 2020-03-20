const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

// const task = new Task({
//   description: "Study Node.js 123"
// });

// task
//   .save()
//   .then(() => {
//     console.log(task);
//   })
//   .catch(error => {
//     console.log(error);
//   });

// const me = new User({
//   name: "       Jude123   ",
//   email: "JUDEe@gmail.com           ",
//   password: "asdasd123"
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch(error => {
//     console.log("Error", error);
//   });
