/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, Alert
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import RootNavigator from './app/navigation/RootNavigator';

import * as eva from '@eva-design/eva';
import { ApplicationProvider} from '@ui-kitten/components';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import {store} from './app/redux/store';

import interceptor from './app/networking/api/interceptor'
import NetInfo from '@react-native-community/netinfo';
import { AlertNotificationRoot } from 'react-native-alert-notification';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { FontFamily } from './app/ui/GlobalStyles';

const toastConfig = {
  /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
  success: (props: any) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'green' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontFamily: FontFamily.poppinsMedium
      }}
      text2Style={{
        fontSize: 13,
        fontFamily: FontFamily.poppinsMedium
      }}

    />
  ),
  /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
  error: (props: any) => (
    <ErrorToast
      {...props}
      style={{ borderLeftColor: 'red' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontFamily: FontFamily.poppinsMedium
      }}
      text2Style={{
        fontSize: 13,
        fontFamily: FontFamily.poppinsMedium
      }}
  />
  ),

};


type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  const isDarkMode = false;
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): React.JSX.Element {
  const isDarkMode = false;

  useEffect(() => {
    if(Platform.OS === 'android')SplashScreen.hide();
  },[])

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      // Comprobar si el estado de conexión es falso
      if (!state.isConnected) {
        Alert.alert(
          'Sin conexión a Internet', // Título del Alert
          'Parece que no estás conectado a Internet. Por favor, verifica tu conexión.', // Mensaje del Alert
          [
            {
              text: 'OK',
              onPress: () => console.log('Alerta de No Conexión Cerrada'),
            },
          ],
          { cancelable: false } // Esto evita que el alert se cierre al tocar fuera del alert
        );
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const backgroundStyle = {
    backgroundColor: Colors.lighter,
  };

  return (
    <>
    <AlertNotificationRoot>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <ApplicationProvider {...eva} theme={eva.light}>
        <RootNavigator/>
      </ApplicationProvider>
    </PersistGate>
  </Provider>
  </AlertNotificationRoot>
  <Toast config={toastConfig} />
  </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
