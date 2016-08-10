var React = require('react')

var Header = React.createClass({
  render: function () {
    var headerStyle = {
       width: '100%',
       backgroundColor: 'rgb(255, 255, 255)',
       color: 'rgb(41, 72, 134)'
    }
    var menuStyle = {
      paddingTop: '40px',
      display: 'flex',
      justifyContent: 'space-between',
    }
    var linkStyle={
      color: 'rgb(41, 72, 134)',
      fontWeight: 'bold'
    }
    return (
      <main className='container-fluid' style={headerStyle}>
        <div className='col-lg-3 col-lg-offset-1' >
          <h1 style={linkStyle}> Nick MacIntyre </h1>
          <p> Full Stack Developer</p>
        </div>
        <div className='col-lg-6 col-lg-offset-1' style={menuStyle}>
          <a href='#' style={linkStyle}>PORTFOLIO</a>
          <a href='#' style={linkStyle}>GITHUB</a>
          <a href='#' style={linkStyle}>RESUME</a>
          <a href='#' style={linkStyle}>CONTACT</a>
          <a href='#' style={linkStyle}>ABOUT</a>
        </div>
      </main>
    )
  }
})

module.exports = Header
