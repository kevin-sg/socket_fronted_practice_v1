import type { InputProps } from "@/global/myGlobalTypes";

function Input({ type, name, value, placeholder = "", ...props }: InputProps): React.ReactElement {
  return (
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      placeholder={placeholder}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
      {...props}
    />
  );
}

export default Input;
