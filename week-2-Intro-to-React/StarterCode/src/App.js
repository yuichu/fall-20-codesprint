import React from 'react';
import './App.css';

//Function for the time
const getTimeString = timestamp => {
  let date = new Date(timestamp);
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  // 0 padding!
  month = (month < 10 ? "0" : "") + month;
  day = (day < 10 ? "0" : "") + day;
  hour = (hour < 10 ? "0" : "") + hour;
  min = (min < 10 ? "0" : "") + min;
  sec = (sec < 10 ? "0" : "") + sec;

  let str = hour + ":" + min + ":" + sec + " on " + month + "/" + day + "/" + date.getFullYear();
  return str;
}


class App extends React.Component {

  /* Uncomment for Database functionality
  componentDidMount = () => {
    this.db = firebase.firestore();
    this.unsubscribe = this.db.collection("messages")
    .orderBy("timestamp", "desc").onSnapshot((collection) => {
        let newMessagesList = [];
        collection.forEach(function(doc){
            let message = doc.data();
            let newMessage = {
                author: message.author,
                message: message.message,
                timestamp: message.timestamp
            }
            newMessagesList.push(newMessage);
        });
        this.setState({
            messages: newMessagesList
        });
    });
}

componentWillUnmount = () => {
  this.unsubscribe();
}
*/
 
  createMessage = () =>  {

    
    // Uncomment later for database functionality
    // this.db.collection("messages").add(newMessage)
    // .then(function(docRef) {
    //     console.log("Document written with ID: ", docRef.id);
    // })
    // .catch(function(error) {
    //     console.error("Error adding document: ", error);
    // });
  }

  render = () => {

  }
}

export default App;
