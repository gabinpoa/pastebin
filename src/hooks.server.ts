import { KV_REST_API_TOKEN, KV_REST_API_URL } from '$env/static/private';
import { createClient } from '@vercel/kv';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.kv = createClient({
		url: KV_REST_API_URL,
		token: KV_REST_API_TOKEN
	});
	let response = await resolve(event);
	return response;
};
