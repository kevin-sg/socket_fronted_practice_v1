import type { IButtonProps } from "@/global/myGlobalTypes";

function Button({ type, text, color, ...props }: IButtonProps): React.ReactElement {
  return (
    <>
      {color === "blue" && (
        <button
          type={type}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm block w-full px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          {...props}
        >
          {text}
        </button>
      )}
      {color === "green" && (
        <button
          type={type}
          className="w-10 text-center text-sm text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg sm:w-auto py-2 px-3 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          {...props}
        >
          {text}
        </button>
      )}
      {color === "red" && (
        <button
          type={type}
          className="text-center font-medium text-red-600 dark:text-red-500 hover:underline"
          {...props}
        >
          {text}
        </button>
      )}
    </>
  );
}

export default Button;
