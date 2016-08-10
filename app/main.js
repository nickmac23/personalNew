var React = require('react')
var ReactDOM = require('react-dom');
var Header = require('./components/header.js');
var CarouselComp = require('./components/carousel.js')


var Body = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <CarouselComp />
      </div>
    )
  }
})

ReactDOM.render(
  <Body />,
  document.getElementById('body')
);
