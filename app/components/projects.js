var React = require('react')
var myProjects = require('../controller/project.controller.js')
var Link = require('react-router').Link

var Projects = React.createClass({
  render: function () {
    var containerStyle ={
      backgroundColor:'rgb(211, 212, 214)',
    }
    var divStyle={
      padding: '10px',
      display: 'block',

    }
    var imgStyle = {
      width:'100%'
    }
    var catigorieStyle ={
      display:'flex',
      justifyContent: 'space-around'
    }
    var project = myProjects.map(function (proj, index) {
      proj = proj.attributes
      return (
        <div className='col-lg-4 col-md-4 col-sm-6' style={divStyle} key={index}>
          <img style={imgStyle} src={proj.picture}/>
          <Link to={'/project/' + proj.project}><ImgFooter content={proj.content} /></Link>
        </div>
      )
    })
    return (
      <div className='container-fluid' style={containerStyle}>
        <header className='col-lg-10 col-lg-offset-1'>
          <h1> Portfolio </h1>
          <h4> Here is what I can do for you?</h4>
          <p style={catigorieStyle}>
            <span>Web Apps</span>
            <span>|</span>
            <span>Mobile Apps</span>
            <span>|</span>
            <span>Desktop Apps</span>
            <span>|</span>
            <span>Real-Time Computing</span>
            <span>|</span>
            <span>Database Integration</span>
          </p>
          <p>Click on a project to get a more in depth view on technologies and arcitecture </p>
        </header>
        <div className='col-lg-10 col-lg-offset-1'>
          {project}
        </div>
      </div>
    )
  }
})

var ImgFooter = React.createClass({
  getInitialState: function () {
    return {
      opacity: '0'
    }
  },
  handleOver: function () {
    var self = this
    for (let i = 0; i < 8; i++) {
      window.setTimeout(function () {
        self.setState({opacity: 0 + (i + 1)/10})
      }, 0 + i*35)
    }
  },
  handleOut: function () {
    var self = this
    for (let i = 0; i < 8; i++) {
      window.setTimeout(function () {
        self.setState({opacity: 0.7 - (i + 1)/10})
      }, 0 + i*35)
    }
  },
  render: function () {
    var footerStyle={
      position: 'absolute',
      top: '7px',
      left: '7px',
      height: '96%',
      width: '96%',
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      opacity: this.state.opacity,
    }
    var innerDiv ={
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      width: '100%',
      height:'100px',
      padding: '10px',
      backgroundColor: 'grey',
      color: 'white'
    }
    return (
      <div>
          <footer style={footerStyle} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
            <div style={innerDiv}>
              {this.props.content}
            </div>
          </footer>
      </div>
    )
  }
})


module.exports = Projects
