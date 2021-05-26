/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

import { Root, Popup, Toast } from 'popup-ui';

const popupUI = () => {
  function openPopup() {
    Popup.show({
      type: 'Success',
      title: 'Upload complete',
      textBody: 'Congrats! Your upload successfully done',
      buttonText: 'Ok',
      callback: () => Popup.hide(),
    });
  }

  function openToast() {
    Toast.show({
      title: 'User created',
      text: 'Your user was successfully created, use the app now.',
      color: '#2ecc71',
    });
  }

  return (
    <Root>
      <View
        style={styles.container}
      >
        <TouchableOpacity
          onPress={openPopup}
          style={styles.button}
        >
          <Text style={styles.btnText}>Popup</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={openToast}
          style={styles.button}
        >
          <Text style={styles.btnText}>Toast</Text>
        </TouchableOpacity>
      </View>
    </Root>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6767d7',
  },
  btnText: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default popupUI;
