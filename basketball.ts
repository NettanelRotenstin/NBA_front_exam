//creating interfaces

interface Player {
    position: string
    twoPercent: number
    threePercent: number
    points: number
    playerName?: string
}

//creating selectors DOM

//selectors for my team

const cPick: HTMLDivElement = document.querySelector(`.c`)!

const pgPick: HTMLDivElement = document.querySelector(`.pg`)!

const sgPick: HTMLDivElement = document.querySelector(`.sg`)!

const sfPick: HTMLDivElement = document.querySelector(`.sf`)!

const pfPick: HTMLDivElement = document.querySelector(`.pf`)!


//selector table

const tableSel: HTMLTableElement = document.querySelector(`table`)!

//selectors inputs

const pntSel: HTMLInputElement = document.querySelector(`.pRange`)!

const twoSel: HTMLInputElement = document.querySelector(`.TwoRange`)!

const threeSel: HTMLInputElement = document.querySelector(`.ThreeRange`)!

const psnSel: HTMLInputElement = document.querySelector(`.position`)!

//selector search button

const btnSearch: HTMLInputElement = document.querySelector(`.submit`)!
 
//base url

const BASE_URL: string = `https://nbaserver-q21u.onrender.com/api/filter`

//arrey of my team

const myTeam: Player[] = []






//function return player object for api from input

const createPlayerObject = (): Player => {
    const playerToSearch: Player = {
        position: psnSel.value,
        twoPercent: +twoSel.value,
        threePercent: +threeSel.value,
        points: +pntSel.value
    }
    return playerToSearch
}




//async function that called by post to server

const callAPI = async (): Promise<void> => {
        try {
        //const search:Player = await createPlayerObject()
         
        const res: Response = await fetch(BASE_URL, {
            method: `POST`,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                position: psnSel.value,
                twoPercent: +twoSel.value,
                threePercent: +threeSel.value,
                points: +pntSel.value
        })

        })
        
        if (res.ok) {
            const relevantPlayers: Player[] = await res.json()
             
            await fillTheTable(relevantPlayers)
        }
    }
    catch (err) {
        alert(`Couldn't proccess the search!`)
    }
}


//function thats fill the table

const fillTheTable = (arreyOfPlayers:Player[]):void =>{
    
    for (let i = 0; i < arreyOfPlayers.length; i++) {
       
        const trToAdd:HTMLTableRowElement = document.createElement(`tr`)  

        const tdNmaeToAdd:HTMLElement = document.createElement(`td`)

        const tdPsnToAdd:HTMLElement = document.createElement(`td`)

        const tdPtsToAdd:HTMLElement = document.createElement(`td`)

        const td2ToAdd:HTMLElement = document.createElement(`td`)

        const td3ToAdd:HTMLElement = document.createElement(`td`)

        const tdAddToAdd:HTMLElement = document.createElement(`td`)

         
        
        tdNmaeToAdd.textContent = arreyOfPlayers[i].playerName!

        // i made the ! becouse i knoe ill get it from api

        tdPsnToAdd.textContent = arreyOfPlayers[i].position

        tdPtsToAdd.textContent = arreyOfPlayers[i].points.toString()        

        td2ToAdd.textContent = arreyOfPlayers[i].twoPercent.toString()

        td3ToAdd.textContent = arreyOfPlayers[i].threePercent.toString()

        const btnAddToTeam:HTMLButtonElement = document.createElement(`button`)

        btnAddToTeam.classList.add(`btnAddToTeam`)

        tdAddToAdd.appendChild(btnAddToTeam)

        tableSel.append(tdNmaeToAdd,tdPsnToAdd,tdPtsToAdd,td2ToAdd,td3ToAdd,tdAddToAdd)

    }
}



btnSearch.addEventListener(`click`,callAPI)