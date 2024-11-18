import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => {
    return <ul className={css.list}>
        {friends.map((friend) => (
            <li key={friend.id} className={css.item}>
                <FriendListItem image={friend.avatar} name={friend.name} status={friend.isOnline} />
            </li>
        ))}
    </ul>
}

export default FriendList;