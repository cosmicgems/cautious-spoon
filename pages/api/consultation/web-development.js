// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";
import sgMail from "@sendgrid/mail";
require('dotenv').config()
export default  async function handler(req, res) {
  if (req.method == 'POST') {
      const {formData} = req.body;
      const {email: EMAIL_TO} = formData;

      // if (
      //     !email || 
      //     !email.includes('@') || 
      //     !name || 
      //     name.trim() === '' || 
      //     !message || 
      //     message.trim() === ''
      //     ){
      //         res.status(422).json({ message: 'Invalid input.' });
      //         return;
      //     }

          const newWebConsultation = formData

          let client;

          try {
              client = await MongoClient.connect(
                  'mongodb+srv://admin2:2nimda@pearlbox.4kvb2tz.mongodb.net/Maliek?retryWrites=true&w=majority'
                  );
          }   catch (error) {
              res.status(500).json({message: 'Could not connect to database.'})
              return;
          }

          const db = client.db();

          try {
            console.log('Saving....');
              const result = await db.collection('Web Development Consultation Form').insertOne(newWebConsultation)
              newWebConsultation.id = result.insertedId;
              
              

              console.log(process.env.SENDGRID_API_KEY);
              // Send email notification using SendGrid
              sgMail.setApiKey(process.env.SENDGRID_API_KEY);
              const EMAIL_FROM = process.env.EMAIL_FROM
              
              const msg = {
                to: EMAIL_TO, // Your email address
                from: EMAIL_FROM, // Your website email address
                subject: "Web Development Consultation",
                text: "A new web development consultation form has been submitted.",
                html: `<p>${JSON.stringify(newWebConsultation)}</p>`,
              };
               sgMail.send(msg).then(sent => {
                console.log(sent);
              })


          } catch (error) {
            'Nope. Just error'
              client.close();
              res.status(500).json({message: 'Sending web development consultation form failed!'});
              return;
          }


          res.status(201).json({ message: 'Successfully sent!', message: newWebConsultation });
  }
}
