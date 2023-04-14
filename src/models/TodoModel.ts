import MetaDataModel from "./MetaDataModel";
import PersonModel from "./PersonModel";

export default interface TodoModel extends MetaDataModel {
  description: string;
  status: number;
  done?: Date | null;
  owners: PersonModel[];
}
