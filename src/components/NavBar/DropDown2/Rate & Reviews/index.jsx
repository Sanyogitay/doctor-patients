import { NavLink } from "react-router-dom";
import MainLayout from "../../../../layouts/MainLayout";

const RateAndReviews = () => {
  return (
    <MainLayout>
      <>
        {/* /User Menu */}
        {/* /Header */}
        {/* Breadcrumb */}
        <div className="breadcrumb-bar">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-md-12 col-12">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Rate and Reviews
                    </li>
                  </ol>
                </nav>
                <h2 className="breadcrumb-title">Rate and Reviews</h2>
              </div>
            </div>
          </div>
        </div>
        {/* /Breadcrumb */}
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                {/* Profile Sidebar */}
                <div className="profile-sidebar">
                  <div className="widget-profile pro-widget-content">
                    <div className="profile-info-widget">
                      <a href="#" className="booking-doc-img">
                        <img
                          src="assets/img/doctors/doctor-thumb-02.jpg"
                          alt="User Image"
                        />
                      </a>
                      <div className="profile-det-info">
                        <h3>Dr. Darren Elder</h3>
                        <div className="patient-details">
                          <h5 className="mb-0">
                            BDS, MDS - Oral &amp; Maxillofacial Surgery
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="dashboard-widget">
                    <nav className="dashboard-menu">
                      <ul>
                        <li>
                          <NavLink to="/sign-up-doctor">
                            <i className="fas fa-columns" />
                            <span>Dashboard</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/history-of-appointment">
                            <i className="fas fa-calendar-check" />
                            <span>Appointments</span>
                          </NavLink>
                        </li>
                        <li>
                          <NavLink to="/patient-list">
                            <i className="fas fa-user-injured" />
                            <span>My Patients</span>
                          </NavLink>
                        </li>
                        <li>
                          <a href="schedule-timings.html">
                            <i className="fas fa-hourglass-start" />
                            <span>Schedule Timings</span>
                          </a>
                        </li>
                        <li>
                          <NavLink to="/invoice">
                            <i className="fas fa-file-invoice" />
                            <span>Invoices</span>
                          </NavLink>
                        </li>
                        <li className="active">
                          <a href="reviews.html">
                            <i className="fas fa-star" />
                            <span>Reviews</span>
                          </a>
                        </li>
                        <li>
                          <a href="chat-doctor.html">
                            <i className="fas fa-comments" />
                            <span>Message</span>
                            <small className="unread-msg">23</small>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-profile-settings.html">
                            <i className="fas fa-user-cog" />
                            <span>Profile Settings</span>
                          </a>
                        </li>
                        <li>
                          <a href="social-media.html">
                            <i className="fas fa-share-alt" />
                            <span>Social Media</span>
                          </a>
                        </li>
                        <li>
                          <a href="doctor-change-password.html">
                            <i className="fas fa-lock" />
                            <span>Change Password</span>
                          </a>
                        </li>
                        <li>
                          <NavLink to="/">
                            <i className="fas fa-sign-out-alt" />
                            <span>Logout</span>
                          </NavLink>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                {/* /Profile Sidebar */}
              </div>
              <div className="col-md-7 col-lg-8 col-xl-9">
                <div className="doc-review review-listing">
                  {/* Review Listing */}
                  <ul className="comments-list">
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Richard Wilson
                            </span>
                            <span className="comment-date">
                              Reviewed 2 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star" />
                            </div>
                          </div>
                          <p className="recommended">
                            <i className="far fa-thumbs-up" /> I recommend the
                            doctor
                          </p>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* Comment Reply */}
                      <ul className="comments-reply">
                        {/* Comment Reply List */}
                        <li>
                          <div className="comment">
                            <img
                              className="avatar rounded-circle"
                              alt="User Image"
                              src="assets/img/doctors/doctor-thumb-02.jpg"
                            />
                            <div className="comment-body">
                              <div className="meta-data">
                                <span className="comment-author">
                                  Dr. Darren Elder
                                </span>
                                <span className="comment-date">
                                  Reviewed 3 Days ago
                                </span>
                              </div>
                              <p className="comment-content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam. Curabitur non nulla sit
                                amet nisl tempus
                              </p>
                              <div className="comment-reply">
                                <a className="comment-btn" href="#">
                                  <i className="fas fa-reply" /> Reply
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>
                        {/* /Comment Reply List */}
                      </ul>
                      {/* /Comment Reply */}
                    </li>
                    {/* /Comment List */}
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient2.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Travis Trimble
                            </span>
                            <span className="comment-date">
                              Reviewed 4 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* /Comment List */}
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient3.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Carl Kelly</span>
                            <span className="comment-date">
                              Reviewed 5 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* /Comment List */}
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient4.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Michelle Fairfax
                            </span>
                            <span className="comment-date">
                              Reviewed 6 Days ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* /Comment List */}
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient5.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">Gina Moore</span>
                            <span className="comment-date">
                              Reviewed 1 Week ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* /Comment List */}
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient9.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Walter Roberson
                            </span>
                            <span className="comment-date">
                              Reviewed 1 Week ago
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* /Comment List */}
                    {/* Comment List */}
                    <li>
                      <div className="comment">
                        <img
                          className="avatar rounded-circle"
                          alt="User Image"
                          src="assets/img/patients/patient8.jpg"
                        />
                        <div className="comment-body">
                          <div className="meta-data">
                            <span className="comment-author">
                              Daniel Griffing
                            </span>
                            <span className="comment-date">
                              Reviewed on 1 Nov 2019
                            </span>
                            <div className="review-count rating">
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                              <i className="fas fa-star filled" />
                            </div>
                          </div>
                          <p className="comment-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation. Curabitur non nulla sit amet
                            nisl tempus
                          </p>
                          <div className="comment-reply">
                            <a className="comment-btn" href="#">
                              <i className="fas fa-reply" /> Reply
                            </a>
                            <p className="recommend-btn">
                              <span>Recommend?</span>
                              <a href="#" className="like-btn">
                                <i className="far fa-thumbs-up" /> Yes
                              </a>
                              <a href="#" className="dislike-btn">
                                <i className="far fa-thumbs-down" /> No
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* /Comment List */}
                  </ul>
                  {/* /Comment List */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </MainLayout>
  );
};
export default RateAndReviews;
