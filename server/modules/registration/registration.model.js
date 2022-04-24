import mongoose from "../../database";
import Event from "../../models/event.model";
import User from "../../models/user.model";
const Schema = mongoose.Schema;

const registrationSchema = new Schema(
    {
        event: {
            type: Schema.Types.ObjectId,
            ref: Event
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

const Registration =
    mongoose.models.registration || mongoose.model("registration", registrationSchema);

export default Registration;
