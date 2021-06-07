import { HTMLAttributes } from "react";

export type HTMLProps<T> = HTMLAttributes<T>;

export interface TContactInfo {
	discord: string;
	email: string;
	phonenumber: string;
}
