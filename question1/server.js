const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// In-memory storage for social media posts
let posts = [];

// Endpoint to receive social media posts data
app.post('/data', (req, res) => {
  const postData = req.body;
  if (!postData || !postData.content) {
    return res.status(400).json({ error: 'Invalid post data. "content" field is required.' });
  }
  posts.push(postData);
  res.status(201).json({ message: 'Post data received successfully.' });
});

// Helper function to extract hashtags from a post content
function extractHashtags(text) {
  const regex = /#(\w+)/g;
  let matches;
  const hashtags = [];
  while ((matches = regex.exec(text)) !== null) {
    hashtags.push(matches[1].toLowerCase());
  }
  return hashtags;
}

// Endpoint to get basic analytics
app.get('/analytics', (req, res) => {
  const totalPosts = posts.length;

  // Count hashtags frequency
  const hashtagCounts = {};
  posts.forEach(post => {
    const hashtags = extractHashtags(post.content);
    hashtags.forEach(tag => {
      hashtagCounts[tag] = (hashtagCounts[tag] || 0) + 1;
    });
  });

  // Get top hashtags sorted by frequency
  const topHashtags = Object.entries(hashtagCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(entry => ({ hashtag: entry[0], count: entry[1] }));

  res.json({
    totalPosts,
    topHashtags
  });
});

app.listen(port, () => {
  console.log("Social Media Analytics microservice listening at http://localhost:" + port);
});
