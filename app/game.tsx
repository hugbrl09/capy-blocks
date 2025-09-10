import { View, Text, StyleSheet } from 'react-native';
export default function Game() {
  return <View style={styles.c}><Text style={{ fontSize: 18 }}>Aqui começa o jogo…</Text></View>;
}
const styles = StyleSheet.create({ c: { flex: 1, alignItems: 'center', justifyContent: 'center' }});
