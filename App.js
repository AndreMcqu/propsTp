import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import json from './tp.json';
import Card from './card';


export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        {json.map((data) => (
          <View style={styles.element}>
            <Card uriImg={{ uri: (data.img) }} titleImg={data.title} docImg={data.desc} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 4,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 5,
    justifyContent: 'space-between',
    marginTop: 40,
  },
});