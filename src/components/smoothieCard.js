const SmoothieCard = ({ smoothie }) => {
  return (
    <div className="smoothie-card">
      <h3>{smoothie.title}</h3>
      <p>{smoothie.message}</p>
      <div className="rating">{smoothie.rating}</div>
    </div>
  );
};

export default SmoothieCard;
