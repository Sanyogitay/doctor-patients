import { NavLink } from "react-router-dom"
import MainLayout from "../../../layouts/MainLayout"


const ConfirmBooking = () =>{
    return(
        <MainLayout>
        <div className="content success-page-cont">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              {/* Success Card */}
              <div className="card success-card">
                <div className="card-body">
                  <div className="success-cont">
                    <i className="fas fa-check" />
                    <h3> Confirm Booking</h3>
                    <p>
                    Temozolomide by  <strong> Darren Elder</strong>
                      <br /> on <strong>12 Nov 2019 5:00PM to 6:00PM</strong>
                    </p>
                    <NavLink
                      to="/invoice-view"
                      className="btn btn-primary view-inv-btn"
                    >
                      View Invoice
                    </NavLink>
                  </div>
                </div>
              </div>
              {/* /Success Card */}
            </div>
          </div>
        </div>
      </div>
      </MainLayout>
       
    )

}
export default ConfirmBooking