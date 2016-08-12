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
  catigories: []
})
var asteroidz = new Project ({
  project: 'Asteroidz',
  picture: img + 'asteroid.png',
  content:'Asteroidz',
  catigories: []
})
var socketChat = new Project ({
  project: 'SocketChat',
  picture: img + 'socketchat.png',
  content:'SocketChat',
  catigories: []
})
var musicPhone = new Project ({
  project: 'Ionic Mobile Remote',
  picture: img + 'musicPhone.png',
  content:'Ionic Mobile Remote',
  catigories: []
})
var musicElectron = new Project ({
  project: 'Electron Desktop Music Player',
  picture: img + 'musicDesktop.png',
  content:'Electron Desktop Music Player',
  catigories: []
})
var musicWeb = new Project ({
  project: 'Angular web Music Player',
  picture: img + 'musicDesktop.png',
  content:'Electron Desktop Music Player',
  catigories: []
})
var grasp = new Project ({
  project: 'Grasp',
  picture: img + 'grasp.png',
  content:'Grasp',
  catigories: []
})
var graspMobile = new Project ({
  project: 'Grasp Ionic Mobile App',
  picture: img + 'graspMobile.png',
  content:'Grasp Ionic Mobile App',
  catigories: []
})
var redditClone = new Project ({
  project: 'Reddit Clone',
  picture: img + 'redditClone.png',
  content:'Reddit Clone',
  catigories: []
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
