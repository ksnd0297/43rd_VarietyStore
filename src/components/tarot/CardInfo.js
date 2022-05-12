import "../../scss/tarot/CardInfo.scss";
import "../../scss/font.css";

import cardInfo from "../../store/cardUrl.json";

const HorizonLine = ({ text }) => {
  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        borderBottom: "1px solid black",
        lineHeight: "0.1em",
        margin: "10px 0 20px",
      }}
    ></div>
  );
};

function CardInfo({ number, onClick }) {
  return (
    <div className={`modal__background${number !== 0 ? " active" : ""}`}>
      <div className="tmp" onClick={onClick}></div>
      <div className="modal__box">
        {number ? (
          <>
            <div className="close" onClick={onClick}>
              ❌
            </div>
            <div className="text">
              <div className="cardContainer">
                <div className="cardImg">
                  <img src={`${cardInfo[number].img}`} />
                </div>
                <div className="cardBrief">
                  <div className="cardBriefText">{cardInfo[number].text}</div>
                  <HorizonLine />
                  <div className="cardBriefText">{cardInfo[number].good}</div>
                  <div className="cardBriefText">{cardInfo[number].bad}</div>
                </div>
              </div>
              <div className="cardText">
                <iframe src={cardInfo[number].url}></iframe>
              </div>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}

export default CardInfo;
