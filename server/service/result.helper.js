const results = [{
    pageNumber: 1,
    title: "Lesenverstehen, Teil 1",
    questions: [{
        answer: null,
        correctAnswer: 'i'
    }, {
        answer: null,
        correctAnswer: 'd'
    }, {
        answer: null,
        correctAnswer: 'b'
    }, {
        answer: null,
        correctAnswer: 'f'
    }, {
        answer: null,
        correctAnswer: 'h'
    }],
    numberOfCorrectAnswers: null
}, {
    pageNumber: 2,
    title: "Lesenverstehen, Teil 2 ",
    questions: [{
        answer: null,
        correctAnswer: 'c'
    }, {
        answer: null,
        correctAnswer: 'c'
    }, {
        answer: null,
        correctAnswer: 'b'
    }, {
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'a'
    }],
    numberOfCorrectAnswers: null
}, {
    pageNumber: 3,
    title: "Lesenverstehen, Teil 3",
    questions: [{
        answer: null,
        correctAnswer: 'b'
    }, {
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'd'
    }, {
        answer: null,
        correctAnswer: 'X'
    }, {
        answer: null,
        correctAnswer: 'e'
    }, {
        answer: null,
        correctAnswer: 'i'
    }, {
        answer: null,
        correctAnswer: 'k'
    }, {
        answer: null,
        correctAnswer: 'l'
    }, {
        answer: null,
        correctAnswer: 'X'
    }, {
        answer: null,
        correctAnswer: 'g'
    }],
    numberOfCorrectAnswers: null
}, {
    pageNumber: 4,
    title: "Sprachbausteine, Teil 1",
    questions: [{
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'c'
    }, {
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'b'
    }, {
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'b'
    }, {
        answer: null,
        correctAnswer: 'b'
    }, {
        answer: null,
        correctAnswer: 'a'
    }],
    numberOfCorrectAnswers: null
}, {
    pageNumber: 5,
    title: "Sprachbausteine, Teil 2",
    questions: [{
        answer: null,
        correctAnswer: 'h'
    }, {
        answer: null,
        correctAnswer: 'i'
    }, {
        answer: null,
        correctAnswer: 'a'
    }, {
        answer: null,
        correctAnswer: 'b'
    }, {
        answer: null,
        correctAnswer: 'o'
    }, {
        answer: null,
        correctAnswer: 'l'
    }, {
        answer: null,
        correctAnswer: 'm'
    }, {
        answer: null,
        correctAnswer: 'g'
    }, {
        answer: null,
        correctAnswer: 'e'
    }, {
        answer: null,
        correctAnswer: 'f'
    }],
    numberOfCorrectAnswers: null
}];
export function formatResultsWithCorrectAnswers(pagesWithAnswers) {
    let totalCorrectAnswers = 0;
    // iterrate trough pages
    for (let i = 0; i < 5; i++) {
        let correctAnswers = 0;
        // iterrate trough answers
        for (let j = 0; j < 10; j++) {
            if (i < 2 && j === 5) {
                break;
            }
            results[i].questions[j].answer = pagesWithAnswers[i].answers[j].answer;
            if (results[i].questions[j].answer = pagesWithAnswers[i].answers[j].answer) {
                correctAnswers += 1;
            }
        }
        results[i].numberOfCorrectAnswers = correctAnswers
        totalCorrectAnswers += correctAnswers
    }
    return results;
}