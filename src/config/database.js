let mongoURI = 'mongodb+srv://Loveth:mongolove@cluster0.qytlgyu.mongodb.net/?retryWrites=true&w=majority';
/*
if (pocess.env.NODE_ENV === 'production') {
  mongoURI =
    'mongodb://xraybrainOnXraytalk:60534088xraytalk@ds115154.mlab.com:15154/xraytalk-prod';
} else {
  // mongoURI = 'mongodb://0.0.0.0:27017/xraytalk-dev';
  mongoURI =
    'mongodb+srv://Loveth:mongolove@cluster0.qytlgyu.mongodb.net/?retryWrites=true&w=majority';
}
*/
module.exports = { mongoURI };