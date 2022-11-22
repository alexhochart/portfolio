<script>
	export let name;
	let src = 'https://cyclic-busy-tunic-boa-eu-north-1.s3.eu-north-1.amazonaws.com/favicon.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAWKE6TETGDA6JDQCS%2F20221119%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20221119T162046Z&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLWVhc3QtMiJGMEQCIE2gI2k6gzrFlxmXEMVkBA%2BurQ9OlIK4UNOk4Fz11%2B7oAiBoCS8kAtMkAzJq7VLBXMtKPgLRSSP1twfPFa1laoaaQiqoAghhEAAaDDQzNDEyNDMwMTUxNiIMdGy%2Bv%2FTyPyWSYgBZKoUCymnMz%2Fw%2Boiw73CuWDjZkkFy2m43CVwYx%2B%2FrD5B2CDWdc93EZ9HxFPo4UhAr5qKzTa%2BDPWKZfMEoR98euEXCLheBqZUeUncYtH%2Fxfjlxj4jgm2XxIX6yhJoQBe4QLYvNTzYeKgZi9VuuPHFf2VCCQxJKvzXmU1bPuK3NTnLjdCbUaE%2BpSCJ7FydSjv%2Bd%2BY1dfdx0QaJ2jEWtnk4QdCeBMhB9lzSh8UunaoneTbN76UYzAybXE3PMa39emZ37PoTqU7V9JETO39jvXWRkrELDqjRVq2Lp4S12hgX5Y39vrwgo%2BKIBxAOYsBtZA0vOwwvT1FJeiwnU6tjHuPFG288BABpGWmi%2FtMJb445sGOp4BrzKcLQPMTSSpONHZ8Zm2ZGHbC%2BIckUrbuyShkwOp7Ygg57mgLidDmE7aEzV3b2DTuyjrIsu080aVCBQ%2FDwzX81%2Bmov2I%2BdZhrBEBblbwUEHqc9bU76tJIvtiyYFl9sMTZScWy6q7No6zpW4U8ebV9kWP1Prcqw%2Bcsux6goH%2B2snkLXm2vvtujVim7K%2BCg1101A1aMqIdfPnFtHrUNoQ%3D&X-Amz-Signature=d1a98cb08a6069a50969e1d4bcaf4ba83fe216fa3313ffab6bbd8a1fc2b77eed&X-Amz-SignedHeaders=host';
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
