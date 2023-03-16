const wordSearch = (letters, word) => { 
    if (letters.length === 0) {
        return null
    }
    
    //look horizontally for word
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    //create vertical matrix
    let verticalMatrix = []
    for (let i = 0; i < letters[0].length; i++) {
        let row = []
        for (let j = 0; j < letters.length; j++) {
            row.push(letters[j][i])
        }
        verticalMatrix.push(row)
    }
    
    //look vertically for the word
    const verticalJoin = verticalMatrix.map(ls => ls.join(''))
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }

    return false;
}

module.exports = wordSearch


  
  