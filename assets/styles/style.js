import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  fondo: {
    backgroundColor: "white",
    borderWidth: "2",
    borderColor: "black",
    width: "100%",
    borderRadius: 10,
  },
  input: {
    height: 60,
    borderBottomWidth: 1,
    borderColor: "black",
    fontSize: 16,
    paddingLeft: 10,
    fontWeight: "400",
    width: 250,
    height: 50,
    padding: 1,
    marginBottom: 5,
  },
  buttons: {
    height: 40,
    width: 140,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "green",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    paddingHorizontal: 10,
  },
});
export { styles };
