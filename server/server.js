import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { readdirSync } from 'fs';

const morgan = require('morgan');
require('dotenv').config();

const app = express();

// db
// mongoose
//   .connect(process.env.DATABASE)
//   .then(() => console.log('DB Connected'))
//   .catch((err) => console.log('DB Connection Error ', err));

const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      'mongodb+srv://subscription_admin:adminadmin@subscriptionapp.wjarlvt.mongodb.net/Subscription-App?retryWrites=true&w=majority',
      connectionParams
    );
    console.log('Database connected succesfully');
  } catch (error) {
    console.log(error);
    console.log('Database connection failed');
  }
});

database();

// middlewares
app.use(express.json({ limit: '5mb' }));
app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

// autoload routes
app.get('/api/register', (req, res) => {
  res.send('Hey you reached node server');
});

// listen
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
