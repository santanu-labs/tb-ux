import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4030;

const distDir = path.join(__dirname, 'dist');

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

app.use(express.static(distDir));

app.get('/*path', (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
