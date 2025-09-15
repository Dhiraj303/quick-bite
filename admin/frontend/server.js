const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))
app.use(bodyParser.json());


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Dmhr@1301',
    database: 'fooddb'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

app.get('/products', (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
});

app.get('/products/:id', (req, res) => {
    db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results[0]);
    });
});

app.post('/products', (req, res) => {
    const { name, price, category, imgUrl, description } = req.body;
    console.log(req.body);
    db.query(
        'INSERT INTO products (name, price, category, imgUrl, description) VALUES (?, ?, ?, ?, ?)',
        [name, price, category, imgUrl, description],
        (err, result) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ id: result.insertId, ...req.body });
        }
    );
});

app.put('/products/:id', (req, res) => {
    const { name, price, category, imgUrl,description } = req.body;
    db.query(
        'UPDATE products SET name=?, price=?, category=?,description=?, imgUrl=? WHERE id=?',
        [name, price, category, description, imgUrl, req.params.id],
        (err) => {
            if (err) return res.status(500).json({ error: err });
            res.json({ id: req.params.id, ...req.body });
        }
    );
});

app.delete('/products/:id', (req, res) => {
    db.query('DELETE FROM products WHERE id=?', [req.params.id], (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Deleted' });
    });
});

app.post('/admin/login', (req, res) => {
  const { userName, pass } = req.body;
  db.query('SELECT * FROM admin WHERE username = ? AND pass = ?', [userName, pass], (err, results) => {
    if (err) return res.status(500).json({ error: err });
    if (results.length > 0) {
      return res.status(200).json({ message: 'Login successful' });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  });
});

app.get('/customers', (req, res) => {
  db.query('SELECT customer_id, customer_name, contact_No, email, location FROM customer', (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
});

app.delete('/customers/:id', (req, res) => {
  db.query('DELETE FROM customer WHERE customer_id = ?', [req.params.id], (err) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ message: 'Customer deleted' });
  });
});

app.get('/delivery-partners', (req, res) => {
    db.query('SELECT * FROM delivery_partners', (err, results) => {
        if (err) return res.status(500).send(err);
        res.json(results);
    });
});

app.post('/delivery-partners', (req, res) => {
    const { name, phone, email, password } = req.body;
    const sql = 'INSERT INTO delivery_partners (name, phone, email, pasword) VALUES (?, ?, ?, ?)';
    db.query(sql, [name, phone, email, password], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Delivery partner added', partner_id: result.insertId });
    });
});

app.put('/delivery-partners/:id', (req, res) => {
    const { name, phone, email, password } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE delivery_partners SET name=?, phone=?, email=?, pasword=? WHERE partner_id=?';
    db.query(sql, [name, phone, email, password, id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Delivery partner updated' });
    });
});

app.delete('/delivery-partners/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM delivery_partners WHERE partner_id=?';
    db.query(sql, [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Delivery partner deleted' });
    });
});

app.listen(3001, () => {
    console.log('Server running on port 3001');
});