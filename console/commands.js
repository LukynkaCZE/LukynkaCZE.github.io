/**
 * @type {Command[]}
 */
let commands = []

/**
 * @class Command
 * @param {string} command - The command to be executed.
 * @param {function} unit - The function that will execute the command.
 */
class Command {
    /**
     * @param {string} command - The command to be executed.
     * @param {function} unit - The function that will execute the command.
     */
    constructor(command, unit) {
        if (typeof unit !== 'function') {
            throw new TypeError('Unit must be a function.');
        }

        this.name = command;
        this.unit = unit;
    }

    run() {
        this.unit(this.name);
    }
}

/**
 * @param message {string}
 */
function sendSimple(message) {
    log(ConsoleMessageType.PLAIN, message)
}

function sendSocials() {
    clear()
    log(ConsoleMessageType.PLAIN, "<b>Socials:</b>")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} {red}<i class=\"fa-brands fa-twitter\"></i> <a class='a-red' href='https://x.com/LukynkaCze'>Twitter</a>")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} {orange}<i class=\"fa-brands fa-github\"></i> <a class='a-orange' href='https://github.com/LukynkaCZE/'>Github</a>")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} {yellow}<i class=\"fa-brands fa-twitch\"></i> <a class='a-yellow' href='https://twitch.tv/LukynkaCZE/'>Twitch</a>")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} {green}<i class=\"fa-brands fa-discord\"></i> <a class='a-green' href='https://discord.gg/SA9nmfMkdc'>Discord</a>")
    logEmpty()
}

function sendExperience() {
    clear()
    log(ConsoleMessageType.PLAIN, "<b>Experience:</b>")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} Lead Developer {gray}▸{/gray} {red}BlockWars")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} Developer {gray}▸{/gray} {orange}Capollo Media")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} Mod/Plugin Developer {gray}▸{/gray} {green}Captain Puffy")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} Mod Developer {gray}▸{/gray} {aqua}Neuro Sama / VedalAI")
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} Lead & Lead Developer {gray}▸{/gray} {accent}Below Bedrock")
    logEmpty()
}


commands.push(new Command("sh ./welcome.sh", sendLoadMessage))
commands.push(new Command("sh welcome.sh", sendLoadMessage))

commands.push(new Command("clear", clear))

commands.push(new Command("experience", () => {
    sendExperience()
}))

commands.push(new Command("help", () => {
    clear()
    log(ConsoleMessageType.PLAIN, "💻 Type <b><span class=\"accessory\">\"projects\"</span></b> to see all of my projects")
    log(ConsoleMessageType.PLAIN, "✨ Type <b><span class=\"accessory\">\"socials\"</span></b> to see all of my socials")
    log(ConsoleMessageType.PLAIN, "📝 Type <b><span class=\"accessory\">\"experience\"</span></b> to see my experience")
    log(ConsoleMessageType.PLAIN, "🐈 Type <b>{accessory}\"cat\"{/accessory}</b> to see meower")
    logEmpty()
}))

commands.push(new Command("socials", sendSocials))
commands.push(new Command("social", sendSocials))
commands.push(new Command("links", sendSocials))

commands.push(new Command("vim", () => sendSimple("no.")))
commands.push(new Command("nvim", () => sendSimple("no.")))

commands.push(new Command("cat", () => {
    log(ConsoleMessageType.PLAIN, "  ／l、")
    log(ConsoleMessageType.PLAIN, " （ﾟ､ ｡ ７  <i>meow?</i>")
    log(ConsoleMessageType.PLAIN, "   l  ~ヽ")
    log(ConsoleMessageType.PLAIN, "   じしf_,)ノ")
}))

commands.push(new Command("projects", () => {
    clear()
    log(ConsoleMessageType.PLAIN, "✨ {red}<b>Pretty Log</b>{/red}", 20)
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} A Kotlin logging library focused on readability in console. ")
    log(ConsoleMessageType.PLAIN, "  PrettyLog uses ANSI color codes to make your logs look more <b><i>✨ pretty ✨</i></b>")
    log(ConsoleMessageType.PLAIN, "  <a class='a-red' href='https://github.com/LukynkaCZE/PrettyLog/'>[Open on GitHub ↗]</a>")
    logEmpty()
    log(ConsoleMessageType.PLAIN, "🌐 {orange}<b>Lightweight Kotlin Web Server\n</b>{/orange}", 20)
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} A simple, easy to use and lightweight kotlin web server for small quick projects")
    log(ConsoleMessageType.PLAIN, "  <a class='a-orange' href='https://github.com/LukynkaCZE/LKWS/'>[Open on GitHub ↗]</a>")
    logEmpty()
    log(ConsoleMessageType.PLAIN, "📂 {yellow}<b>Better Saved Hotbars\n</b>{/yellow}", 20)
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} A mod allows you to drag items into the saved hotbars")
    log(ConsoleMessageType.PLAIN, "  tab in creative inventory insead of having to use keybind")
    log(ConsoleMessageType.PLAIN, "  to save entire hotbar!")
    log(ConsoleMessageType.PLAIN, "  <a class='a-yellow' href='https://github.com/LukynkaCZE/better-saved-hotbars'>[Open on GitHub ↗]</a>")
    logEmpty()
    log(ConsoleMessageType.PLAIN, "🌊 {green}<b>DockyardMC\n</b>{/green}", 20)
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} DockyardMC open-source, fast and lightweight Minecraft server protocol")
    log(ConsoleMessageType.PLAIN, "  implementation that's written from scratch in Kotlin without any code from Mojang" )
    log(ConsoleMessageType.PLAIN, "  <a class='a-green' href='https://github.com/DockyardMC/Dockyard/'>[Open on GitHub ↗]</a>")
    logEmpty()
    log(ConsoleMessageType.PLAIN, "🔮 {aqua}<b>Ember Seeker\n</b>{/green}", 20)
    log(ConsoleMessageType.PLAIN, "{gray}-{/gray} Minecraft server inspired by the Hermitcraft Decked Out minigame.")
    log(ConsoleMessageType.PLAIN, "  Fully open-source and built with DockyardMC" )
    log(ConsoleMessageType.PLAIN, "  <a class='a-aqua' href='https://github.com/EmberSeekerMC/'>[Open on GitHub ↗]</a>")
    logEmpty()
}))