import * as React from "react";

import * as Context from "@/context";
import { socketKeyEvents as socketKey } from "@/utilities";
import type { IUseInitialBandCustomHook } from "@/global/myGlobalTypes";

function useInitialBand(): IUseInitialBandCustomHook {
  const { setBandData } = React.useContext(Context.BandContext);
  const { isConnected, socketState } = React.useContext(Context.SocketContext);

  React.useEffect(() => {
    (() => {
      socketState.on(socketKey.SEND_BANDS_FORM_SERVER, (bands) => {
        setBandData((prev) => ({ ...prev, listBands: [...bands] }));
      });
    })();
    return () => {
      socketState.off(socketKey.SEND_BANDS_FORM_SERVER);
    };
  }, [socketState]);

  return { isConnected, socketState };
}

export default useInitialBand;
