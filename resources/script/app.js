var resultGacha1PullId = document.getElementById("resultGacha1PullId");
var resultGacha10PullId = document.getElementById("resultGacha10PullId");
var pullGachaId = document.getElementById("pullGachaId");
var orundumInput = document.getElementById("orundumInput");
var pullGachaParagraph = document.getElementById("pullGachaParagraph");
var orundumInputWarning = document.getElementById("orundumInputWarning");
var orundumNumber = document.getElementById("orundumNumber");
var pullGachaId = document.getElementById("pullGachaId");
var resultGacha1PullId = document.getElementById("resultGacha1PullId");
var resultGacha10PullId = document.getElementById("resultGacha10PullId");

const database = [{
        "id": "001",
        "name": "EYJAFJALLA",
        "rate": "★★★★★★",
        "role": "CASTER",
        "image": "resources/img/char/img_char_eyja.jpg"
    },
    {
        "id": "002",
        "name": "EXUSIAI",
        "rate": "★★★★★★",
        "role": "SNIPER",
        "image": "resources/img/char/img_char_exu.jpg"
    },
    {
        "id": "003",
        "name": "SILVERASH",
        "rate": "★★★★★★",
        "role": "GUARD",
        "image": "resources/img/char/img_char_sa.jpg"
    },
    {
        "id": "004",
        "name": "PRAMANIX",
        "rate": "★★★★★",
        "role": "SUPPORTER",
        "image": "resources/img/char/img_char_pram.jpg"
    },
    {
        "id": "005",
        "name": "TEXAS",
        "rate": "★★★★★",
        "role": "VANGUARD",
        "image": "resources/img/char/img_char_tex.jpg"
    },
    {
        "id": "006",
        "name": "PROJEKT RED",
        "rate": "★★★★★",
        "role": "SPECIALIST",
        "image": "resources/img/char/img_char_red.jpg"
    },
    {
        "id": "007",
        "name": "EARTHSPIRIT",
        "rate": "★★★★",
        "role": "SUPPORTER",
        "image": "resources/img/char/img_char_es.jpg"
    },
    {
        "id": "008",
        "name": "FROSTLEAF",
        "rate": "★★★★",
        "role": "GUARD",
        "image": "resources/img/char/img_char_frost.jpg"
    },
    {
        "id": "009",
        "name": "SHAW",
        "rate": "★★★★",
        "role": "SPECIALIST",
        "image": "resources/img/char/img_char_shaw.jpg"
    },
    {
        "id": "010",
        "name": "KROOS",
        "rate": "★★★",
        "role": "SNIPER",
        "image": "resources/img/char/img_char_kroos.jpg"
    },
    {
        "id": "011",
        "name": "BEAGLE",
        "rate": "★★★",
        "role": "DEFENDER",
        "image": "resources/img/char/img_char_beagle.jpg"
    },
    {
        "id": "012",
        "name": "FANG",
        "rate": "★★★",
        "role": "VANGUARD",
        "image": "resources/img/char/img_char_fang.jpg"
    }
]

var orundumTemp = 0;

function orundumInputFunc(orundumNumberVal) {
    var orundumNumberVal = orundumNumber.value;

    if (orundumNumberVal && orundumNumberVal >= 600 && orundumNumberVal <= 60000) {
        orundumInput.classList.add("hidden");
        pullGachaId.classList.remove("hidden");
        pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumNumberVal}</b>, how many pull do you want?`;
    } else if (!orundumNumberVal) {
        return orundumInputWarning.innerHTML = `Please input your orundum!`;
    } else if (orundumNumberVal < 600) {
        return orundumInputWarning.innerHTML = `Minimal orundum is 600`;
    } else if (orundumNumberVal > 60000) {
        return orundumInputWarning.innerHTML = `Maximal orundum is 60000`;
    }

    orundumTemp = orundumNumberVal;
}

function backToInputOrundum() {
    orundumInput.classList.remove("hidden");
    resultGacha1PullId.classList.add("hidden");
    resultGacha10PullId.classList.add("hidden");
    pullGachaId.classList.add("hidden");
    orundumInputWarning.innerHTML = ``;
    pullGachaParagraph.innerHTML = ``;
}

function pull1x() {
    let i = 0;
    let gacha;
    let item = []
    if (orundumTemp < 600) {
        pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumTemp}</b>, Click back to refill orundum`;
        console.log(orundumTemp)
    } else {
        resultGacha10PullId.classList.add("hidden");
        resultGacha1PullId.classList.remove("hidden");
        do {
            temp = orundumTemp - 600;
            gacha = Math.floor(Math.random() * 100 + 1);
            if (gacha > 60) {
                star3 = Math.floor(Math.random() * 100 + 1);
                if (star3 > 68) {
                    i = 9;
                    item.push('*** KROOS');
                } else if (star3 > 34) {
                    i = 10;
                    item.push('*** BEAGLE')
                } else {
                    i = 11;
                    item.push('*** FANG')
                }
            } else if (gacha > 10) {
                star4 = Math.floor(Math.random() * 100 + 1);
                if (star4 > 68) {
                    i = 6;
                    item.push('**** EARTHSPIRIT');
                } else if (star4 > 34) {
                    i = 7;
                    item.push('**** FROSTLEAF')
                } else {
                    i = 8;
                    item.push('**** SHAW')
                }
            } else if (gacha > 2) {
                star5 = Math.floor(Math.random() * 100 + 1);
                if (star5 > 68) {
                    i = 3;
                    item.push('***** PRAMANIX');
                } else if (star5 > 34) {
                    i = 4;
                    item.push('***** TEXAS')
                } else {
                    i = 5;
                    item.push('***** PROJEKT RED')
                }
            } else if (gacha <= 2) {
                star6 = Math.floor(Math.random() * 100 + 1);
                if (star6 > 68) {
                    i = 0;
                    item.push('****** EYJAFJALLA')
                } else if (star6 > 34) {
                    i = 1;
                    item.push('****** EXUSIAI');
                } else {
                    i = 2;
                    item.push('****** SILVERASH');
                }
            } else {
                console.log('Please try again!');
            };
            console.log(gacha)
        }
        while (item.length === 0);
        document.getElementById('operatorName').innerHTML = database[i]['name'];
        document.getElementById('operatorRate').innerHTML = database[i]['rate'];
        document.getElementById('operatorRole').innerHTML = database[i]['role'];
        document.getElementById('operatorPic').src = database[i]['image'];

        console.log(item);
        pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumTemp -= 600}</b>, again?`;
    }
    orundumTemp < 600 ? pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumTemp}</b>, Click back to refill orundum` : '';
}


function pull10x() {
    let i = 0;
    let gacha;
    let item = []
    let gacha10Pull;


    let pull10Card = document.getElementById('resultGacha10PullId');

    if (orundumTemp !== 0) {
        pull10Card.innerHTML = '';
    }

    if (orundumTemp < 6000) {
        pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumTemp}</b>, Click back to refill orundum`;
        console.log(orundumTemp)

    } else if (orundumTemp >= 6000) {
        resultGacha1PullId.classList.add("hidden");
        resultGacha10PullId.classList.remove("hidden");
        do {
            orundumTemp -= 600;
            gacha10Pull = Math.floor(Math.random() * 100 + 1);
            gacha = Math.floor(Math.random() * 100 + 1);
            if (item.length <= 8) {
                if (gacha > 60) {
                    star3 = Math.floor(Math.random() * 100 + 1);
                    if (star3 > 68) {
                        i = 9;
                        item.push('*** KROOS');
                    } else if (star3 > 34) {
                        i = 10;
                        item.push('*** BEAGLE')
                    } else {
                        i = 11;
                        item.push('*** FANG')
                    }
                } else if (gacha > 10) {
                    star4 = Math.floor(Math.random() * 100 + 1);
                    if (star4 > 68) {
                        i = 6;
                        item.push('**** EARTHSPIRIT');
                    } else if (star4 > 34) {
                        i = 7;
                        item.push('**** FROSTLEAF')
                    } else {
                        i = 8;
                        item.push('**** SHAW')
                    }
                } else if (gacha > 2) {
                    star5 = Math.floor(Math.random() * 100 + 1);
                    if (star5 > 68) {
                        i = 3;
                        item.push('***** PRAMANIX');
                    } else if (star5 > 34) {
                        i = 4;
                        item.push('***** TEXAS')
                    } else {
                        i = 5;
                        item.push('***** PROJEKT RED')
                    }
                } else if (gacha <= 2) {
                    star6 = Math.floor(Math.random() * 100 + 1);
                    if (star6 > 68) {
                        i = 0;
                        item.push('****** EYJAFJALLA')
                    } else if (star6 > 34) {
                        i = 1;
                        item.push('****** EXUSIAI');
                    } else {
                        i = 2;
                        item.push('****** SILVERASH');
                    }
                } else {
                    console.log('Please try again!');
                };

            } else if (item.length > 8) {
                orundumTemp -= 600;
                if (gacha10Pull > 75) {
                    star5 = Math.floor(Math.random() * 100 + 1);
                    if (star5 > 68) {
                        i = 3;
                        item.push('***** PRAMANIX');
                    } else if (star5 > 34) {
                        i = 4;
                        item.push('***** TEXAS')
                    } else {
                        i = 5;
                        item.push('***** PROJEKT RED')
                    }
                } else if (gacha10Pull <= 75) {
                    star6 = Math.floor(Math.random() * 100 + 1);
                    if (star6 > 68) {
                        i = 0;
                        item.push('****** EYJAFJALLA')
                    } else if (star6 > 34) {
                        i = 1;
                        item.push('****** EXUSIAI');
                    } else {
                        i = 2;
                        item.push('****** SILVERASH');
                    }
                };
            }
            let construct = `<div class="resultGacha10Pull">
            <div class="cardOperator" id="cardOperator10${i}PullId">
                <img class="cardOperatorImage" id="operator10Pic" src="${database[i]['image']}" alt="default_char">
                <div class="cardOperatorContainer">
                    <p class="operatorRate" id="operator10Rate">${database[i]['rate']}</p>
                    <h4 class="operatorName operatorText" id="operator10Name">${database[i]['name']}</h4>
                    <p class="operatorRole operatorText" id="operator10Role">${database[i]['role']}</p>
                </div>
            </div>
        </div>
        `;

            pull10Card.innerHTML += construct;
        }
        while (item.length < 10);
        orundumTemp += 600

        console.log(item, orundumTemp)
        pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumTemp}</b>, again?`;
    }

    if (orundumTemp === 0) {
        pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumTemp}</b>, Click back to refill orundum`;
    } else if (orundumTemp < 6000) {
        pullGachaParagraph.innerHTML = `Your orundum is <b>${orundumTemp}</b>, You can only do 1x pull now`;
    }
}