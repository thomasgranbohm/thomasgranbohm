import React from "react";
import "./style.css";

function Profile(props) {
	return (
		<section className="Profile">
			<img
				src="/images/profile-picture.jpg"
				alt="Thomas Granbohm"
				className="Picture"
			/>
			<h1 className="Name">Thomas Granbohm</h1>
			<a className="Email" href="mailto:thomas.granbohm@gmail.com">
				thomas.granbohm@gmail.com
			</a>
		</section>
	);
}

export default Profile;
