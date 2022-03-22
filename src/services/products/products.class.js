const { Service } = require('feathers-mongodb');

exports.Products = class Products extends Service {
  constructor(options, app) {
    super(options);
    
    app.get('mongoClient').then(db => {
      this.Model = db.collection('products');
    });
  }
};
