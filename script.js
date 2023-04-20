let players = []

let randomize = () => {
    let maxplayersforteam = players.length/2
    let teams = [[], []]
    for(let i in players){
        let team = Math.floor(Math.random() * 2)
        if(teams[team].length < maxplayersforteam){
            teams[team].push(players[i])
        }
        else{
            if(team == 0){
                teams[1].push(players[i])
            }
            else{
                teams[0].push(players[i])
            }
        }
    }
    result(teams)
}

let input = document.getElementById("input")
let addplayer = () => {
    let val = input.value
    if(val.length > 0){
        players.push(val)
        input.value = ""
        updateplayers()
    }
}

let list = document.querySelector(".playerslist")
let updateplayers = () => {
    if(players.length > 0){
        let x = ""
        for(let i in players){
            let number = Number(i) + 1
            let name = players[i]
            x += `<li>${number}. ${name}<span class="material-symbols-sharp icon" onclick="deleteplayer('${name}')">close</span></li>`
        }
        list.innerHTML = "<ol>" + x + "</ol>"
    }
    else{
        list.innerHTML = `<div class="playerslist-empty">Empty</div>`
    }
}

let deleteplayer = (player) => {
    let index = players.indexOf(player)
    players.splice(index, 1)
    updateplayers()
}

let result = (teams) => {
    let teamonestring = ""
    let teamtwostring = ""
    for(i in teams[0]){
        teamonestring += `<div class="team-player">${teams[0][i]}</div>`
    }
    for(i in teams[1]){
        teamtwostring += `<div class="team-player">${teams[1][i]}</div>`
    }
    if(teams[0].length > teams[1].length){
        teamtwostring += `<div class="team-player"></div>`
    }
    else if(teams[0].length < teams[1].length){
        teamonestring += `<div class="team-player"></div>`
    }
    document.querySelector('.teamonelist').innerHTML = teamonestring
    document.querySelector('.teamtwolist').innerHTML = teamtwostring
    document.querySelector(".result").style.display = "flex"
    setTimeout(() => {
        document.querySelector(".result").style.opacity = "1"
    }, 40)
}

let back = () => {
    document.querySelector(".result").style.opacity = "0"
    setTimeout(() => {
        document.querySelector(".result").style.display = "none"
    }, 300)
}

