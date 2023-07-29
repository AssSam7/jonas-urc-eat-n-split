import { useState } from "react";

export default function AddFriendForm({ initialFriends, onAddFriend }) {
  const [friend, setFriend] = useState({
    name: "",
    avatar: "https://i.pravatar.cc/48",
  });

  function handleSubmit(e) {
    e.preventDefault();

    if (!friend.name || !friend.avatar) return;

    const randomId = Math.floor(100000 + Math.random() * 900000);

    onAddFriend({
      id: randomId,
      ...friend,
      balance: 0,
    });

    setFriend({
      name: "",
      avatar: "https://i.pravatar.cc/48",
    });
  }

  function handleFriendInput(e) {
    const { name, value } = e.target;
    setFriend({
      ...friend,
      [name]: value,
    });
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
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
  );
}
