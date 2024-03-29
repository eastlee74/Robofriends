import React from "react";
import Card from './card'; 

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map((robot, i) => (
        <Card 
          key={robots[i].id}
          id={robots[i].id}
          name={robots[i].name}
          email={robots[i].email} 
        />
      ))}
    </div>
  );
};

export default CardList;

