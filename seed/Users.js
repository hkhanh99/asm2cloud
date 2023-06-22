const mongoose = require('mongoose');
const Users = require('../models/Users');
// Tự connect tới database
mongoose.connect('mongodb+srv://Khanh1999:Khanh1999@cluster0.vt0xvpt.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
// Xóa toàn bộ dữ liệu
Users.deleteMany()
        .then(data=>{
          console.log("Users seed cleared");
        })
        .catch(err=>{
          console.log(err);
        })
//Tạo dữ liệu mới
Users.create({
    name: "Nhật Hưng",
    address: "Hà Nội",
    account: "nhathung@gmail.com",
    password: "123456789",
    phone: "0912345678",
    token: null
})
.then(data=>console.log("Tạo dự liệu giả thành công"))
.catch(err=> console.log(err))