import ioClient from "socket.io-client";

// *******************************************************
// *              This is type Custom hooks
// *******************************************************

export interface IUseInitialBandCustomHook {
  isConnected: boolean;
  socketState: ReturnType<typeof ioClient>;
}

export interface InitialFormData {
  name: string;
}

export interface UseFormCustomHook {
  formData: InitialFormData;
  errors: boolean;
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (ev: React.FormEvent<HTMLFormElement>) => void;
}

export interface IUseSocketCustomHook {
  isConnected: boolean;
  socketState: ReturnType<typeof ioClient>;
}

// *******************************************************
// *           This is type function/methods props
// *******************************************************

export interface IBandData {
  id: string;
  name: string;
  votes: number;
}

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  type: "button" | "submit";
  color: "green" | "blue" | "red";
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: "text" | "email";
  name: string;
  value: string;
  placeholder: string;
}

export interface IHandleChangeDataProps {
  ev: React.ChangeEvent<HTMLInputElement>;
  id: string;
}
