function batalha() {

    var ataque1 = document.querySelector('#ataque1').value
    var ataque2 = document.querySelector('#ataque2').value
    var defesa1 = document.querySelector('#defesa1').value
    var defesa2 = document.querySelector('#defesa2').value

    console.log(ataque1, ataque2, defesa1, defesa2)

    if (ataque1 == 1) {
        window.alert("Monstrinho 1 venceu!")
        location.reload()
    } else if (ataque1 == 2) {
        window.alert("Monstrinho 2 venceu!")
        location.reload()
    } else {
        window.alert("Empatou!")
        location.reload()
    }

}