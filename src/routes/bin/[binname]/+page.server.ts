import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, locals }) => {
	let content = await locals.kv.get('bin:' + params.binname);

	return { success: content != null, specialname: params.binname, content };
};
