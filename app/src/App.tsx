import React from "react";
import UserInfo from "./components/UserInfo";
import Card from "./components/Card";

function App() {
  const user = {
    name: 'Mary M',
    age: 24,
    email: 'mary@gmail.com'
  }

  return (
    <>
      <h1>User Information</h1>
      <UserInfo name={user.name} age={user.age} email={user.email} />
      <div>
        <h1>Card</h1>
        <Card>
          <h2>Card</h2>
          <p>This card only contains words.</p>
        </Card>
        <Card>
          <h2>Card</h2>
          <p>This card contains images and words.</p>
          <img src="https://via.placeholder.com/150" alt="Placeholder card" />
        </Card>
      </div>
    </>
  );
}

export default App
