const express = require('express');
const app = express();

// Azure will set process.env.PORT (usually to 80), use that or fallback to 3000 locally
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello from Azure!'));
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
