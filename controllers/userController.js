// controllers/userController.js
const db = require('../db/database');

// ➕ دروستکردن
exports.createUser = (req, res) => {
  const { name, email } = req.body;
  db.run('INSERT INTO users (name, email) VALUES (?, ?)', [name, email], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, name, email });
  });
};

// 📖 هێنانەوەی هەموو بەکارهێنەران
exports.getAllUsers = (req, res) => {
  db.all('SELECT * FROM users', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
};

// 🧍‍♂️ هێنانەوەی یەک بەکارهێنەر
exports.getUserById = (req, res) => {
  const { id } = req.params;
  db.get('SELECT * FROM users WHERE id = ?', [id], (err, row) => {
    if (err) return res.status(500).json({ error: err.message });
    if (!row) return res.status(404).json({ message: 'بەکارهێنەر نەدۆزرایەوە' });
    res.json(row);
  });
};

// ✏️ نوێکردنەوە
exports.updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  db.run(
    'UPDATE users SET name = ?, email = ? WHERE id = ?',
    [name, email, id],
    function (err) {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: 'نوێکرایەوە بە سەرکەوتووی' });
    }
  );
};

// ❌ سڕینەوە
exports.deleteUser = (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM users WHERE id = ?', [id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'سڕایەوە بە سەرکەوتووی' });
  });
};
