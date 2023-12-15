const btn = document.querySelector('#emoji');
const emojis = [
    '😆',
    '😅',
    '🤣',
    '😂',
    '😀',
    '🤑',
    '🤨',
    '🙂',
    '😊',
    '😗',
    '😛',
    '😏',
    '🤥',
    '😴',
    '🥺',
    '😧',
    '😇',
    '😳',
    '🙃',
    '🥴',
    '🧐',
    '🤨',
    '😒',
    '🤔',
    '🤭',
    '🥰',
    '🤐',
    '👀',
    '🤔',
    '🤪',
    '🥲',
    '😃',
    '😁',
    '😬',
];

function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}


function changeEmoji() {
    const randomEmoji = getRandomEmoji();
    btn.innerHTML = randomEmoji;
}


function resetEmoji() {
    btn.innerHTML = '🤣';
}