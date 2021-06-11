import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar, View } from 'react-native';
import 'react-native-gesture-handler';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#312E38" />
      <View style={{ backgroundColor: '#312E38', flex: 1 }}>
        <Routes />
      </View>
    </NavigationContainer>
  </>
);

export default App;
