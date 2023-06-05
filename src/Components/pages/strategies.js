import React, { useState } from "react";
import Nav from "./dashboardNavbar";
import Performance from "./performance"

const Navbar = () => {
  const [rows, setRows] = useState([
    {
      stock: "Apple",
      strategy: "Buy and Hold",
      parameters: "None",
      isRunning: false,
    },
    {
      stock: "Amazon",
      strategy: "Swing Trading",
      parameters: "MA Crossover",
      isRunning: false,
    },
    {
      stock: "Google",
      strategy: "Scalping",
      parameters: "Bollinger Bands",
      isRunning: false,
    },
  ]);

  const toggleRunAutomation = (index) => {
    setRows((prevRows) =>
      prevRows.map((row, i) =>
        i === index ? { ...row, isRunning: !row.isRunning } : row
      )
    );
  };

  const addRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      {
        stock: "New Stock",
        strategy: "New Strategy",
        parameters: "New Parameters",
        isRunning: false,
      },
    ]);
  };
  

  const deleteRow = (index) => {
    setRows((prevRows) => prevRows.filter((_, i) => i !== index));
  };
  
  const [editingIndex, setEditingIndex] = useState(null);

  return (
    <><div className="strat-body">
      <Nav />

      <div className="page-heading">
        <div className="strat-heading">Strategies</div>
      </div>

      <div className="table-container">
        <table className="strategies-table">
          <thead>
            <tr>
              <th>Stocks</th>
              <th>Strategy</th>
              <th>Parameters</th>
              <th>Run Automation</th>
              <th>Delete</th>
              <th>Edit</th>
            </tr>
          </thead>

          <tbody>

            {rows.map((row, index) => (
              <tr key={index}>
                <td>
                  {editingIndex === index ? (
                    <input
                      value={row.stock}
                      onChange={(event) => setRows((prevRows) => prevRows.map((r, i) => i === index ? { ...r, stock: event.target.value } : r
                      )
                      )} />
                  ) : (
                    row.stock
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      value={row.strategy}
                      onChange={(event) => setRows((prevRows) => prevRows.map((r, i) => i === index ? { ...r, strategy: event.target.value } : r
                      )
                      )} />
                  ) : (
                    row.strategy
                  )}
                </td>
                <td>
                  {editingIndex === index ? (
                    <input
                      value={row.parameters}
                      onChange={(event) => setRows((prevRows) => prevRows.map((r, i) => i === index ? { ...r, parameters: event.target.value } : r
                      )
                      )} />
                  ) : (
                    row.parameters
                  )}
                </td>
                <td>
                  <button
                    className="table-button"
                    onClick={() => toggleRunAutomation(index)}
                  >
                    {row.isRunning ? "On" : "Off"}
                  </button>
                </td>
                <td>
                  <button className="table-button" onClick={() => deleteRow(index)}>
                    Delete
                  </button>
                </td>
                <td>
                  {editingIndex === index ? (
                    <>
                      <button
                        className="table-button"
                        onClick={() => setEditingIndex(null)}
                      >
                        Cancel
                      </button>
                      <button
                        className="table-button"
                        onClick={() => setEditingIndex(null)}
                      >
                        Save
                      </button>
                    </>
                  ) : (
                    <button
                      className="table-button"
                      onClick={() => setEditingIndex(index)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}



            <tr>
              <td colSpan="5">
                <button className="table-button" onClick={addRow}>
                  Add Strategy
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="blank">
        <span> | </span>
      </div>
    </div><div>
        <Performance />
      </div></>
  );
};

export default Navbar;
