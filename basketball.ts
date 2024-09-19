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

const cPick: HTMLDivElement = document.querySelector(`.C`)!

const pgPick: HTMLDivElement = document.querySelector(`.PG`)!

const sgPick: HTMLDivElement = document.querySelector(`.SG`)!

const sfPick: HTMLDivElement = document.querySelector(`.SF`)!

const pfPick: HTMLDivElement = document.querySelector(`.PF`)!

const cPickDivs: HTMLDivElement = document.querySelector(`.C *`)!

const pgPickDivs: HTMLDivElement = document.querySelector(`.PG *`)!

const sgPickDivs: HTMLDivElement = document.querySelector(`.SG *`)!

const sfPickDivs: HTMLDivElement = document.querySelector(`.SF *`)!

const pfPickDivs: HTMLDivElement = document.querySelector(`.PF *`)!
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


const spanPoints: HTMLSpanElement = document.querySelector(`.pntspan`)!

const spanTwo: HTMLSpanElement = document.querySelector(`.twospan`)!

const spanThree: HTMLSpanElement = document.querySelector(`.threespan`)!


const tdSel: HTMLElement = document.querySelector(`td`)!

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
        console.log(playerObject)
        const relevantPlayers: Player[] = await res.json()

        await fillTheTable(relevantPlayers)

    }
    catch (err) {

        alert(`Couldn't proccess the search!`)
    }
}


//function thats fill the table

const fillTheTable = (arreyOfPlayers: Player[]): void => {
    
    while (tableSel.rows.length > 1) {
        tableSel.deleteRow(1); 
    }


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

        btnAddToTeam.textContent = `add ${arreyOfPlayers[i].playerName} to carrent team`

        tdAddToAdd.appendChild(btnAddToTeam)

        trToAdd.append(tdNmaeToAdd, tdPsnToAdd, tdPtsToAdd, td2ToAdd, td3ToAdd, tdAddToAdd)

        tableSel.appendChild(trToAdd)

        btnAddToTeam.addEventListener(`click`, (): void => {
            const myNewTeam = myTeam.filter(p => p.position !== arreyOfPlayers[i].position)
            myNewTeam.push(arreyOfPlayers[i])

            fillMyTeam(myNewTeam)

        })

    }
}
 


const fillMyTeam = (myNewTeam: Player[]): void => {
    myNewTeam.forEach(P => {
        switch (P.position) {
            case `C`: {
                if (cPickDivs) {
                    cPickDivs.remove()
                }
                const divName: HTMLDivElement = document.createElement(`div`)!

                const div3Per: HTMLDivElement = document.createElement(`div`)!

                const div2Per: HTMLDivElement = document.createElement(`div`)!

                const divPoints: HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                cPick.append(divName, div3Per, div2Per, divPoints)

            }break
            case `PG`: {
                if (pgPickDivs) {
                    pgPickDivs.remove()
                }
                console.log(`pg`)
                const divName: HTMLDivElement = document.createElement(`div`)!

                const div3Per: HTMLDivElement = document.createElement(`div`)!

                const div2Per: HTMLDivElement = document.createElement(`div`)!

                const divPoints: HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                pgPick.append(divName, div3Per, div2Per, divPoints)

            }break

            case `SG`: {
                if (sgPickDivs) {
                    sgPickDivs.remove()
                }
                const divName: HTMLDivElement = document.createElement(`div`)!

                const div3Per: HTMLDivElement = document.createElement(`div`)!

                const div2Per: HTMLDivElement = document.createElement(`div`)!

                const divPoints: HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                sgPick.append(divName, div3Per, div2Per, divPoints)

            }break
            case `SF`: {

                if (sfPickDivs) {
                    sfPickDivs.remove()
                }
                const divName: HTMLDivElement = document.createElement(`div`)!

                const div3Per: HTMLDivElement = document.createElement(`div`)!

                const div2Per: HTMLDivElement = document.createElement(`div`)!

                const divPoints: HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                sfPick.append(divName, div3Per, div2Per, divPoints)

            }break

            case `PF`: {
                if (pfPickDivs) {
                    pfPickDivs.remove()
                }
                const divName: HTMLDivElement = document.createElement(`div`)!

                const div3Per: HTMLDivElement = document.createElement(`div`)!

                const div2Per: HTMLDivElement = document.createElement(`div`)!

                const divPoints: HTMLDivElement = document.createElement(`div`)!

                divName.textContent = `${P.playerName}`

                div3Per.innerText = `Three Percent : ${P.threePercent}%`

                div2Per.innerHTML = `Two Percent : ${P.twoPercent}`

                divPoints.innerText = `Points : ${P.points}`

                pfPick.append(divName, div3Per, div2Per, divPoints)

            }break


        }
    });
}





btnSearch.addEventListener(`click`, callAPI)


pntSel.addEventListener(`change`, () => {
    spanPoints.textContent = pntSel.value
    spanPoints.style.display = `flex`
})

twoSel.addEventListener(`change`, () => {
    spanTwo.style.display = `flex`
    spanTwo.textContent = twoSel.value
})

threeSel.addEventListener(`change`, () => {
    spanThree.style.display = `flex`
    spanThree.textContent = threeSel.value
})