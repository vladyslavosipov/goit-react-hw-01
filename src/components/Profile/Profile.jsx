import css from "./Profile.module.cs"

const Profile = ({ name, image, tag, location, stats }) => (
	<div className={css.card}>
		<div className={css.top}>
			<img className={css.img}
				src={image}
				alt={`${name} avatar`}
			/>
			<p className={css.name}>{name}</p>
			<p className={css.description}>@{tag}</p>
			<p className={css.description}>{location}</p>
		</div>

		<ul className={css.list}>
			<li className={css.item}>
				<span className={css.statsTitle}>Followers</span>
				<span className={css.stats}>{stats.followers}</span>
			</li>
			<li className={css.item}>
				<span className={css.statsTitle}>Views</span>
				<span className={css.stats}>{stats.views}</span>
			</li>
			<li className={css.item}>
				<span className={css.statsTitle}>Likes</span>
				<span className={css.stats}>{stats.likes}</span>
			</li>
		</ul>
	</div>

);

export default Profile;