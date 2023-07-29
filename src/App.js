import { useState } from "react";
import FriendsList from "./components/FriendsList";

export default function App() {
  const [isAddingFriend, setIsAddingFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const initialFriends = [
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

  function handleAddingFriend() {
    if (!selectedFriend) {
      setIsAddingFriend((prevState) => !prevState);
    }
  }

  return (
    <div class="app">
      <FriendsList
        initialFriends={initialFriends}
        isAddingFriend={isAddingFriend}
        setIsAddingFriend={setIsAddingFriend}
        onAddingFriend={handleAddingFriend}
        selectedFriend={selectedFriend}
        setSelectedFriend={setSelectedFriend}
      />
    </div>
  );
}
