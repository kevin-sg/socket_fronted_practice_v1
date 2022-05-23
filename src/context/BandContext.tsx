import * as React from "react";

interface IUserContextProps {
  bandData: InitialUserState;
  setBandData: React.Dispatch<React.SetStateAction<InitialUserState>>;
}

interface IUserProviderProps {
  children: React.ReactNode;
}

interface IBandData {
  id: string;
  name: string;
  votes: number;
}

interface InitialUserState {
  isActive: boolean;
  listBands: IBandData[];
}

const initialState: InitialUserState = {
  isActive: false,
  listBands: [],
};

export const BandContext = React.createContext({} as IUserContextProps);

export function UserProdiver({ children }: IUserProviderProps) {
  const [bandData, setBandData] = React.useState(initialState as InitialUserState);

  const value = {
    bandData,
    setBandData,
  };

  return <BandContext.Provider value={value}>{children}</BandContext.Provider>;
}
