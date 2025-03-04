import React from "react";
import "./ContentBox.css";
import EditIcon from "../../Assets/edit-icon.png";
import JournalArrow from "../../Assets/journal-arrow.png";

const ContentBox = ({ title, columns, data }) => {
  return (
    <div className="content-box-container">
      <h2>{title}</h2>
      <table className="content-box-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => (
                <td
                  key={columnIndex}
                  className={column === "Edit" ? "edit-column" : ""}
                >
                  {column === "" ? (
                    <img
                      src={EditIcon}
                      alt="Edit activity"
                      className="edit-icon"
                    />
                  ) : column === "Med. journal" ? (
                    <img
                      src={JournalArrow}
                      alt="Go to journal"
                      className="journal-arrow"
                    />
                  ) : (
                    row[column]
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentBox;
