/*
 * Data
 */
var request = {
    name: 'New Page'
    , page: {
      name: 'My Page'
      , path: ''
      , url: ''
      , users: []
      , text01: ''
    }
    , pages: []
  };
  
exports.app = function (req, res) {
  
  if(req.query.action) {
    switch(req.query.action) {
      case 'create':
        
        break;
    }
  }
  res.json(request);
};

/**
 * Helpers
 **/
function addUser(name, password) {
  request.users.push({
    name: name
    , password: password
    , hash: password
  });
}
function editUser(index, name, password) {
  request.users[index] = {
    name: name
    , password: password
    , hash: password
  };
}