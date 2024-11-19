import s from "./Profile.module.css";
const Profile = ({ user }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.card}>
        <img className={s.avatar} src={user.avatar} alt="User avatar" />
        <p className={s.username}>{user.username}</p>
        <p className={s.tag}>@{user.tag}</p>
        <p className={s.location}>{user.location}</p>
      </div>
      <ul className={s.list}>
        <li className={s.item}>
          <span className={s.statsName}>Followers</span>
          <span className={s.statsInfo}>{user.stats.followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.statsName}>Views</span>
          <span className={s.statsInfo}>{user.stats.views}</span>
        </li>
        <li className={s.item}>
          <span className={s.statsName}>Likes</span>
          <span className={s.statsInfo}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};
export default Profile;