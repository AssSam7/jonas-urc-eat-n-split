import { useState } from "react";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";

export const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    avatar: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    avatar: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    avatar: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friendsList, setFriendsList] = useState(initialFriends);

  function handleAddingFriend() {
    if (!selectedFriend) {
      setShowAddFriend((prevState) => !prevState);
    }
  }

  function addFriend(obj) {
    setFriendsList((list) => [...list, obj]);
  }

  function handleSelectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  return (
    <div class="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          selectedFriend={selectedFriend}
          onSelectFriend={handleSelectFriend}
        />
        {showAddFriend && !selectedFriend && (
          <AddFriendForm onAddFriend={addFriend} />
        )}
        <button className="button" onClick={handleAddingFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </button>
      </div>
    </div>
  );
}
