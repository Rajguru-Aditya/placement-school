import PropTypes from "prop-types";
import { Link } from "react-router-dom";

CourseCardTwo.propTypes = {
  course: PropTypes.object,
};

export default function CourseCardTwo({ course }) {
  return (
    <div
      className={`course__item-2 ${course.animation.name}`}
      data-delay={course.animation.delay}
    >
      {course.image && (
        <img className="course__thumb-4" src={course.image} alt="Course" />
      )}
      <div className="course__contentWrap">
        <div className="course__contentTop">
          <div className="course__featuresWrap">
            {course.features && course.features.map((feature, index) => (
              <div key={index} className="course__featureItem">
                <p>{feature}</p>
              </div>
            ))}
          </div>
          {course.title && (
            <h3 className="course__title">
              <Link to={course.link}>{course.title}</Link>
            </h3>
          )}
          {course.description && (
            <p className="course__content-4">{course.description}</p>
          )}
        </div>
        {course.btn.link && (
          <Link
            className="course__course-btn text-white btn-hover-bubble"
            to={course.btn.link}
          >
            {course.btn.text}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Link>
      )}
      </div>
    </div>
  );
}
