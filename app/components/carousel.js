var React = require('react');

var Carousel = require('nuka-carousel');

var CarouselComp = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    var carouselStyle = {
      width: '50%'
    }
    return (
      <Carousel style={carouselStyle}>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
    )
  }
});

module.exports = CarouselComp;
