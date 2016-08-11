var React = require('react')
var myProjects = require('../controller/project.controller.js')
var Link = require('react-router').Link

var Projects = React.createClass({
  render: function () {
    var containerStyle ={
      backgroundColor:'rgb(211, 212, 214)',
    }
    var divStyle={
      marginTop: '20px',
      display: 'block',
      position: 'relative',
      height: '321px'

    }
    var imgStyle = {
      position: 'absolute',
      left: '7px'
    }
    var project = myProjects.map(function (proj, index) {
      proj = proj.attributes
      return (
        <div className='col-lg-4 col-md-6 col-sm-12' style={divStyle} key={index}>
          <img style={imgStyle} src={proj.picture}/>
          <ImgFooter content={proj.content} />
        </div>
      )
    })
    return (
      <div className='container-fluid' style={containerStyle}>
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
    this.setState({opacity: '0.7'})
  },
  handleOut: function () {
    this.setState({opacity: '0'})
  },
  render: function () {
    var footerStyle={
      position: 'absolute',
      padding: '10px',
      top: '0px',
      left: '7px',
      height: '320px',
      width: '320px',
      backgroundColor:'rgba(0, 0, 0, 0.3)',
      opacity: this.state.opacity,
    }
    var innerDiv ={
      position: 'absolute',
      bottom: '0px',
      left: '0px',
      width: '320px',
      height:'100px',
      backgroundColor: 'grey',
      color: 'white'
    }
    return (
      <div>
        <Link to='/'>
          <footer style={footerStyle} onMouseOver={this.handleOver} onMouseOut={this.handleOut}>
            <div style={innerDiv}>
              {this.props.content}
            </div>
          </footer>
        </Link>
      </div>
    )
  }
})


module.exports = Projects
