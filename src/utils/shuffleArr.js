function getRandomizeAnswers(incorrects, correct) {
    const newArr = [...incorrects]
    let randomIndex = Math.floor(Math.random() * incorrects.length)
    newArr.splice(randomIndex, 0, correct) 
    return newArr   
}

export default getRandomizeAnswers