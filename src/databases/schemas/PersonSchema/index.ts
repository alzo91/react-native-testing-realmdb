import Realm from "realm";

import generateUUID from "../../../utils/generateUUID";
import { PersonModel } from "../../../models";

class PersonSchema extends Realm.Object<PersonModel> {
  static schema: Realm.ObjectSchema = {
    name: "Person",
    properties: {
      uuid: { type: "string", default: generateUUID() },
      name: "string",
      nickname: { type: "string", default: "nickname" },
      enabled: { type: "bool", default: false },
      createdAt: { type: "date", default: new Date() },
      updatedAt: { type: "date", default: new Date() },
    },
    primaryKey: "uuid",
  };
}

export default PersonSchema;
