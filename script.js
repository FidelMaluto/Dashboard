// Gráfico do Desempenho
const graficoDesempenho = document.getElementById('grafico-desempenho').getContext('2d');
const chart = new Chart(graficoDesempenho, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Abr', 'Ma'],
        datasets: [{
            label: 'Desempenho',
            data: [10, 20, 30, 40, 50],
            backgroundColor: 'rgba(255, 99, 132, .2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beiginAtZero: true
            }
        }
    }
});

// Tabela de Dados
const tabelaDadosCorpo = document.getElementById('tabela-dados-corpo');
const dados = [
    { Nome: 'Fidel', Sobrenome: 'Maluto', Stack: 'HTML' },
    { Nome: 'Deby', Sobrenome: 'FIdel', Stack: 'CSS' },
    { Nome: 'Fidel', Sobrenome: 'Domingos', Stack: 'JavaScript' }
];

dados.forEach(dado => {
    const linha = document.createElement('tr');
    linha.innerHTML = `
    <td>${dado.Nome}</td>
    <td>${dado.Sobrenome}</td> 
    <td>${dado.Stack}</td>
    `;

    tabelaDadosCorpo.appendChild(linha);
});

// Mapa da localização
const mapaLocalizacao = L.map('mapa-localizacao').setView([-8.8383, 13.2334], 13);
L.tileLayer('https: attribution: ', // {s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
        attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
        subdomains: ['a', 'b', 'c']
    }).addTo(mapaLocalizacao);

    L.marker([-8.8383, 13.2344]).addTo(mapaLocalizacao).bindPopup('Luanda, Angola').openPopup();
