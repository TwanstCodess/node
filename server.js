// server.js
const express = require('express');
const app = express();
const path = require('path');
const userRoutes = require('./routes/userRoutes');

app.use(express.json());

// 🧱 بۆ نیشاندانی فایلە HTMLەکان
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`🚀 سێرڤەر کاردەکات لە پۆرت ${PORT}`));
