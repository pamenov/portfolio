const lineToWords = (line) => {
    let identation = 0;
    while (identation < line.length && line[identation] === ' ') {
        identation += 1;
    }
    const words = line.slice(identation).split(' ')
    return {identation, words}
}

export default lineToWords;