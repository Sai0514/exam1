const http = require('http');
const mongoose = require('mongoose');
require('./model')

const options = {
  host: 'johnyu.cn',
  port: 3000,
  path: '/albums'
};

const req = http.request(options);
req.end();

const  AlbumModel = mongoose.model('Album');
req.on('response', (res) => {
  res.on('data', function (chunk) {
    let albums = chunk.toString();
    console.log('albums', albums)
    AlbumModel.insertMany(albums,function (err,docs) {
      console.log('err', err)
      if(!err) console.log('success', docs);
    })
  })
});