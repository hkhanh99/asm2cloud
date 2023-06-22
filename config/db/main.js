const mongoose = require('mongoose');
async function connect() {
  try {
    await mongoose.connect('mongodb+srv://Khanh1999:Khanh1999@cluster0.vt0xvpt.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    //console.log("connect Successfully")
  } catch (error) {
    console.log('connect failture');
  }
}
module.exports = { connect };
