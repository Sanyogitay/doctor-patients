import { useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom"
import MainLayout from "../../../layouts/MainLayout"

const VendorRegistration = () =>{
    const{register,handleSubmit} = useForm({})
    const history = useNavigate()
    const onSubit = () =>{
        history('/upload-certificate')
    }
    return(
        <MainLayout>
        <div className="account-content">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7 col-lg-6 login-left">
              <img
                src="assets/img/login-banner.png"
                className="img-fluid"
                alt="Doccure Register"
              />
            </div>
            <div className="col-md-12 col-lg-6 login-right">
              <div className="login-header">
                <h3>
                 Vendor Registration{" "}
                </h3>
              </div>
    
              <form onSubmit={handleSubmit(onSubit)}>
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating"      
                   {...register("name", {
                    required: {
                      value: true,
                      message: "name is required",
                    },
                  })}/>
                  <label className="focus-label">Name</label>
                </div>
                <div className="form-group form-focus">
                <input type="text" className="form-control floating" 
                {...register("email", {
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                />
                <label className="focus-label">Email</label>
              </div>
                <div className="form-group form-focus">
                  <input type="text" className="form-control floating" 
                  {...register("mobnumber", {
                    required: {
                      value: true,
                      message: " Mobile Number is required",
                    },
                  })}
                  />
                  <label className="focus-label">Mobile Number</label>
                </div>
                <div className="form-group form-focus">
                  <input type="password" className="form-control floating"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is required",
                    },
                  })} 
                  />
                  <label className="focus-label">Create Password</label>
                </div>
                <div className="text-right">
                  <NavLink className="forgot-link" to="/login-vendor">
                    Already have an account?
                  </NavLink>
                </div>
                <button
                  className="btn btn-primary btn-block btn-lg login-btn"
                  type="submit"
               
                >
                  Signup
                </button>
                <div className="login-or">
                  <span className="or-line"></span>
                  <span className="span-or">or</span>
                </div>
                <div className="row form-row social-login">
                  <div className="col-6">
                    <a href="#" className="btn btn-facebook btn-block">
                      <i className="fab fa-facebook-f mr-1"></i> Login
                    </a>
                  </div>
                  <div className="col-6">
                    <a href="#" className="btn btn-google btn-block">
                      <i className="fab fa-google mr-1"></i> Login
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </MainLayout>
    )
}
export default VendorRegistration