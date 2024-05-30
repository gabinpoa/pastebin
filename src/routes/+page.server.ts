import type { Actions } from './$types';

export const actions: Actions = {
	default: async ({ request, locals }) => {
		let data = await request.formData();
		let specialname = data.get('specialname');
		let content = data.get('content');

		let response = await locals.kv.set('bin:' + specialname, content);

		return { success: response != null, specialname };
	}
};
