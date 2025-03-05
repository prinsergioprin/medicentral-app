import React from "react";
import ContentBox from "../ContentBox/ContentBox";
import GoBackButton from "../GoBackButton/GoBackButton";

const PastActivitiesPage = () => {
  const columns = [
    "",
    "Timestamp",
    "Patient",
    "Activity type",
    "Notes",
    "Med. journal",
  ];

  const data = [
    {
      "": "edit",
      Timestamp: "19-02-2025 09:15",
      Patient: "John Fraud Cooper",
      "Activity type": "Administered flu vaccine",
      Notes: "Patient tolerated well",
      "Med. journal": "journal",
    },
    {
      "": "edit",
      Timestamp: "13-02-2025 14:30",
      Patient: "Charlie Brown",
      "Activity type": "Reviewed medical history and symptoms",
      Notes: "Scheduled follow-up appointment",
      "Med. journal": "journal",
    },
    {
      Timestamp: "31-01-2025 11:10",
      Patient: "Erlend Lans Pedersen",
      "Activity type": "General physical examination",
      Notes: "Advised on lifestyle changes",
      "Med. journal": "journal",
    },
    {
      "": "edit",
      Timestamp: "25-01-2025 16:45",
      Patient: "Ryan Pears",
      "Activity type": "Prescribed antibiotics for infection",
      Notes: "Provided instructions on dosage",
      "Med. journal": "journal",
    },
    {
      "": "edit",
      Timestamp: "17-01-2025 08:55",
      Patient: "Carolina Herrera",
      "Activity type": "Exploring different treatment options",
      Notes: "Exploring different treatment options",
      "Med. journal": "journal",
    },
  ];

  return (
    <div>
      <GoBackButton />
      <ContentBox title="Past activities" columns={columns} data={data} />
    </div>
  );
};

export default PastActivitiesPage;
