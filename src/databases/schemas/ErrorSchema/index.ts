import Realm from "realm";

import generateUUID from "../../../utils/generateUUID";
import { ErrorsModel } from "../../../models";

class ErrorSchema extends Realm.Object<ErrorsModel> {
  static schema: Realm.ObjectSchema = {
    name: "Error",
    properties: {
      uuid: { type: "string", default: generateUUID() },
      statusCode: { type: "string", default: "500" },
      message: "string",
      screen: "string?",
      wasSent: { type: "bool", default: false },
      createdAt: { type: "date", default: new Date() },
      updatedAt: { type: "date", default: new Date() },
    },
    primaryKey: "uuid",
  };
}

export default ErrorSchema;
