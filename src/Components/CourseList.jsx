import CourseCard from "./CourseCard";

export default function CourseList({ courseList, ctype }) {
  console.log(courseList, ctype);
  const filteredCourses =
    ctype === "All"
      ? courseList
      : courseList.filter((item) => item.courseType === ctype);

  return (
    <div className="text-center">
      <h1 className="text-primary m-5">{ctype}</h1>
      <div className="row d-flex align-items-center justify-content-center">
        {filteredCourses.map((element, index) => (
          <CourseCard key={index} {...element} id={index} />
        ))}
      </div>
    </div>
  );
}
