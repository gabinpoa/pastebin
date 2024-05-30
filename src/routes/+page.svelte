<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

{#if form == null}
	<form method="post">
		<textarea name="content" placeholder="Here goes what you wanna paste!" cols="30" rows="10"
		></textarea>
		<label for="specialname">Your bin name:</label>
		<input type="text" name="specialname" placeholder="my-special-bin" />
		<button type="submit">Let it bin!</button>
	</form>
{:else if form.success}
	<h2>All right!</h2>
	<p>
		Here you have your bin <a href="/bin/{form.specialname}">{$page.url}bin/{form.specialname}</a>
	</p>
{:else}
	<h2>Oh no, something went wrong!</h2>
	<p>Try reloading the page</p>
	<a href="/">Refresh</a>
{/if}
