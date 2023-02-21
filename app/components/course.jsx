import React from "react";

const Course = ({ course }) => {

    const { Title, Content, image } = course;

    return (
        <section className="course">
            <style jsx="true">{`
        .course {
          background-image: linear-gradient(
              to right bottom,
              rgb(0 0 0/0.65),
              rgb(0 0 0/0.7)
            ),
            url(${image.data.attributes.url});
        }
      `}</style>

            <div className="container course_grid">
                <div className="course_content">
                    <h2 className="heading">{Title}</h2>
                    <p className="text">{Content}</p>
                    <img src={image.url} alt={image.alt} />
                </div>
            </div>
        </section>
    );
};

export default Course;
