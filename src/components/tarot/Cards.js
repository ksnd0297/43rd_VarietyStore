import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardInfo from "./CardInfo";
import cardInfo from "../../store/cardUrl.json";

import "../../scss/tarot/Card.scss";
import "../../scss/font.css";

function Card({ number, onClick, arrow }) {
  console.log(arrow);
  return (
    <div
      className="card"
      onClick={onClick}
      style={{ "--bg": `url(${cardInfo[number].img})` }}
    />
  );
}

function Cards() {
  const [cardNum, setCardNum] = useState(0);

  const [check, setCheck] = useState(new Set());

  useEffect(() => {
    let set = new Set();
    while (set.size !== 5) {
      let index = parseInt(Math.random() * 22) + 1;
      set.add(index);
    }
    setCheck(set);
  }, []);

  return (
    <>
      <header
        style={{
          width: "100%",
          height: "80px",
          backgroundColor: "lightgray",
          textAlign: "center",
          lineHeight: "80px",
        }}
      >
        <nav>
          <Link style={{ padding: "20px", cursor: "pointer" }} to="/">
            CSS연습
          </Link>
          <Link style={{ padding: "20px", cursor: "pointer" }} to="/profile">
            프로필
          </Link>
          <Link style={{ padding: "20px", cursor: "pointer" }} to="/tarot">
            타로카드
          </Link>
        </nav>
      </header>
      <div className="CardContainer">
        <div className="cards">
          {(() => {
            let a = [];
            for (let i of check.values())
              a.push(<Card key={i} number={i} onClick={() => setCardNum(i)} />);
            return a;
          })()}
        </div>
        <CardInfo number={cardNum} onClick={() => setCardNum(0)} />
      </div>
    </>
  );
}

export default Cards;
