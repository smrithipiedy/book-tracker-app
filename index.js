const express = require('express');
const app = express()
const PORT = 3000

app.use(express.json());

//adding routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

app.get('/', (req, res) => {
    res.send('Book Tracker API is running');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
