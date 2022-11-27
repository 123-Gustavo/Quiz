export default [
    {
        question: "Quanto é 12 vezes 13?",
        type: "Text",
        answer: /\.*[\s]*156[\s]*\.*/gim
    },
    {
        question: "Quem descobriu o Brasil?",
        type: "Select",
        answers: [
            {
                answer: "Um cachorro.",
                correct: false
            },
            {
                answer: "Dom Pedro I",
                correct: false
            },
            {
                answer: "Enzo Gabriel",
                correct: false
            },
            {
                answer: "Pedro Alvez Cabral",
                correct: true
            },
            {
                answer: "Um indio",
                correct: false
            }
        ]
    },
    {
        question: "Quanto é 0 + 0?",
        type: "Select",
        answers: [
            {
                answer: "0",
                correct: false
            },
            {
                answer: "00",
                correct: false
            },
            {
                answer: "0 + 0",
                correct: false
            },
            {
                answer: "Nada",
                correct: true
            },
            {
                answer: "2 vezes 0",
                correct: false
            }
        ]
    },
    {
        question: "Raiz Quadrada de 9",
        type: "Text",
        answer: /\.*[\s]*3[\s]*\.*/gim
    },
    {
        question: "Quanto é x + x - 2?",
        type: "Select",
        answers: [
            {
                answer: "x² - 2",
                correct: false
            },
            {
                answer: "2x - 2",
                correct: false
            },
            {
                answer: "x + x - 2",
                correct: false
            },
            {
                answer: "2x = 2",
                correct: false
            },
            {
                answer: "x = 1",
                correct: true
            }
        ]
    }  
]