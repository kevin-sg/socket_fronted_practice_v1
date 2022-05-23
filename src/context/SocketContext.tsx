import ioClient from "socket.io-client";
import * as React from "react";

import { useSocket } from "@/hooks";
import { BandController } from "@/socket";

interface ISocketContextProps {
  isConnected: boolean;
  bandController: BandController;
  socketState: ReturnType<typeof ioClient>;
}

interface ISocketProviderProps {
  children: React.ReactNode;
}

export const SocketContext = React.createContext({} as ISocketContextProps);

export function SocketProvider({ children }: ISocketProviderProps) {
  const { isConnected, socketState } = useSocket();

  const bandController = new BandController({ socketState });

  const value = { isConnected, bandController, socketState };

  return <SocketContext.Provider value={value}>{children}</SocketContext.Provider>;
}
