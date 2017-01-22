var React = require('react');
var List = require('./List.jsx');

var ListManager = React.createClass({
    getInitialState: function() {
        return (
            {items: [], newItemText:''}
        );
    },
    
    onChange: function(e) {
        this.setState({
            newItemText: e.target.value
        });
    },
    
    handleSubmit: function(e) {
        e.preventDefault();
        
        var currentItems = this.state.items;
        
        currentItems.push(this.state.newItemText);
        
        this.setState(
            {items: currentItems, newItemText:''}
        );
    },
    
    render: function() {
        var divStyle = {
            marginTop: 10
        }
        
        
        //col-sm-4  supports col-md-4 and col-lg-4
        return (
            <div style={divStyle} className="col-sm-4">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>
                            {this.props.title}
                        </h3>
                    </div>
                    <div className="row panel-body">
                        <form onSubmit={this.handleSubmit}>
                            <div className="col-sm-8">
                                <input className="form-control" onChange={this.onChange} value={this.state.newItemText} />
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                        <List items={this.state.items} />
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = ListManager;

//props vs state
//props is readonly
//state is mutable/changeable data
//in react, handles this for you. no need to write var self = this;
