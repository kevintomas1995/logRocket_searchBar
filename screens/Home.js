import React, { useState } from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

import List from "../components/List";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);

  console.log(clicked)

  return (
    <SafeAreaView style={styles.root}>
      {!clicked && <Text style={styles.section}>Programming Languages</Text>}
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      <List searchPhrase={searchPhrase} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 25,
    fontWeight: "bold",
  },
});
