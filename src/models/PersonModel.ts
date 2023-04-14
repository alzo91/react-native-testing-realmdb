import MetaDataModel from "./MetaDataModel";

export default interface PersonModel extends MetaDataModel {
  name: string;
  nickname?: string;
  enabled?: boolean;
}
