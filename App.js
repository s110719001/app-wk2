import React from 'react';
import { StyleSheet, View} from 'react-native';
import Header from './Header';
import AlbumList from './AlbumList';

const App = () => {
  return (
    <View>
      <Header />
      <AlbumList />
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default App;