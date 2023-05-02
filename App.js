import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./assets/styles/style";
import { TextInput } from "react-native";
import Header from "./src/components/Header";

export default function App() {
  const [resultData, setResultData] = useState([]);
  const [identificacion, setIdentificacion] = useState("");
  const [nombres, setNombres] = useState("");
  const [definitiva, setDefinitiva] = useState("");
  const [observacion, setObservacion] = useState(null);
  const [asignatura, setAsignatura] = useState("");
  const [nota1, setNota1] = useState("");
  const [nota2, setNota2] = useState("");
  const [nota3, setNota3] = useState("");
  const [searchId, setSearchId] = useState("");

  const handleCalculate = () => {
    if (
      !identificacion ||
      !nombres ||
      !asignatura ||
      isNaN(parseFloat(nota1)) ||
      parseFloat(nota1) < 0 ||
      parseFloat(nota1) > 5 ||
      isNaN(parseFloat(nota2)) ||
      parseFloat(nota2) < 0 ||
      parseFloat(nota2) > 5 ||
      isNaN(parseFloat(nota3)) ||
      parseFloat(nota3) < 0 ||
      parseFloat(nota3) > 5
    ) {
      alert(
        "Los valores son requeridos o las notas están fuera de rango (deben estar entre 0 y 5)"
      );
      return;
    }

    const notaFinal =
      parseFloat(nota1) * 0.3 +
      parseFloat(nota2) * 0.35 +
      parseFloat(nota3) * 0.35;

    const observacion =
      notaFinal >= 3
        ? "USTED APRUEBA"
        : notaFinal >= 2 && notaFinal < 2.94
        ? "USTED PUEDE HABILITAR"
        : "USTED HA REPRUEBADO";

    setDefinitiva(notaFinal.toFixed(2));
    setObservacion(observacion);

    const newResult = {
      identificacion: identificacion,
      nombres: nombres,
      asignatura: asignatura,
      notaMomento1: nota1,
      notaMomento2: nota2,
      notaMomento3: nota3,
      definitiva: notaFinal.toFixed(2),
      observacion: observacion,
    };

    setResultData([...resultData, newResult]);
  };

  const handleClear = () => {
    setIdentificacion("");
    setNombres("");
    setAsignatura("");
    setNota1("");
    setNota2("");
    setNota3("");
    setDefinitiva("");
    setObservacion("");
    setSearchId("");
  };

  const handleSearch = () => {
    const result = resultData.find((data) => data.identificacion === searchId);
    if (result) {
      setIdentificacion(result.identificacion);
      setNombres(result.nombres);
      setAsignatura(result.asignatura);
      setNota1(result.notaMomento1);
      setNota2(result.notaMomento2);
      setNota3(result.notaMomento3);
      setDefinitiva(result.definitiva);
      setObservacion(result.observacion);
    } else {
      alert(`No se encontraron resultados para la identificación ${searchId}`);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View
        style={[
          styles.fondo,
          { flex: 10, alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Text
          style={{
            textAlign: "center",
            marginTop: 10,
            marginBottom: 20,
            fontSize: 20,
            fontWeight: "bold",
            color: "grey",
          }}
        ></Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          placeholder="Identificación"
          onChangeText={(value) => {
            if (/^\d{0,10}$/.test(value)) {
              setIdentificacion(value);
            }
          }}
          value={identificacion}
          maxLength={10}
          required={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombres"
          onChangeText={(value) => {
            if (/^[a-zA-Z\s]*$/.test(value)) {
              setNombres(value);
            }
          }}
          value={nombres}
          required={true}
        />

        <TextInput
          style={styles.input}
          placeholder="Asignatura"
          onChangeText={(value) => setAsignatura(value)}
          value={asignatura}
          required={true}
        />
        <TextInput
          keyboardType="numeric"
          style={styles.input}
          placeholder="Nota - 1 (30%)"
          onChangeText={(value) => setNota1(value)}
          value={nota1}
          required={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Nota - 2 (35%)"
          onChangeText={(value) => setNota2(value)}
          value={nota2}
          required={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Nota - 3 (35%)"
          onChangeText={(value) => setNota3(value)}
          value={nota3}
          required={true}
        />

        <Text style={{ marginTop: 25,marginBottom: 20, fontWeight: "bold" }}>Definitiva</Text>
        <Text>{definitiva}</Text>
        <Text style={{ marginTop: 20, fontWeight: "bold" }}>Observación</Text>
        <Text>{observacion}</Text>

        <View style={{ flexDirection: "row", marginTop: 30 }}>
          <TouchableOpacity
            style={[
              styles.buttons,
              { backgroundColor: "#23D22B", fontWeight: "500" },
            ]}
            onPress={() => handleCalculate()}
          >
            <Text>Calcular - Guardar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttons, { backgroundColor: "#BFC2C2" }]}
            onPress={() => handleClear()}
          >
            <Text>Limpiar</Text>
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.fondo,
            { flex: 10, alignItems: "center", justifyContent: "center" },
          ]}
        >
          <Text
            style={{
              textAlign: "center",
              marginTop: 10,
              marginBottom: -10,
              fontSize: 20,
              fontWeight: "bold",
              color: "grey",
            }}
          ></Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            placeholder="Buscar por identificación"
            onChangeText={(value) => setSearchId(value)}
            value={searchId}
          />
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <TouchableOpacity
              style={[styles.buttons, { backgroundColor: "#6AFFFD" }]}
              onPress={() => handleSearch()}
            >
              <Text>Buscar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
