import { HTMLAttributes } from "react";

export type HTMLProps<T> = HTMLAttributes<T>;

export interface TContactInfo {
	email: string;
	phonenumber: string;
}
