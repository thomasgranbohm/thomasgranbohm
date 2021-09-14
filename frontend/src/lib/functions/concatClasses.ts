const concatClasses = (...inputs: unknown[]): string | null => {
	return (
		inputs
			.filter((input) => {
				if (input instanceof Array && input[1]) return input;
				else if (typeof input === "string") return input;
				return undefined;
			})
			.map((input) =>
				input instanceof Array && input[1] ? input[0] : input
			)
			.join(" ") || null
	);
};

export default concatClasses;
