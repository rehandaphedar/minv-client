import { json } from '@sveltejs/kit';

export const GET = () => {
	return json({
		API_SERVER_URI: process.env['API_SERVER_URI'] || 'http://localhost:8001'
	});
};
