import React, { useState } from "react";
import Page from "../../components/Page";
import { Box, Typography, Button, TextField, Avatar } from "@mui/material";
import axios from "axios";
import { Formik } from "formik";
import * as Yup from "yup";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import CustomAlert from "../../components/CustomAlert";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: theme.palette.primary.light,
  },
  signupContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minWidth: "380px",
    maxWidth: "480px",
    minHeight: "520px",
    maxHeight: "600px",
    border: "1px solid #F4F5F5",
    borderRadius: "8px",
    padding: "30px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    backgroundColor: "rgba(255, 255, 255, 1)",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      padding: "20px 15px",
      margin: "8px",
    },
  },
  inputField: {
    margin: "12px 0",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },
}));

const SignupPage = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [showAlert, setShowAlert] = useState({
    isAlert: false,
    alertTitle: "",
    alertText: "",
    severity: "",
  });

  async function handleSignupSubmit(values, setSubmitting, resetForm) {
    try {
      setSubmitting(true);
      const api = "/api/v1/signup/";
      const response = await axios({
        url: api,
        method: "POST",
        data: { ...values },
        headers: {
          "X-CSRFToken": Cookies.get("csrftoken"),
        },
      });
      if (response.status === 201) {
        const { status, data } = response;
        setSubmitting(false);
        resetForm();
        console.log("success", data);
        setShowAlert((prev) => ({
          ...prev,
          isAlert: true,
          alertTitle: "Success",
          alertText: "",
          severity: "success",
        }));
      } else {
        const { status, data } = response;
        setSubmitting(false);
        setShowAlert((prev) => ({
          ...prev,
          isAlert: true,
          alertTitle: "Error",
          alertText: data,
          severity: "error",
        }));
      }
    } catch (error) {
      const { status, data } = error.response;
      setSubmitting(false);
      console.log("error", data);
      setShowAlert((prev) => ({
        ...prev,
        isAlert: true,
        alertTitle: "Error",
        alertText: data,
        severity: "error",
      }));
    }
  }

  return (
    <Page title="Signup">
      {showAlert.isAlert ? (
        <CustomAlert
          open={showAlert.isAlert}
          severity={showAlert.severity}
          alertTitle={showAlert.alertTitle}
          alertText={showAlert.alertText}
          onClose={() =>
            setShowAlert({
              isAlert: false,
              alertTitle: "",
              alertText: "",
              severity: "",
            })
          }
        />
      ) : null}
      <Box className={classes.root}>
        <Box className={classes.signupContainer}>
          <Formik
            initialValues={{
              email: "",
              password: "",
              confirmationPassword: "",
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string()
                .email("Must be an valid Email")
                .max(255)
                .required("Email is Required"),
              password: Yup.string().max(255).required("Password is Required"),
              confirmationPassword: Yup.string()
                .max(255)
                .required("Confirmation Password is Required"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              handleSignupSubmit(values, setSubmitting, resetForm);
            }}
          >
            {({ values, handleChange, handleSubmit, errors, touched }) => (
              <form autoComplete="off" onSubmit={handleSubmit}>
                <Avatar
                  src="/static/img/ihl.png"
                  variant="square"
                  alt="India Health Link"
                  sx={{
                    height: 48,
                    width: 120,
                    margin: "0 auto",
                  }}
                />
                <Typography
                  sx={{
                    textAlign: "center",
                    margin: "15px 0 20px",
                    fontSize: "24px",
                    fontWeight: 600,
                  }}
                >
                  Create an Account
                </Typography>
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  value={values.email}
                  error={errors.email && touched.email}
                  helperText={errors.email && touched.email ? errors.email : ""}
                  onChange={handleChange}
                  className={classes.inputField}
                />
                <TextField
                  name="password"
                  label="Password"
                  fullWidth
                  value={values.password}
                  error={errors.password && touched.password}
                  helperText={
                    errors.password && touched.password ? errors.password : ""
                  }
                  onChange={handleChange}
                  className={classes.inputField}
                  type="password"
                />
                <TextField
                  name="confirmationPassword"
                  label="Confirmation Password"
                  fullWidth
                  value={values.confirmationPassword}
                  error={
                    errors.confirmationPassword && touched.confirmationPassword
                  }
                  helperText={
                    errors.confirmationPassword && touched.confirmationPassword
                      ? errors.confirmationPassword
                      : ""
                  }
                  onChange={handleChange}
                  className={classes.inputField}
                  type="password"
                />
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "30px",
                  }}
                >
                  <Button
                    color="primary"
                    variant="text"
                    sx={{
                      boxShadow: "none",
                      "&:hover": {
                        boxShadow: "none",
                      },
                      paddingLeft: "0",
                    }}
                    onClick={() => navigate("/login")}
                  >
                    Have an account?{" "}
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{ borderRadius: "8px" }}
                  >
                    Create{" "}
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Box>
      </Box>
    </Page>
  );
};

export default SignupPage;
