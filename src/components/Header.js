import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/styles/style";

export default function Header() {
  return (
    <View
      style={[
        styles.fondo,
        { flex: 1, backgroundColor: "#2FA4AF", flexDirection: "row", justifyContent: "center" },
      ]}
    >
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 100,
          marginTop: 25,
          fontSize: 25,
          fontWeight: "bold",
          color: "black",
        }}
      >
        Sistema para calcular notas - Jhon Esteban Correa
      </Text>
    </View>
  );
}
