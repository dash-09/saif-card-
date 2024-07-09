
import './card.css';
import image from '../pictures/pen1.png';
import rating from '../pictures/ratingStar.png';
import check from '../pictures/check.png';
import teacher from '../pictures/teacher.png';
import cartImage from '../pictures/one24.png';


const Card = () => {
  return (
    <div className="card-container">
      <div className="ind-card">
        <div className="card-image">
          <img src={image} alt="" />
        </div>

        {/* card information */}

        <div className="card-info">
          <div className="card-info-subject">
            <p>Hindi</p>
          </div>
          <div className="subject-desc">
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="total-subj">
            <div className="total-subj-para">
              <p>Total Subjects</p>
            </div>
            <div className="total-subj-count">
              <p>22</p>
            </div>
          </div>
          <div className="course-rating">
            <div className="course-para">
              <p>Course rating</p>
            </div>
            <div className="rating-image">
              <img src={rating} alt="" />
            </div>
          </div>

          {/*  course features */}

          <div className="course-features">
            <div className="ind-course-feature">
              <div className="course-feature-image">
                <img src={check} alt="" />
              </div>
              <div className="course-feature-para">
                <p>Live Class</p>
              </div>
            </div>
            <div className="ind-course-feature">
              <div className="course-feature-image">
                <img src={check} alt="" />
              </div>
              <div className="course-feature-para">
                <p>Recorded class </p>
              </div>
            </div>
            <div className="ind-course-feature">
              <div className="course-feature-image">
                <img src={check} alt="" />
              </div>
              <div className="course-feature-para">
                <p>Dpp Sheets</p>
              </div>
            </div>
            <div className="ind-course-feature">
              <div className="course-feature-image">
                <img src={check} alt="" />
              </div>
              <div className="course-feature-para">
                <p>Notes</p>
              </div>
            </div>
            <div className="ind-course-feature">
              <div className="course-feature-image">
                <img src={check} alt="" />
              </div>
              <div className="course-feature-para">
                <p>Mocks</p>
              </div>
            </div>
            <div className="ind-course-feature">
              <div className="course-feature-image">
                <img src={check} alt="" />
              </div>
              <div className="course-feature-para">
                <p>MCQ's</p>
              </div>
            </div>
          </div>

          {/* instructor section */}

          <div className="teacher">
            <div className="teacher-info">
              <div className="teacher-logo">
                <img src={teacher} alt="" className="teacher-icon" />
              </div>

              <div className="teacher-name">
                <p>Akhil Mishra</p>
              </div>
            </div>

            <div className="teacher-rating">
              <img src={rating} alt="" />
            </div>
          </div>

          {/* purchase the course
           */}

          <div className="price-section">
            <div className="current-price">
              <p>₹ 1500</p>
            </div>

            <div className="buy-section">
              <div className="buy-button">
                <button>Buy now</button>
              </div>
              <div className="cart-button">
                <div className="cart-button-logo">
                  <center>

                  <img src={cartImage} alt="" />
                  </center>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>
    </div>
  );
}
export default Card;