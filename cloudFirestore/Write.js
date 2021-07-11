import firebase from "firebase/app";
import "firebase/firestore";

const WriteToFireStore = () => {
  const sendData = () => {
    try {
      firebase
        .firestore()
        .collection("myCollection")
        .doc("my_document")
        .set({
          number_data: 2,
          string_data: "YoheiKo",
          booleaan_data: true,
        })
        .then(alert("Data was successfully sent to cloud firestore"));
    } catch (error) {
      console.log(error);
      alert(error);
    }
  };

  return <button onClick={sendData}>Send data to Could FireStore</button>;
};

export default WriteToFireStore;
