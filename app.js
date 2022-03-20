const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition;

const recognition = new window.SpeechRecognition();
//will show real time results iff we set it to true else if we set it to false then it will wait until we finish our speech and then show the results
recognition.interimResults = true;

// recognition.continuous = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) => {
    
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    texts.appendChild(p);
    
    //iff isFinal is true then our current process has ended so to get results of new process we check whether current process has finished or not if it is finished then we create a new paragraph element
    if (e.results[0].isFinal) {
        p = document.createElement('p');
    }

    // console.log(text);
});

recognition.addEventListener('end', () => {
    recognition.start();
});

recognition.start();
