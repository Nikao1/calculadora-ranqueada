let playerName = "Niko";
let playerVictories = 110;

rankedCalculator();

function rankedCalculator() {
    let playerLevel;
    if (playerVictories < 10) {
        playerLevel = "Ferro";
    } else if (playerVictories >= 11 && playerVictories <= 20) {
        playerLevel = "Bronze";
    } else if (playerVictories >= 21 && playerVictories <= 50) {
        playerLevel = "Prata";
    } else if (playerVictories >= 51 && playerVictories <= 80) {
        playerLevel = "Ouro";
    } else if (playerVictories >= 81 && playerVictories <= 90) {
        playerLevel = "Diamante";
    } else if (playerVictories >= 91 && playerVictories <= 100) {
        playerLevel = "Lendário";
    } else {
        playerLevel = "Imortal";
    }

    console.log("O Jogador tem saldo de " + playerVictories, "vitórias" + " e está no nível de habilidade " + playerLevel);
}
