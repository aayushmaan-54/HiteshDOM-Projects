'use script';


const typingText = document.querySelector('.typing');
const words = [
    "is easy; said no one ever.",
    "making your dreams a debugging nightmare since 1995.",
    "Because sometimes 'undefined' is a better option than facing reality.",
    `where 'NaN' is a number, and your logic doesn't matter.`,
    `is like pizza. Even when it's bad, it's still pretty good... or not`,
];
let wordsIndex = 0,
    wordIndex = 0,
    isDeleting = false;


const typeEffect = () => {
    const currentWords = words[wordsIndex];
    const currentWord = currentWords.substring(0, wordIndex);
    typingText.textContent = currentWord;

    if(!isDeleting && wordIndex < currentWords.length) {
        wordIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && wordIndex > 0) {
        wordIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        wordsIndex = !isDeleting ? (wordsIndex + 1) % words.length : wordsIndex;
        setTimeout(typeEffect, 1200);
    }
}


typeEffect();