var React = require("react");
var Text = require("./Text.jsx");
module.exports = React.createClass({





  render: function() {
    var message = "bye";

    return (
      <div>
        <p>{message}</p>
        {this.props.children}
      </div>
    ); 
  }, 
});
