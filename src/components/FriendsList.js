import FriendCard from "./FriendCard";

export default function FriendsList({ friendsList, ...rest }) {
  return (
    <ul>
      {friendsList.map((friend) => (
        <FriendCard key={friend.id} friend={friend} {...rest} />
      ))}
    </ul>
  );
}
