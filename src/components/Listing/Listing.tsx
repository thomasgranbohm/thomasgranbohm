import React from "react";
import classes from "./Listing.module.scss";

export const Listing: React.FC  = ({ children }) => (
	<div className={classes["list"]}>{children}</div>
);
