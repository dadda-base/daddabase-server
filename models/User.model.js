const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    dadLevel: {
      type: String,
      enum: ["First-Timer", "Intermmediate", "Veteran"]
    },
    partnerIsPregnant: Boolean,
    dueDayOfBaby: Date,
    username: String,
    profileImage: String,
    resources: [ { 
      type: Schema.Types.ObjectId, 
      ref: 'Resource' } ],
    posts: [ { 
      type: Schema.Types.ObjectId, 
      ref: 'Post' } ]
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
