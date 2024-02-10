// Importa los componentes necesarios
import React from 'react';
import { View, Button } from 'react-native';

import { AlertNotificationRoot, Dialog, Toast, ALERT_TYPE } from 'react-native-alert-notification';

// Define el componente NotificationComponent
const NotificationComponent = () => {
  return (
    <AlertNotificationRoot>
      <View>
        {/* Botón para mostrar el cuadro de diálogo */}
        <Button
          title={'dialog box'}
          onPress={() =>
            Dialog.show({
              type: ALERT_TYPE.SUCCESS,
              title: 'Success',
              textBody: 'Congrats! this is dialog box success',
              button: 'close',
            })
          }
        />
        
       
      </View>
    </AlertNotificationRoot>
  );
};

// Exporta el componente
export default NotificationComponent;
