import React from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  color: "white",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const SignInDoctor = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useNavigate();
  const {
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log("erros-> ", errors);
  const onSubmit = (values) => {
    console.log("values-> ", values);
    reset();
    history("/otp-verification");
  };
  return (
    <div>
      <div className="main-wrapper">
        <header className="header">
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <a id="mobile_btn" href="javascript:void(0);">
                <span className="bar-icon">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </a>
              <NavLink to={"/"} className="navbar-brand logo">
                <img
                  src="assets/img/logo.png"
                  className="img-fluid"
                  alt="Logo"
                />
              </NavLink>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <NavLink to="/" className="menu-logo">
                  <img
                    src="assets/img/logo.png"
                    className="img-fluid"
                    alt="Logo"
                  />
                </NavLink>
                <a
                  id="menu_close"
                  className="menu-close"
                  href="javascript:void(0);"
                >
                  <i className="fas fa-times"></i>
                </a>
              </div>
              <ul className="main-nav">
                <li className="active">
                  <NavLink to={"/"}>Home</NavLink>
                </li>

                <li>
                  <NavLink to="/admin" target="_blank">
                    Admin
                  </NavLink>
                </li>
                <li className="login-link">
                  <NavLink to="/login">Logout</NavLink>
                  <a>aaaa</a>
                </li>
              </ul>
            </div>
            <Button onClick={handleOpen}> </Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
              style={{ marginLeft: "30rem", marginBottom: "300px" }}
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  Notifications
                </Typography>
                <Typography
                  id="modal-modal-description"
                  sx={{ mt: 2, color: "black" }}
                >
                  <div className="media">
                    <span className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/img/doctors/doctor-thumb-01.jpg"
                      />
                    </span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">Dr. Ruby Perrin</span>{" "}
                        Schedule{" "}
                        <span className="noti-title">her appointment</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">4 mins ago</span>
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <span className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/img/patients/patient2.jpg"
                      />
                    </span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">Travis Trimble</span> sent
                        a amount of $210 for his{" "}
                        <span className="noti-title">appointment</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">8 mins ago</span>
                      </p>
                    </div>
                  </div>
                  <div className="media">
                    <span className="avatar avatar-sm">
                      <img
                        className="avatar-img rounded-circle"
                        alt="User Image"
                        src="assets/img/patients/patient3.jpg"
                      />
                    </span>
                    <div className="media-body">
                      <p className="noti-details">
                        <span className="noti-title">Carl Kelly</span> send a
                        message{" "}
                        <span className="noti-title"> to his doctor</span>
                      </p>
                      <p className="noti-time">
                        <span className="notification-time">12 mins ago</span>
                      </p>
                    </div>
                  </div>

                  <div className="topnav-dropdown-footer">
                    <a href="#">View all Notifications</a>
                    <div className="topnav-dropdown-header">
                      {/* <span className="notification-title">Notifications</span> */}
                      <a href="javascript:void(0)" className="clear-noti">
                        {" "}
                        Clear All{" "}
                      </a>
                    </div>
                  </div>
                </Typography>
              </Box>
            </Modal>

            <ul className="nav header-navbar-rht">
              <li className="nav-item contact-item">
                <div className="header-contact-img">
                  <i className="far fa-hospital"></i>
                </div>
                <div className="header-contact-detail">
                  <p className="contact-header">Contact</p>
                  <p className="contact-info-header"> +1 315 369 5943</p>
                </div>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link header-login"
                  to={"/doctor-registration"}
                >
                  Signup{" "}
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="main-wrapper">
        {/* Page Content */}
        <div className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 offset-md-2">
                {/* Login Tab Content */}
                <div className="account-content">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7 col-lg-6 login-left">
                      <img
                        src="assets/img/login-banner.png"
                        className="img-fluid"
                        alt="Doccure Login"
                      />
                    </div>
                    <div className="col-md-12 col-lg-6 login-right">
                      <div className="login-header">
                        <Typography variant="h5">Sign In Doccure</Typography>
                      </div>
                      <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group form-focus">
                          <TextField
                            type="email/mobile no"
                            label="Email / Mobile no"
                            fullWidth
                            required
                          />
                        </div>

                        <div className="form-group form-focus">
                          <TextField
                            type="password"
                            label="Password"
                            fullWidth
                            required
                          />
                        </div>

                        <div className="text-right">
                          <a className="forgot-link" href="/forgot-password">
                            Forgot Password ?
                          </a>
                        </div>

                        <button
                          className="btn btn-primary btn-block btn-lg login-btn"
                          type="submit"
                        >
                          Sent OTP
                        </button>

                        <div className="text-center dont-have">
                          Don’t have an account?{" "}
                          <NavLink to="/doctor-registration">Register</NavLink>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                {/* /Login Tab Content */}
              </div>
            </div>
          </div>
        </div>
        {/* /Page Content */}
      </div>
      <footer className="footer">
        <div className="footer-top">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-about">
                  <div className="footer-logo">
                    <img src="assets/img/footer-logo.png" alt="logo" />
                  </div>
                  <div className="footer-about-content">
                    <p>
                      The proposed project is a smart appointment booking system
                      that provides patients or any user an easy way of booking
                      a doctor’s appointment online. This is a web based
                      application that overcomes the issue of managing and
                      booking appointments according to user’s choice or
                      demands.
                    </p>
                    <div className="social-icon">
                      <ul>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-facebook-f"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-twitter"></i>{" "}
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-instagram"></i>
                          </a>
                        </li>
                        <li>
                          <a href="#" target="_blank">
                            <i className="fab fa-dribbble"></i>{" "}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Patients</h2>
                  <ul>
                    <li>
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i> Search for
                        Doctors
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/sign-in-doctor"}>
                        <i className="fas fa-angle-double-right"></i> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/doctor-registration"}>
                        <i className="fas fa-angle-double-right"></i> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i> Booking
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="#">
                        <i className="fas fa-angle-double-right"></i> Patient
                        Dashboard
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-menu">
                  <h2 className="footer-title">For Doctors</h2>
                  <ul>
                    <li>
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i>{" "}
                        Appointments
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"#"}>
                        <i className="fas fa-angle-double-right"></i> Chat
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/sign-in-doctor"}>
                        <i className="fas fa-angle-double-right"></i> Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to={"/doctor-registration"}>
                        <i className="fas fa-angle-double-right"></i> Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/sign-in-doctor">
                        <i className="fas fa-angle-double-right"></i> Sign up
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="footer-widget footer-contact">
                  <h2 className="footer-title">Contact Us</h2>
                  <div className="footer-contact-info">
                    <div className="footer-address">
                      <span>
                        <i className="fas fa-map-marker-alt"></i>
                      </span>
                      <p>
                        {" "}
                        3556 Beech Street, San Francisco,
                        <br /> California, CA 94108{" "}
                      </p>
                    </div>
                    <p>
                      <i className="fas fa-phone-alt"></i>
                      +1 315 369 5943
                    </p>
                    <p className="mb-0">
                      <i className="fas fa-envelope"></i>
                      doccure@example.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container-fluid">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-text">
                    <p className="mb-0">
                      <a href="templateshub.net">Templates Hub</a>
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className="copyright-menu">
                    <ul className="policy-menu">
                      <li>
                        <NavLink to="/term-and-condition">
                          Terms and Conditions
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/privacy-policy">Policy</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default SignInDoctor;
