const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb+srv://mlsbhargavasai5002:Fr9sc1i7CXafvaS1@cluster0.9wslz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
  // use await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test'); if your database has auth enabled
}





const fruitsSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  price: String,
  
});
const fruit = mongoose.model("fruit", fruitsSchema);

// fruit.insertMany([
//     {  name: 'Apple', img: 'https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=red-apples-2487443.jpg&fm=jpg', description: 'A sweet, crisp fruit that is high in fiber and vitamins.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//     {  name: 'Banana', img: 'https://www.nipponexpress.com/press/report/img/06-Nov-20-ogp.jpeg', description: 'A potassium-rich fruit that is great for energy.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//     {  name: 'Pineapple', img: 'https://www.oahufresh.com/wp-content/uploads/2012/05/pineapple.jpg', description: 'A fruit that is high in fiber and vitamins.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//     {  name: 'Orange', img: 'https://tse4.mm.bing.net/th?id=OIP.VbKz6SeSX9CQifygrVttcwHaE7&pid=Api&P=0&h=180', description: 'A citrus fruit known for its high vitamin C content.', price: `₹${(Math.random() * 100 + 10).toFixed(2)}` },
//     {  name: 'Pomegranate', img: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2020/09/30/61638.jpg', description: 'A fruit known for its high vitamin C content.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//     {  name: 'Guava', img: 'https://post.greatist.com/wp-content/uploads/2020/05/guava-1200x628-facebook-1200x628.jpg', description: 'A fruit rich in vitamin C.', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//     {  name: 'Strawberry', img: 'https://tse3.mm.bing.net/th?id=OIP.ESvtsBnYxWO40A061MtJoAHaEo&pid=Api&P=0&h=180', description: 'Fresh Strawberry', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` },
//     {  name: 'Watermelon', img: 'https://www.thespruce.com/thmb/pjDqYUU4EG1y_fNU4x23WCbqLXA=/4238x2827/filters:fill(auto,1)/when-to-harvest-watermelon-2539591-04-f7f99d3a73d846cb9d453f8a6f0cc7ee.jpg', description: 'Organic Watermelon', price: `₹${(Math.random() * 100 + 10).toFixed(2)} ` }
//   ]);

// chat.insertMany([{
//     from: "Shrukh",
//     msg: "Hello ananth, How are you?",
//     to: "ananth"
//   },
//   {
//     from: "Ambani",
//     msg: "Hello syam, I need some help",
//     to: "syam"
//   },
//   {
//     from: "Kamal hassan",
//     msg: "Hello pramod, where are you?",
//     to: "pramod"
//   }
  
//  ]);

module.exports = fruit;
// module.exports = mongoose.model('FRUIT', FRUITSSchema);