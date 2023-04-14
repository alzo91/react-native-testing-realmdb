import { realm } from "./databases";

import { AppProvider, createRealmContext } from "@realm/react";
import { Hooks } from "./hooks";
import Screens from "./screens";

const App = () => {
  const { RealmProvider } = createRealmContext(realm);
  return (
    <>
      <AppProvider id="com.realmdb">
        <RealmProvider>
          <Hooks>
            <Screens />
          </Hooks>
        </RealmProvider>
      </AppProvider>
    </>
  );
};

export default App;
