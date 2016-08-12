var React = require('react')
var myProjects = require('../controller/project.controller.js')
var Link = require('react-router').Link

var Projects = React.createClass({
  getInitialState: function () {
    return {
      filter: 'all'
    }
  },
  handleClick: function (filterBy) {
    this.setState({filter: filterBy})
  },
  filter: function (filter) {

    var container = {
      padding: '10px'
    }
    var none ={
      opacity: '1',
      zIndex: '-1'
    }
    return (
      myProjects.map(function (proj, index) {
        proj = proj.attributes
        if (proj[filter]) {
          var divStyle={
            height: '366px',
            width: '100%',
            display: 'inline-block',
            backgroundImage: 'url('+proj.picture+')',
            backgroundSize: 'contain',
             backgroundRepeat: 'no-repeat'
          }
          return (
            <div className='col-lg-4 col-md-4 col-sm-6' style={container}  key={index}>
              <div style={divStyle}>
              <Link to={'/project/' + proj.project}><ImgFooter content={proj.content} /></Link>
              </div>
            </div>
          )
        }
      })
    )
  },
  render: function () {
    var containerStyle ={
      backgroundColor:'rgb(211, 212, 214)',
    }
    var catigorieStyle ={
      display:'flex',
      justifyContent: 'space-around'
    }
    var project = this.filter(this.state.filter)
    return (
      <div className='container-fluid' style={containerStyle}>
        <header className='col-lg-10 col-lg-offset-1'>
          <h1 onClick={this.handleClick.bind(null, 'all')}> Portfolio </h1>
          <h4> Here is what I can do for you?</h4>
          <p style={catigorieStyle}>
            <span onClick={this.handleClick.bind(null, 'web')}>Web Apps</span>
            <span>|</span>
            <span onClick={this.handleClick.bind(null, 'mobile')}>Mobile Apps</span>
            <span>|</span>
            <span onClick={this.handleClick.bind(null, 'desktop')}>Desktop Apps</span>
            <span>|</span>
            <span onClick={this.handleClick.bind(null, 'socket')}>Real-Time Computing</span>
            <span>|</span>
            <span onClick={this.handleClick.bind(null, 'dataBase')}>Database Integration</span>
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
