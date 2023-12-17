import mongoose from "mongoose"

export const dbConnection=async()=>{

    const mongo:any=process.env.MONGODB_GUI

    try {
        await mongoose.connect(mongo)

        console.log('base de datos online');
        

        
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de conectar a la base de datos')
        
        
    }

}

