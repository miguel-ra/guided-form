import React from "react";
import { useForm } from "react-hook-form";
import Field from "../../components/form/Field";
import classes from "./GuidedForm.module.scss";
import fields from "./fields";

function GuidedForm() {
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
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((config) => (
          <Field
            key={config.name}
            error={errors?.[config.name]}
            control={control}
            {...config}
          />
        ))}
        <button
          type="submit"
          className={classes.button}
          disabled={!formState.isValid}
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default GuidedForm;
