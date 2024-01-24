import React from 'react';
import { Provider as PaperProvider, DefaultTheme, Modal } from 'react-native-paper';
import { View, Text } from 'react-native'; 
import MyModal from './components/model';

const App = () => {
  const handleButtonPress = () => {
    console.log('Bouton appuyé !');
  };

  return (
    <PaperProvider theme={DefaultTheme}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello React Native Paper!</Text>
        </View>
        <MyModal/>
     
    </PaperProvider>
  );
};

export default App;
