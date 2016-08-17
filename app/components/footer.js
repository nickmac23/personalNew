var React = require('react')

var Footer = React.createClass({
  render: function () {
    var footerStyle ={
      width: '100%',
      borderTop: 'solid black 1px',
      padding: 10
    }
    return(
      <footer style={footerStyle} className='col-lg-12'>
        <p className='col-lg-offset-10'>2016 by Nick MacIntyre</p>
      </footer>
    )
  }
})
module.exports = Footer
