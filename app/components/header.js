var React = require('react')
var Link = require('react-router').Link


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
          <h1 style={linkStyle}> <Link to='/'> Nick MacIntyre </Link></h1>
          <p> Full Stack Developer</p>
        </div>
        <div className='col-lg-6 col-lg-offset-1' style={menuStyle}>
          <Link to='portfolio' style={linkStyle}>PORTFOLIO</Link>
          <a href='http://github.com/nickmac23' style={linkStyle}>GITHUB</a>
          <a href='http://linkedin.com/in/nickmacintyre' style={linkStyle}>LINKEDIN</a>
        </div>
      </main>
    )
  }
})

module.exports = Header
