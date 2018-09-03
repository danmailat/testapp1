import React, { Component } from 'react';

class NameComponent extends Component {
  componentDidMount() {
    console.log('NameComponent has mounted.');
  }
  constructor(props) {
    super(props);
    this.state = {
      name_displayed: 'First Name'
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(this.props.user_name !== nextProps.user_name) {
      if(nextProps.user_name.indexOf(' ')>=1) {
        this.setState({
          name_displayed: 'Full name'
        })
      } else {
        this.setState({
          name_displayed: 'First name'
        })
      }
    }
  }
  
  render() {

    const { user_name } = this.props;
    const { name_displayed } = this.state;

    return (
      <div className="App">
        <p>{name_displayed}</p>
        <p style={{color:"blue"}}>{user_name ? user_name : 'No user here!'}</p>
      </div>
    );
  }
}

export default NameComponent;
