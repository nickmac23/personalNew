var React = require('react')

var Project = React.createClass({
  render: function () {
    console.log(this.props);
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
})

module.exports = Project
