import { useForm } from "@/hooks";
import * as Commons from "@/components/Commons";

function Form(): React.ReactElement {
  const { formData, errors, handleChange, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="mb-2">
        <Commons.Input
          type="text"
          name="name"
          value={formData.name}
          className="mb-4 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
          onChange={handleChange}
          placeholder="Ej. Metalica"
        />
        <Commons.Button type="submit" text="Submit" color="blue" />
      </div>

      {errors && <Commons.Alert />}
    </form>
  );
}

export default Form;
