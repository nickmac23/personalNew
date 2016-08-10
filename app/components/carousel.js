var React = require('react');
var Carousel = require('nuka-carousel');

var App = React.createClass({
  mixins: [Carousel.ControllerMixin],
  render() {
    var containerStyle = {
      backgroundColor: 'rgb(211, 212, 214)',
      padding:20
    }
    return (
      <div className='container-fluid' style={containerStyle} >
      <div className='col-lg-10 col-lg-offset-1' >
        <Carousel autoplay={true} wrapAround={true}>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
          <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
        </Carousel>
      </div>
      </div>
    )
  }
});

module.exports = App;
