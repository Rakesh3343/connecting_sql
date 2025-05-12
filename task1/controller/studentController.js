const db = require('../utils/db-connections');

const addEntries = (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const query = 'INSERT INTO Users (name, email) VALUES (?, ?)';
  db.execute(query, [name, email], (err, results) => {
    if (err) {
      console.log('❌ DB Insert Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    console.log('✅ User inserted:', results);
    res.status(201).json({ message: 'User added successfully', id: results.insertId });
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and Email are required' });
  }

  const query = 'UPDATE Users SET name = ?, email = ? WHERE id = ?';
  db.execute(query, [name, email, id], (err, results) => {
    if (err) {
      console.log('❌ DB Update Error:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    console.log(`✅ User ${id} updated`);
    res.json({ message: `User ${id} updated successfully` });
  });
};

module.exports = { addEntries, updateUser };
