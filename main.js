"use strict"

let randLoveText = [
                    "If I had a flower\n for every time I thought of you, \nI could walk in my garden forever.", 
                    "When you are with me, you make me perfect. I love you.",
                    "You give me the kind of feelings people write novels about.", 
                    "You give me the kind of feelings people write novels about.", 
                    "Dreaming of you keeps me asleep. Being with you keeps me awake.",
                    "You can always feel safe in my arms I’ll never let you go.",
                    "I am in love with your smile, your voice, your body, your laugh, your eyes. But most of all, I am in love with you.",
                    "So many reasons are there to love you. Your cute smile, your sweet laugh, your innocence and your kind heart makes me love you.",
                    "I love every moment spent with you, your love has touched my heart.",
                    "Every single second my love for you grows.",
                    "I want you. All of you. Your flaws. Your mistakes. Your imperfections. I want you, and only you.",
                    "Romance is the glamour which turns the dust of everyday life into a golden haze.",
                    "Lucky me, for I was there the day I met you. You are the greatest woman in all the universe."
]

document.getElementById("heart").addEventListener("click", () => {
    document.getElementById("txt").innerText = randLoveText[Math.round(Math.random() * 12)]
})

// Credit goes to Many People for thier Quotes: see www.everydaypower.com/love-quotes-for-her/