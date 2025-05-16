//letters
const letters = 'abcdefghijklmnopqrstuvwxyz'

// get array from letter
let letterArray= Array.from(letters)

//select letter container
let letterscontainer = document.querySelector('.letters')

//genarte letter
letterArray.forEach(letter =>{

    // create span
    let span = document.createElement("span")

    //create letter text node
    let theletter = document.createTextNode(letter)

    //append the letter to span
    span.appendChild(theletter)
    //add class name on span
    span.className = 'letter-box'
    //append span to letter container
    letterscontainer.appendChild(span)
})

// objact of words + catagories 
const words = {
    programming: ['java', 'html','css','php','sql'],
    movies: ['batman','spiderman','blackclover','joker'],
    people: ['seif','alaa','ahmed','aly','bebo'],
    countries: ['eygpt','syria','qatar','bahrain']
}

//get random property
let allkeys = Object.keys(words)
let randompropertynumber = Math.floor(Math.random() * allkeys.length)
let randompropertyname = allkeys[randompropertynumber]
let randompropertyValue = words[randompropertyname]

let randomvalueNumber = Math.floor(Math.random() * randompropertyValue.length)
//chosen word
let randomvalueValue = randompropertyValue[randomvalueNumber]

//set cataegroy info
document.querySelector('.game-info .category span').innerHTML =randompropertyname;

// select letter guss
let letterGusscontainer = document.querySelector('.letters-guss')

//convert chosen word to array
let lettersandspaces = Array.from(randomvalueValue)

//create span depened on word
lettersandspaces.forEach(letter => {
    
    //create empty span
    let emptyspan = document.createElement('span')
    if (letter === ' ') {
        //add class to span
        emptyspan.className = 'has-space'
    }
    //append spans to letter 
    letterGusscontainer.appendChild(emptyspan)
});
//select guss spans
let gussSpan = document.querySelectorAll('.letters-guss span')

// set wrong attempts
let wrongAttemts = 0

//select the Draw Elemant
let theDraw = document.querySelector('.hangman-draw')
// handle clicking on letters
document.addEventListener('click', (e) =>{
    // set the choose status

    let thestatus = false
    if (e.target.className === 'letter-box') {
        e.target.classList.add('clicked')

        //get clicked letter
        let theclickedLetter = e.target.innerHTML.toLowerCase()

        //the chosen word
        let theChosenWord = Array.from(randomvalueValue.toLowerCase())
        theChosenWord.forEach((wordLetter, Wordindex) =>{
            if (theclickedLetter === wordLetter) {
                
                // set status to correct
                thestatus = true
                //loop on all guess spans
                gussSpan.forEach((span, spanIndex) =>{
                    if (Wordindex === spanIndex){
                        span.innerHTML = theclickedLetter
                    }
                })
            }
        })
        // if letter is wrong
        if(thestatus !== true){

            // increase the wrong attempts
            wrongAttemts++
            
            // add class wrong to he drw elemnt
            theDraw.classList.add(`wrong-${wrongAttemts}`)

            if(wrongAttemts === 8) {
                endGame()
                letterscontainer.classList.add('finished')
            }
        }
    }
})

//emd game function
function endGame(){
    let div = document.createElement('div')

    //create text
    let divText = document.createTextNode(`Game over, the word Is ${randomvalueValue}`)

    // append text to Div
    div.appendChild(divText)
    
    //add class on div
    div.className = 'popup'

    // append to the body
    document.body.appendChild(div)
}