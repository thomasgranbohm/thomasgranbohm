import { HTMLAttributes } from "react";
import { IconNames } from "./icons";

export interface TypeIcon {
	name: IconNames;
}

export interface TypeImage {
	name: string;
}
export interface TypeLink {
	link: string;
	type?: string;
}

export interface Classname {
	classname?: string;
}

export type OptionalParams<PropType, ElementType> = PropType &
	HTMLAttributes<ElementType>;
