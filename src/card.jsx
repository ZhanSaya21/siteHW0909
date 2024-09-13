import { useState } from "react";
import "./App.css";

export function Card() {
  const [cardList, setCardList] = useState([
    {
      id: 1,
      name: "Юдзи Итадори - один из главных персонажей Магической Битвы. ",
      description:
        "Маг, студент первого года обучения в Столичной технической школе магии и сосуд для Сукуны.",
      isFlipped: false,
    },
    {
      id: 2,
      name: "Юдзи Итадори - один из главных персонажей Магической Битвы. ",
      description:
        "Маг, студент первого года обучения в Столичной технической школе магии и сосуд для Сукуны.",
      isFlipped: false,
    },
    {
      id: 3,
      name: "Юдзи Итадори - один из главных персонажей Магической Битвы. ",
      description:
        "Маг, студент первого года обучения в Столичной технической школе магии и сосуд для Сукуны.",
      isFlipped: false,
    },
    {
      id: 4,
      name: "Юдзи Итадори - один из главных персонажей Магической Битвы. ",
      description:
        "Маг, студент первого года обучения в Столичной технической школе магии и сосуд для Сукуны.",
      isFlipped: false,
    },
  ]);

  const onClick = (cardId) => {
    setCardList((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
    console.log(cardList);
  };

  return (
    <div className="cardList">
      {cardList.map((card) => (
        <div
          key={card.id}
          style={{
            perspective: 1000,
            width: 200,
            height: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 50,
            cursor: "pointer",
            position: "relative",
          }}
          onClick={() => onClick(card.id)}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              position: "absolute",
              transition: "transform 0.6s",
              transformStyle: "preserve-3d",
              transform: card.isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
            }}
          >
            <div className="cardFrontStyle">
              <h3>{card.name}</h3>
            </div>
            <div className="cardBackStyle">
              <h3>{card.description}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
