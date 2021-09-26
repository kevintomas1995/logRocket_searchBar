import React from "react";
import { StyleSheet, Text, View, FlatList, SafeAreaView } from "react-native";
import data from "../data";

const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.details}>{details}</Text>
  </View>
);

const List = (props) => {
  const renderItem = ({ item }) => {
    if (props.searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }

    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase())) {
      return <Item name={item.name} details={item.details} />;
    }

    if (item.details.toUpperCase().includes(props.searchPhrase.toUpperCase())) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
