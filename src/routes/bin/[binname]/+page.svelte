<script lang="ts">
	import { goto } from '$app/navigation';
	import type { PageServerData } from './$types';
	export let data: PageServerData;
	let anotherBinname = '';
</script>

{#if !data.success}
	<h2>Oh no, this bin does not exist yet!</h2>
	<p>Or it was an error on our part. <label for="anotherBinname">Try another binname:</label></p>
	<input type="text" name="anotherBinname" bind:value={anotherBinname} />
	<button
		on:click={async () => {
			await goto('/bin/' + anotherBinname);
		}}
		disabled={anotherBinname.length == 0}>Go</button
	>
{:else}
	<h2>Here its your bin!</h2>
	<h3>{data.specialname}:</h3>
	<p>{data.content}</p>
{/if}
