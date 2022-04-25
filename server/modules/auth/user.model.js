import mongoose from "../../database";
import bcrypt from "bcryptjs";
import { config } from "../../config";
import { countryNames } from "../../utils/countryNames";

const { BCRYPT_SALT } = config;

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      maxLength: [50, "First name can't be more than 50 characters"],
      required: [true, "First name is required"],
      lowerCase: true
    },
    lastName: {
      type: String,
      trim: true,
      maxLength: [50, "Last name can't be more than 50 characters"],
      required: [true, "Last name is required"],
      lowerCase: true
    },
    email: {
      type: String,
      trim: true,
      unique: true,
      required: [true, "Email is required"],
      maxLength: [80, "Email can't be more than 80 characters"],
      immutable: [true, "Email is immutable"],
      lowerCase: true,
      match: [
        /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        "{VALUE is not a valid email}"
      ]
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      min: 6
    },
    phoneNumer: {
      type: Number,
      trim: true,
      match: [/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/, "{VALUE} not a valid phone number"]
    },
    levelOfStudy: {
      type: String,
      enum: {
        values: ["middle school", "high school", "bachelor's", "master's", "doctoral"],
        message: "{VALUE} is not a valid level of study"
      }
    },
    gender: {
      type: String,
      enum: ["Female", "Male", "Non-binary", "Other"]
    },
    countryofResidence: {
      type: String,
      enum: {
        values: countryNames,
        message: "{VALUE is not a valid country}"
      }
    },
    describe: {
      type: String
    },
    phoneNumber: {
      type: String,
      trim: true
    },
    skills: {
      type: String
    },
    birthdate: {
      type: Date,
      max: Date.now()
    },
    role: {
      type: String,
      trim: true,
      enum: ["user", "admin"],
      default: "user"
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    events: {
      type: [Schema.Types.ObjectId],
      ref: "events"
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    socialLinks: [
      {
        siteName: { type: String },
        link: { type: String }
      }
    ],
    image: {
      type: String,
      match: [
        /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
        "{VALUE isnt a valid link}"
      ]
    },
    discordId: String
  },
  {
    timestamps: true
  }
);

/*virtual fields*/
userSchema.virtual("age").get(function () {
  return (Date.now() - this.birthdate).getYear();
});

userSchema
  .virtual("fullName")
  .get(function () {
    var fullname = "";
    if (this.first_name && this.family_name) {
      fullname = this.family_name + ", " + this.first_name;
    }
    if (!this.first_name || !this.family_name) {
      fullname = "";
    }
    return fullname;
  })
  .set(function (v) {
    const firstName = v.substring(0, v.indexOf(" "));
    const lastName = v.substring(v.indexOf(" ") + 1);
    this.set({ firstName, lastName });
  });

/*middlewares*/
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const hash = await bcrypt.hash(this.password, BCRYPT_SALT);
  this.password = hash;
  next();
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
