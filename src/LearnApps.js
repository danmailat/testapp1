// Fix the bugs in this code and make it render without any errors.

import React, { Component } from 'react';

class Apps extends Component {
  componentDidMount() {
  }

  LikeFunctions() {
    console.log('yay functions');
  }

  render() {
    var array = ['here','we','go'];

    var no = 'yes';
    const display = 'My Name';

    return (
      <div>
        <p>{display}</p>
        <hr />
        <input type="text" onChange={this.iLikeFunctions} />
        <table>
          <tbody>
            {array.map(term => {
              no = 'no';
              return (
                <tr>
                  <td>{term}</td>
                  <td>{no}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Apps;
