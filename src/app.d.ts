// See https://kit.svelte.dev/docs/types#app

import type { VercelKV } from '@vercel/kv';

// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			kv: VercelKV;
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
