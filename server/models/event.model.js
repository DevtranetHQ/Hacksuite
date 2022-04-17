import mongoose from "../database";
const Schema = mongoose.Schema;

const eventSchema = new Schema(
    {
        name: {
            type: String,
            maxLength: [100, "name can't be more than 100 characters"],
            required: [true, "name is required"],
            trim: true
        },
        image: {
            type: String,
            required: true,
            match: [
                /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
                "{VALUE isnt a valid link}"
            ]
        },
        description: {
            type: String,
            required: true,
            minlength: [10, "description has to be more than 10 characters"],
            maxLength: [3000, "description has to be less than 10 characters"]
        },
        date: {
            type: Date,
            min: Date.now(),
            required: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: "users",
            required: ["creator is required"]
        },
        attendees: {
            type: [Schema.Types.ObjectId],
            ref: "users"
        }
    },
    {
        timestamps: true
    }
);

const Event = mongoose.models.event || mongoose.model("event", eventSchema);

export default Event;
