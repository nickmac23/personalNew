var React = require('react');
var Slider = require('react-slick');

var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      arrows: false,
      pauseOnHover: true
    }
    if (!!this.props.img) {
      var array = this.props.img.map(function (img, index) {
        var style ={
          textAlign: 'center',
          backgroundImage: 'url('+img+')',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          height: '366px',
        }
        return (
          <div key={index} style={style}></div>
        )
      })
    } else {
      var style = {
        backgroundColor:'rgb(255, 255, 255)',
        minHeight: '300px',
        padding: '20px'
      }
      var array =[(<div key={1} style={style}> <h1>Welcome</h1><h2>I am a full stack developer specializing in: </h2> </div>),
        (<div key={2} style={style}> <h1>Welcome</h1><h2>I am a full stack developer specializing in: </h2> <ul className='col-lg-offset-6'><li><h3>JavaScript</h3></li><li><h3>Node.JS</h3></li><li><h3>PostgreSQL</h3></li></ul>  </div>),
        (<div key={3} style={style}> <h2>What I can do for you is:</h2> </div>),
        (<div key={4} style={style}> <h2>What I can do for you is:</h2><ul className='col-lg-offset-6'><li><h3>Responsive System Design</h3></li><li><h3>Database Integration</h3></li><li><h3>Real-Time Computing</h3></li></ul></div>)
      ]
    }
    return (
      <Slider {...settings}>
        {array}
      </Slider>
    );
  }
});


module.exports = SimpleSlider;
