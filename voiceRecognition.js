const recognition = new webkitSpeechRecognition();
          recognition.interimResults = true;
          recognition.lang = "pt-BR";
          recognition.continuous = true;
          recognition.onresult = function(event) {
            for (let i = event.resultIndex; i < event.results.length; i++) {
              if (event.results[i].isFinal) {
                const content = event.results[i][0].transcript.trim();
                console.log(content);
                
                //----------- apenas para limpar a pagina --------
                    document.body.innerHTML = '';
                    var p = document.createElement('p');
                    p.textContent = content;
                    document.body.appendChild(p);
               //-------------------------------------------------
                    
                if(content == 'youtube' || content == 'YouTube' ) {
                    window.open('https://www.youtube.com/?gl=BR&hl=pt')
                
                }
              }
            }
          };
recognition.start();
