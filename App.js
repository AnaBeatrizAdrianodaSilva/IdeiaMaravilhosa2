import { StatusBar } from "expo-status-bar";
import { collection, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { db } from "./src/config/firebase";

export default function App() {
  const [produtos, setProdutos] = useState([]);

  async function buscaProduto() {
    const produtosRef = collection(db, "produto");
    const produtosSnapshot = await getDoc(produtosRef);

    const produtosList = produtosSnapshot.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });
    setProdutos(produtosList[0]);
    console.log(produtosList);
  }

  useEffect(() => {
    buscaProduto();
  }, []);

  return (
    <View style={styles.container}>
      <Text>AAAAAAAAA</Text>
      <Text>Nome do produto {produtos.nome} </Text>
      <Text>Descrição do produto {produtos.descricao} </Text>
      <Text>Preço do produto {produtos.preco} </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
