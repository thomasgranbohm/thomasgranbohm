import React, { HTMLAttributes, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import concatClasses from "../../functions/concatClasses";
import useBreakpoint from "../../functions/useBreakpoint";
import { IconNames } from "../Icon/IconContent";
import { IconLink as IconLinkProps } from "../../info";
import classes from "./IconList.module.scss";
import { IconLink } from "../IconLink";
import { Icon } from "../Icon/Icon";

type IconListProps = {
	scroll?: boolean;
} & (
	| {
			type: "link";
			icons: IconLinkProps[];
	  }
	| {
			type: "icon";
			icons: IconNames[];
	  }
) &
	HTMLAttributes<HTMLElement>;

export const IconList = ({
	className,
	icons,
	scroll,
	type,
	...props
}: IconListProps) => {
	const breakpoint = useBreakpoint();

	const parsedIcons =
		type === "link"
			? (icons as IconLinkProps[])
					.sort((a, b) => a.name.localeCompare(b.name))
					.map((icon) => (
						<IconLink
							breakpoint={breakpoint}
							href={icon.href}
							name={icon.name}
							key={icon.name}
						/>
					))
			: (icons as IconNames[])
					.sort((a, b) => a.localeCompare(b))
					.map((name) => (
						<Icon breakpoint={breakpoint} name={name} key={name} />
					));

	return (
		<div
			className={concatClasses(
				classes["icon-list"],
				[className, className],
				[scroll, classes["scroll"]]
			)}
			{...props}
		>
			{breakpoint === "mobile" ? (
				<Swiper
					slidesPerView={"auto"}
					spaceBetween={16}
					onSwiper={(swiper) => !scroll && swiper.disable()}
					grabCursor
				>
					{parsedIcons.map((icon, i) => (
						<SwiperSlide key={i}>{icon}</SwiperSlide>
					))}
				</Swiper>
			) : (
				parsedIcons
			)}
		</div>
	);
};
