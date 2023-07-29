import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import FriendCard from "./FriendCard";

export default function FriendsList({
  initialFriends,
  isAddingFriend,
  setIsAddingFriend,
  onAddingFriend,
  ...rest
}) {
  const [friendsList, setFriendsList] = useState(initialFriends);

  function addFriend(obj) {
    setFriendsList((list) => [...list, obj]);
  }

  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <FriendCard key={friend.id} friend={friend} {...rest} />
        ))}
      </ul>
      {isAddingFriend && !rest.selectedFriend && (
        <AddFriendForm onAddFriend={addFriend} />
      )}
      <button className="button" onClick={onAddingFriend}>
        {isAddingFriend && !rest.selectedFriend ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
