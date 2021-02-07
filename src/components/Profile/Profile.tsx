import * as React from "react";
import { Link } from "src/components";
import classes from "./Profile.module.scss";

export const Profile = () => (
	<section className={classes["profile"]}>
		<img
			src="/profile/images/profile-picture-alt.jpg"
			alt="Thomas Granbohm"
			className={classes["picture"]}
		/>
		<h1 className={classes["name"]}>Thomas Granbohm</h1>
		<Link
			name="thomas.granbohm@gmail.com"
			link="mailto:thomas.granbohm@gmail.com"
		/>
	</section>
);
