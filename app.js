function criptografar() {
    const frase = document.getElementById("inputTexto").value;
    let novaFrase = "";

    for (const caractere of frase) {
        switch (caractere) {
            case 'e':
                novaFrase += "enter";
                break;
            case 'i':
                novaFrase += "imes";
                break;
            case 'a':
                novaFrase += "ai";
                break;
            case 'o':
                novaFrase += "ober";
                break;
            case 'u':
                novaFrase += "ufat";
                break;
            default:
                novaFrase += caractere;
        }
    }

    document.getElementById("resultado").innerText = novaFrase;
}

function descriptografar() {
    const frase = document.getElementById("inputTexto").value;

    const descriptografias = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
    };

    let novaFrase = frase.replace(/enter|imes|ai|ober|ufat/g, match => descriptografias[match]);

    document.getElementById("resultado").innerText = novaFrase;
}