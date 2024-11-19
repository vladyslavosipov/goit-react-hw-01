import friends from '../../friends.json'
import FriendListItem from "../FriendListItem/FriendListItem"
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
    return (
        <ul className={css.list}>
            {friends.map(friend => (
                <li className={css.item} key={friend.id}>
                    <FriendListItem
                        avatar={friend.avatar}
                        name={friend.name}
                        isOnline={friend.isOnline}/> 
                </li>
            ))}
        </ul>
    )
}

export default FriendList;