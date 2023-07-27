import { useState } from "react";
import FriendCard from "./FriendCard";

export default function FriendsList({ initialFriends }) {
  const [friendsList, setFriendsList] = useState(initialFriends);

  return (
    <div className="sidebar">
      <ul>
        {friendsList.map((friend) => (
          <FriendCard key={friend.id} {...friend} />
        ))}
      </ul>
    </div>
  );
}
