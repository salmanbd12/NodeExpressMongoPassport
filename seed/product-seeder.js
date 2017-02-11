var Product = require('../models/product');


var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
    new Product({
        imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://www.sysdbadmin.info/wp-content/uploads/2017/01/mongodbonubuntu.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/736x/20/7a/15/207a1538554f53e0422bff213502bd1b.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/736x/6d/4b/37/6d4b37a346edfd89b3d56c998a82843c.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://s-media-cache-ak0.pinimg.com/564x/12/0a/46/120a462a74197d57f1c5b7b0d1a3626c.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!',
        price: 10
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/51BGr-q42LL._SY355_.jpg',
        title: 'Gothic Video Game',
        description: 'Awesome game!!!',
        price: 10
    }),
];


var done = 0;
for(var i =0; i< products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done == products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
