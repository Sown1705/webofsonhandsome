
//goi express
var express=require('express');
var expressHbs=require('express-handlebars');
//tao app de cau hinh router
var app = express();
//chay len localhost


app.engine('handlebars',expressHbs({
    layoutsDir:__dirname+'/views/layouts',
    defaultLayout:'main'
}));
app.use(express.static('assets'));
app.set('view engine', 'handlebars');
app.get('/', function(req, res){
        res.render('index');
});

app.get('/chat', function(req, res){
     res.render('chat');
});

app.get('/login', function(req, res){
     res.render('login');
});
app.listen(process.env.PORT||3001);

