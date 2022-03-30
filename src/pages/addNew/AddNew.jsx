import React from "react";
import { useState } from "react";
import styles from "./AddNew.module.scss";
import Input from "../../components/ui/input/Input";
import Button from "../../components/ui/button/Button";
import Toast from "../../components/ui/toast/Toast";
function AddNew() {
  const [isVisible, setIsVisible] = useState(true);

  const onChangeHandler = (e) => {
  };

  const forSubmitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  const toastStateHandler = () => {
    setIsVisible(false);
  };

  return (
    <div className={styles.formContainer}>
      <Toast
        message="Name and surname should contain at least 2 words"
        header="Error while adding link element"
        onClose={toastStateHandler}
        type="Error"
        isVisible={isVisible}
      />
      <form onSubmit={forSubmitHandler} className={styles.form}>
        <Input
          label="Name Surname"
          placeholder="Enter name and surname"
          onChange={onChangeHandler}
          error={null}
        />
        <Input
          label="Country"
          placeholder="Enter a country"
          onChange={onChangeHandler}
          error={null}
        />
        <Input
          label="City"
          placeholder="Enter a city"
          onChange={onChangeHandler}
          error={null}
        />
        <Input
          label="Email"
          type="email"
          placeholder="Enter a e-mail (abc@xyz.com)"
          onChange={onChangeHandler}
          error={null}
        />
        <div className={styles.button}>
          <Button
            title="Add"
            type="submit"
            style={{
              width: "138px",
              marginRight: "50px",
            }}
          />
        </div>
      </form>
    </div>
  );
}

export default AddNew;
