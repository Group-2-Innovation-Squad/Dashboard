import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [temp, setTemp] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [messages, setMessages] = useState([]);
  const [feedback, setFeedback] = useState('');
  const [image, setImage] = useState(null);
  const [robotImage, setRobotImage] = useState(null);

  async function getImageFromCamera() {
    try {
      const options = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const response = await fetch('http://localhost:4321/getImageFromRobot', options);
      console.log(response);
    } catch(error) {
      console.error('Error capturing image:', error);
    }
  }

  async function identifyPlantWithImage() {
    try {
      const formData = new FormData();
      formData.append('image', image);

      const response = await fetch('http://localhost:8080/identify', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data.plant)
      } else {
        console.error('Error identifying plant:', response.statusText);
      }
    } catch (error) {
      console.error('Error identifying plant:', error);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/stats');
        const data = await response.json();
        console.log(data);
        setTemp(data.temperature);
        setHumidity(data.humidity);
        setMessages(data.messages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="main">
      <div className="topBar">
        <span className="title">GREENHOUSE ASSISTANT DASHBOARD</span>
        <div className="iconContainer">
          <ion-icon className="icon" name="home-sharp"></ion-icon>
          <ion-icon className="icon" name="image-sharp"></ion-icon>
          <ion-icon className="icon" name="notifications-sharp"></ion-icon>
        </div>
      </div>
      <div className="subBarContainer">
        <div className="statContainer">
          <span className="subTitle">Last Temp Value: {temp}</span>
        </div>
        <div className="statContainer">
          <span className="subTitle">Last Humidity Value: {humidity}</span>
        </div>
      </div>
      <div className="subSubBarContainer">
        <div className="messagesContainerTitle">
          <span className="subTitle">{messages}</span>
        </div>
      </div>
      <div className="subSubSubBarContainer">
        <div className="messagesContainer">
          <span className="subTitle">Sample Messages</span>
        </div>
      </div>
      <div className="bottomBar">
        <span className="subTitle">Feedback</span>
      </div>
      <input type="file" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
      <button onClick={identifyPlantWithImage}>Identify Plant</button>
    </div>
  );
}

export default App;
