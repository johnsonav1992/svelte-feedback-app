<script>
    import {v4 as uuidv4} from 'uuid'
    import { FeedbackStore } from '../stores.js'
    import Card from './Card.svelte'
    import Button from './Button.svelte'
    import RatingSelect from './RatingSelect.svelte'

    let text = ''
    let rating = 10
    let btnDisabled = true
    let min = 10
    let message

    function handleSelect(e) {
        rating = e.detail
    }

    function handleInput() {
        if (text.trim().length <= min) {
            message = `Text must be at least ${min} characters long`
            btnDisabled = true
        } else {
            message = null
            btnDisabled = false
        }
    }

    function handleSubmit() {
        if(text.trim().length > min) {
            const newFeedback = {
                id: uuidv4(),
                text,
                rating: +rating
            }

            FeedbackStore.update((currentFeedback) => {
                return [newFeedback, ...currentFeedback]
            })

            text = ''
            rating = 10
        }
    }

</script>

<Card>
    <header>
        <h2>How would you rate your service with us?</h2>
    </header>
    <form on:submit|preventDefault={handleSubmit} >
        <RatingSelect on:rating-select={handleSelect} />
        <div class="input-group">
            <input type="text" bind:value={text} on:input={handleInput} placeholder="Tell us something that keeps you coming back">
            <Button disabled={btnDisabled} type="submit">Send</Button>
        </div>
        {#if message}
            <div class="message">{message}</div>
        {/if}
    </form>
</Card>

<style>
    header {
    max-width: 400px;
    margin: auto;
  }

  header h2 {
    font-size: 22px;
    font-weight: 600;
    text-align: center;
  }

  .input-group {
    display: flex;
    flex-direction: row;
    border: 1px solid #ccc;
    padding: 8px 10px;
    border-radius: 8px;
    margin-top: 15px;
  }

  input {
    flex-grow: 2;
    border: none;
    font-size: 16px;
  }

  @media (max-width: 650px) {
    input,
    input::placeholder {
          font-size: .5rem;
      }
  }

  input:focus {
    outline: none;
  }

</style>