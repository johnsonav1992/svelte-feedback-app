<script>
    import { FeedbackStore } from '../stores'

    $: count = $FeedbackStore.length 
	$: average = $FeedbackStore.reduce((prev, {rating}) => prev + rating, 0) / $FeedbackStore.length
</script>

<div class="feedback-stats">
    <h4>{count} Reviews</h4>
    <h4>Ratings Average: {average != NaN ? average.toFixed(1) : average = 0}</h4>
</div>

<style>
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>