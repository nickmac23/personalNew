var React = require('react')
var projects = require('../controller/project.controller.js').models
var Carousel = require('./carousel.js')

var Project = React.createClass({
  render: function () {
    var containerStyle ={
      backgroundColor:'rgb(211, 212, 214)',
      padding: '50px',
      minHeight: '600px'
    }
    var style={
      height: '366px'
    }
    var test = {
      textAlign: 'center'
    }
    var self = this
    var project = projects.filter(function (proj) {
      return proj.attributes.project === self.props.path
    })
    project = project[0].attributes
    var stack = project.stack.map( (tec, index) => {
      var item = !!project.stack[index + 1] ? (<span key={index}> {tec}, </span>) : (<span key={index}> {tec} </span>)
      return item
    })
    return (
      <div className='container-fluid' style={containerStyle}>
        <div className='col-lg-10 col-lg-offset-1'>
          <br />
          <div className='col-lg-4 ' style={style}>
            <Carousel img={project.picture} />
          </div>
          <div className='col-lg-7 col-lg-offset-1' style={test}>
            <h1>{project.project}</h1>
            <hr />
            <p>{project.mainContent}</p>
            <hr />
            <ul>
              <li><strong>Technology Stack:</strong> {stack} </li>
              <li><strong>Live site:</strong> <a href={project.site}>{project.site}</a></li>
              <li><strong>Github:</strong> <a href={project.git}>{project.git}</a></li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = Project
