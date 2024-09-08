/**
 * @type {HTMLDivElement[]}
 */
let messages = [];

const ConsoleMessageType = {
    SUCCESS: 0,
    ERROR: 1,
    SHELL: 2,
    PLAIN: 3,
    BREAK: 4,
}

/**
 *
 * @param type {type: ConsoleMessageType}
 * @param message {type: String}
 * @param fontSize {type: Number}
 */
function log(type, message, fontSize) {
    if(fontSize == null) fontSize = 17
    let body = document.getElementById("append");
    let newLineElement = document.createElement("div");
    let elementString = ""
    switch (type) {
        case ConsoleMessageType.SUCCESS:
            elementString = `<p><span class="full-success">SUCCESS!</span>${message}</p>`
            break         
        case ConsoleMessageType.ERROR:
            elementString = `<p><span class="full-error">ERROR!</span>${message}</p>`
            break         
        case ConsoleMessageType.SHELL:
            elementString = `<p><span class="main">guest@lukynka.cloud</span>:$~ ${message}</p>`
            break         
        case ConsoleMessageType.PLAIN:
            elementString = `<p class="white">${message}</p>`
            break
        case ConsoleMessageType.BREAK:
            elementString = `<br>`
    }
    elementString = `<div style="font-size: ${fontSize}px">${elementString}</div>`
    elementString = applyStyleTags(elementString, "accessory")
    elementString = applyStyleTags(elementString, "highlight")
    elementString = applyStyleTags(elementString, "accent")
    elementString = applyStyleTags(elementString, "red")
    elementString = applyStyleTags(elementString, "orange")
    elementString = applyStyleTags(elementString, "yellow")
    elementString = applyStyleTags(elementString, "green")
    elementString = applyStyleTags(elementString, "aqua")
    elementString = applyStyleTags(elementString, "blue")
    elementString = applyStyleTags(elementString, "gray")
    elementString = applyStyleTags(elementString, "r")
    elementString = applyStyleTags(elementString, "invisible")
    elementString = applyStyleTags(elementString, "reset")

    if(messages.length > 27) {
        let first = messages.shift()
        first.remove()
    }

    newLineElement.innerHTML = elementString
    body.appendChild(newLineElement)
    messages.push(newLineElement)
}