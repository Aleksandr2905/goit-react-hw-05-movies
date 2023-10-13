
import React, { Component } from 'react';
import { View, Image, Modal, StyleSheet, Text } from 'react-native';

export default class Loader extends Component {
  render() {
    return (
      <Modal visible={true}>
        <Text>This is modal</Text>
      </Modal>
    );
  }
}