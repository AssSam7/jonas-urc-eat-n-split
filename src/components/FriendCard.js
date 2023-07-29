export default function FriendCard({
  friend,
  selectedFriend,
  setSelectedFriend,
}) {
  function getBalanceInfo() {
    if (friend.balance > 0) {
      return (
        <p className="red">
          {friend.name} owes you ₹{friend.balance}
        </p>
      );
    } else if (friend.balance < 0) {
      return (
        <p className="green">
          You owe {friend.name} ₹{Math.abs(friend.balance)}
        </p>
      );
    } else {
      return <p>You both are even</p>;
    }
  }

  return (
    <li>
      <img src={friend.avatar} alt="Dustin Henderson" />
      <h3>{friend.name}</h3>
      {getBalanceInfo()}
      <button
        className="button"
        onClick={() =>
          setSelectedFriend((id) => (id === friend.id ? null : friend.id))
        }
      >
        {selectedFriend === friend.id ? "Close" : "Select"}
      </button>
    </li>
  );
}
