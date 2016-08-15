var Project = Backbone.Model.extend({
  defaults: {
    picture: img + '',
    blurb: '',
  }
});

var img ='./app/img/'

var whereAbouts = new Project ({
  project: 'WhereAbouts',
  path: 'WhereAbouts',
  picture: [img + 'whereAbouts.png', img + 'where1.png', img + 'where2.png'],
  site: '',
  git: '',
  footerContent:{title: 'WhereAbouts', content: 'A community-powered map for overlooked points-of-interests'},
  mainContent: '  Whereabouts is a community-powered map for overlooked points-of-interest that was created as part of a week long group project. It captures hidden gems that only a true local would know, giving the user a more authentic experience than what other travel sites can offer. To create an entry a user can simply whip out their phone, and use Google maps API to lock onto their location. All posts are saved in a postgresql database which can be filtered and viewed by location and distance. Popular posts are upvoted allowing for community reliability and more exciting points of interest to be displayed to the user quicker.I created this project prior to me learning Angular. With the goal to seamlessly render new information to the page without a refresh I utilized socket.io and jQuery. Whereabouts gets its charm from its content and is in desperate need of more. Please visit the site and add your own. For more information about where I have been visit' ,
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],

  all: true,
  socket: true,
  dataBase: true,
  web: true
})
var asteroids = new Project ({
  project: 'Asteroids',
  path: 'Asteroids',
  picture: [img + 'asteroid.png',img + 'asteroid1.png',img + 'asteroid2.png'],
  footerContent:{title: 'Asteroids', content: 'A remake of Atari\'s asteroids'},
  mainContent: "Thank you for your interest in Asteroid Field, my very first project. This game is a remake of Atari's Asteroids, an arcade style game in which a spaceship fights for survival in an asteroid field. Gameplay was made entirely using the HTML5 canvas element and JavaScript. Additionally I used CSS, SASS and Jquery for styling the site. The game includes four different ships, three asteroid types with different behaviors and an updating score tally. User’s high scores  are saved and compared in a Firebase database which I utilize for creating a high score leader board. Click below to visit the site and see if you can get the new high score. I hope you enjoy the game.",
  webSite: 'https://astroidz.firebaseapp.com/',
  git: 'https://github.com/nickmac23/astroid',
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],
  all: true,
  web: true
})
var socketChat = new Project ({
  project: 'SocketChat',
  path: 'SocketChat',
  picture: [img + 'socketchat.png'],
  footerContent:{title: 'SocketChat', content: 'Real time messaging Chat App'},
  mainContent: "SocketChat was created in a day as part of a hackathon. In this project I worked with one other person to create an instant messaging CRUD app with the intent of learning socket.io. Users can create new chat rooms and message each other in real time. All messages are then saved and displayed only in the chat room in which they were created. Additional features include Google OAuth and Cookie based authentication.",
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],
  all: true,
  socket: true,
  dataBase: true,
  web: true
})
var musicPhone = new Project ({
  project: 'Ionic Mobile Remote',
  path: 'Music Player',
  picture: [img + 'musicPhone.png'],
  footerContent:{title: 'Music Project Mobile Remote', content: 'Mobile remote for a Network of Music Player Apps'},
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],

  all: true,
  socket: true,
  mobile: true
})
var musicElectron = new Project ({
  project: 'Electron Desktop Music Player',
  path: 'Music Player',
  picture: [img + 'musicPrj.png'],
  footerContent:{title: 'Music Project Desktop App', content: 'Desktop music player'},
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],

  all: true,
  socket: true,
  desktop: true
})
var musicWeb = new Project ({
  project: 'Music Player',
  path: 'Music Player',
  picture: [img + 'musicPrj.png', img + 'musicPhone.png', img + 'system.png', img + 'music1.png', img + 'music2.png'],
  footerContent:{title: 'Music Project Web App', content: 'Web app compoent to a network of music player Apps'},
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],

  all: true,
  socket: true,
  web: true
})
var grasp = new Project ({
  project: 'Grasp',
  path: 'Grasp',
  picture: [img + 'grasp.png', img + 'graspMobile.png', img + 'grasp1.png', img + 'grasp2.png', img + 'grasp3.png', img + 'grasp4.png'],
  footerContent:{title: 'Grasp Web App', content: 'A web app that monitors Student\'s understandings of a lecture'},
  mainContent: 'Grasp is an educational app. It utilizes socket.io and google charts api inorder to give teachers a realtime look at how much their class understands the lecture. By utilizing the web or phone app, students can indicate whether they understand the lecture or not. Every time a student changes state the graph is updated. ',
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],

  all: true,
  socket: true,
  dataBase: true,
  web: true
})
var graspMobile = new Project ({
  project: 'Grasp Ionic Mobile App',
  path: 'Grasp',
  picture: [img + 'graspMobile.png'],
  footerContent:{title: 'Grasp Mobile App', content: 'A mobile app for students to share their understandings of a lecture'},
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],

  all: true,
  socket: true,
  dataBase: true,
  mobile: true
})
var redditClone = new Project ({
  project: 'Reddit Clone',
  path: 'Reddit Clone',
  picture: [img + 'redditClone.png', img + 'reddit1.png', img + 'reddit2.png'],
  footerContent:{title: 'Reddit Clone', content: 'A remake of reddit'},
  content: "Reddit clone was created as a way to hone my Angular skills. I designed the site to look and feel like Reddit in order to give this unassuming CRUD app more flare. Security was a big interest of mine and as a result Reddit clone utilizes JSON Web Tokens and HTTP interceptors to check for user validity. ",
  stack: ['JavaScript,', 'Firebase,', 'HTML Canvas'],

  all: true,
  dataBase: true,
  web: true
})

var Projects = Backbone.Collection.extend({model: Project});

var myProjects = new Projects([
                              musicPhone,
                              asteroids,
                              socketChat,
                              whereAbouts,
                              musicElectron,
                              grasp,
                              musicWeb,
                              graspMobile,
                              redditClone
                            ])

module.exports = myProjects;
