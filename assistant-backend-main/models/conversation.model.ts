const {Schema,model}=require('mongoose');

const ConversationSchema=Schema({
    user_id: {
        type: String,
    
      },
      userEmail: {
        type: String,
 
        
      },
      userPhone: {
        type: String,
       
        // Aquí puedes añadir una expresión regular para validar el formato del teléfono, si lo necesitas
      },
      appointmentDate: {
        type: Date,
    
      }
    
})

ConversationSchema.methods.toJSON=function () {
    const {__v,estado,...conversation}=this.toObject()

    return conversation
    
}

module.exports=model('Conversations',ConversationSchema)