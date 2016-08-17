var React = require('react')
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router')

var Header = require('./components/header.js');
var CarouselComp = require('./components/carousel.js')
var Skills = require('./components/skillSummary.js')
var Footer = require('./components/footer.js')
var Projects = require('./components/projects.js')
var Project = require('./components/project.js')

var App = React.createClass({
  render: function() {
    return (
      <div >
        <Header />
        {this.props.children}
      </div>
    )
  }
})
var Body = React.createClass({
  render: function() {
    return (
      <div >
        <div className='col-lg-10 col-lg-offset-1'>
        <br />
        <CarouselComp />
        </div>
        <Skills />
        <Footer />
      </div>
    )
  }
})
var Portfolio = React.createClass({
  render: function() {
    return (
      <div >
        <Projects />
        <Footer />
      </div>
    )
  }
})
var ProjectPage = React.createClass({
  getInitialState: function () {
    return {
      page: this.props.params.name
    }
  },
  render: function() {
    return (
      <div>
        <Project path={this.state.page} />
        <Footer />
      </div>
    )
  }
})


ReactDOM.render(
  <ReactRouter.Router history={ReactRouter.hashHistory}>
    <ReactRouter.Route path="/" component={App}>
      <ReactRouter.IndexRoute component={Body} />
      <ReactRouter.Route path="portfolio" component={Portfolio} />
      <ReactRouter.Route path='/project(/:name)' component={ProjectPage} />
      <ReactRouter.Route path='*' component={Body} />
    </ReactRouter.Route>
  </ReactRouter.Router>,
  document.getElementById('body')
);
