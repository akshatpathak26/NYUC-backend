require('dotenv').config();



const express = require('express');
const app = express();

const connectDB = require('./db/connect');

// routers
const authRouter = require('./routes/check');
const eventsRouter = require('./routes/event');

app.use(express.json())

// routes
app.use('/api/v1/auth1', authRouter);
app.use('/api/v1/events', eventsRouter);



const port = process.env.PORT || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
