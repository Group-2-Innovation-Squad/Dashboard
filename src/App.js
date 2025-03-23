import './App.css';

function App() {
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
          <span className="subTitle">Last Temp Value: </span>
        </div>
        <div className="statContainer">
          <span className="subTitle">Last Humidity Value: </span>
        </div>
      </div>
      <div className="subSubBarContainer">
        <div className="messagesContainerTitle">
          <span className="subTitle">Important Messages</span>
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
    </div>
  );
}

export default App;
