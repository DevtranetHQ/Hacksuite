import mongoose from "../../database";
import Event from "../../models/event.model";
import User from "../../modules/auth/user.model";
const Schema = mongoose.Schema;

const registrationSchema = new Schema(
  {
    event: {
      type: String,
      required: true
    },
    user: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: User
    },
    email: {
      type: String,
      required: false,
      trim: true
    },
    name: {
      type: String,
      required: false,
      trim: true
    }
  },
  {
    timestamps: true
  }
);

registrationSchema.query.withEvent = async function() {
  const event = await Event.findOne({ uniqueId: this.event });
  this.event = event;
  return this;
};

const Registration =
  mongoose.models.registration || mongoose.model("registration", registrationSchema);

export default Registration;
