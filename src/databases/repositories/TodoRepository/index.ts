import { TodoModel } from "../../../models";
import { realm } from "../../configuration/database";
import { TodoSchema } from "../../schemas";

function create(data: TodoModel) {
  try {
    realm.write(() => {
      realm.create(
        TodoSchema.schema.name,
        { ...data },
        Realm.UpdateMode.Modified
      );
    });
  } catch (err) {
    console.error(err);
    throw new Error("PersonRepository has an error on create");
  }
}

export default {
  create,
};
