import * as React from "react";

import { SocketServer } from "@/socket";
import { socketKeyEvents } from "@/utilities";
import { environmentVariables, IUseSocketCustomHook } from "@/global";

/**
 * @desc This is a socket custom hook
 *
 * @returns isConnected - socket
 */
function useSocket(): IUseSocketCustomHook {
  const socketState = React.useMemo(() => {
    return SocketServer.instance.socket;
  }, [environmentVariables.HOST_SERVER]);

  const [isConnected, setIsConnected] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsConnected(socketState.connected);
    return () => {
      isConnected && setIsConnected(socketState.connected);
    };
  }, [socketState]);

  React.useEffect(() => {
    (() => {
      socketState.on(socketKeyEvents.CONNECT, () => setIsConnected(true));
    })();
    return () => {
      socketState.off(socketKeyEvents.CONNECT);
    };
  }, [socketState]);

  React.useEffect(() => {
    (() => {
      socketState.on(socketKeyEvents.DISCONNECT, () => setIsConnected(false));
    })();
    return () => {
      socketState.off(socketKeyEvents.DISCONNECT);
    };
  }, [socketState]);

  return { isConnected, socketState };
}

export default useSocket;
