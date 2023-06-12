"use strict"

let randLoveText = [
    "If I had a flower for every time I thought of you, I could walk in my garden forever.", 
    "When you are with me, you make me perfect. I love you.",
    "Dreaming of you keeps me asleep. Being with you keeps me awake.",
    "You can always feel safe in my arms I'll never let you go.",
    "I am in love with your smile, your voice, your body, your laugh, your eyes. But most of all, I am in love with you.",
    "So many reasons are there to love you. Your cute smile, your sweet laugh, your innocence and your kind heart makes me love you.",
    "I love every moment spent with you, your love has touched my heart.",
    "Every single second my love for you grows.",
    "I want you. All of you. Your flaws. Your mistakes. Your imperfections. I want you, and only you.",
    "Lucky me, for I was there the day I met you. You are the greatest woman in all the universe.",
    "Just seeing your face brightens even the darkest of my days. Your light radiantly and adds love in my life. I love you!",
    "No matter what has happened. No matter what you've done. No matter what you will do. I will always love you. I swear it.",
    "'I love you' begins by I, but it ends up by you.",
    "I love you not only for what you are, but for what I am when I am with you.",
    
]

let diffrentLoveText = 0;
let lastTextSent = 0
let isLastText = false
const loveTextsSent = []

document.getElementById("heart").addEventListener("click", () => {
    
    let randomNumber = Math.round(Math.random() * 13)
    while (!isLastText) {
        if(randomNumber == lastTextSent) {
            randomNumber = Math.round(Math.random() * 13)
        } else {
            isLastText = true
        }
    }
    
    if (!loveTextsSent.includes(randomNumber)) {
        loveTextsSent.push(randomNumber)
        diffrentLoveText += 1
    }
    document.getElementById("txt").innerText = (randomNumber + 1) + '. ' + randLoveText[randomNumber]
    window.scrollTo(0, 300)
    
    console.log(loveTextsSent)
    console.log(diffrentLoveText)
})

// Credit goes to the many People for thier Quotes. See: www.everydaypower.com/love-quotes-for-her/
