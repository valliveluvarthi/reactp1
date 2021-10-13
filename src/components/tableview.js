import React, { Fragment, useState, useEffect, Component } from "react";
import "./tableview.scss";
class TableView extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidUpdate() {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  componentDidUpdate() {}

  render() {
    return (
      <React.Fragment>
        <div className="table-wrapper">
          <h2>Saved Url's</h2>

          <table>
            <tbody>
              <tr>
                <th>URL</th>
                <th>Title</th>
                <th>Bullets</th>
              </tr>
              <tr>
                <td>Alfreds Futterkiste</td>
                <td>Maria Anders</td>
                <td>Germany</td>
              </tr>
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
export default TableView;
