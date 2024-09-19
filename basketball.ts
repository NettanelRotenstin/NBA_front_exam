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

const cPickDivs: HTMLDivElement = document.querySelector(`.c div`)!

const pgPickDivs: HTMLDivElement = document.querySelector(`.pg div`)!

const sgPickDivs: HTMLDivElement = document.querySelector(`.sg div`)!

const sfPickDivs: HTMLDivElement = document.querySelector(`.sf div`)!

const pfPickDivs: HTMLDivElement = document.querySelector(`.pf div`)!
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

const BASE_URL: string = ` https://nbaserver-q21u.onrender.com/api/filter`

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

        const playerObject = createPlayerObject()

        const res: Response = await fetch(BASE_URL, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: await JSON.stringify(
                playerObject

            )

        })

        const relevantPlayers: Player[] = await res.json()

        await fillTheTable(relevantPlayers)

    }
    catch (err) {

        alert(`Couldn't proccess the search!`)
    }
}


//function thats fill the table

const fillTheTable = (arreyOfPlayers: Player[]): void => {

    for (let i = 0; i < arreyOfPlayers.length; i++) {

        const trToAdd: HTMLTableRowElement = document.createElement(`tr`)

        const tdNmaeToAdd: HTMLElement = document.createElement(`td`)

        const tdPsnToAdd: HTMLElement = document.createElement(`td`)

        const tdPtsToAdd: HTMLElement = document.createElement(`td`)

        const td2ToAdd: HTMLElement = document.createElement(`td`)

        const td3ToAdd: HTMLElement = document.createElement(`td`)

        const tdAddToAdd: HTMLElement = document.createElement(`td`)


        tdNmaeToAdd.textContent = arreyOfPlayers[i].playerName!

        // i made the ! becouse i knoe i'll get it from api

        tdPsnToAdd.textContent = arreyOfPlayers[i].position

        tdPtsToAdd.textContent = arreyOfPlayers[i].points.toString()

        td2ToAdd.textContent = arreyOfPlayers[i].twoPercent.toString()

        td3ToAdd.textContent = arreyOfPlayers[i].threePercent.toString()

        const btnAddToTeam: HTMLButtonElement = document.createElement(`button`)

        btnAddToTeam.classList.add(`btnAddToTeam`)

        tdAddToAdd.appendChild(btnAddToTeam)

        trToAdd.append(tdNmaeToAdd, tdPsnToAdd, tdPtsToAdd, td2ToAdd, td3ToAdd, tdAddToAdd)

        tableSel.appendChild(trToAdd)

        btnAddToTeam.addEventListener(`click`, (): void => {
            myTeam.filter(p => p.position !== arreyOfPlayers[i].position)
            myTeam.push(arreyOfPlayers[i])
             
            fillMyTeam(myTeam)

        })

    }
}



const fillMyTeam = (myTeam: Player[]): void => {
    myTeam.forEach(P => {
        switch(P.position){
            case `c`:{
                cPickDivs.innerHTML = ``

                const divName:HTMLDivElement = document.createElement(`div`)!

                const div3Per:HTMLDivElement = document.createElement(`div`)!

                const div2Per:HTMLDivElement = document.createElement(`div`)!

                const divPoints:HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                cPick.append(divName,div3Per,div2Per,divPoints)

            }
            case `pg`:{
                pgPickDivs.innerHTML = ``

                const divName:HTMLDivElement = document.createElement(`div`)!

                const div3Per:HTMLDivElement = document.createElement(`div`)!

                const div2Per:HTMLDivElement = document.createElement(`div`)!

                const divPoints:HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                pgPick.append(divName,div3Per,div2Per,divPoints)

            }

            case `sg`:{
                sgPickDivs.innerHTML = ``

                const divName:HTMLDivElement = document.createElement(`div`)!

                const div3Per:HTMLDivElement = document.createElement(`div`)!

                const div2Per:HTMLDivElement = document.createElement(`div`)!

                const divPoints:HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                sgPick.append(divName,div3Per,div2Per,divPoints)

            }
            case `sf`:{
                sfPickDivs.innerHTML = ``

                const divName:HTMLDivElement = document.createElement(`div`)!

                const div3Per:HTMLDivElement = document.createElement(`div`)!

                const div2Per:HTMLDivElement = document.createElement(`div`)!

                const divPoints:HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                sfPick.append(divName,div3Per,div2Per,divPoints)

            }

            case `pf`:{
                pfPickDivs.innerHTML = ``

                const divName:HTMLDivElement = document.createElement(`div`)!

                const div3Per:HTMLDivElement = document.createElement(`div`)!

                const div2Per:HTMLDivElement = document.createElement(`div`)!

                const divPoints:HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                pfPick.append(divName,div3Per,div2Per,divPoints)

            }


        }
    });
}

 



btnSearch.addEventListener(`click`, callAPI)


