import React, { Component } from "react";
import "./tableview.scss";

const TableView = (props) => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <React.Fragment>
      <div className="table-wrapper">
        <h2>Saved Url's</h2>

        <div className="table-content">
          <table>
            <tbody>
              <tr>
                <th>
                  <p>URL</p>
                </th>
                <th>
                  <p>Title</p>
                </th>
                <th>
                  <p>Bullets</p>
                </th>
              </tr>
              {props.keys.map((key, index) => (
                <tr key={key.id}>
                  <td>
                    <p>{key.url}</p>
                  </td>
                  <td>
                    <p>{key.title}</p>
                  </td>
                  <td>
                    {key.bulletPoints &&
                      key.bulletPoints.length > 0 &&
                      key.bulletPoints.map((bullet, index) => (
                        <p key={bullet.id}>{bullet.value}</p>
                      ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </React.Fragment>
  );
};
export default TableView;
