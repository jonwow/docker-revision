const app = require('express')();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({ message: 'Sample response.' });
});

app.listen(port, () => {
    console.log(`The app is listening on http://localhost:${port}`);
});
