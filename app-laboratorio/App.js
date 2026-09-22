import { StyleSheet, Text, View } from 'react-native';

const eu = {
  nome: "Gaby",
  idade: 17,
  cidade: "Cascavel",
  nota1: 8,
  nota2: 9
};

function calcularMedia(pessoa) {
  return (pessoa.nota1 + pessoa.nota2) / 2;
}

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{eu.nome}</Text>
      <Text>{eu.idade}</Text>
      <Text>{eu.cidade}</Text>
      <Text>Média: {calcularMedia(eu)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
