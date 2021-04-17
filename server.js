const express = require('express');
const connectDB = require('./config/db');
const app = express();
// connect database

// Init Middleware
app.use(express.json({ extended: false }));
connectDB();

// Define Routes
app.use("/api/managers", require('./routes/managers'));
app.use("/api/auth", require('./routes/auth'));
app.use("/api/employees", require('./routes/employees'));
app.use("/api/companies", require('./routes/companies'));
app.use("/api/itemgroups", require('./routes/itemgroups'));
app.use("/api/itemkits", require('./routes/itemkits'));
app.use("/api/items", require('./routes/items'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

