import { useState } from "react";
import FriendCard from "./FriendCard";

export default function FriendsList({
  initialFriends,
  isAddingFriend,
  setIsAddingFriend,
}) {
  const [friend, setFriend] = useState({
    name: "",
    avatar: "https://i.pravatar.cc/48",
  });
  const [friendsList, setFriendsList] = useState(initialFriends);

  function addFriend(e) {
    e.preventDefault();
    const randomId = Math.floor(100000 + Math.random() * 900000);
    if (friend.name && friend.avatar) {
      setFriendsList((list) => [
        ...list,
        {
          id: randomId,
          ...friend,
          balance: 0,
        },
      ]);
    }
  }

  function handleFriendInput(e) {
    const { name, value } = e.target;
    setFriend({
      ...friend,
      [name]: value,
    });
  }

  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <FriendCard key={friend.id} {...friend} />
        ))}
      </ul>
      {isAddingFriend && (
        <form className="form-add-friend" onSubmit={addFriend}>
          <label>👫 Friend name</label>
          <input
            name="name"
            type="text"
            value={friend.name}
            onChange={handleFriendInput}
          />
          <label>🌄 Image URL</label>
          <input
            name="avatar"
            type="text"
            value={friend.avatar}
            onChange={handleFriendInput}
          />
          <button className="button">Add</button>
        </form>
      )}
      <button
        className="button"
        onClick={() => setIsAddingFriend((prevState) => !prevState)}
      >
        {isAddingFriend ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
