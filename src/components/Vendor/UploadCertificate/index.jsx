import MainLayout from "../../../layouts/MainLayout"
import React, { useState } from "react";
import { FormControl, Select, TextField, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";


const UploadCertificate = () => {
    let schema = yup
    .object()
    .shape({
      liecence:  yup.mixed().required('File is required'),
      certificate: yup.string().required(),
      pharmacist: yup.string().required(),
      comdetails: yup.string().required()


    })
    .required();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

const onSubmit = (values) =>{
  console.log("Values=>",values);

}

  return (
    <MainLayout>
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
                    <div
                      className="login-header"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="h5"> Upload Details</Typography>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label><b>Liecence</b></label>
                      <div className="form-group form-focus">
                        <TextField
                          type="file"
                          {...register("liecence")}
                          error={!!errors.liecence}
                          fullWidth
                        />
                      </div>
                      <label><b>Certificate</b></label>

                      <div className="form-group form-focus">
                        <TextField
                          type="file"
                          {...register("certificate")}
                          error={!!errors.certificate}
                          fullWidth
                        />
                      </div>
                      <div className="form-group form-focus">
                        <TextField
                          type="text"
                          label="Pharmacist"
                          {...register("pharmacist")}
                          error={!!errors.pharmacist}
                          fullWidth
                        />
                      </div>

                      <div className="form-group form-focus">
                        <TextField
                          maxRows={2}
                          multiline
                          type="text"
                          label="Compnay Details"
                          {...register("comdetails")}
                          error={!!errors.comdetails}
                          fullWidth
                        />
                      </div>

                    


                      {/* <div className="text-right">
                        <a className="forgot-link" href="/forgot-password">
                          Forgot Password ?
                        </a>
                      </div> */}
                      <button
                      className="btn btn-primary btn-block btn-lg login-btn"
                        type="submit"
                      >
                      Upload
                      </button>

                      {/* <div className="text-center dont-have">
                        Don’t have an account?{" "}
                        <a href="register.html">Register</a>
                      </div> */}
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
  </MainLayout>
  );
};
export default UploadCertificate;
