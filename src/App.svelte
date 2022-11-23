<script>
	import { onMount } from 'svelte';
	import {db} from './Api.svelte';
	import axios from 'axios';
	export let name;

	onMount(async () => {
		// try {
		// 	let res = await db('GET','https://uxdesignapi.cyclic.app/portfolio');
		// 	console.log(res);
		// } catch(e){
		// 	console.log(e);
		// }

		axios.get('api/portfolio')
			.then(function (response) {
				// en cas de réussite de la requête
				console.log(response.data);
			})
			.catch(function (error) {
				// en cas d’échec de la requête
				console.log(error);
			})
	});
</script>
<main>
	<h1>Hello {name}!</h1>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
