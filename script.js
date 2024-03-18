const ques = [{
    question: "Which of the following is a client site language?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
},
{
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
},
{
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
},
{
    question: "What does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Cascading Style Sheet",
    c: "Jason Object Notation",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "b",
}
];


let index=0; 
let total= ques.length;
let right=0;
let wrong=0;
const questionBox= document.getElementById("questionBox");
const optionInputs= document.querySelectorAll("input[type='radio']");
let submit= document.getElementById("submit");

const reset= ()=>{
    optionInputs.forEach((input)=>{
        input.checked= false;        
    })
}

const endQuiz= ()=>{
    document.getElementsByClassName("container")[0].innerHTML= `
    <h3>Thankyou for attending the Quiz </h3> 
    <h2> Your Score:  ${right} /${total} </h2>`
};

const loadQuestion = ()=>{
    if(index === total){
        return endQuiz();
    }
    reset();
    const data= ques[index];
    questionBox.innerText= `${index+1}) ${data.question}`;
    optionInputs[0].nextElementSibling.innerText= data.a;
    optionInputs[1].nextElementSibling.innerText= data.b;
    optionInputs[2].nextElementSibling.innerText= data.c;
    optionInputs[3].nextElementSibling.innerText= data.d;
};
loadQuestion();

submit.addEventListener('click',() => {
    const data= ques[index];
    const ans= getAnswer();
    if(ans== data.correct){
        right+=1;
    }
    else{
        wrong+=1;
    }
    index+=1;
    loadQuestion();
});

const getAnswer= ()=>{
    let ans;
    optionInputs.forEach((input)=>{
        if(input.checked){
            ans= input.value;
        }
    })
    return ans;
}


