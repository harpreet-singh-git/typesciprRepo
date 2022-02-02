import { Document, Model, model, Schema } from "mongoose";
import { IUser } from "./user.model";

/**
 * Interface to model the Profile Schema for TypeScript.
 * @param user:ref => User._id
 * @param firstName:string
 * @param lastName:string
 * @param username:string
 */
export interface IProfile extends Document {
  user: IUser["_id"];
  firstName: string;
  lastName: string;
  username: string;
}

const profileSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const Profile: Model<IProfile> = model("Profile", profileSchema);

export default Profile;