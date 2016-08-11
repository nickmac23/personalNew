var Project = Backbone.Model.extend({
  defaults: {
    picture: '',
    blurb: '',
  }
});

var test = new Project ({
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test1 = new Project ({
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test2 = new Project ({
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test3 = new Project ({
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test4 = new Project ({
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test5 = new Project ({
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})

var Projects = Backbone.Collection.extend({model: Project});

var myProjects = new Projects([test, test1, test2, test3, test4, test5])

module.exports = myProjects;
