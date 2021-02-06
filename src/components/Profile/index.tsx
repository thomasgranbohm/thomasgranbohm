import * as React from "react";
import classes from "./style.module.scss";

export const Profile = () => (
	<section className={classes["profile"]}>
		<img
			src="/profile/images/profile-picture-alt.jpg"
			alt="Thomas Granbohm"
			className={classes["picture"]}
		/>
		<h1 className={classes["name"]}>Thomas Granbohm</h1>
		<a className={classes["email"]} href="mailto:thomas.granbohm@gmail.com">
			thomas.granbohm@gmail.com
		</a>
	</section>
);
