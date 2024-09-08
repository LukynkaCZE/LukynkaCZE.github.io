/**
 *
 * @param string {type: string}
 * @param tag {type: string}
 * @returns string
 */
function applyStyleTags(string, tag) {
    string = string.replaceAll(`{${tag}}`, `<span class="${tag}">`)
    string = string.replaceAll(`{/${tag}}`, `</span>`)
    return string
}

function clear() {
    for (let msg of messages) {
        msg.remove()
    }
    messages = []
}

function logEmpty() {
    log(ConsoleMessageType.PLAIN, " ")
}