import React, { useEffect, useState } from "react";

import { StyleSheet, Text, TextInput, View, Button } from "react-native";

import PersonRepository from "../../databases/repositories/PersonRepository";
import generateUUID from "../../utils/generateUUID";
import { useRenderScreen } from "../../hooks/RenderScreen";

const LoginScreen = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  // const [errors, setErros] = useState<ErrosModel[]>([]);
  const { setCurrentScreen } = useRenderScreen();

  const handleLogin = () => {
    let message = `Name: ${name}. Password: ${nickname}`;
    console.log(message);
    PersonRepository.create({ name, nickname, uuid: generateUUID() });
    console.log("handleLogin ended");
    setCurrentScreen("home");
  };

  function fetchPerson() {
    setLoading(true);
    const people = PersonRepository.getAll();
    if (people.length > 0) {
      setCurrentScreen("home");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchPerson();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Local Todo</Text>
      <TextInput
        style={styles.input}
        placeholder="name"
        onChangeText={setName}
        value={name}
      />
      <TextInput
        style={styles.input}
        placeholder="nickname"
        onChangeText={setNickname}
        value={nickname}
      />

      {!loading && <Button title="Login" onPress={handleLogin} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 50,
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingLeft: 10,
  },
});

export default LoginScreen;
