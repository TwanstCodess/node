// server.js
const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainRoutes');

const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.use('/', mainRoutes);

// server start
app.listen(PORT, () => {
  console.log(`🚀 سێرڤەر کاردەکات لە پۆرت ${PORT}`);
});
