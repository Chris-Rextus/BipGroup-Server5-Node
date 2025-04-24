const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

dotenv.config();

const scriptRoutes = require('./routes/scriptRoutes');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.use('/scripts', scriptRoutes);

app.get('/', (req, res) => {
  res.send('Node-Python Server is running!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
