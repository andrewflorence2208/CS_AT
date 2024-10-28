//    QUESTIONS

const questions_root = [
     //(Question 1)
    {
        action: "Qual princípio fundamental do Marco Civil garante que todos os dados sejam tratados de forma igual na internet?",
        opt1: {
            text: "Segurança",
            nextpoint: false,
        },
        opt2: {
            text: "Privacidade",
            nextpoint: false,
        },
        opt3: {
            text: "Neutralidade da rede",
            nextpoint: true,
        },
        opt4: {
            text: "Transparência",
            nextpoint: false,
        }
    },
     //(Question 2)
    {
        action: "O Marco Civil da Internet exige que os provedores armazenem os dados de conexão por quanto tempo?",
        opt1: {
            text: "1 mês",
            nextpoint: false,
        },
        opt2: {
            text: "3 meses",
            nextpoint: false,
        },
        opt3: {
            text: "1 ano",
            nextpoint: true,
        },
        opt4: {
            text: "5 anos",
            nextpoint: false,
        }
    },
     //(Question 3)
    {
        action: "Em quais situações os dados de um usuário podem ser acessados sem seu consentimento, segundo o Marco Civil?",
        opt1: {
            text: "Apenas para fins comerciais",
            nextpoint: false,
        },
        opt2: {
            text: "Somente com ordem judicial",
            nextpoint: true,
        },
        opt3: {
            text: "Para envio de propagandas",
            nextpoint: false,
        },
        opt4: {
            text: " A qualquer momento, desde que justificado",
            nextpoint: false,
        }
    },
     //(Question 4)
    {
        action: "O Marco Civil garante a liberdade de expressão na internet, exceto em casos de...",
        opt1: {
            text: "Propagandas",
            nextpoint: false,
        },
        opt2: {
            text: "Críticas a figuras públicas",
            nextpoint: false,
        },
        opt3: {
            text: "Discurso de ódio ou conteúdo ilegal",
            nextpoint: true,
        },
        opt4: {
            text: " Denúncia de más condutas",
            nextpoint: false,
        }
    },
     //(Question 5)
    {
        action: "Segundo o Marco Civil, o que acontece se um provedor de aplicações não remover conteúdos que violem a privacidade de alguém após receber notificação?",
        opt1: {
            text: " É processado civilmente",
            nextpoint: false,
        },
        opt2: {
            text: " É multado automaticamente",
            nextpoint: false,
        },
        opt3: {
            text: "Tem o conteúdo bloqueado temporariamente",
            nextpoint: false,
        },
        opt4: {
            text: "Não sofre nenhuma sanção",
            nextpoint: false,
        }
    },
     //(Question 6)
    {
        action: "Em que ano o Marco Civil da Internet foi sancionado?",
        opt1: {
            text: "2020",
            nextpoint: false,
        },
        opt2: {
            text: "2010",
            nextpoint: false,
        },
        opt3: {
            text: "2017",
            nextpoint: false,
        },
        opt4: {
            text: "2014",
            nextpoint: true,
        }
    },
     //(Question 7)
    {
        action: "Qual desses NÃO é um princípio do Marco Civil da Internet?",
        opt1: {
            text: "Neutralidade de rede",
            nextpoint: false,
        },
        opt2: {
            text: "Liberdade de expressão",
            nextpoint: false,
        },
        opt3: {
            text: "Privacidade e proteção de dados pessoais",
            nextpoint: false,
        },
        opt4: {
            text: "Exclusividade de conteúdo para provedores",
            nextpoint: true,
        }
    },
    //(Question 8)
    {
        action: "Qual é o principal objetivo do Marco Civil da Internet no Brasil?",
        opt1: {
            text: "Controlar o acesso à internet",
            nextpoint: false,
        },
        opt2: {
            text: "Estabelecer direitos e deveres para o uso da internet no Brasil",
            nextpoint: true,
        },
        opt3: {
            text: "Bloquear sites internacionais",
            nextpoint: false,
        },
        opt4: {
            text: "Proibir redes sociais no país",
            nextpoint: false,
        }
    },
]

var questions = questions_root;
var counter = 0;
var timer = 300;

function next_question()
{
    const menu2 = document.getElementsByClassName("menu2")[0];
    menu2.style.display = "grid";
    const menu = document.getElementsByClassName("menu")[0];
    menu.style.display = "none";
    const game_screen = document.getElementsByClassName("game-screen")[0];
    game_screen.style.display = "grid";
    
    
    var quest_n = Math.floor(Math.random() * (questions.length) ) ;
    console.log("next_question", questions.length, questions.indexOf(questions[quest_n]));
    
    
    console.log(quest_n);
    
    const question = document.getElementsByClassName("quest1")[0];
    const bt1 = document.getElementsByClassName("alternative11")[0];
    const bt2 = document.getElementsByClassName("alternative12")[0];
    const bt3 = document.getElementsByClassName("alternative13")[0];
    const bt4 = document.getElementsByClassName("alternative14")[0];
    
    question.innerHTML = questions[quest_n].action;
    bt1.innerHTML = questions[quest_n].opt1.text;
    bt2.innerHTML = questions[quest_n].opt2.text;
    bt3.innerHTML = questions[quest_n].opt3.text;
    bt4.innerHTML = questions[quest_n].opt4.text;
    
    if (questions[quest_n].opt1.nextpoint === true) {
        bt1.setAttribute("onclick", "correct()");
    }
    else if (questions[quest_n].opt1.nextpoint === false) {
        bt1.setAttribute("onclick", "incorrect()");
    }
    if (questions[quest_n].opt2.nextpoint === true) {
        bt2.setAttribute("onclick", "correct()");
    }
    else if (questions[quest_n].opt2.nextpoint === false) {
        bt2.setAttribute("onclick", "incorrect()");
    }
    if (questions[quest_n].opt3.nextpoint === true) {
        bt3.setAttribute("onclick", "correct()");
    }
    else if (questions[quest_n].opt3.nextpoint === false) {
        bt3.setAttribute("onclick", "incorrect()");
    }
    if (questions[quest_n].opt4.nextpoint === true) {
        bt4.setAttribute("onclick", "correct()");
    }
    else if (questions[quest_n].opt4.nextpoint === false) {
        bt4.setAttribute("onclick", "incorrect()");
    }
    
    
    questions.splice(questions.indexOf(questions[quest_n]), 1);
    
    console.log(questions);
    
}

function timer_start()
{
    clock = setInterval(function () {
        timer -= 1;
        document.getElementsByClassName("game_timer")[0].innerHTML = "TIMER: " + timer;
        if (timer <= 0) {
            console.log("tempo acabou");
            clearInterval(clock);
            loose();
        }
    }, 700)
}

function start_game()
{
    timer = 300;
    timer_start();
}

function correct() 
{
    counter++;
    if(counter<8)
    {
        next_question();
        
        const key_display = document.getElementsByClassName("keys")[0];
        key_display.innerHTML += '<img class="key" src="key.gif">';
        
    }
    else if(counter>=8)
    {
        document.getElementsByClassName("game-screen")[0].style.display ="none";
        document.getElementsByClassName("menu2")[0].style.display ="none";
        document.getElementsByClassName("win-msg")[0].style.display ="grid";
    }
        console.log("counter",counter);
        
    }

function incorrect()
{
    timer -= 15;
}

function loose()
{
    counter = 0;
    document.getElementsByClassName("game-screen")[0].style.display = "none";
    document.getElementsByClassName("menu2")[0].style.display = "none";

    const bigL_msg = document.getElementsByClassName("bigL-msg")[0];
    bigL_msg.style.display = "grid";
    document.getElementsByClassName("keys")[0].innerHTML = '';
} 

function quit()
{
    clearInterval(clock);
    counter = 0;
    document.getElementsByClassName("keys")[0].innerHTML = '';

    document.getElementsByClassName("game-screen")[0].style.display = "none";
    document.getElementsByClassName("menu2")[0].style.display = "none";
    document.getElementsByClassName("menu")[0].style.display = "grid";

    document.getElementsByClassName("bigL-msg")[0].style.display = "none";
    document.getElementsByClassName("win-msg")[0].style.display = "none";

}