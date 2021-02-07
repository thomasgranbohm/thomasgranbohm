import * as React from "react";
import { Image, Link } from "src/components";
import classes from "./Profile.module.scss";

export const Profile = () => (
	<section className={classes["profile"]}>
		<Image
			name="profile-picture-alt"
			alt="Thomas Granbohm"
			type="jpg"
			className={classes["picture"]}
		/>
		<h1 className={classes["name"]}>Thomas Granbohm</h1>
		<Link link="mailto:thomas.granbohm@gmail.com" prefix="📧">
			thomas.granbohm@gmail.com
		</Link>
	</section>
);
