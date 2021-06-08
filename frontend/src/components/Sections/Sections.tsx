import React from "react";
import Markdown from "react-markdown";
import { fetchAPI, getStrapiURL } from "../../utils/api";
import { Anchor } from "../Anchor";
import { ContactInfo } from "../ContactInfo";
import { Icon } from "../Icon";
import { IconLink } from "../IconLink";
import { IconList } from "../IconList";
import { Paragraph } from "../Paragraph";
import { Section } from "../Section/Section";
import { UnorderedList } from "../UnorderedList";

const ContactSection = ({ data: { contacts } }) => {
	return (
		<Section title="Contact me">
			<ContactInfo contacts={contacts} />
		</Section>
	);
};

const IconSection = ({ data: { title, scroll, icons } }) => {
	return (
		<Section title={title}>
			<IconList scroll={scroll}>
				{icons.map(({ content, title, fill, viewbox, link }) => {
					if (link) {
						return (
							<IconLink
								key={title}
								title={title}
								fillColor={fill}
								viewBox={viewbox}
								content={content}
								href={link}
							/>
						);
					}
					return (
						<Icon
							key={title}
							title={title}
							fillColor={fill}
							viewBox={viewbox}
							content={content}
						/>
					);
				})}
			</IconList>
		</Section>
	);
};

const TextSection = ({ data: { title, text } }) => (
	<Section title={title}>
		<Markdown
			children={text}
			components={{
				a({ children, href }) {
					return <Anchor href={href as string}>{children}</Anchor>;
				},
				p({ children }) {
					return <Paragraph>{children}</Paragraph>;
				},
				ul({ children }) {
					return (
						<UnorderedList>
							{children.filter((child) => child !== "\n")}
						</UnorderedList>
					);
				},
			}}
		/>
	</Section>
);

const sections = {
	"sections.text-section": TextSection,
	"sections.icon-section": IconSection,
	"sections.contact-info": ContactSection,
};

const Component = ({ sectionData }) => {
	const SectionComponent = sections[sectionData.__component];

	if (!SectionComponent) {
		return null;
	}

	// Display the section
	return <SectionComponent data={sectionData} />;
};

// Display the list of sections
const Sections = ({ sections }) => {
	return (
		<>
			{sections.map((section) => (
				<Component
					sectionData={section}
					key={`${section.__component}${section.id}`}
				/>
			))}
		</>
	);
};

export default Sections;
