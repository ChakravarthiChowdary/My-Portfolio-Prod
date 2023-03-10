import React from "react";
import { Qualification } from "../types/types";

interface IQualificationProps {
  index: number;
  arr: Qualification[];
  qualification: Qualification;
}

const QualificationItem: React.FC<IQualificationProps> = ({
  index,
  arr,
  qualification,
}) => {
  return (
    <div className="qualification__data">
      {index % 2 !== 0 && (
        <>
          <div></div>

          <div>
            <span className="qualification__rounder"></span>
            {arr.length - 1 !== index && (
              <span className="qualification__line"></span>
            )}
          </div>
        </>
      )}

      <div>
        <h3 className="qualification__title">{qualification.name}</h3>
        <span className="qualification__subtitle">
          {qualification.organization}
        </span>
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt qualification__calendarIcon"></i>
          <span> {qualification.term}</span>
        </div>
      </div>
      {index % 2 === 0 && (
        <div>
          <span className="qualification__rounder"></span>
          {arr.length - 1 !== index && (
            <span className="qualification__line"></span>
          )}
        </div>
      )}
    </div>
  );
};

export default QualificationItem;
