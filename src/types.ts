import { HTMLAttributes } from "react";

export interface TypeImage {
	name: string;
}
export interface TypeLink extends TypeImage {
	link: string;
	type?: string;
}

export interface Classname {
	classname?: string;
}

export type OptionalParams<PropType, ElementType> = PropType &
	HTMLAttributes<ElementType>;
