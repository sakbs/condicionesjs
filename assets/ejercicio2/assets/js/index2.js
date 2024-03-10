function calcularStickers() {
    const sticker1 = parseInt(document.getElementById('sticker1').value);
    const sticker2 = parseInt(document.getElementById('sticker2').value);
    const sticker3 = parseInt(document.getElementById('sticker3').value);
    const totalStickers = sticker1 + sticker2 + sticker3;

    if (totalStickers <= 10) {
        document.getElementById('resultado').textContent = `Llevas ${totalStickers} stickers.`;
    } else {
        document.getElementById('resultado').textContent = 'Llevas demasiados stickers.';
    }
}