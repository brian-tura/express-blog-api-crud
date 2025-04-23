const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routers/posts.js')

app.use(express.static('public'));

app.use("/posts", postRouter);

app.get('/', (req, res) => {
    res.send('I miei posts')
})

app.listen(port, () => {
    console.log(`App in ascolto sulla porta ${port}`);
});