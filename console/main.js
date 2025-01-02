let isMobile = Math.min(window.screen.width, window.screen.height) < 768 || navigator.userAgent.indexOf("Mobi") > -1;
if(isMobile) {
    window.location = "mobile.html"
}

function sendWelcomeMessage() {
    setTimeout(() => { log(ConsoleMessageType.SHELL, "sh ./welcome.sh") }, 0)
    setTimeout(() => { sendLoadMessage() }, 300)
}

function sendLoadMessage() {
    logEmpty()
    log(ConsoleMessageType.PLAIN, "<b>Hi!👋 I'm {accent}Maya{/accent} 💜!</b>", 34)
    log(ConsoleMessageType.PLAIN, "Im a passionate Software Developer from {blue}Czech Republic 🇨🇿{/blue} with")
    log(ConsoleMessageType.PLAIN, "{yellow}over 6 years of experience{/yellow}. All coding projects are built from the ground up, from")
    log(ConsoleMessageType.PLAIN, "planning and designing all the way to solving real-life problems with code.")
    logEmpty()
    logEmpty()
    log(ConsoleMessageType.PLAIN, "<b>My main tech stack is:                  Experience:</b>")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} {accent}<i class=\"devicon-kotlin-plain\"></i> Kotlin{/r}                               {gray}-{/gray} Lead Developer {gray}▸{/gray} {red}BlockWars")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} {orange}<i class=\"devicon-java-plain\"></i> Java{/r}                                 {gray}-{/gray} Developer {gray}▸{/gray} {orange}Capollo Media")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} {blue}<i class=\"devicon-csharp-plain\"></i> C#{/r}                                   {gray}-{/gray} Mod/Plugin Developer {gray}▸{/gray} {green}Captain Puffy")
    log(ConsoleMessageType.PLAIN, "{invisible}<i class=\"devicon-kotlin-plain\"></i>{/r}                                        {gray}-{/gray} Mod Developer {gray}▸{/gray} {aqua}Neuro Sama / VedalAI")
    log(ConsoleMessageType.PLAIN, "{invisible}<i class=\"devicon-kotlin-plain\"></i>{/r}                                        {gray}-{/gray} Lead & Lead Developer {gray}▸{/gray} {accent}Below Bedrock")
    logEmpty()
    log(ConsoleMessageType.PLAIN, "<b>Education:</b>")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} Multimedia Study {gray}▸{/gray} {green}EKO Gymnázium a SOŠ Multimediálních studií, Poděbrady{/r}")
    logEmpty()
    log(ConsoleMessageType.PLAIN, "💻 Type <b><span class=\"accessory\">\"projects\"</span></b> to see all of my projects")
    log(ConsoleMessageType.PLAIN, "✨ Type <b><span class=\"accessory\">\"socials\"</span></b> to see all of my socials")
    log(ConsoleMessageType.PLAIN, "📝 Type <b><span class=\"accessory\">\"experience\"</span></b> to see my experience")
    log(ConsoleMessageType.PLAIN, "🐈 Type <b>{accessory}\"cat\"{/accessory}</b> to see meower")
    logEmpty()
    setTimeout(() => {
        document.getElementById("input").style.visibility = "visible"
        let textBox = document.getElementById("textbox")
        textBox.value = ""
        textBox.focus()

    }, 100)
}

/**
 * @param input {HTMLInputElement}
 */
function tryInputSubmit(input) {
    if(event.key === 'Enter') {
        textBoxSubmit(input.value);
    }
}

/**
 * @param message {string}
 */
function textBoxSubmit(message) {
    let error = null

    let command = commands.find(command => command.name === message);
    if(command == null) error = " {red}Not a valid command!"

    if(message.trim().length === 0) error = " {red}Cannot send an empty command!"
    if(message.length > 50) error = " {red}Message too long!"

    log(ConsoleMessageType.SHELL, message)
    let textbox = document.getElementById("textbox")
    textbox.value = ""

    if(error != null) {
        log(ConsoleMessageType.ERROR, error)
        return
    }

    command.run()
}

window.addEventListener('load', () => {
    document.getElementById("input").style.visibility = "hidden"
    sendWelcomeMessage()
});

document.addEventListener("focus", () => {
    document.getElementById("textbox").focus()
})

document.onmouseup = () => {
    setTimeout(() => { document.getElementById("textbox").focus() }, 1)
    console.log(window.screen.width)
    console.log(window.screen.height)
}