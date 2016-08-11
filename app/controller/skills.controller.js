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
  title: 'education',
  icon: 'glyphicon glyphicon-fire',
  content: [

  ]
})
var education3 = new Skill({
  title: 'education',
  icon: 'glyphicon glyphicon-fire',
  content: []
})

var Skills = Backbone.Collection.extend({model: Skill});

var mySkills = new Skills([education, education1, education2, education3])

module.exports = mySkills;
