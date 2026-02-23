import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: {
        type: String,
        enum: ['Student', 'Professional', 'Parent', 'Counselor', 'SchoolAdmin', 'SuperAdmin'],
        default: 'Student'
    },
    profile: {
        bio: String,
        avatar: String,
        mobile: String,
        location: String,
        education: String,
        skills: [String],
        interests: [String],
    },
    parentAccount: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // For students
    children: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // For parents
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || mongoose.model('User', UserSchema);
