import Realm from "realm";

import generateUUID from "../../../utils/generateUUID";
import { TodoModel } from "../../../models";

class TodoSchema extends Realm.Object<TodoModel> {
  static schema: Realm.ObjectSchema = {
    name: "Todo",
    properties: {
      uuid: { type: "string", default: generateUUID() },
      description: "string",
      status: { type: "int?", default: 0 },
      done: "date?",
      owners: {
        type: "list",
        objectType: "Person",
        default: [],
      },
      createdAt: { type: "date", default: new Date() },
      updatedAt: { type: "date", default: new Date() },
    },
    primaryKey: "uuid",
  };
}

export default TodoSchema;
