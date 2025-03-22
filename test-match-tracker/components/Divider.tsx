import { View, StyleSheet } from 'react-native';
import { Text } from './Text'

export default function Divider() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.vsText}>VS</Text> 
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#0C0F12',
    paddingVertical: 8,
    justifyContent: 'space-between',
    columnGap: 10
  },
  line: {
    flex: 1, 
    height: 1,
    backgroundColor: '#1E242A', 
  },
  vsText: {
    color: '#3A3F44', 
    fontSize: 14,
    fontWeight: 600,
  },
});
