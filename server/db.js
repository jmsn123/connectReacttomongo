import mongoose from "mongoose";

const connectDb = async() => {
    try {
        const conn = await mongoose.connect(, {
            useNewUrlParser: true
        });
        console.log(`Connected`)

    } catch (error) {
        console.error(error.message)

        process.exit(1



        );
    }
}

module.exports = connectDb