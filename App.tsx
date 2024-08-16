import React from 'react';
import {StatusBar} from 'react-native';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GlobalProvider} from './src/context/GlobalContext';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './src/navigation/StackNavigation';

function App(): React.JSX.Element {
  return (
    <PaperProvider>
      <StatusBar hidden={false} />
      <SafeAreaProvider>
        <GlobalProvider>
          <NavigationContainer>
            <StackNavigation />
          </NavigationContainer>
        </GlobalProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

export default App;
