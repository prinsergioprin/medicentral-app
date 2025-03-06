import React from "react";
import ContentBox from "../ContentBox/ContentBox";

const MedicalJournalBox = () => {
  const columns = ["", "2025", "Description", "Treatment", "Notes"];

  const data = [
    {
      "": "edit",
      2025: [
        "Capio S:t Görans Sjukhus",
        "Sleep phys. Linus van Pelt",
        "14-02-2025",
        "Insomnia treatment",
      ],
      Description: "Patient has trouble sleeping.",
      Treatment:
        "Prescribing magnesium tablets, 375mg every evening 2 hours before sleep.",
      Notes: "Patient will come back in 2 weeks if treatment is not helping.",
    },
    {
      2025: "2024",
    },
    {
      "": "edit",
      2025: [
        "Capio S:t Görans Sjukhus",
        "Sleep phys. Linus van Pelt",
        "28-12-2024",
        "Insomnia treatment",
      ],
      Description: "Patient has trouble sleeping.",
      Treatment:
        "Advising to take Vit D3 supplements, eat better and meditate.",
      Notes: "",
    },
    {
      "": "edit",
      2025: [
        "Aleris emergency reception",
        "Traumat. Laura Palmer",
        "13-01-2024",
        "Broken finger",
      ],
      Description: "Patient fell and broke a middle finger on her left hand.",
      Treatment: "Cast and Alvedon.",
      Notes: "Anti-pain medication is advised for the first few days.",
    },
  ];

  if (data[1][2025] === "2024") {
    data[1] = { 2025: "2024" };
  }

  return (
    <div>
      <ContentBox title="Medical journal" columns={columns} data={data} />
    </div>
  );
};

export default MedicalJournalBox;
