// Pega os valores dos inputs do usuário,em seguida  calcula a diferença entre os ataques e as defesas dos monstrinhos. Caso o monstrinho 1 tenha um ataque maior que o monstrinho 2 e também tenha uma defesa igual ao ataque do mostrinho 2, ele ganha. Caso o monstrinho 2 tenha um ataque maior que o monstrinho 1 e também tenha uma defesa igual ao ataque do mostrinho 2, ele ganha. Caso contrário, dá empate.

function batalha() {

    var diferenca1 = document.querySelector('#ataque1').value - document.querySelector('#defesa2').value
    var diferenca2 = document.querySelector('#ataque2').value - document.querySelector('#defesa1').value

    if (diferenca1 == 0 && diferenca2 != 0) {
        window.alert("Monstrinho 2 venceu!")
        location.reload()
    } else if (diferenca2 == 0 && diferenca1 != 0) {
        window.alert("Monstrinho 1 venceu!")
        location.reload()
    } else {
        window.alert("Empatou!")
        location.reload()
    }

}