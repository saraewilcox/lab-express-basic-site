const express = require('express');
const app = express(); //represents our server

app.use(express.static('public'));

app.get('/home', (request, response) => { //so you need to go to http://localhost:3000/home to see it!
    response.sendFile(__dirname + '/views/home-page.html')
});

app.get('/about', (request, response) => { //so you need to go to http://localhost:3000/home to see it!
    response.sendFile(__dirname + '/views/about-page.html');//dirname is full path of the filename before it gets sent
});

app.get('/works', (request, response) => { //so you need to go to http://localhost:3000/home to see it!
    response.sendFile(__dirname + '/views/works-page.html');//dirname is full path of the filename before it gets sent
});

app.get('/photo-gallery', (request, response) => { //so you need to go to http://localhost:3000/home to see it!
    response.sendFile(__dirname + '/views/photo-gallery-page.html');//dirname is full path of the filename before it gets sent
});

//now we need to get our server to listen for requests
app.listen(3000, () => {
    console.log('My first app using Express is now listening');//will get written on terminal
});