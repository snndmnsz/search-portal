import React from "react";
import { useState } from "react";
import styles from "./AddNew.module.scss";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import Toast from "../../components/ui/toast/Toast";
import { addNewElement } from "../../api/searchApi";
import { useNavigate } from "react-router-dom";
function AddNew() {
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    isVisible: false,
    header: "",
    message: "",
    type: "",
  });

  const [inputs, setInputs] = useState({
    name: {
      value: "",
      error: null,
      isValid: false,
    },
    country: {
      value: "",
      error: null,
      isValid: false,
    },
    company: {
      value: "",
      error: null,
      isValid: false,
    },
    city: {
      value: "",
      error: null,
      isValid: false,
    },
    email: {
      value: "",
      error: null,
      isValid: false,
    },
  });

  const onChangeHandler = (type, text) => {
    if (type === "name") {
      const name = { ...inputs.name };
      name.value = text;
      name.error =
        text.length < 4 || text.length > 60
          ? "Name must be between 4 and 60 characters"
          : null;
      name.isValid = name.error === null ? true : false;
      setInputs({ ...inputs, name });
    }
    if (type === "country") {
      const country = { ...inputs.country };
      country.value = text;
      country.error =
        text.length < 2 || text.length > 40
          ? "Country must be between 2 and 40 characters"
          : null;
      country.isValid = country.error === null ? true : false;
      setInputs({ ...inputs, country });
    }
    if (type === "company") {
      const company = { ...inputs.company };
      company.value = text;
      company.error =
        text.length < 2 || text.length > 40
          ? "Company must be between 2 and 40 characters"
          : null;
      company.isValid = company.error === null ? true : false;
      setInputs({ ...inputs, company });
    }
    if (type === "city") {
      const city = { ...inputs.city };
      city.value = text;
      city.error =
        text.length < 2 || text.length > 40
          ? "City must be between 2 and 40 characters"
          : null;
      city.isValid = city.error === null ? true : false;
      setInputs({ ...inputs, city });
    }
    if (type === "email") {
      const email = { ...inputs.email };
      email.value = text;
      email.error = text.includes("@") ? null : "Email must be valid";
      email.isValid = email.error === null ? true : false;
      setInputs({ ...inputs, email });
    }
  };

  const forSubmitHandler = (e) => {
    e.preventDefault();
    const keys = Object.keys(inputs);
    const errors = keys.filter((key) => inputs[key].isValid === false);
    if (errors.length > 0) {
      setToast({
        isVisible: true,
        header: "Error while adding new Element",
        message: "Please fill all fields correctly",
        type: "error",
      });
      setTimeout(() => {
        setToast({
          isVisible: false,
          header: "",
          message: "",
          type: "",
        });
      }, 1500);
    } else {
      const event = new Date();
      const data = {
        id: Math.floor(Math.random() * 1000000).toString(),
        date:
          event.getMonth() +
          1 +
          "/" +
          event.getDate() +
          "/" +
          event.getFullYear(),
        fullName: inputs.name.value,
        country: inputs.country.value,
        company: inputs.company.value,
        city: inputs.city.value,
        email: inputs.email.value,
      };
      addNewElement(data).then((res) => {
        // console.log(res);
      });
      navigate("/");
    }
  };

  const toastStateHandler = () => {
    setToast((prevState) => {
      return {
        ...prevState,
        isVisible: false,
      };
    });
  };

  return (
    <div className={styles.formContainer}>
      <Toast
        message={toast.message}
        header={toast.header}
        onClose={toastStateHandler}
        type={toast.type}
        isVisible={toast.isVisible}
      />
      <form onSubmit={forSubmitHandler} className={styles.form}>
        <Input
          label="Name Surname"
          placeholder="Enter name and surname"
          onChange={(text) => {
            onChangeHandler("name", text.target.value);
          }}
          error={inputs.name.error}
        />
        <Input
          label="Country"
          placeholder="Enter a country"
          onChange={(text) => {
            onChangeHandler("country", text.target.value);
          }}
          error={inputs.country.error}
        />
        <Input
          label="City"
          placeholder="Enter a city"
          onChange={(text) => {
            onChangeHandler("city", text.target.value);
          }}
          error={inputs.city.error}
        />
        <Input
          label="Company"
          placeholder="Enter a company"
          onChange={(text) => {
            onChangeHandler("company", text.target.value);
          }}
          error={inputs.company.error}
        />
        <Input
          label="Email"
          type="text"
          placeholder="Enter a e-mail (abc@xyz.com)"
          onChange={(text) => {
            onChangeHandler("email", text.target.value);
          }}
          error={inputs.email.error}
        />
        <div className={styles.button}>
          <Button
            title="Add"
            type="submit"
            style={{
              width: "138px",
              marginRight: "50px",
            }}
            disabled={
              !(
                inputs.name.value &&
                inputs.country.value &&
                inputs.city.value &&
                inputs.company.value &&
                inputs.email.value
              )
            }
          />
        </div>
      </form>
    </div>
  );
}

export default AddNew;
