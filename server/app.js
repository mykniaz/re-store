const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();
const port = 4000;

app.use(graphqlHTTP({}));

app.listen(port, err => {
	err ? console.log(error) : console.log('Server started!');
});
