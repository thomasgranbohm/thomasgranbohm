import * as React from "react";
import "./style.css";

export const Profile: React.FC = () => {
	return (
		<section className="Profile">
			<img
				src="/profile/images/profile-picture-alt.jpg"
				alt="Thomas Granbohm"
				className="Picture"
			/>
			<h1 className="Name">Thomas Granbohm</h1>
			<a className="Email" href="mailto:thomas.granbohm@gmail.com">
				thomas.granbohm@gmail.com
			</a>
		</section>
	);
};
