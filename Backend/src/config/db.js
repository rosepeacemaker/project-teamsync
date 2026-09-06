import mongoose from 'mongoose';

const connectedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Failed to connect to database:', error);
    }
};
export default connectedDB;