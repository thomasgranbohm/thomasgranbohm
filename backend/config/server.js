module.exports = ({ env }) => ({
	host: env('HOST', '0.0.0.0'),
	port: env.int('PORT', 1337),
	url: env('URL', 'http://localhost:1337/'),
	admin: {
		auth: {
			secret: env('ADMIN_JWT_SECRET', '43b1fe8cdec93f5ca76b728ce718cf5e'),
		},
	},
});
