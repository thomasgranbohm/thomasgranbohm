import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { TContactInfo } from "../../types";
import { Anchor } from "../Anchor";
import { ChildWithPrefix } from "../ChildWithPrefix";
import classes from "./ContactInfo.module.scss";

export type ContactInfoProps = TContactInfo & HTMLAttributes<HTMLElement>;

export const ContactInfo = ({
	className,
	discord,
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
			<ChildWithPrefix prefix="discord">
				<p tabIndex={0}>{discord}</p>
			</ChildWithPrefix>
			<ChildWithPrefix prefix="email">
				<Anchor href={`mailto:${email}`}>{email}</Anchor>
			</ChildWithPrefix>
			<ChildWithPrefix prefix="phone">
				<Anchor href={`tel:${phonenumber.split(/[\s,-]+/g).join("")}`}>
					{phonenumber}
				</Anchor>
			</ChildWithPrefix>
		</address>
	);
};
