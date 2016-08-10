var React = require('react')
var SkillsMod = require('../controller/skills.controller.js').models


var Skills = React.createClass({
  render: function () {
    var mainStyle={
      backgroundColor:'rgb(211, 212, 214)',
    }
    var thumbNailStyle ={
      textAlign: 'center',
    }
    var spanStyle ={
      fontSize: '50px',
    }
    var i = 0
    var skills = SkillsMod.map(function (skill) {
      var j = 0
      i++
      var skill = skill.attributes
      var content = skill.content.map(function (content) {
        j++
        return (
          <div key={'hello' + j + i}>
            <h4>{content.title}</h4>
            <p>{content.content}</p>
          </div>
        )
      })
      return (
        <div className="col-sm-6 col-md-3" style={thumbNailStyle} key={i}>
          <div >
            <div className="caption">
              <span className={skill.icon} aria-hidden="true" style={spanStyle}></span>
              <h3>{skill.title}</h3>
              {content}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className='container-fluid' style={mainStyle}>
        <div className="col-lg-10 col-lg-offset-1" >
        {skills}
        </div>
      </div>
    )
  }
})

module.exports  = Skills
