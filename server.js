// server.js
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 سێرڤەر کاردەکات لە پۆرت ${PORT}`));
