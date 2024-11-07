const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mlsbhargavasai5002:Fr9sc1i7CXafvaS1@cluster0.9wslz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}





const vegetableSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  price: String,
  
});
const vegetable = mongoose.model("vegetable", vegetableSchema);

// vegetable.insertMany([
//     { name: 'Tomato', img: 'https://www.gardeningknowhow.com/wp-content/uploads/2021/07/tomatoes-1-1536x1152.jpg', description: 'Organic Tomato', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//   { name: 'Bottle Gourd', img: 'https://cdn.mos.cms.futurecdn.net/vRnnGC9KT4BRWpLhPDE9pN.jpg', description: 'Fresh Bottle Gourd', price: `₹ ${(Math.random() * 100 + 10).toFixed(2)} ` },
//   { name: 'Potato', img: 'https://tse2.mm.bing.net/th?id=OIP.87KPkdg4s-wZPW6_jje_IQHaE8&pid=Api&P=0&h=180', description: 'Organic Potato', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//   { name: 'Spinach', img: 'https://i1.wp.com/www.extrachai.com/wp-content/uploads/2018/05/Spinach-All-Green.jpg?fit=1600%2C1250&ssl=1', description: 'Fresh Spinach', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//   { name: 'Bitter Gourd', img: 'https://tse2.mm.bing.net/th?id=OIP.-8YhLpv5hsLFmEtH4EZy4gAAAA&pid=Api&P=0&h=180', description: 'Fresh Bitter Gourd', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//   { name: 'Pumpkin', img: 'https://parade.com/.image/t_share/MTkxNzU3NDM0NjYwODU3NTA3/different-pumpkin-colors.jpg', description: 'Different Pumpkins', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//   { name: 'Cabbage', img: 'https://tse1.mm.bing.net/th?id=OIP.5nzXsxYo6k6ae19uR3LkrAHaE7&pid=Api&P=0&h=180', description: 'Fresh Cabbage', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//   { name: 'Garlic', img: 'https://www.mashed.com/img/gallery/what-is-a-garlic-clove-really-and-how-do-you-use-it/l-intro-1628012061.jpg', description: 'Fresh Garlic', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` }
//   ]);

module.exports = vegetable;