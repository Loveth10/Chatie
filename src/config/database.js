let mongoURI = '';

if (process.env.NODE_ENV === 'production') {
  mongoURI =
    'mongodb://xraybrainOnXraytalk:60534088xraytalk@ds115154.mlab.com:15154/xraytalk-prod';
} else {
  mongoURI = 'mongodb://0.0.0.0:27017/xraytalk-dev';
}

module.exports = { mongoURI };
