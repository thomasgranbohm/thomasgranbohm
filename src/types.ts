import { HTMLProps } from "react";

export interface TypeLink {
	name: string;
	link: string;
	type?: string;
}

export interface Classname {
	classname?: string;
}

export type OptionalParams<PropType, ElementType> = PropType &
	HTMLProps<ElementType>;
