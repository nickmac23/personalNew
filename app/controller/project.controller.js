var Project = Backbone.Model.extend({
  defaults: {
    picture: img + '',
    blurb: '',
  }
});

var img ='./app/img/'

var whereAbouts = new Project ({
  project: 'WhereAbouts',
  picture: img + 'whereAbouts.png',
  content:'WhereAbouts',
  all: true,
  socket: true,
  dataBase: true,
  web: true
})
var asteroidz = new Project ({
  project: 'Asteroidz',
  picture: img + 'asteroid.png',
  content:'Asteroidz',
  all: true,
  web: true
})
var socketChat = new Project ({
  project: 'SocketChat',
  picture: img + 'socketchat.png',
  content:'SocketChat',
  all: true,
  socket: true,
  dataBase: true,
  web: true
})
var musicPhone = new Project ({
  project: 'Ionic Mobile Remote',
  picture: img + 'musicPhone.png',
  content:'Ionic Mobile Remote',
  all: true,
  socket: true,
  mobile: true
})
var musicElectron = new Project ({
  project: 'Electron Desktop Music Player',
  picture: img + 'musicDesktop.png',
  content:'Electron Desktop Music Player',
  all: true,
  socket: true,
  desktop: true
})
var musicWeb = new Project ({
  project: 'Angular web Music Player',
  picture: img + 'musicDesktop.png',
  content:'Angular Desktop Music Player',
  all: true,
  socket: true,
  web: true
})
var grasp = new Project ({
  project: 'Grasp',
  picture: img + 'grasp.png',
  content:'Grasp',
  all: true,
  socket: true,
  dataBase: true,
  web: true
})
var graspMobile = new Project ({
  project: 'Grasp Ionic Mobile App',
  picture: img + 'graspMobile.png',
  content:'Grasp Ionic Mobile App',
  all: true,
  socket: true,
  dataBase: true,
  mobile: true
})
var redditClone = new Project ({
  project: 'Reddit Clone',
  picture: img + 'redditClone.png',
  content:'Reddit Clone',
  all: true,
  dataBase: true,
  web: true
})

var Projects = Backbone.Collection.extend({model: Project});

var myProjects = new Projects([
                              musicPhone,
                              asteroidz,
                              socketChat,
                              whereAbouts,
                              musicElectron,
                              grasp,
                              musicWeb,
                              graspMobile,
                              redditClone
                            ])

module.exports = myProjects;
