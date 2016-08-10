var React = require('react')
var ReactDOM = require('react-dom');
var Header = require('./components/header.js');
var CarouselComp = require('./components/carousel.js')
var Skills = require('./components/skillSummary.js')
var Footer = require('./components/footer.js')


var Body = React.createClass({
  render: function() {

    return (
      <div >
        <Header />
        <CarouselComp />
        <Skills />
        <Footer />
      </div>
    )
  }
})

ReactDOM.render(
  <Body />,
  document.getElementById('body')
);
