import mongoose, { Document, Model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
require("dotenv").config()
import jwt from "jsonwebtoken"
const emailRegexPattern: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export interface IUser extends Document {
  email: string;
  name: string;
  password: string;
  avatar: { public_id: string; url: string };
  role: string;
  isverified: boolean;
  courses: Array<{ courseId: string }>;
  comparePassword: (password: string) => Promise<boolean>;
  SingAccessToken: () => string;
  SingRefreshToken: () => string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please Enter your name"],
    },
    email: {
      type: String,
      required: [true, "please Enter your email"],
      validate: {
        validator: function (value: string) {
          return emailRegexPattern.test(value);
        },
        message: "please enter a valid email",
      },
      unique: true,
    },
    password: {
      type: String,
      minlength: [6, "Password must be at least 6 characters"],
      select: false,
    },
    avatar: {
      public_id: String,
      url: String,
    },
    role: {
      type: String,
      default: "user",
    },
    isverified: {
      type: Boolean,
      default: false,
    },
    courses: [
      {
        courseId: String,
      },
    ],
  },
  { timestamps: true }
);
//hash password before saving

userSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

//sing access token
userSchema.methods.SingAccessToken =  function () {
  return jwt.sign({id: this._id},process.env.ACCESS_TOKEN || "",{expiresIn: "5m"})
}
//sing refresh token
userSchema.methods.SingRefreshToken = function ()  {
  return jwt.sign({id: this._id},process.env.REFRESH_TOKEN || "",{expiresIn: "3d"})
}

//compare password,
userSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

const userModel: Model<IUser> = mongoose.model("User", userSchema);

export default userModel;
