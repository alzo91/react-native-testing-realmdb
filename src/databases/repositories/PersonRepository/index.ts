import { PersonModel } from "../../../models";
import { realm } from "../../configuration/database";
import { PersonSchema } from "../../schemas";

function create(person: PersonModel) {
  try {
    realm.write(() => {
      realm.create(
        PersonSchema.schema.name,
        { ...person, enabled: true },
        Realm.UpdateMode.Modified
      );
    });
  } catch (err) {
    console.error(err);
    throw new Error("PersonRepository has an error on create");
  }
}

function getAll() {
  try {
    const people = realm
      .objects<PersonModel[]>(PersonSchema.schema.name)
      .filtered(`enabled == true`)
      .sorted("createdAt", true)
      .toJSON() as unknown as PersonModel[];
    return people;
  } catch (err) {
    console.error(err);
    throw new Error("PersonRepository has an error on getAll");
  }
}
export default { create, getAll };
