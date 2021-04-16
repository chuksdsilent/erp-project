const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Hello World'))


// Define Routes
app.use("/api/admins", require('./routes/admins'));
app.use("/api/auth", require('./routes/auth'));
app.use("/api/employees", require('./routes/employees'));
app.use("/api/companies", require('./routes/companies'));
app.use("/api/itemgroups", require('./routes/itemgroups'));
app.use("/api/itemkits", require('./routes/itemkits'));
app.use("/api/items", require('./routes/items'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

