// StockList.js

import React, { Component } from 'react';

interface MyState {
  data: string
}

class StockList extends Component<{data: any}> {
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
export default StockList;