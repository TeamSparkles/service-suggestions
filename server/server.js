const app = require('./index.js');

const port = 4001;

app.listen((process.env.PORT || port), () => {
  console.log(`listening on port ${port}`);
});
