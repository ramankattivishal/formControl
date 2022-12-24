import React from "react";
import { useState, useEffect } from "react";
import "./index.css";

function FormControl() {
  const initialValues = { name:"", username: "", email: "", street:"", suite:"", city:"", zipcode:"", phone:"",
                          website:"",companyname:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setFormValues({ name:"", username: "", email: "", street:"", suite:"", city:"", zipcode:"", phone:"",
                          website:"",companyname:"" });
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
        errors.name = "Name is required!";
      }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.street) {
        errors.street = "Street is required!";
    }
    if (!values.suite) {
        errors.suite = "Suite is required!";
    }
    if (!values.city) {
        errors.city = "City is required!";
    }
    if (!values.zipcode) {
        errors.zipcode = "Zipcode is required!";
    }
    if (!values.phone) {
      errors.phone = "Phone is required";
    } else if (values.phone.length === 10) {
      errors.phone = "Phone must be 10 characters";
    } 
    if (!values.website) {
        errors.website = "Website is required!";
    }
    if (!values.companyname) {
        errors.companyname = "Company name is required!";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
        <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={formValues.name}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.name}</p>
          <div className="field">
            <label>Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <label>Street</label>
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={formValues.street}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.street}</p>
          <div className="field">
            <label>Suite</label>
            <input
              type="text"
              name="suite"
              placeholder="Suite"
              value={formValues.suite}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.suite}</p>
          <div className="field">
            <label>City</label>
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.city}</p>
          <div className="field">
            <label>Zipcode</label>
            <input
              type="text"
              name="zipcode"
              placeholder="Zipcode"
              value={formValues.zipcode}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.zipcode}</p>
          <div className="field">
            <label>Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.phone}</p>
          <div className="field">
            <label>Website</label>
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formValues.website}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.website}</p>
          <div className="field">
            <label>Company Name</label>
            <input
              type="text"
              name="companyname"
              placeholder="Company Name"
              value={formValues.companyname}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.companyname}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormControl;