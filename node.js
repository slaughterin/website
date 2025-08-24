const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(__dirname));

// API endpoint to get/update views
app.get('/api/views', (req, res) => {
    const data = JSON.parse(fs.readFileSync('views.json', 'utf8'));
    
    // Increment view count by 1 per visit
    data.views += 1;
    
    fs.writeFileSync('views.json', JSON.stringify(data, null, 2));
    res.json({ views: data.views });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
