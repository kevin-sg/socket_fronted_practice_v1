import { environmentVariables } from "@/global";
import ioClient from "socket.io-client";

class SocketServer {
  public socket: ReturnType<typeof ioClient>;

  private static _intance: SocketServer;

  private constructor() {
    this.socket = ioClient(environmentVariables.HOST_SERVER);
  }

  public static get instance() {
    return this._intance || (this._intance = new this());
  }
}

export default SocketServer;
