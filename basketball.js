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
const BASE_URL = `https://nbaserver-q21u.onrender.com/api/filter`;
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
        //const search:Player = await createPlayerObject()
        const res = yield fetch(BASE_URL, {
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
        });
        if (res.ok) {
            const relevantPlayers = yield res.json();
            yield fillTheTable(relevantPlayers);
        }
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
        // i made the ! becouse i knoe ill get it from api
        tdPsnToAdd.textContent = arreyOfPlayers[i].position;
        tdPtsToAdd.textContent = arreyOfPlayers[i].points.toString();
        td2ToAdd.textContent = arreyOfPlayers[i].twoPercent.toString();
        td3ToAdd.textContent = arreyOfPlayers[i].threePercent.toString();
        const btnAddToTeam = document.createElement(`button`);
        btnAddToTeam.classList.add(`btnAddToTeam`);
        tdAddToAdd.appendChild(btnAddToTeam);
        tableSel.append(tdNmaeToAdd, tdPsnToAdd, tdPtsToAdd, td2ToAdd, td3ToAdd, tdAddToAdd);
    }
};
btnSearch.addEventListener(`click`, callAPI);
