import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ECOMMERCE');
        console.log('Mongodb connected succesfully')
    } catch (err) {
        console.log('Mongodb connection error:', err)
    }
}

export default connectDB;