const express = require('express');
const exphbs = require('express-handlebars');
const app = express();

//multer
var multer =require('multer');
var storage= multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads/')
    },filename: function(req,file,cb){
        const uniqueSuffix = Date.now()+'-'+Math.round(Math.random()*1E9)
        cb(null,uniqueSuffix+'-'+file.originalname)
    }
})

var upload = multer({
    dest: './public/data/uploads/'
    , storage: storage,
    limits: {
        fileSize: 1 * 1024 * 1024, // gioi han file size <= 1MB
    }
}).single('avatar')
// Configure template Engine and Main Template File
app.engine('handlebars', exphbs({
    layoutsDir:__dirname + '/views/layouts',
    defaultLayout: 'main',
}));
// Setting template Engine
app.set('view engine', 'handlebars');

app.use(express.static( 'public'));
// routes
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/login', (req, res) => {
    res.render('login');
});
app.get('/swiper', (req, res) => {
    res.render('swiper');
});
app.get('/profile', (req, res) => {
    res.render('profile');
});
app.get('/upload', (req, res) => {
    res.render('upload');
});

//upload
app.post('/uploadImage', function (req, res) {
    // req.file is the name of your file in the form above, here 'uploaded_file'
    // req.body will hold the text fields, if there were any
    console.log(req.file, req.body)
     upload(req, res, function (error) {
        if (error instanceof multer.MulterError) {
            return res.send("File size Maximum is 1MB.Please try again!!!")
        } else {
            return res.send(error);
        }
    });
});
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});