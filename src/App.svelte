<script>
	import FeedbackForm from './components/FeedbackForm.svelte'
	import FeedbackList from './components/FeedbackList.svelte'
	import FeedbackStats from './components/FeedbackStats.svelte'
</script>

<main class="container">
	<h1 class="title">Alex Johnson Web Development Reviews</h1>
	<FeedbackForm />
	<FeedbackStats />
	<FeedbackList />
	<div class="built-with">
		Built with Svelte
		<img class="svelte-img" src="../svelte.svg" alt="" />
	</div>
</main>

<style>
	.title {
		text-align: center;
		margin-bottom: 20px;
	}

	.built-with {
		display: flex;
		font-size: 3rem;
		justify-content: center;
		align-items: center;
		margin: 20px;
	}

	.svelte-img {
		max-width: 50px;
		margin: 10px;
	}

	@media (max-width: 650px) {
		.built-with {
			font-size: 1.5rem;
		}

		.svelte-img {
			max-width: 25px;
		}
	}
</style>
