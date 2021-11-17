import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Image,
  Text,
  View,
  Modal,
  Pressable,
  Dimensions,
} from "react-native";
import { Button, Center, Box, VStack, FormControl, Input } from "native-base";

export default function Welcome({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  return (
    <React.Fragment>
      <ImageBackground
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height - 100,
        }}
        source={require("../assets/bgimage.jpg")}
      >
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Log In</Text>
                <FormControl>
                  <FormControl.Label>USERNAME OR EMAIL</FormControl.Label>
                  <Input style={{ width: 200 }} />
                  <FormControl.Label>PASSWORD</FormControl.Label>
                  <Input style={{ width: 200 }} />
                </FormControl>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  <Text style={styles.textStyle}>Log In</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => {
              setModalVisible(!modalVisible2);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Sign Up</Text>
                <FormControl>
                  <FormControl.Label>USERNAME</FormControl.Label>
                  <Input style={{ width: 200 }} />
                  <FormControl.Label>EMAIL</FormControl.Label>
                  <Input style={{ width: 200 }} />
                  <FormControl.Label>PASSWORD</FormControl.Label>
                  <Input style={{ width: 200 }} />
                </FormControl>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    navigation.navigate("Home");
                  }}
                >
                  <Text style={styles.textStyle}>Sign Up</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible2(!modalVisible2)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>

        <Center flex={1} px="3" style={{ top: -200 }}>
          <Text
            style={{
              fontSize: 40,
            }}
          >
            BIKE SHOP
          </Text>
        </Center>
        <VStack alignItems="center">
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ fontSize: 30, color: "white" }}>Log In</Text>
          </Pressable>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => {
              setModalVisible2(true);
            }}
            _text={{ fontSize: 30 }}
          >
            <Text style={{ fontSize: 30, color: "white" }}>Sign Up</Text>
          </Pressable>
        </VStack>
      </ImageBackground>
    </React.Fragment>
  );
}

const styles = {
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    paddingLeft: 30,
    paddingRight: 30,
  },
  buttonOpen: {
    backgroundColor: "#000",
    margin: 10,
  },
  buttonClose: {
    backgroundColor: "#000",
    margin: 10,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
};
