"use strict";
//creating interfaces
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//creating selectors DOM
//selectors for my team
const cPick = document.querySelector(`.C`);
const pgPick = document.querySelector(`.PG`);
const sgPick = document.querySelector(`.SG`);
const sfPick = document.querySelector(`.SF`);
const pfPick = document.querySelector(`.PF`);
const cPickDivs = document.querySelector(`.C *`);
const pgPickDivs = document.querySelector(`.PG *`);
const sgPickDivs = document.querySelector(`.SG *`);
const sfPickDivs = document.querySelector(`.SF *`);
const pfPickDivs = document.querySelector(`.PF *`);
//selector table
const tableSel = document.querySelector(`table`);
//selectors inputs
const pntSel = document.querySelector(`.pRange`);
const twoSel = document.querySelector(`.TwoRange`);
const threeSel = document.querySelector(`.ThreeRange`);
const psnSel = document.querySelector(`.position`);
//selector search button
const btnSearch = document.querySelector(`.submit`);
//base url
const BASE_URL = ` https://nbaserver-q21u.onrender.com/api/filter`;
//arrey of my team
const myTeam = [];
const spanPoints = document.querySelector(`.pntspan`);
const spanTwo = document.querySelector(`.twospan`);
const spanThree = document.querySelector(`.threespan`);
const tdSel = document.querySelector(`td`);
//function return player object for api from input
const createPlayerObject = () => {
    const playerToSearch = {
        position: psnSel.value,
        twoPercent: +twoSel.value,
        threePercent: +threeSel.value,
        points: +pntSel.value
    };
    return playerToSearch;
};
//async function that called by post to server
const callAPI = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const playerObject = createPlayerObject();
        const res = yield fetch(BASE_URL, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: yield JSON.stringify(playerObject)
        });
        console.log(playerObject);
        const relevantPlayers = yield res.json();
        yield fillTheTable(relevantPlayers);
    }
    catch (err) {
        alert(`Couldn't proccess the search!`);
    }
});
//function thats fill the table
const fillTheTable = (arreyOfPlayers) => {
    while (tableSel.rows.length > 1) {
        tableSel.deleteRow(1);
    }
    for (let i = 0; i < arreyOfPlayers.length; i++) {
        const trToAdd = document.createElement(`tr`);
        const tdNmaeToAdd = document.createElement(`td`);
        const tdPsnToAdd = document.createElement(`td`);
        const tdPtsToAdd = document.createElement(`td`);
        const td2ToAdd = document.createElement(`td`);
        const td3ToAdd = document.createElement(`td`);
        const tdAddToAdd = document.createElement(`td`);
        tdNmaeToAdd.textContent = arreyOfPlayers[i].playerName;
        // i made the ! becouse i knoe i'll get it from api
        tdPsnToAdd.textContent = arreyOfPlayers[i].position;
        tdPtsToAdd.textContent = arreyOfPlayers[i].points.toString();
        td2ToAdd.textContent = arreyOfPlayers[i].twoPercent.toString();
        td3ToAdd.textContent = arreyOfPlayers[i].threePercent.toString();
        const btnAddToTeam = document.createElement(`button`);
        btnAddToTeam.classList.add(`btnAddToTeam`);
        btnAddToTeam.textContent = `add ${arreyOfPlayers[i].playerName} to carrent team`;
        tdAddToAdd.appendChild(btnAddToTeam);
        trToAdd.append(tdNmaeToAdd, tdPsnToAdd, tdPtsToAdd, td2ToAdd, td3ToAdd, tdAddToAdd);
        tableSel.appendChild(trToAdd);
        btnAddToTeam.addEventListener(`click`, () => {
            const myNewTeam = myTeam.filter(p => p.position !== arreyOfPlayers[i].position);
            myNewTeam.push(arreyOfPlayers[i]);
            fillMyTeam(myNewTeam);
        });
    }
};
const fillMyTeam = (myNewTeam) => {
    myNewTeam.forEach(P => {
        switch (P.position) {
            case `C`:
                {
                    if (cPickDivs) {
                        cPickDivs.remove();
                    }
                    const divName = document.createElement(`div`);
                    const div3Per = document.createElement(`div`);
                    const div2Per = document.createElement(`div`);
                    const divPoints = document.createElement(`div`);
                    divName.textContent = `${P.playerName}`;
                    div3Per.innerText = `Three Percent : ${P.threePercent}%`;
                    div2Per.innerHTML = `Two Percent : ${P.twoPercent}`;
                    divPoints.innerText = `Points : ${P.points}`;
                    cPick.append(divName, div3Per, div2Per, divPoints);
                }
                break;
            case `PG`:
                {
                    if (pgPickDivs) {
                        pgPickDivs.remove();
                    }
                    console.log(`pg`);
                    const divName = document.createElement(`div`);
                    const div3Per = document.createElement(`div`);
                    const div2Per = document.createElement(`div`);
                    const divPoints = document.createElement(`div`);
                    divName.textContent = `${P.playerName}`;
                    div3Per.innerText = `Three Percent : ${P.threePercent}%`;
                    div2Per.innerHTML = `Two Percent : ${P.twoPercent}`;
                    divPoints.innerText = `Points : ${P.points}`;
                    pgPick.append(divName, div3Per, div2Per, divPoints);
                }
                break;
            case `SG`:
                {
                    if (sgPickDivs) {
                        sgPickDivs.remove();
                    }
                    const divName = document.createElement(`div`);
                    const div3Per = document.createElement(`div`);
                    const div2Per = document.createElement(`div`);
                    const divPoints = document.createElement(`div`);
                    divName.textContent = `${P.playerName}`;
                    div3Per.innerText = `Three Percent : ${P.threePercent}%`;
                    div2Per.innerHTML = `Two Percent : ${P.twoPercent}`;
                    divPoints.innerText = `Points : ${P.points}`;
                    sgPick.append(divName, div3Per, div2Per, divPoints);
                }
                break;
            case `SF`:
                {
                    if (sfPickDivs) {
                        sfPickDivs.remove();
                    }
                    const divName = document.createElement(`div`);
                    const div3Per = document.createElement(`div`);
                    const div2Per = document.createElement(`div`);
                    const divPoints = document.createElement(`div`);
                    divName.textContent = `${P.playerName}`;
                    div3Per.innerText = `Three Percent : ${P.threePercent}%`;
                    div2Per.innerHTML = `Two Percent : ${P.twoPercent}`;
                    divPoints.innerText = `Points : ${P.points}`;
                    sfPick.append(divName, div3Per, div2Per, divPoints);
                }
                break;
            case `PF`:
                {
                    if (pfPickDivs) {
                        pfPickDivs.remove();
                    }
                    const divName = document.createElement(`div`);
                    const div3Per = document.createElement(`div`);
                    const div2Per = document.createElement(`div`);
                    const divPoints = document.createElement(`div`);
                    divName.textContent = `${P.playerName}`;
                    div3Per.innerText = `Three Percent : ${P.threePercent}%`;
                    div2Per.innerHTML = `Two Percent : ${P.twoPercent}`;
                    divPoints.innerText = `Points : ${P.points}`;
                    pfPick.append(divName, div3Per, div2Per, divPoints);
                }
                break;
        }
    });
};
btnSearch.addEventListener(`click`, callAPI);
pntSel.addEventListener(`change`, () => {
    spanPoints.textContent = pntSel.value;
    spanPoints.style.display = `flex`;
});
twoSel.addEventListener(`change`, () => {
    spanTwo.style.display = `flex`;
    spanTwo.textContent = twoSel.value;
});
threeSel.addEventListener(`change`, () => {
    spanThree.style.display = `flex`;
    spanThree.textContent = threeSel.value;
});
