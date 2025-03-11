const locations = {
    "Kadiogo": "Ouagadougou",
    "Boulkiemdé": "Koudougou",
    "Oubritenga": "Ziniaré",
    "Kourwéogo": "Kombissiri",
    "Bam": "Bam",
    "Sanguié": "Réo",
    "Zondoma": "Nazinga",
    "Ziro": "Pô",
    "Kouritenga": "Tenkodogo",
    "Boulgou": "Manga",
    "Nahouri": "Pô",
    "Sissili": "Léo",
    "Yatenga": "Ouahigouya",
    "Namentenga": "Kaya",
    "Kossi": "Koro",
    "Mouhoun": "Dédougou",
    "Comoé": "Banfora",
    "Sourou": "Tougan",
    "Passoré": "Yako"
};

function searchLocation() {
    const input = document.getElementById('search').value.trim();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // Clear previous results

    if (input.length === 0) {
        resultDiv.innerHTML = "Veuillez entrer une province ou un chef-lieu.";
        return;
    }

    // Vérifier si l'entrée est une province
    if (locations[input]) {
        resultDiv.innerHTML = `Le chef-lieu de ${input} est ${locations[input]}.`;
    } else {
        // Vérifier si l'entrée est un chef-lieu
        const province = Object.keys(locations).find(key => locations[key].toLowerCase() === input.toLowerCase());
        if (province) {
            resultDiv.innerHTML = `La province de ${input} est ${province}.`;
        } else {
            resultDiv.innerHTML = "Province ou chef-lieu non trouvé.";
        }
    }
}