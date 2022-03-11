/*
 * Run using the mongo shell. For remote databases, ensure that the
 * connection string is supplied in the command line. For example:
 * localhost:
 *   mongo myFirstDatabase scripts/init.mongo.js
 * Atlas:
 *   mongosh "mongodb+srv://hmac:cs648@cluster0.uimtv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
 * or open mongo shell navigate to current directory
 *  and run load('scripts/init.mongo.js')
 */

/* global db print */
/* eslint no-restricted-globals: "off" */

db.products.deleteMany({});
// uncomment below to get a default file
/*
const initialProducts = [
  {
    id: 1,
    name: "H&M",
    category: 'Shirt',
    price: '30',
    imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F7a%2F0f%2F7a0fb6c70613d642ea0b57354bd8467a3f3e4bbe.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bmen_tshirtstanks_shortsleeve%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
  }
];

db.products.insertMany(initialProducts);
*/
const count = db.products.countDocuments();
print('Inserted total of ', count, 'products');

db.counters.deleteOne({ _id: 'products' });
db.counters.insertOne({ _id: 'products', uid: count });

db.products.createIndex({ id: 1 }, { unique: true });
db.products.createIndex({ name: 1 });
db.products.createIndex({ price: 1 });
db.products.createIndex({ category: 1 });
