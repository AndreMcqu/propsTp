import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const Card = (props) => {
  const { uriImg, titleImg, docImg } = props;
  return (
    <View style={styles.container}>
      <View style={styles.picbox}>
        <Image source={uriImg} style={styles.pic} />
      </View>
      <View style={styles.docbox}>
        <Text style={styles.titles}>{titleImg}</Text>
        <Text style={styles.doc}>{docImg}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 4,
    flexDirection: 'row',
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 5,
    justifyContent: 'space-between',
    marginTop: 40,
  },
  picbox: {
    flex: 4,
    alignItems: 'center',
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'oldlace',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  pic: {
    width: "100%",
    height: 200,
    resizeMode: "center",
  },
  docbox:{
    flex: 1,
  },
  doc: {
    padding: 6,
    flex: 4,
    justifyContent: 'center',
  },
  titles: {
    fontWeight: 'bold',

  },
});

export default Card;