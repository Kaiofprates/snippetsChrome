const play = document.querySelectorAll(".touchable");
 
const recognition = new webkitSpeechRecognition();
          recognition.interimResults = true;
          recognition.lang = "pt-BR";
          recognition.continuous = true;
          recognition.onresult = function(event) {
            for (let i = event.resultIndex; i < event.results.length; i++) {
              if (event.results[i].isFinal) {
                const content = event.results[i][0].transcript.trim();
                console.log(content);
                if(content == 'tocar' || content == 'Tocar' ) {
                play[1].click()                
                }
                if(content == 'pausar' || content == 'Pausar' ) {
                play[1].click()                
                }
              }
            }
          };
recognition.start();
