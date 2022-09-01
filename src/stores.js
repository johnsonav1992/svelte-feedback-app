import { writable } from 'svelte/store'

export const FeedbackStore = writable([
    {
        id: 1,
        rating: 10,
        text: `Alex's designs are amazing and he was super easy to work with!`

    },
    {
        id: 2,
        rating: 9,
        text: `Love the apps that have been created for my business!`
    },
    {
        id: 3,
        rating: 10,
        text: `A fantastic web developer!`
    }
])