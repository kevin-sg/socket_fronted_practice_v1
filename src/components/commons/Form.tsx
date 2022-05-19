import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import ioClient from "socket.io-client";

import { environmentVariables } from "@/utilities";
import { UserContext } from "@/context";

interface ListMessage {
  addressee: string;
  message: string;
}

const socket = ioClient(environmentVariables.HOST_SERVER);

function Form(): React.ReactElement {
  const { setUserData } = useContext(UserContext);
  const [formData, setFormData] = useState({ addressee: "", message: "" });

  const [isConnected, setIsConnected] = useState<boolean>(socket.connected);

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({ ...prev, [target.name]: target.value }));
  }

  function handleReset() {
    setFormData((prev) => ({ ...prev, message: "", addressee: "" }));
  }

  function handleSubmit(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    if (Object.values(formData).includes("")) return;

    // console.log("message: ", formData);
    socket.emit("message-to-server", formData);
    handleReset();
  }

  useEffect(() => {
    (() => {
      socket.on("connect", () => setIsConnected(true));
      socket.on("disconnect", () => setIsConnected(false));
      socket.on("message-from-server", (data: ListMessage) => {
        console.log("message-from-server: ", data);
        setUserData((prev) => ({
          ...prev,
          isActive: isConnected,
          listMessage: [...prev.listMessage, data],
        }));
      });
    })();

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("message-from-server");
    };
  }, []);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className="mb-6">
        <label htmlFor="addressee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Addressee
        </label>
        <input
          type="text"
          id="addressee"
          name="addressee"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
          placeholder="Ej. Mr.Blich"
          onChange={handleChange}
          value={formData.addressee}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
          Your message
        </label>
        <input
          type="text"
          id="message"
          name="message"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"
          placeholder="Ej. My message"
          onChange={handleChange}
          value={formData.message}
        />
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
