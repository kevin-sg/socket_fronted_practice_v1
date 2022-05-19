import * as React from "react";

interface UserContextProps {
  userData: InitialUserState;
  setUserData: React.Dispatch<React.SetStateAction<InitialUserState>>;
}

interface UserProviderProps {
  children: React.ReactNode;
}

interface ListMessage {
  addressee: string;
  message: string;
}

interface InitialUserState {
  isActive: boolean;
  listMessage: ListMessage[];
}

const initialState: InitialUserState = {
  isActive: false,
  listMessage: [],
};

export const UserContext = React.createContext({} as UserContextProps);

export function UserProdiver({ children }: UserProviderProps) {
  const [userData, setUserData] = React.useState(initialState as InitialUserState);

  const value = {
    userData,
    setUserData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
