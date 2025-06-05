const Blank = require('../models/blank');

exports.show = (req, res) => {
  // Você pode passar dados para a view futuramente
  res.render('blank');
};
