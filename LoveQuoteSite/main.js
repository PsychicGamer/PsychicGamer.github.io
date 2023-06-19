"use strict"

let randLoveText = [
    "If I had a flower for every time I thought of <b><u>you</u></b>, I could walk in my garden forever.", 
    "When <b><u>you</u></b> are with me, <b><u>you</u></b> make me perfect. I love <b><u>you</u></b>.",
    "Dreaming of <b><u>you</u></b> keeps me asleep. Being with <b><u>you</u></b> keeps me awake.",
    "<b><u>You</u></b> can always feel safe in my arms I'll never let <b><u>you</u></b> go.",
    "I am in love with your smile, your voice, your body, your laugh, your eyes. But most of all, I am in love with <b><u>you</u></b>.",
    "So many reasons are there to love <b><u>you</u></b>. Your cute smile, your sweet laugh, your innocence and your kind heart makes me love <b><u>you</u></b>.",
    "I love every moment spent with <b><u>you</u></b>, your love has touched my heart.",
    "Every single second my love for <b><u>you</u></b> grows stronger.",
    "I want <b><u>you</u></b>. All of <b><u>you</u></b>. Your flaws. Your mistakes. Your imperfections. I want <b><u>you</u></b>, and only <b><u>you</u></b>.",
    "Lucky me, for I was there the day I met <b><u>you</u></b>. <b><u>You</u></b> are the greatest woman in all the universe.",
    "Just seeing your face brightens even the darkest of my days. Your light radiantly and adds love in my life. I love <b><u>you</u></b>!",
    "No matter what has happened. No matter what <b><u>you</u></b>'ve done. No matter what <b><u>you</u></b> will do. I will always love <b><u>you</u></b>. I swear it.",
    "'I love <b><u>you</u></b>' begins by I, but it ends up by <b><u>you</u></b>.",
    "I love <b><u>you</u></b> not only for what <b><u>you</u></b> are, but for what I am when I am with <b><u>you</u></b>.",
]

let diffrentLoveText = 0;
let lastTextSent = 0
let isLastText = false
const loveTextsSent = []

document.getElementById("heart").addEventListener("click", () => {
    document.getElementById("hint").innerText = "";
    
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
    document.getElementById("txt").innerHTML = (randomNumber + 1) + '. ' + randLoveText[randomNumber]
    window.scrollTo(0, 300)
    
    console.log(loveTextsSent)
    console.log(diffrentLoveText)
})

// Credit goes to the many People for thier Quotes. See: www.everydaypower.com/love-quotes-for-her/
