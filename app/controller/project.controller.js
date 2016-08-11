var Project = Backbone.Model.extend({
  defaults: {
    picture: '',
    blurb: '',
  }
});

var test = new Project ({
  project: 'fillMurrays',
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test1 = new Project ({
  project: 'fillMurray1',
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test2 = new Project ({
  project: 'fillMurray2',
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test3 = new Project ({
  project: 'fillMurray',
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test4 = new Project ({
  project: 'fillMurray3',
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})
var test5 = new Project ({
  project: 'fillMurray4',
  picture: 'https://www.fillmurray.com/320/320',
  content:'this is content'
})

var Projects = Backbone.Collection.extend({model: Project});

var myProjects = new Projects([test, test1, test2, test3, test4, test5])

module.exports = myProjects;
