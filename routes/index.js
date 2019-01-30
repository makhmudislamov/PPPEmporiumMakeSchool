const Pet = require('../models/pet');

module.exports = (app) => {

  /* GET home page. */
  app.get('/', (req, res) => {
    // current page
    const page = req.query.page || 1

    Pet.paginate({}, { page: page }).then((results) => {
      // res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });
      if (req.header('content-type') == 'application/json') {
        return res.json({ pets: pets, categories: categories });
      } else {
        return res.render('pets-index', { pets: results.docs, pagesCount: results.pages, currentPage: page });
      }
    });
  });
}
