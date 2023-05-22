const text = document.querySelector(".text")
const butrigth = document.querySelector(".butrigth")
const butleft = document.querySelector(".butleft")
const bandlogo = document.querySelector(".bandlogo")
const card = document.querySelector(".card")
const bl = document.querySelectorAll(".bl")


const logocollection = ["images/bandlogo/acdc.png",
"images/bandlogo/led-zeppeling.png",
"images/bandlogo/pinkfloyd.png",
"images/bandlogo/queen.png",
"images/bandlogo/rollingstones.jpg",
"images/bandlogo/the_beatles.png"]

// bandlogo.style.backgroundImage = `url(${logocollection[getRandomIntInclusive(0,6)]})`

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


function getCharacter(index) {
	return hexCharacters[index]
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}


text.firstElementChild.addEventListener('mouseover', (event)=>{
        text.firstElementChild.style.letterSpacing = "10px"
        text.firstElementChild.style.transition = "1s"

        setTimeout(() => {
        text.firstElementChild.style.transition = "1.2s"
        text.firstElementChild.style.pointerEvents = "none"
        if(screen.width < 1500){
        text.firstElementChild.innerHTML = `<h3 style="font-size: 40px; width: 90vw; height: 2vw;">Here you will see some information about rock</h3>`
        }
        else if(screen.width <= 800){
        text.firstElementChild.innerHTML = `<h3 style="font-size: 40px; width: 100vw; height: 2vw;">Here you will see some information about rock</h3>`
        }
        else{
        text.firstElementChild.innerHTML = `<h3 style="font-size: 40px; width: 1350px; height: 2vw;">Here you will see some information about rock</h3>`
        }
        
        text.firstElementChild.style.letterSpacing = "0px" 

        setTimeout(() => {
            text.firstElementChild.innerHTML = `<h1 style="font-size: 100px">Rock</h1>`
            text.firstElementChild.style.pointerEvents = "auto"
       
            },3500);

        },500);  
})

let i = 0
bandlogo.style.backgroundImage = `url(${logocollection[0]})`
card.firstElementChild.innerText = 'Angus young, Brian Johnson, Stevie Young, Cliff Williams'
card.firstElementChild.nextElementSibling.innerText = '1973'
card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Hard rock,blues rock,rock and roll,heavy metal'
console.log()

butrigth.addEventListener('click',(event)=>{

    i++
    
    if(i == logocollection.length){
        i = 0
    }
    
    bandlogo.style.backgroundImage = `url(${logocollection[i]})`
    
    switch (i){
        case 0:
            card.firstElementChild.innerText = 'Angus young, Brian Johnson, Stevie Young, Cliff Williams'
            card.firstElementChild.nextElementSibling.innerText = '1973'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Hard rock,blues rock,rock and roll,heavy metal'
            break;
        case 1:
            card.firstElementChild.innerText = 'Jimmy Page, John Paul Jones, Robert Plant, John Bonham'
            card.firstElementChild.nextElementSibling.innerText = '1986'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Hard rock,blues rock,folk rock,heavy metal'
            break;
        case 2:
            card.firstElementChild.innerText = 'Syd Barrett, Roger Waters, David Gilmour, Richard Wright, Nick Mason'
            card.firstElementChild.nextElementSibling.innerText = '1964'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Progressive rock,psychedelia,space rock,art rock,experimental rock'
            break;
        case 3:
            card.firstElementChild.innerText = 'Sir Brian May, Freddie Mercury, Roger Taylor, John Deacon'
            card.firstElementChild.nextElementSibling.innerText = '1970'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Rock,arena rock,glam rock,hard rock,heavy metal,progressive rock,pop rock'
            break;
        case 4:
            card.firstElementChild.innerText = 'Brian Jones, Ian Stewart, Charlie Watts, Bill Wyman,Mick Taylor'
            card.firstElementChild.nextElementSibling.innerText = '1962'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Rock,pop,blues'
            break;
        case 5:
            card.firstElementChild.innerText = 'John Lennon, Paul McCartney, George Harrison, Ringo Starr'
            card.firstElementChild.nextElementSibling.innerText = '1960'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Rock,pop,beat,psychedelia'
            break;
    }
})

butleft.addEventListener('click',(event)=>{

    i--

    if(i == -1){
        i = logocollection.length - 1
    }
    bandlogo.style.backgroundImage = `url(${logocollection[i]})`
    

    switch (i){
        case 0:
            card.firstElementChild.innerText = 'Angus young, Brian Johnson, Stevie Young, Cliff Williams'
            card.firstElementChild.nextElementSibling.innerText = '1973'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Hard rock,blues rock,rock and roll,heavy metal'
            break;
        case 1:
            card.firstElementChild.innerText = 'Jimmy Page, John Paul Jones, Robert Plant, John Bonham'
            card.firstElementChild.nextElementSibling.innerText = '1986'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Hard rock,blues rock,folk rock,heavy metal'
            break;
        case 2:
            card.firstElementChild.innerText = 'Syd Barrett, Roger Waters, David Gilmour, Richard Wright, Nick Mason'
            card.firstElementChild.nextElementSibling.innerText = '1964'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Progressive rock,psychedelia,space rock,art rock,experimental rock'
            break;
        case 3:
            card.firstElementChild.innerText = 'Sir Brian May, Freddie Mercury, Roger Taylor, John Deacon'
            card.firstElementChild.nextElementSibling.innerText = '1970'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Rock,arena rock,glam rock,hard rock,heavy metal,progressive rock,pop rock'
            break;
        case 4:
            card.firstElementChild.innerText = 'Brian Jones, Ian Stewart, Charlie Watts, Bill Wyman,Mick Taylor'
            card.firstElementChild.nextElementSibling.innerText = '1962'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Rock,pop,blues'
            break;
        case 5:
            card.firstElementChild.innerText = 'John Lennon, Paul McCartney, George Harrison, Ringo Starr'
            card.firstElementChild.nextElementSibling.innerText = '1960'
            card.firstElementChild.nextElementSibling.nextElementSibling.innerText = 'Rock,pop,beat,psychedelia'
            break;
    }
})

bl.forEach(el =>{
    el.style.border = `10px ridge #403d3d`
    
    el.addEventListener("mouseover", (event)=>{
        if(event.ctrlKey){
            event.target.style.border = `10px ridge ${generateNewColor()}`
        }
        if(event.shiftKey){
            el.style.border = `10px ridge #403d3d`
        }
    })
})