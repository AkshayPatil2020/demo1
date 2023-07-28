// UserList.js

import React, { Component } from 'react';

/* class UserList extends Component<{data: any}> {      
      tabRow(){
        if(this.props.data instanceof Array){
          return this.props.data.map(function(object, i){
              return (
                <tr>
                    <td>
                        {object.id}
                    </td>
                    <td>
                        {object.name}
                    </td>
                </tr>);
          })
        }
      }
    render() {
        return (
            <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Name</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
        );
      }
}
export default UserList; */

export default function UserList({ data }: any) {
    const tabRow = () => {
        if(data instanceof Array){
          return data.map(function(object, i){
              return (
                <tr>
                    <td>
                        {object.id}
                    </td>
                    <td>
                        {object.name}
                    </td>
                </tr>);
          })
        }
      }
    return (
 <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Names</td>
                </tr>
              </thead>
              <tbody>
                {tabRow()}
              </tbody>
            </table>
        </div>
    );
}