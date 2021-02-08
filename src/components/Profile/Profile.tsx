import * as React from "react";
import { Image, Link } from "src/components";
import classes from "./Profile.module.scss";

export const Profile = () => (
	<section className={classes["profile"]}>
		<Image
			name="profile-picture-alt"
			alt="That's me!"
			type="jpg"
			className={classes["picture"]}
		/>
		<h1 className={classes["name"]}>Thomas Granbohm</h1>
		<Link link="mailto:thomas.granbohm@gmail.com" prefix="📧">
			thomas.granbohm@gmail.com
		</Link>
		<Link link="tel:+46736761614" prefix="📞">
			+46 73-676 16 14
		</Link>
	</section>
);
