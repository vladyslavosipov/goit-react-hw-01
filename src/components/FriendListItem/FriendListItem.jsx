import friends from '../../friends.json'
import css from "./FriendListItem.module.css"

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
  <img src={avatar} alt={name} width="64" />
  <p className={css.name}>{name}</p>
  <p className={isOnline ? css.online : css.offline}>{isOnline ? "Online" : "Offline"}</p>
</div>
    )
}

export default FriendListItem;