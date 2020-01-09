const mongoose = require('mongoose');

mongoose.connect('mongodb://39.100.81.23/albums', function (err) { 
  if (!err) console.log('mongodb 已连接！')
 });

const albumSchema = {
  album_id: String,
  album_name: String,
  public_time: Date,
  week: Number,
  price: Number,
  cover: String,
  singers: []
}

mongoose.model('Album', albumSchema);