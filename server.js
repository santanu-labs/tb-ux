const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4030;

const websiteDist = path.join(__dirname, 'website', 'dist');

// Serve the existing app (employee, admin, etc.) under /app
app.use('/app', express.static(__dirname, {
    index: 'index.html',
}));

// Serve the marketing website at root
app.use(express.static(websiteDist));

// SPA fallback — any unmatched route serves the website's index.html
app.get('/*path', (req, res) => {
    // Don't intercept /app routes that already resolved to static files
    if (req.path.startsWith('/app')) {
        return res.sendFile(path.join(__dirname, req.path.replace('/app', '')), (err) => {
            if (err) res.sendFile(path.join(__dirname, 'index.html'));
        });
    }
    res.sendFile(path.join(websiteDist, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Marketing website at http://localhost:${PORT}`);
    console.log(`App (sign-in, employee, admin) at http://localhost:${PORT}/app/`);
});
