import React, { useState } from "react";

const Home = () => {
    const Initialistate = [
        { id:1,Name: "BOOPATHI", age: "34", email: "boopathisiva@gmail.com" },
        { id:2 , Name: "kavi", age: "24", email: "boopathisiva@gmail.com" },
        { id:3 ,Name: "anand", age: "34", email: "boopathisiva@gmail.com" },
        {id:4, Name: "vijay", age: "34", email: "boopathisiva@gmail.com" },
      ];
  const [user, setUser] = useState(Initialistate);
  return (
    <div>
      <h1>Crud Applaication</h1>
      <form>
        <input type="text" placeholder="enter name" />
        <button type="button">Add</button>
      </form>
      <div>
        {user.map((e)=>(
            <div>
                <h1>{e.id}</h1>
                <h1>{e.Name}</h1>
                <h1>{e.age}</h1>
                <h1>{e.email}</h1>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
