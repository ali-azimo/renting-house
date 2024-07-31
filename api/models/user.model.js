import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffree-icon%2Fuser_149071&psig=AOvVaw3Rya_0g16h0yNajW_esNhv&ust=1722513255707000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCNCHppWc0YcDFQAAAAAdAAAAABAE"
    },
}, { timestamps: true });
const User = mongoose.model('User', userSchema);
export default User;