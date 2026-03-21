const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4030;

const websiteDist = path.join(__dirname, 'website', 'dist');

// Basic auth for internal review — set REVIEW_PASSWORD env var to enable
const REVIEW_USER = process.env.REVIEW_USER || 'review';
const REVIEW_PASSWORD = process.env.REVIEW_PASSWORD;

if (REVIEW_PASSWORD) {
  app.use((req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth || !auth.startsWith('Basic ')) {
      res.set('WWW-Authenticate', 'Basic realm="Internal Review"');
      return res.status(401).send('Authentication required');
    }
    const [user, pass] = Buffer.from(auth.split(' ')[1], 'base64').toString().split(':');
    if (user === REVIEW_USER && pass === REVIEW_PASSWORD) return next();
    res.set('WWW-Authenticate', 'Basic realm="Internal Review"');
    return res.status(401).send('Invalid credentials');
  });
  console.log('Basic auth enabled for internal review');
}

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
