import slugify from 'slugify';

const toSlug = (str: string) =>
	slugify(str, {
		lower: true,
		replacement: '-',
		trim: true,
		strict: true,
		locale: 'en',
	});

export default toSlug;
