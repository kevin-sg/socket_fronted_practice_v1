import { ISocketKeyEvents } from "@/global";

export const socketKeyEvents: ISocketKeyEvents = {
  CONNECT: "connect",
  DISCONNECT: "disconnect",

  COUNT_BAND_TO_SERVER: "count_band_to_server",
  CREATE_BAND_TO_SERVER: "create_band_to_server",
  CHANGE_BAND_TO_SERVER: "change_band_to_server",
  REMOVE_BAND_TO_SERVER: "remove_band_to_server",

  SEND_BANDS_FORM_SERVER: "send_bands_from_server",
};
