<script>
	export let name;
	let src = 'https://cyclic-busy-tunic-boa-eu-north-1.s3.eu-north-1.amazonaws.com/public/favicon.png';
</script>

<main>
	<h1>Hello {name}!</h1>
	<img {src} alt="{name} dancing">
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
