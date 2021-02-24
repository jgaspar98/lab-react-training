import React from 'react';
import logo from './logo.svg';
import './App.css';
import Idcard from './components/idcard'
import Greatings from './components/greatings'
import Random from './components/random'
import Boxcolor from './components/boxcolor'
import Creditcard from './components/creditcard'
import Rating from './components/rating'
import DriverCard from './components/drivercard'
import Likebutton from './components/likebutton'

function App() {
  return (
    <div className="App">
      <div className='iteration-1'>
        <Idcard firstName='John' lastName='Doe' gender='male' height={178} birth={new Date("1992-07-14")} picture="https://randomuser.me/api/portraits/men/44.jpg" />
        <Idcard firstName='Obrien' lastName='Delores' gender='female' height={172} birth={new Date("1988-05-11")} picture="https://randomuser.me/api/portraits/women/44.jpg" />
      </div>
      <div className='iteration-2'>
        <Greatings lang='fr'> François </Greatings>
        <Greatings lang='de'> Ludwig </Greatings>
      </div>
      <div>
        <Random min={1} max={6} />
        <Random min={1} max={100}/>
      </div>
      <div>
        <Boxcolor r={255} g={25} b={100} />
        <Boxcolor r={128} g={255} b={0} />
      </div>
      <div className='credit-cards'>
        <Creditcard type="Visa" number="0123456789018845" expirationMonth={3} expirationYear={2021} bank="BNP" owner="Maxence Bouret" bgColor="#11aa99" color="white" />
        <Creditcard type="Master Card" number="0123456789010995" expirationMonth={3} expirationYear={2021} bank="N26"  owner="Maxence Bouret"  bgColor="#eeeeee" color="#222222" />
        <Creditcard type="Visa" number="0123456789016984" expirationMonth={12} expirationYear={2019} bank="Name of the Bank" owner="Firstname Lastname" bgColor="#ddbb55" color="white" />  
      </div>
      <div>
        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
      </div>
      <div>
        <DriverCard name="Travis Kalanick" rating={4.2} img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428" car={{ model: "Toyota Corolla Altis", licensePlate: "CO42DE" }} />
        <DriverCard name="Dara Khosrowshahi" rating={4.9} img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg" car={{model: "Audi A3", licensePlate: "BE33ER"}} />
      </div>
      <div>
        <Likebutton/>
      </div>
    </div>
  );
}

export default App;
