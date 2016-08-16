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
        backgroundColorImage:'rgb(211, 212, 214)',
        minHeight: '300px',
        padding: '20px',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column'
      }
      var h1Style ={
        fontSize: '60px'
      }
      var h2Style ={
        color: 'rgb(211, 212, 214)',
      }
      var blue = {
        color: 'rgb(41, 72, 134)'
      }
      var array =[(<div key={1} style={style}> <h1 style={h1Style}><span style={blue}>Hello,</span> I am Nick MacIntyre</h1> </div>),
        (<div key={2} style={style}><h1>I am a <span style={blue}>full stack web developer</span> specializing in:</h1><h2 style={h2Style}>Node.js | JavaScript | PostgreSQL</h2> </div>),
        (<div key={3} style={style}><h1>I am a <span style={blue}>full stack web developer</span> specializing in:</h1> <h2>Node.js | JavaScript | PostgreSQL</h2> </div>),
        (<div key={4} style={style}> <h1>What I can do for <span style={blue}>you</span> is:</h1> <h2 style={h2Style}>Responsive System Design | Database Integration | Real-Time Computing</h2></div>),
        (<div key={5} style={style}> <h1>What I can do for <span style={blue}>you</span> is:</h1><h2>Responsive System Design | Database Integration | Real-Time Computing</h2></div>),
        (<div key={6} style={style}> <h1>Click on the <span style={blue}>portfolio</span> tab to see my projects.</h1></div>),
        (<div key={7} style={style}> <h1>Click on the <span style={blue}>portfolio</span> tab to see my projects.</h1></div>)
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
