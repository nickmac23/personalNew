var Skill = Backbone.Model.extend({
  defaults: {
    icon: '',
    title: '',
  }
});

var education = new Skill({title: 'education', icon: 'glyphicon glyphicon-fire'})
var education1 = new Skill({title: 'Cool', icon: 'glyphicon glyphicon-fire'})
var education2 = new Skill({title: 'education', icon: 'glyphicon glyphicon-fire'})
var education3 = new Skill({title: 'education', icon: 'glyphicon glyphicon-fire'})

var Skills = Backbone.Collection.extend({model: Skill});

var mySkills = new Skills([education, education1, education2, education3])

module.exports = mySkills;
