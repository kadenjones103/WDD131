
function convert(grade) {
    let points;

    switch (grade) {
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first: 'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];

const wordList = document.querySelector('#wordList');

words.slice(0, 3).forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    wordList.appendChild(li);
});

const studentList = document.querySelector('#studentList');

students.forEach(student => {
    const div = document.createElement('div');
    div.textContent = `${student.first} ${student.last}`;
    div.style.textAlign = 'center';
    div.style.padding = '15px';
    div.style.borderBottom = '2px solid #aaa';
    div.style.fontSize = '24px';
    div.style.fontWeight = 'bold';
    studentList.appendChild(div);
});

words.forEach(word => {
    console.log(word);
});

const filteredWords = words.filter(word => word.length > 5);
console.log(filteredWords);

const totalPoints = ['A', 'B', 'C'].map(convert)
    .reduce((total, points) => total + points, 0);

console.log(totalPoints);
console.log(totalPoints / 3);

const sortedWords = [...words].sort();
console.log(sortedWords);

const passingGrades = ['A', 'B', 'C'].map(convert)
    .filter(points => points >= 2);

console.log(passingGrades);
console.log(passingGrades.length);
