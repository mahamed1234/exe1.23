import React from "react";
import CustomButton from "./custombutton";
import { Modal, Portal, PaperProvider } from "react-native-paper";
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
 
const MyModal = () => {
  const [visible, setVisible] = React.useState(false);
 
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
 
  return (
    <PaperProvider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={styles.modalContent}
        >
          <TouchableWithoutFeedback onPress={hideModal}>
            <View style={styles.container}>
              <ImageBackground
                source={{
                  uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOEwQk_y0R7bw2AmnKsJBGdsPf5Ezc-1UfEw&usqp=CAU",
                }}
                style={styles.imageBackground}
                resizeMode="contain" // Adjusted resizeMode property
              >
                <View style={styles.modalContentInner}></View>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </Portal>
 
      <CustomButton label="Show Modal" onPress={showModal} />
    </PaperProvider>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContent: {
    flex: 1,
    margin: 20,
  },
  imageBackground: {
    flex: 1,
    resizeMode: "contain", // Adjusted resizeMode property
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  modalContentInner: {},
});
 
export default MyModal;
