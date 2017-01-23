var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: console.log
});

var User = db.define('user', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	allowNull: false,
  	validate: {isEmail: true}
  }
});

var Page = db.define('page', {
  title: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  urlTitle: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  content: {
  	type: Sequelize.TEXT,
  	allowNull: false
  },
  status: {
  	type: Sequelize.ENUM('open', 'closed'),
  	defaultValue: 'open'
  }
}, {
    getterMethods: {
        route: function() {
              return '/wiki/' + this.urlTitle
        }
    }
});


function generateUrlTitle(title){
  if(title){
    var url="";
    url= title.replace(/\W/g, "_");
    url= url.replace(/\s+/g, "_");

    return url;
  }else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2, 7);
  }
}


Page.hook('beforeValidate', function(page, options){
  page.urlTitle=generateUrlTitle(page.title);

});



module.exports={
  Page: Page,
  User: User
};
