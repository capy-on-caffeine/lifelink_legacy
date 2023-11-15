import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const hospitalSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

hospitalSchema.pre("save", async function (next) {
  // here the this keyword means Hospital.Create in the controller function
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

hospitalSchema.methods.matchPassword = async function (eneteredPassword) {
  return await bcrypt.compare(eneteredPassword, this.password);
};

const Hospital = mongoose.model("Hospital", hospitalSchema);

export default Hospital;
