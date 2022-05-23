import * as React from "react";

import { SocketContext } from "@/context";
import type { InitialFormData, UseFormCustomHook } from "@/global/myGlobalTypes";

/**
 * @desc This is form custom hook
 *
 * @returns formData - errors - handleChange - handleSubmit
 */
function useForm(): UseFormCustomHook {
  const { bandController } = React.useContext(SocketContext);

  const [formData, setFormData] = React.useState<InitialFormData>({ name: "" });
  const [errors, setErrors] = React.useState(false);

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setErrors(false);
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function handleReset() {
    setFormData((prev) => ({ ...prev, name: "" }));
  }

  function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (Object.values(formData).includes("") || Object.values(formData).some((el) => el.length < 3)) {
      return setErrors(true);
    }

    bandController.createBand({ name: formData.name });
    handleReset();
  }

  return { formData, errors, handleChange, handleSubmit };
}

export default useForm;
