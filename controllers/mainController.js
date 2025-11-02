// controllers/mainController.js
exports.home = (req, res) => {
  res.send('🏠 سڵاو، بەخێربێیت بۆ ئەپێکی Node.js!');
};

exports.about = (req, res) => {
  res.send('ℹ️ ئەمە پەیجی زانیارییە لە Node.js');
};

exports.api = (req, res) => {
  res.json({
    message: 'ئەمە JSON API یەکەی Node.js',
    status: 'success',
    developer: 'Twa Nst 👨‍💻',
  });
};
