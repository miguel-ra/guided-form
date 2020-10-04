import React from "react";
import { useForm } from "react-hook-form";
import Field from "../../components/form/Field";
import classes from "./CheckoutForm.module.scss";
import fields from "./fields";

function CheckoutForm() {
  const { handleSubmit, errors, formState, reset, control } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    console.log("Digit:", data.digit?.join(""));
    const ref = control.fieldsRef.current["digit[0]"]?.ref;
    if (ref) {
      ref.focus();
    }
    reset();
  };

  return (
    <div className={classes.container}>
      <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
        {fields.map((config) => (
          <Field
            key={config.name}
            error={errors?.[config.name]}
            control={control}
            {...config}
          />
        ))}
        <br />
        <small>
          Try to copy and paste over the fields{" "}
          <span role="img" aria-label="magic">
            ✨
          </span>
        </small>
        <small>
          You can use arrows to move between fields{" "}
          <span role="img" aria-label="magic">
            💎
          </span>
        </small>
        <small>
          Also use `backspace` and `delete` keys{" "}
          <span role="img" aria-label="genius">
            🔮
          </span>
        </small>
        <button
          type="submit"
          className={classes.button}
          disabled={!formState.isValid}
        >
          Pay
        </button>
      </form>
    </div>
  );
}

export default CheckoutForm;