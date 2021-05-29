import "../css/local/partials/components/_card.css";

const Card = ({ isClicked, cardTitle, cardImage }) => {
  return (
    <div
      className={
        isClicked
          ? "card-container cards-darkmode"
          : "card-container cards-lightmode"
      }
    >
      <img src={cardImage} alt="" />
      <h3>{cardTitle}</h3>
    </div>
  );
};

export default Card;
