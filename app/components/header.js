var React = require('react')

var Header = React.createClass({
  render: function () {
    var headerStyle = {
       width: '100%',
       borderBottom: '1px solid black',
    }
    var menuStyle = {
      paddingTop: '40px',
      display: 'flex',
      justifyContent: 'space-around'
    }
    return (
      <main className='row' style={headerStyle}>
        <div className='col-lg-3 col-lg-offset-1' >
          <h1> Nick MacIntyre </h1>
          <p> Full Stack Developer</p>
        </div>
        <div className='col-lg-6 col-lg-offset-1' style={menuStyle}>
          <a href='#'>PORTFOLIO</a>
          <a href='#'>GITHUB</a>
          <a href='#'>RESUME</a>
          <a href='#'>CONTACT</a>
          <a href='#'>ABOUT</a>
        </div>
      </main>
    )
  }
})

module.exports = Header
