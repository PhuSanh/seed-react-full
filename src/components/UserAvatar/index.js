import React from "react";
import style from "./style.css";

const UserAvatar = props => {
		return (
			<div id="user-avatar">
				<img src="/img/profile.png" />
				<div>
					<strong>Name</strong>
				</div>
				<div className="text-muted">
					<small>user.name</small>
				</div>
			</div>
		);
}

export default UserAvatar;