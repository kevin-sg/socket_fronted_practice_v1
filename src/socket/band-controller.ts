import ioClient from "socket.io-client";

import { socketKeyEvents } from "@/utilities";

type TBandEventProps = { id?: string; name?: string };

interface ITBandControllerProps {
  socketState: ReturnType<typeof ioClient>;
}

class BandController {
  private socketState: ReturnType<typeof ioClient>;

  constructor({ socketState }: ITBandControllerProps) {
    this.socketState = socketState;
  }

  public countBand({ id }: TBandEventProps) {
    this.socketState.emit(socketKeyEvents.COUNT_BAND_TO_SERVER, { id });
  }

  public createBand({ name }: TBandEventProps) {
    this.socketState.emit(socketKeyEvents.CREATE_BAND_TO_SERVER, { name });
  }

  public changeNameBand({ id, name }: TBandEventProps) {
    this.socketState.emit(socketKeyEvents.CHANGE_BAND_TO_SERVER, { id, name });
  }

  public removeBand({ id }: TBandEventProps) {
    this.socketState.emit(socketKeyEvents.REMOVE_BAND_TO_SERVER, { id });
  }
}

export default BandController;
