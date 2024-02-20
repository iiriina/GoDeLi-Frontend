// Importa los componentes necesarios
import React from 'react';
import { View, Button } from 'react-native';

import { AlertNotificationRoot, Dialog, Toast, ALERT_TYPE } from 'react-native-alert-notification';

// Define el componente para notificación de éxito
const SuccessNotificationComponent = () => {
  return (
    <AlertNotificationRoot>
      <View>
        {/* Botón para mostrar el cuadro de diálogo de éxito */}
        <Button
          title={'Dialog Box Success'}
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: 'Congrats! This is a dialog box showing success.',
              button: 'Close',
            })
          }
        />
      </View>
    </AlertNotificationRoot>
  );
};

// Define el componente para notificación de error
const ErrorNotificationComponent = () => {
  return (
    <AlertNotificationRoot>
      <View>
        {/* Botón para mostrar el cuadro de diálogo de error */}
        <Button
          title={'Dialog Box Error'}
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.DANGER,
              title: 'Error',
              textBody: 'Oops! Something went wrong.',
              button: 'Close',
            })
          }
        />
      </View>
    </AlertNotificationRoot>
  );
};

// Exporta ambos componentes
export { SuccessNotificationComponent, ErrorNotificationComponent };
