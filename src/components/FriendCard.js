export default function FriendCard({ avatar, name, balance }) {
  function getBalanceInfo() {
    if (balance > 0) {
      return (
        <p className="red">
          {name} owes you ₹{balance}
        </p>
      );
    } else if (balance < 0) {
      return (
        <p className="green">
          You owe {name} ₹{Math.abs(balance)}
        </p>
      );
    } else {
      return <p>You both are even</p>;
    }
  }

  return (
    <li>
      <img src={avatar} alt="Dustin Henderson" />
      <h3>{name}</h3>
      {getBalanceInfo()}
      <button className="button">Select</button>
    </li>
  );
}
