import React, { HTMLAttributes } from "react";
import concatClasses from "../../functions/concatClasses";
import { TContactInfo } from "../../types";
import { Anchor } from "../Anchor";
import { ChildWithPrefix } from "../ChildWithPrefix";
import classes from "./ContactInfo.module.scss";

export type ContactInfoProps = {
	contacts: [
		{
			text: string;
			type?: "email" | "phone" | "discord";
			link?: string;
		}
	];
} & HTMLAttributes<HTMLElement>;

export const ContactInfo = ({ className, contacts }: ContactInfoProps) => {
	return (
		<address
			className={concatClasses(
				[classes["contact-info"], true],
				[className, className]
			)}
		>
			{contacts.map(({ text, type, link }) => (
				<ChildWithPrefix prefix={type} key={text + type}>
					{!type && !link && <p tabIndex={0}>{text}</p>}
					{type === "discord" && link && (
						<Anchor href={link}>{text}</Anchor>
					)}
					{type === "email" && (
						<Anchor href={`mailto:${text}`}>{text}</Anchor>
					)}
					{type === "phone" && (
						<Anchor href={`tel:${text.split(/[\s,-]+/g).join("")}`}>
							{text}
						</Anchor>
					)}
				</ChildWithPrefix>
			))}
		</address>
	);
};
