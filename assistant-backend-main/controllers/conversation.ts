import express, {Request,Response } from 'express';
import OpenAI from 'openai';
import { extractInfoFromMessage } from '../middlewares/extractInfo';

const Conversation = require("../models/conversation.model");


const openai = new OpenAI({
    apiKey:process.env.OPENAI_API_KEY,
});

  
export const getConversation=async(req:Request,res:Response)=>{

  
    const {message,user_id}=req.body;


    const chatArray: Array<any> = [{
      role:'assistant',
      content:'Bienvenido a tu asistente, quisieras programar una cita?'
    }];

    try {

      
      const resp=await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: chatArray.concat([{ role: "user", content: message }]),
      })
   
      const assistantMessage = resp.choices[0].message.content;
  
      chatArray.push({ role: "user", content: message });
      chatArray.push({ role: "assistant", content: assistantMessage });

      const { extractedName, extractedPhone, extractedDate, extractedEmail } = extractInfoFromMessage(message);

      const existingAppointment = await Conversation.findOne({ appointmentDate: extractedDate });
      if (existingAppointment) {
          // Usar Chat GPT para formular una respuesta
          const prompt = `Escribe una respuesta cortés para informar a un cliente que la fecha ${extractedDate} ya está ocupada y sugerirle elegir otra fecha.`;
          
          try {
              const gptResponse = await openai.chat.completions.create({
                  model: "gpt-3.5-turbo",
                  
                  messages: [{role:'assistant',content:prompt}],
                  max_tokens: 150
              });

              const assistantMessage = gptResponse.choices[0].message.content;
              return res.status(200).json({ message: assistantMessage });
          } catch (error) {
              console.error('Error al solicitar a OpenAI:', error);
             
          }
      } else {
          // Crear y guardar la nueva cita
          const newAppointment = new Conversation({
              userName: extractedName,
              userEmail: extractedEmail,
              userPhone: extractedPhone,
              appointmentDate: extractedDate
          });
          await newAppointment.save();
          return res.status(200).json({ message: 'Su cita ha sido agendada con éxito.' });
      }
     
    } catch (error) {
      console.log(error);
            
    }

}