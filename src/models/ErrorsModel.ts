import MetaDataModel from "./MetaDataModel";

export default interface ErrosModel extends MetaDataModel {
  statusCode?: string;
  message: string;
  screen?: string;
  wasSent?: boolean;
}
