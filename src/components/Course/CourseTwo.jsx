import { courseTwo as data } from "@/data/course";
import CourseCardTwo from "@/components/Card/Course/CourseCardTwo";
import { Link } from "react-router-dom";

export default function CourseTwo() {
  return (
    <section className="course__area-4 pt-130 pb-140">
      <div className="container">
        <div className="course__titleWrap-4 pb-50 d-flex align-items-center justify-content-md-between">
          {data.title && (
            <h2 className="section-title move-line-3d">{data.title}</h2>
          )}
        </div>
        <div className="course__ObjectiveWrap">
          {data.objectives && data.objectives.map((obj, index) => (
            <div key={index} className="course__ObjectiveItem">
              <p>{obj}</p>
            </div>
          ))}
        </div>
        <div>
          {data.subtitle && <p className="course__subtitle-4">{data.subtitle}</p>}
        </div>
        {data.courses && data.courses.length > 0 && (
          <div className="course__wrapper-2">
            {data.courses.map((course, index) => (
              <CourseCardTwo key={index} course={course} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
