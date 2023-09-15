const marcasModelos = {
    'Ford': ['Fiesta', 'Focus', 'Mustang', 'Bronco', 'Ecosport', 'Edge St' , 'Fusion', 'Ka hatch', 'Ranger', 'Territory' ],
    'Chevrolet': ['Camaro', 'Malibu', 'Impala', 'Cobalt', 'Corsa', 'Astra', 'Vectra', 'Prisma', 'Spin' , ],
    'Toyota': ['Corolla', 'Camry', 'RAV4'],
    'Citroen': ['C4 Pallas', 'Aircross', 'DS5', 'c4 cactus', 'c3', 'Jumpy', 'c4 Picasso','Ds4','C8', 'Xsara','Berlingo'],
    'Mercedes': ['A45s', 'AMG GT', 'C-Class'],
    'Fiat': ['Mobi', 'Palio', 'Punto'],
    'Jaguar': ['F-PACE', 'F-TYPE', 'XE'],
    'Volkswagen': ['Golf', 'Passat', 'Tiguan'],
    'Honda': ['Civic', 'Accord', 'CR-V'],
    'Hyundai': ['i30', 'Tucson', 'Santa Fe'],
    'Nissan': ['Versa', 'Sentra', 'kiks']
    
};

document.addEventListener('DOMContentLoaded', function () {
    const marcaSelect = document.getElementById('marca');
    const modeloInput = document.getElementById('modelo');

    
    marcaSelect.addEventListener('change', function () {
        const selectedMarca = marcaSelect.value;
        const modelos = marcasModelos[selectedMarca] || [];

        
        modeloInput.value = '';

        
        if (modelos.length > 0) {
            const modeloAleatorio = modelos[Math.floor(Math.random() * modelos.length)];
            modeloInput.placeholder = `Ex: ${modeloAleatorio}`;
        } else {
            modeloInput.placeholder = 'Digite o modelo';
        }
    });

    
    document.getElementById('filtro-carros').addEventListener('submit', function (e) {
        e.preventDefault(); 
        
    });
});

