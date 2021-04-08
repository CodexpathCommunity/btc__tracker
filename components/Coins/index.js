const Coins = ({ name, image }) => {
  return (
    <div>
      <h2> {name} </h2>
      <img src={image} alt="" />
    </div>
  );
};

export default Coins;
