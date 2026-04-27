const authorsData = [
    { name: "П. Гольбах", quote: "Де немає свободи, там немає і вітчизни." },
    { name: "Т. Шевченко", quote: "В своїй хаті своя й правда, І сила, і воля." },
    { name: "Д. Павличко", quote: "Вітчизна — ось і альфа, і омега!" },
    { name: "Л. Костенко", quote: "Нації вмирають не від інфаркту. Спочатку їм відбирає мову." },
    { name: "Т. Шевченко", quote: "Нема на світі України, немає другого Дніпра" }
];
const container = document.getElementById('button-container');
authorsData.forEach(author => {
    const btn = document.createElement('button');
    btn.textContent = author.name;
    btn.onclick = function() {
        alert(author.quote);
    };
    container.appendChild(btn);
});