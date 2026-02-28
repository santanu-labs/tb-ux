const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve files from the current folder
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`Static server running at http://localhost:${PORT}`);
});