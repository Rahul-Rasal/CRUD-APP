// import mongoose from "mongoose";
// import autoIncrement from "mongoose-auto-increment";

// const userSchema = mongoose.Schema({
//   name: String,
//   username: String,
//   email: String,
//   phone: String,
// });

// autoIncrement.initialize(mongoose.connection);

// userSchema.plugin(autoIncrement.plugin, "user");

// const user = mongoose.model("user", userSchema);

// export default user;

import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
  userId: { type: Number, index: true, unique: true },
});

const counterSchema = mongoose.Schema({
  _id: String,
  value: Number,
});

const Counter = mongoose.model("Counter", counterSchema);

userSchema.pre("save", function (next) {
  const doc = this;
  if (doc.isNew) {
    Counter.findByIdAndUpdate(
      { _id: "userId" },
      { $inc: { value: 1 } },
      { new: true, upsert: true },
      function (err, counter) {
        if (err) {
          next(err);
        } else {
          doc.userId = counter.value;
          next();
        }
      }
    );
  } else {
    next();
  }
});

const user = mongoose.model("user", userSchema);

export default user;
