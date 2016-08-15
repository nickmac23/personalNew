var Skill = Backbone.Model.extend({
  defaults: {
    icon: '',
    title: '',
  }
});

var education = new Skill({
  title: 'EDUCATION',
  icon: 'glyphicon glyphicon-apple',
  content: [
    {title: 'Galvanise', content: 'Full Stack Web Development'},
    {title: 'University of Humboldt', content: 'B.S. Geology'},
    {title: 'University of Humboldt', content: 'Minir Applied Mathamatics'},
  ]
})
var education1 = new Skill({
  title: 'SKILLS',
  icon: 'glyphicon glyphicon-knight',
  content: [
    {title: 'Programing Langueages', content: 'JavaScript, Node.JS, HTML, CSS'},
    {title: 'FrameWorks', content: 'React.JS, Angular.JS, Express, BackBone, BootStrap'},
    {title: 'Technologies', content: 'Socket.io, Electron, Ionic, GoogleMapsAPI'},
  ]
})
var education2 = new Skill({
  title: 'INTERESTS',
  icon: 'glyphicon glyphicon-fire',
  content: [
    {title: 'Real time Data', content: 'I devoted much of my time to learing and creating app with real time components'},
    {title: 'Full Stack Development', content: 'React.JS, Angular.JS, Express, BackBone, BootStrap'},
    {title: 'Software Engineer', content: 'Socket.io, Electron, Ionic, GoogleMapsAPI'},
  ]
})
var education3 = new Skill({
  title: 'CONTACT',
  icon: 'glyphicon glyphicon-user',
  content: [
    {title: 'Boulder, CO'},
    {title: 'Email', content: 'NickPMacIntyre@gmail.com'},
    {title: 'Phone', content: '501-504-2851'},

  ]
})

var Skills = Backbone.Collection.extend({model: Skill});

var mySkills = new Skills([education, education1, education2, education3])

module.exports = mySkills;
