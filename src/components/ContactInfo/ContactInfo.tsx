import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { TContactInfo } from "../../types";
import { Anchor } from "../Anchor";
import classes from "./ContactInfo.module.scss";

export type ContactInfoProps = TContactInfo & HTMLAttributes<HTMLElement>;

export const ContactInfo = ({
	className,
	email,
	phonenumber,
}: ContactInfoProps) => {
	return (
		<address
			className={concatClasses(
				[classes["contact-info"], true],
				[className, className]
			)}
		>
			<Anchor href={`mailto:${email}`} prefix="📧">
				{email}
			</Anchor>
			<Anchor
				href={`tel:${phonenumber.split(/[\s,-]+/g).join("")}`}
				prefix="📞"
			>
				{phonenumber}
			</Anchor>
		</address>
	);
};
