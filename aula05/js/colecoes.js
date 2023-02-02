// Criação do array de cidades
const cidades = [
    "Guarulhos",
    "Campinas",
    "Atibaia",
    "São Paulo"
];

// Crianção do array de objetos produtos

const produtos = [
    {
        idproduto: 01,
        nomeproduto: "Mouse",
        marca: "Microsoft",
        preco: 100.53
    },
    {
        idproduto: 02,
        nomeproduto: "Teclado",
        marca: "Microsoft",
        preco: 150.90
    },
    {
        idproduto: 03,
        nomeproduto: "SSD 480",
        marca: "SunDisk",
        preco: 430.00
    }
];

// Criando array de objetos clientes

const clientes = [
    {
        idcliente: 15,
        nome: "Danilo",
        idade:28
    },
    {
        idcliente: 16,
        nome: "Sabrina",
        idade:27
    }
];

// Criando array de objetos vendas

const vendas = [
    {
        idvenda: 1010,
        data: "02/02/2023",
        idcliente: 15,
        produtos:[
            {
                idproduto: 01,
                quantidade: 3
            },
            {
                idproduto: 02,
                quantidade: 3
            }
        ]

    }
];