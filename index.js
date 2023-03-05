require('dotenv').config();
const express =require('express');
const app = express();
const axios = require('axios');

const {PORT} = process.env;
const port = 8000 || PORT;

const jsonParser = express.json();
app.use(jsonParser); 


const path = require('path');

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const connectDB =require('./database/connection');
const userRoutes=require('./routes/users');

app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
}));

const User=require('./models/user')
//const Places=require('./models/places')


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'sessionlet' }))

app.use(express.static(path.join(__dirname,'public')));

app.use(express.static(path.join(__dirname,'views')));

app.set('views',[path.join(__dirname, 'views')]);

app.set('view engine', 'ejs');

// app.use('/users', users)

//mongo connection
connectDB();

//login required
const requireLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login')
    }
    next();
}

//--------------------------------------------------------------
// Index page
app.get('/', (req,res)=>{
    res.render('index.ejs');
});

app.get('/gallery',(req,res)=>{
    res.render('gallery.ejs');
});

app.post('/login',userRoutes)
app.post('/register', userRoutes);

//------------------------------------------------

//register and login
//-----------------------------------------------------

app.get('/login',(req,res)=>{
	res.render('login.ejs')
})

app.get('/video', async (req, res) => {
        try {
          const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
            params: {
              part: 'snippet,statistics',
              chart: 'mostPopular',
              regionCode: 'IN',
              maxResults: 12,
              key: process.env.YOUTUBE_API_KEY // Replace with your own YouTube API key
            }
          });
      
          const videos = response.data.items.map(item => ({
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.default.url,
            viewCount: item.statistics.viewCount,
            likeCount: item.statistics.likeCount,
            dislikeCount: item.statistics.dislikeCount,
            embedUrl: `https://www.youtube.com/embed/${item.id}`
          }));
      
          // Render the EJS template with the videos data
          res.render('videos', { videos });
        } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
});


app.get('/music', async (req, res) => {
    try {
      // Get an access token from Spotify API
      const authResponse = await axios.post('https://accounts.spotify.com/api/token', 
        'grant_type=client_credentials', {
          headers: {
            'Authorization': `Basic ${Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
      });
  
      const accessToken = authResponse.data.access_token;
  
      // Fetch trending tracks from Spotify API
      const response = await axios.get('https://api.spotify.com/v1/browse/new-releases', {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        },
        params: {
          country: 'US',
          limit: 12
        }
      });
  
      const tracks = response.data.albums.items.map(item => ({
        name: item.name,
        artist: item.artists[0].name,
        image: item.images[0].url,
        releaseDate: item.release_date,
        previewUrl: item.external_urls.spotify
      }));
  
      // Render the JSON response with the tracks data
      //res.json(tracks);
      res.render('songs', { songs: tracks });
    }catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Unable to fetch trending Spotify music.' });
    }
  });

  app.get('/tweets', async (req, res) => {
    try {
      const response = await axios.get('https://api.twitter.com/2/tweets/search/recent', {
        headers: {
          Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`, // Replace with your own Twitter bearer token
        },
        params: {
          query: '#trending',
          max_results: 12,
          expansions: 'author_id',
          'tweet.fields': 'public_metrics,created_at',
          'user.fields': 'name,profile_image_url',
        },
      });
  
      const tweets = response.data.data.map(tweet => ({
        id: tweet.id,
        text: tweet.text,
        authorName: response.data.includes.users.find(user => user.id === tweet.author_id).name,
        authorImageUrl: response.data.includes.users.find(user => user.id === tweet.author_id).profile_image_url,
        retweets: tweet.public_metrics.retweet_count,
        likes: tweet.public_metrics.like_count,
        createdAt: tweet.created_at,
      }));
  
      res.render('tweets', { tweets });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

app.get('/register',(req,res)=>{
	res.render('signup.ejs')
})


app.listen(port, () => {
    console.log(`Server started listen to the port ${port}`);
})
