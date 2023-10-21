import React, { FC, useCallback } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  Modal,
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Device } from "react-native-ble-plx";

const DeviceModalListItem = (props) => {
  const { item, connectToPeripheral, closeModal } = props;
  const connectAndCloseModal = useCallback(() => {
    connectToPeripheral(item.item);
    closeModal();
  }, [closeModal, connectToPeripheral, item.item]);
  return React.createElement(
    TouchableOpacity,
    { onPress: connectAndCloseModal, style: modalStyle.ctaButton },
    React.createElement(
      Text,
      { style: modalStyle.ctaButtonText },
      item.item.name
    )
  );
};
const DeviceModal = (props) => {
  const { devices, visible, connectToPeripheral, closeModal } = props;
  const renderDeviceModalListItem = useCallback(
    (item) => {
      return React.createElement(DeviceModalListItem, {
        item: item,
        connectToPeripheral: connectToPeripheral,
        closeModal: closeModal,
      });
    },
    [closeModal, connectToPeripheral]
  );
  return React.createElement(
    Modal,
    {
      style: modalStyle.modalContainer,
      animationType: "slide",
      transparent: false,
      visible: visible,
    },
    React.createElement(
      SafeAreaView,
      { style: modalStyle.modalTitle },
      React.createElement(
        Text,
        { style: modalStyle.modalTitleText },
        "Tap on a device to connect"
      ),
      React.createElement(FlatList, {
        contentContainerStyle: modalStyle.modalFlatlistContiner,
        data: devices,
        renderItem: renderDeviceModalListItem,
      })
    )
  );
};
const modalStyle = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  modalFlatlistContiner: {
    flex: 1,
    justifyContent: "center",
  },
  modalCellOutline: {
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 8,
  },
  modalTitle: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  modalTitleText: {
    marginTop: 40,
    fontSize: 30,
    fontWeight: "bold",
    marginHorizontal: 20,
    textAlign: "center",
  },
  ctaButton: {
    backgroundColor: "#FF6060",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    marginHorizontal: 20,
    marginBottom: 5,
    borderRadius: 8,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default DeviceModal;
