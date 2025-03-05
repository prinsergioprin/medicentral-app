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
              <th
                key={index}
                className={column === "2025" ? "year-column" : ""}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column, columnIndex) => {
                let cellContent;

                if (column === "") {
                  if (
                    row.hasOwnProperty("Notes") ||
                    row.hasOwnProperty("2024")
                  ) {
                    cellContent = (
                      <img
                        src={EditIcon}
                        alt="Edit activity"
                        className="edit-icon"
                      />
                    );
                  } else {
                    cellContent = null;
                  }
                } else if (column === "Med. journal") {
                  cellContent = (
                    <img
                      src={JournalArrow}
                      alt="Go to journal"
                      className="journal-arrow"
                    />
                  );
                } else if (Array.isArray(row[column])) {
                  cellContent = row[column].map((item, i) => (
                    <React.Fragment key={i}>
                      {item}
                      <br />
                    </React.Fragment>
                  ));
                } else if (row.hasOwnProperty(column)) {
                  cellContent = row[column];
                } else {
                  cellContent = null;
                }

                return (
                  <td
                    key={columnIndex}
                    className={
                      column === "Patient"
                        ? "patient-column"
                        : column === "Med. journal"
                        ? "medjournal-column"
                        : column === "2025"
                        ? "year-column"
                        : ""
                    }
                  >
                    {cellContent}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContentBox;
