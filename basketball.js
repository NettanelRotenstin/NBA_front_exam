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
const cPick = document.querySelector(`.c`);
const pgPick = document.querySelector(`.pg`);
const sgPick = document.querySelector(`.sg`);
const sfPick = document.querySelector(`.sf`);
const pfPick = document.querySelector(`.pf`);
const cPickDivs = document.querySelector(`.c div`);
const pgPickDivs = document.querySelector(`.pg div`);
const sgPickDivs = document.querySelector(`.sg div`);
const sfPickDivs = document.querySelector(`.sf div`);
const pfPickDivs = document.querySelector(`.pf div`);
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
        const relevantPlayers = yield res.json();
        yield fillTheTable(relevantPlayers);
    }
    catch (err) {
        alert(`Couldn't proccess the search!`);
    }
});
//function thats fill the table
const fillTheTable = (arreyOfPlayers) => {
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
        tdAddToAdd.appendChild(btnAddToTeam);
        trToAdd.append(tdNmaeToAdd, tdPsnToAdd, tdPtsToAdd, td2ToAdd, td3ToAdd, tdAddToAdd);
        tableSel.appendChild(trToAdd);
        btnAddToTeam.addEventListener(`click`, () => {
            myTeam.filter(p => p.position !== arreyOfPlayers[i].position);
            myTeam.push(arreyOfPlayers[i]);
            fillMyTeam(myTeam);
        });
    }
};
const fillMyTeam = (myTeam) => {
    myTeam.forEach(P => {
        switch (P.position) {
            case `c`: {
                cPickDivs.innerHTML = ``;
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
            case `pg`: {
                pgPickDivs.innerHTML = ``;
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
            case `sg`: {
                sgPickDivs.innerHTML = ``;
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
            case `sf`: {
                sfPickDivs.innerHTML = ``;
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
            case `pf`: {
                pfPickDivs.innerHTML = ``;
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
        }
    });
};
btnSearch.addEventListener(`click`, callAPI);
