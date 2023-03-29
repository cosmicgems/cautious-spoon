// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

export default  async function handler(req, res) {
  if (req.method == 'POST') {
      const {formData} = req.body;

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

          const newMessage = formData

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
              const result = await db.collection('Contact Form').insertOne(newMessage)
              newMessage.id = result.insertedId;
              console.log('Sent! I think');

          } catch (error) {
            'Nope. Just error'
              client.close();
              res.status(500).json({message: 'Sending message failed!'});
              return;
          }


          res.status(201).json({ message: 'Successfully sent!', message: newMessage });
  }
}
