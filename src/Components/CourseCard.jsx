import React from "react";

export default function CourseCard({
  courseImage,
  courseName,
  courseType,
  id,
}) {
  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 align-content-center">
        <div className="card m-1 ms-2 ">
          <img
            className="card-img-top"
            src={courseImage}
            style={{ height: "100px" }}
            alt="img"
          />
          <div className="card-body bg-secondary text-light">
            <h5 className="card-title">{courseName}</h5>
            <p className="card-text">{courseType} </p>
          </div>
        </div>
      </div>
    </>
  );
}
