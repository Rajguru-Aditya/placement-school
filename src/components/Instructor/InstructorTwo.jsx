import { instructorTwo as data } from "@/data/instructor";
import { Link } from "react-router-dom";

export default function InstructorTwo() {
  return (
    <div className="team__area-6 pt-110 pb-100 overflow-hidden">
      <div className="container">
        <div className="row pb-60">
          <div className="col-sm-7 text-sm-start text-center">
            {data.title && (
              <h2 className="section-title-6 move-line-3d">
                {data.title.sliceOne} <br /> {data.title.sliceTwo}
              </h2>
            )}
          </div>
          <div className="col-sm-5 text-sm-end align-self-center d-sm-block d-none fade-slide right show-lg">
            <Link
              className="btn-style-6 btn-hover-effect border-radius-50"
              to={data.btn.link ?? "instructors"}
            >
              {data.btn.text}
            </Link>
          </div>
        </div>
        {data.instructors && data.instructors.length > 0 && (
          <div className="row justify-content-center">
            {data.instructors.map((instructor, index) => (
              <div key={index} className="col-lg-4 col-sm-6">
                <div
                  className={`team__item-6 ${instructor.animation.name}`}
                  data-delay={instructor.animation.delay}
                  data-duration={instructor.animation.duration}
                >
                  <div
                    className="team__thumb-6 text-center"
                    style={{
                      maskImage: "url('/assets/imgs/bg/team-6-1.webp')",
                    }}
                  >
                    {instructor.image && (
                      <img
                        className="team__team-main-6"
                        src={instructor.image}
                        alt="Icon"
                      />
                    )}
                    {instructor.shapeOne && (
                      <img
                        className="position-absolute shape-image-1"
                        src={instructor.shapeOne}
                        alt="Icon"
                      />
                    )}
                    {instructor.shapeTwo && (
                      <img
                        className="position-absolute shape-image-2"
                        src={instructor.shapeTwo}
                        alt="Icon"
                      />
                    )}
                  </div>
                  <div
                    className="team__details-6"
                    style={{
                      backgroundImage: "url('/assets/imgs/bg/team-6-2.webp')",
                    }}
                  >
                    {instructor.name && (
                      <h4 className="team__name-6">{instructor.name}</h4>
                    )}
                    {instructor.designation && (
                      <span className="team__designation-6">
                        {instructor.designation}
                      </span>
                    )}
                  </div>
                  <ul className="team__social-6">
                    <li>
                      <Link className="socail-item-6 options--1" to="#">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 13 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.57743 0.680908H11.3718L7.45159 5.18718L12.0635 11.3192H8.4524L5.6241 7.60017L2.3879 11.3192H0.592409L4.7855 6.49924L0.361328 0.680908H4.06405L6.62057 4.08025L9.57743 0.680908ZM8.94766 10.239H9.94196L3.52378 1.70437H2.45679L8.94766 10.239Z"
                            fill="#454545"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link className="socail-item-6 options--2" to="#">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.7414 4.35851C6.29891 3.78903 7.02474 3.41623 7.86906 3.41623C9.71556 3.41623 11.2125 4.91313 11.2125 6.75969V11.319H9.99671V6.75969C9.99671 5.58462 9.04413 4.63203 7.86906 4.63203C6.69398 4.63203 5.7414 5.58462 5.7414 6.75969V11.319H4.52559V3.72018H5.7414V4.35851ZM1.48607 2.50437C0.982468 2.50437 0.574219 2.09612 0.574219 1.59252C0.574219 1.08891 0.982468 0.680664 1.48607 0.680664C1.98967 0.680664 2.39792 1.08891 2.39792 1.59252C2.39792 2.09612 1.98967 2.50437 1.48607 2.50437ZM0.87817 3.72018H2.09397V11.319H0.87817V3.72018Z"
                            fill="#454545"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link className="socail-item-6 options--3" to="#">
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 11 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.46759 4.40431C4.586 4.40431 3.87184 5.11873 3.87184 6.00006C3.87184 6.8816 4.58626 7.5958 5.46759 7.5958C6.34913 7.5958 7.06334 6.88139 7.06334 6.00006C7.06334 5.11851 6.34892 4.40431 5.46759 4.40431ZM5.46759 3.34048C6.93589 3.34048 8.12716 4.53043 8.12716 6.00006C8.12716 7.46841 6.93722 8.65963 5.46759 8.65963C3.99925 8.65963 2.80801 7.46968 2.80801 6.00006C2.80801 4.53172 3.99796 3.34048 5.46759 3.34048ZM8.92504 3.20705C8.92504 3.57413 8.62674 3.87196 8.26014 3.87196C7.89307 3.87196 7.59525 3.57367 7.59525 3.20705C7.59525 2.84043 7.89349 2.54261 8.26014 2.54261C8.62626 2.54215 8.92504 2.84043 8.92504 3.20705ZM5.46759 1.74474C4.15137 1.74474 3.93684 1.74822 3.32465 1.77548C2.90757 1.79506 2.62798 1.85116 2.36821 1.95201C2.13736 2.04154 1.97083 2.14845 1.7934 2.32588C1.61529 2.50399 1.50857 2.67007 1.4194 2.90103C1.31832 3.1614 1.26224 3.44054 1.24301 3.85705C1.21548 4.44431 1.21227 4.64955 1.21227 6.00006C1.21227 7.31628 1.21575 7.5308 1.24301 8.14293C1.2626 8.55984 1.31877 8.83984 1.41937 9.09899C1.50914 9.33016 1.61627 9.49708 1.79284 9.67367C1.97165 9.85224 2.13823 9.95931 2.36699 10.0476C2.62993 10.1493 2.90934 10.2054 3.32457 10.2246C3.91184 10.2521 4.11708 10.2554 5.46759 10.2554C6.78381 10.2554 6.99834 10.2519 7.61046 10.2246C8.02647 10.2051 8.30669 10.1488 8.56653 10.0482C8.79706 9.95873 8.9645 9.85123 9.14121 9.67479C9.32004 9.4957 9.4269 9.32952 9.5153 9.10022C9.61668 8.83825 9.67296 8.55846 9.69216 8.14309C9.71966 7.5558 9.72291 7.35054 9.72291 6.00006C9.72291 4.68384 9.7194 4.46932 9.69216 3.85717C9.67259 3.44105 9.61626 3.16042 9.51562 2.90068C9.42631 2.67047 9.31902 2.50343 9.14174 2.32588C8.96333 2.14748 8.7977 2.04098 8.56658 1.95188C8.30642 1.85088 8.02685 1.79472 7.61057 1.77549C7.02334 1.74796 6.81807 1.74474 5.46759 1.74474ZM5.46759 0.680908C6.91259 0.680908 7.09302 0.686227 7.66041 0.712823C8.22642 0.738977 8.61254 0.828515 8.95163 0.960164C9.30222 1.09536 9.59833 1.27798 9.89397 1.57364C10.1892 1.8693 10.3718 2.16628 10.5075 2.51601C10.6387 2.85467 10.7282 3.24119 10.7548 3.80724C10.7801 4.37462 10.7867 4.55502 10.7867 6.00006C10.7867 7.44511 10.7814 7.62548 10.7548 8.19288C10.7287 8.75894 10.6387 9.145 10.5075 9.4841C10.3723 9.83474 10.1892 10.1308 9.89397 10.4265C9.59833 10.7217 9.30089 10.9043 8.95163 11.04C8.61254 11.1712 8.22642 11.2607 7.66041 11.2873C7.09302 11.3126 6.91259 11.3192 5.46759 11.3192C4.02255 11.3192 3.84214 11.3139 3.27476 11.2873C2.70872 11.2611 2.32308 11.1712 1.98354 11.04C1.63336 10.9047 1.33682 10.7217 1.04117 10.4265C0.745512 10.1308 0.563331 9.83341 0.427693 9.4841C0.296044 9.145 0.206948 8.75894 0.180352 8.19288C0.155087 7.62548 0.148438 7.44511 0.148438 6.00006C0.148438 4.55502 0.153757 4.37462 0.180352 3.80724C0.206501 3.24075 0.296044 2.85511 0.427693 2.51601C0.562884 2.16584 0.745512 1.8693 1.04117 1.57364C1.33682 1.27798 1.63381 1.0958 1.98354 0.960164C2.32264 0.828515 2.70828 0.739419 3.27476 0.712823C3.84214 0.687557 4.02255 0.680908 5.46759 0.680908Z"
                            fill="#454545"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
