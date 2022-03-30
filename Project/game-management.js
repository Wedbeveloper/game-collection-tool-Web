var sheet = document.styleSheets[0];
var userCustomConsoleInput = document.querySelector(".userConsoleInput")
var currConsole = ""

var addConsoleButton = document.querySelector(".addConsoleButton")
var addGameButton = document.querySelector(".addGameButton")

const consoleDropdown = document.querySelector("#consoleSelection")
var selectedConsole = consoleDropdown.options[consoleDropdown.selectedIndex].value

//Custom console and game adding text boxes respectively
var consoleTextInput = document.querySelector("#userCustomConsole")
var gameTextInput = document.querySelector("#gameInput")

//Initializing empty strings for both console and game names
var customConsoleName = ""
var newGameName = ""

//Below line taken out because I don't think I ever call it. Keeping just in case.
//var consoleSelection = document.querySelector(".consoleSelect")

//Making sure console name is updated whenever new key pressed in textbox
consoleTextInput.addEventListener("keyup", function(){
    customConsoleName = consoleTextInput.value;
})

//Making sure game name is updated whenever new key pressed in textbox
gameTextInput.addEventListener("keyup", function(){
    newGameName = gameTextInput.value
})

//Object list to update each console's game list
var consoleMap = new Map()

//Display or take away custom console input text box
consoleDropdown.addEventListener("change", function() {
    selectedConsole = consoleDropdown.options[consoleDropdown.selectedIndex].value
    if (selectedConsole === "Custom Console") {
        sheet.deleteRule(0)
        sheet.insertRule(".customConsoleInput {display: block;}", 0)
    }
    else {
        sheet.deleteRule(0)
        sheet.insertRule(".customConsoleInput {display: none;}", 0)
    }
})

//Button instructions. Create new console in console list when clicked.
addConsoleButton.addEventListener("click", function() {
    if (selectedConsole != "Custom Console") {
        addConsole(selectedConsole)
    }
    else {
        addCustomConsole(customConsoleName)
    }
})

//Set games for the currently selected console which is set by clicking a console
addGameButton.addEventListener("click", function() {
    setGames(currConsole)
})

function addConsole (selectedConsole){

    //Set up new console nodes to make up new console entry.
    let newConsole = document.createElement('div')
    let newConsoleImgContainer = document.createElement('div')
    let newConsoleNameContainer = document.createElement('div')
    let newConsoleImage = document.createElement('img')
    let newConsoleName = document.createElement('p')

    //Given console name, appoint image and name of console added accordingly.
    switch (selectedConsole) {
        case "Xbox":
            newConsoleName.innerHTML = "Xbox"
            newConsoleImage.src = "Images" + "\\" +"XBOGLogo.png"
            newConsoleImage.width="40"
            newConsoleImage.height="40"
            newConsole.classList.add("xboxConsole")
            newConsoleName.classList.add("consoleXboxName")
            break
        case "Xbox 360":
            newConsoleName.innerHTML = "Xbox 360"
            newConsoleImage.src = "Images" + "\\" +"XB360Logo.png"
            newConsoleImage.width="25"
            newConsoleImage.height="25"
            newConsole.classList.add("xbox360Console")
            newConsoleName.classList.add("consoleName")
            break
        case "Xbox One":
            newConsoleName.innerHTML = "Xbox One"
            newConsoleImage.src = "Images" + "\\" +"XBOneLogo.png"
            newConsoleImage.width="27"
            newConsoleImage.height="25"
            newConsole.classList.add("genericConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Nintendo 64":
            newConsoleName.innerHTML = "Nintendo 64"
            newConsoleImage.src = "Images" + "\\" +"N64Logo.png"
            newConsoleImage.width="48"
            newConsoleImage.height="12.5"
            newConsole.classList.add("genericConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Gamecube":
            newConsoleName.innerHTML = "Gamecube"
            newConsoleImage.src = "Images" + "\\" +"GCLogo.png"
            newConsoleImage.width="35"
            newConsoleImage.height="30"
            newConsole.classList.add("gamecubeConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "NES":
            newConsoleName.innerHTML = "NES"
            newConsoleImage.src = "Images" + "\\" +"NESLogo.png"
            newConsoleImage.width="30"
            newConsoleImage.height="30"
            newConsole.classList.add("genericConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Super Nintendo":
            newConsoleName.innerHTML = "SNES"
            newConsoleImage.src = "Images" + "\\" +"SNESLogo.png"
            newConsoleImage.width="30"
            newConsoleImage.height="30"
            newConsole.classList.add("genericConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Nintendo Wii":
            newConsoleName.innerHTML = "Wii"
            newConsoleImage.src = "Images" + "\\" +"WIILogo.png"
            newConsoleImage.width="30"
            newConsoleImage.height="30"
            newConsole.classList.add("genericConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Playstation 1":
            newConsoleName.innerHTML = "Playstation 1"
            newConsoleImage.src = "Images" + "\\" +"PS1Logo.png"
            newConsoleImage.width="27"
            newConsoleImage.height="25"
            newConsole.classList.add("playstationConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Playstation 2":
            newConsoleName.innerHTML = "Playstation 2"
            newConsoleImage.src = "Images" + "\\" +"PS2Logo.png"
            newConsoleImage.width="40"
            newConsoleImage.height="42"
            newConsole.classList.add("playstationConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Sega Dreamcast":
            newConsoleName.innerHTML = "Sega Dreamcast"
            newConsoleImage.src = "Images" + "\\" +"DCLogo.png"
            newConsoleImage.width="35"
            newConsoleImage.height="27"
            newConsole.classList.add("genericConsole")
            newConsoleName.classList.add("consoleName")
            break
        case "Sega Genesis":
            newConsoleName.innerHTML = "Sega Genesis"
            newConsoleImage.src = "Images" + "\\" +"GenesisLogo.png"
            newConsoleImage.width="50"
            newConsoleImage.height="15"
            newConsole.classList.add("genericConsole")
            newConsoleName.classList.add("consoleName")
            break
        default:
            console.log(userConsoleInput)
            newConsoleImage.src = "Images" + "\\" +"placeholder.png"
            newConsoleImage.width="25"
            newConsoleImage.height="25"
    }

    //Add classes to the new nodes for style sheet
    newConsole.classList.add("consoleContainer")
    newConsoleImgContainer.classList.add("consoleImageContainer")
    newConsoleNameContainer.classList.add("consoleTextContainer")

    //Add image node and p node to IMG and Name containers
    newConsoleImgContainer.appendChild(newConsoleImage)
    newConsoleNameContainer.appendChild(newConsoleName)
    
    //Append image and console name containers to the new console container
    newConsole.appendChild(newConsoleImgContainer)
    newConsole.appendChild(newConsoleNameContainer)

    let consoleList = document.querySelector(".consoleSelect")
    consoleList.appendChild(newConsole)

    //Getting the name of the new console in string format
    let newConsoleNameString = newConsoleName.innerHTML

    //This portion below allows me to set a click event listener for each new console added.
    //Function within a function as to make sure the called getGames only happens when clicked.
    newConsole.addEventListener("click", function() {
        currConsole = newConsoleNameString
        getGames(newConsoleNameString)
    })

    consoleMap.set(newConsoleName.innerHTML, new Array())

    //Set current console being added to to console that was just added.
    currConsole = newConsoleNameString
    let descriptorText = document.querySelector(".columnGameDiscriptorText")
    descriptorText.innerHTML = currConsole + " Games"
}

function addCustomConsole (consoleName){
    //Functionally similar to addConsole function without the cases
    let newConsole = document.createElement('div')
    let newConsoleImgContainer = document.createElement('div')
    let newConsoleNameContainer = document.createElement('div')
    let newConsoleImage = document.createElement('img')
    let newConsoleName = document.createElement('p')

    newConsoleImage.src = "Images" + "\\" +"placeholder.png"
    newConsoleImage.width="25"
    newConsoleImage.height="25"
    newConsoleName.innerHTML = consoleName

    newConsole.classList.add("consoleContainer")
    newConsoleImgContainer.classList.add("consoleImageContainer")
    newConsoleNameContainer.classList.add("consoleTextContainer")

    newConsoleImgContainer.appendChild(newConsoleImage)
    newConsoleNameContainer.appendChild(newConsoleName)
    
    newConsole.appendChild(newConsoleImgContainer)
    newConsole.appendChild(newConsoleNameContainer)

    document.querySelector(".consoleSelect").appendChild(newConsole)

    let newConsoleNameString = newConsoleName.innerHTML

    newConsole.addEventListener("click", function() {
        currConsole = newConsoleNameString
        getGames(newConsoleNameString)
    })
    consoleMap.set(newConsoleName.innerHTML, new Array())

    //Set current console being added to to console that was just added.
    currConsole = newConsoleNameString
}

function setGames(passedConsole) {
    //Grabbing the array from the key within console map, this DOES mutate
    let currConsoleGameList = consoleMap.get(passedConsole)
    console.log("In console " + passedConsole)

    //Add game from text box to console's keys
    currConsoleGameList.push(newGameName)
    console.log(consoleMap.get(passedConsole))

    getGames(passedConsole)
}

function getGames(passedConsoleName) {
    console.log(passedConsoleName)
    let insertPoint = document.querySelector(".consoleGamesContent")
    let consoleList = document.querySelectorAll(".consoleSelect > .consoleContainer > .consoleTextContainer > p")
    let currConsole = consoleMap.get(passedConsoleName)
    let descriptorText = document.querySelector(".columnGameDiscriptorText")
    descriptorText.innerHTML = passedConsoleName + " Games"

    let newGame = document.createElement("p")
    newGame.id = "gameText"
    
    if (currConsole.length != 0) {
        console.log(currConsole.length)
        currConsole.forEach(element => {
            newGame.innerHTML += element + "<br>"
        });
    }
    
    if (insertPoint.hasChildNodes()) {
        insertPoint.removeChild(insertPoint.firstChild)
    }
    insertPoint.appendChild(newGame)
}