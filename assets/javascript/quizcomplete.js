
// This code below was adapted from the Tutorial created by 'Brian Design' on Youtube, https://www.youtube.com/watch?v=f4fB9Xg2JEY


const hofUsername = document.querySelector('#hofUsername');
const saveScoreButton = document.querySelector('#saveButton');
const finalScore = document.querySelector('#finalScore');
const recentScore = localStorage.getItem('recentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

const MAX_HALL_OF_FAME_ENTRIES = 10;

finalScore.innerText = recentScore;

hofUsername.addEventListener('keyup', () => {
    saveButton.disabled = !hofUsername.value;
});

saveScore = (e) => {
    e.preventDefault();

    const score = {
        score: recentScore,
        name: hofUsername.value 
    };

    highScores.push(score);

    highScores.sort((a,b) => {
        return b.score - a.score;
    });

   highScores.splice(10);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('/index.html');

};