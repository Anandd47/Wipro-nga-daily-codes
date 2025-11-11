import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function SimpleForm() {
  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} style={{ width: "300px", margin: "20px auto" }}>
      <h2>Registration Form</h2>
      
      <div>
        <label>Name: </label>
        <input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          style={{ width: "100%", marginBottom: "8px" }}
        />
        {formik.errors.name && <p style={{ color: "red" }}>{formik.errors.name}</p>}
      </div>

      <div>
        <label>Email: </label>
        <input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          style={{ width: "100%", marginBottom: "8px" }}
        />
        {formik.errors.email && <p style={{ color: "red" }}>{formik.errors.email}</p>}
      </div>

      <button type="submit" style={{ width: "100%", padding: "6px 0" }}>
        Submit
      </button>
    </form>
  );
}

export default SimpleForm;
