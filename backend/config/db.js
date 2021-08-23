import mongoose from 'mongoose';

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`Connection made: ${conn.connection.host}`.cyan.bold)
    }
    catch(error){
        console.error(`Connection error: ${error}`.trimEnd.underline.bold)
        process.exit(1)
    }
}

export default connectDB;