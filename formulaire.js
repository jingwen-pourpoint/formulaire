// variable pour les champs
const pseudo = document.querySelector('input#pseudo');
const email = document.querySelector('input#email');
const mdp = document.querySelector('input#mdp');
const confirmation_mdp = document.querySelector('input#confirmation');
const button = document.querySelector('button#valider');

// variable pour les messages
const msg_pseudo = document.querySelector('span#msg_pseudo');
const msg_mail = document.querySelector('span#msg_mail');
const msg_mdp = document.querySelector('span#msg_mdp');
const msg_confirmation_mdp = document.querySelector('span#msg_confirmation_mdp');


pseudo.addEventListener("blur", () => {
    if (verifChampRempli(pseudo)) {
        msg_pseudo.innerHTML = "";
    } else {
        msg_pseudo.innerHTML = "Le pseudo est vide!";
    }
    valideButton();
})


email.addEventListener("blur", () => {
    if (verif_mail()) {
        msg_mail.innerHTML = "";
    } else {
        msg_mail.innerHTML = "Email non valide!";
    }
    valideButton();
})



mdp.addEventListener("blur", () => {
    if (verifChampRempli(mdp)) {
        msg_mdp.innerHTML = "";
    } else {
        msg_mdp.innerHTML = "Le mot de passe est vide!";
    }

    if (verif_mdp()) {
        msg_confirmation_mdp.innerHTML = "";
    } else {
        msg_confirmation_mdp.innerHTML = "les mots de passes ne correspondent pas !";
    }
    valideButton();
})



confirmation_mdp.addEventListener("blur", () => {
    if (verif_mdp()) {
        msg_confirmation_mdp.innerHTML = "";
    } else {
        msg_confirmation_mdp.innerHTML = "les mots de passes ne correspondent pas !";
    }
    valideButton();
})


// ----- tous les fonctions -----------

function verifChampRempli(champ) {
    if (champ.value !== "") {
        return true;
    }
    return false;
}


function verif_mail() {
    let re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return re.test(email.value);
}



function verif_mdp() {
    if (mdp.value === confirmation_mdp.value) {
        return true;
    } else {
        return false;
    }
}

function toutVaBien() {
    return verifChampRempli(pseudo)
        && verif_mail(email)
        && verifChampRempli(mdp)
        && verif_mdp();
}


function valideButton() {
    button.disabled = !toutVaBien();
}