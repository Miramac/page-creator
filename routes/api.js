/*
 * Data
 */

exports.app = function (req, res) {
  res.json({
    name: 'Page Creator'
    , page: {
      name: 'New Page'
      , path: ''
      , url: ''
      , users: []
      , text01: ''
    }
  });
}; 
