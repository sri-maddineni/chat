// src/Chat.js
import React, { useState, useEffect } from "react";
import { firestore } from "./Firebase";
import { collection } from "firebase/firestore";
import firebase from "firebase/compat/app";

import "firebase/compat/firestore";

const db = firebase.firestore();

let x = "sri";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  //   useEffect(() => {
  //     const unsubscribe = collection(firestore,"/simplechat/chats/messages").onSnapshot((snapshot) => {
  //       const messagesData = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setMessages(messagesData);
  //     });

  //     return () => unsubscribe();
  //   }, []);

  useEffect(() => {
    const unsubscribe = db
      .collection("/simplechat/chats/messages")
      .orderBy("timestamp", "asc")
      .limitToLast(10)
      .onSnapshot((snapshot) => {
        const messagesData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(messagesData);
      });

    return () => unsubscribe();
  }, []);

  //   db.collection("cities").where("capital", "==", true)
  //     .get()
  //     .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //             // doc.data() is never undefined for query doc snapshots
  //             console.log(doc.id, " => ", doc.data());
  //         });
  //     })
  //     .catch((error) => {
  //         console.log("Error getting documents: ", error);
  //     });

  const sendMessagex = () => {
    if (newMessage.trim() !== "") {
      db.collection("/simplechat/chats/messages").add({
        text: newMessage,
        timestamp: new Date(),
        sent: "admin",
      });
      setNewMessage("");
    }
  };

  const sendMessagey = () => {
    if (newMessage.trim() !== "") {
      db.collection("/simplechat/chats/messages").add({
        text: newMessage,
        timestamp: new Date(),
        sent: "other",
      });
      setNewMessage("");
    }
  };

  return (
    <>
      <div>
        <div
          className=" my-3 "
          style={{ border: "2px solid red", borderRadius: "8px", maxWidth:'50%' }}
        >
          {messages.map((message) => (
            <div key={message.id}>
              <div
                className="container"
                style={{
                  display: "flex",
                  justifyContent:
                  message.sent === "admin" ? "flex-end" : "flex-start",
                  backgroundColor: message.sent === 'admin' ? 'green' : 'grey',
                  color: message.sent === "admin" ? "white" : "black",
                  padding: "4px", // Add padding as needed
                  maxWidth: "50%", // Add max-width as needed
                  marginBottom:"8px"
                }}
              >
                {message.sent === "admin" ? "admin : " : "user : "}{" "}
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p mx-3 my-1">enter message below</div>

        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          name="textbox"
          className="mx-3 my-3"
        />
        <br />
        <br />
        <button className="my-1 mx-2  " onClick={sendMessagex}>
          Sent by admin
        </button>
        <button className="my-1 mx-2 " onClick={sendMessagey}>
          Sent by user
        </button>
      </div>
    </>
  );
};

export default Chat;
