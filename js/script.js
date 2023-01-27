/*
MILESTONE 1:
Definire un array di oggetti.
Ogni oggetto rappresenta un'icona, che è caratterizzata da: nome, prefisso, tipo e famiglia.
Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

MILESTONE 2:
Definire un array di colori e associare ad ogni tipo di icona un colore.
Visualizzare le icone di colore diverso in base al tipo.

MILESTONE 3:
Aggiungere una select per filtrare le icone in base al tipo.
Popolare le options della select dinamicamente e, ogni volta che cambia il valore selezionato, visualizzare le icone corrispondenti.
*/


function printing(el, html) {
    const { family, prefix, name, color } = el;

    html.innerHTML += `
        <div class="${family}">
            <i class="${prefix}${name}" style="color:${color}"></i>
            <h4>${name}</h4>
        </div>
    `;
}


const family = 'icon', prefix = 'fa-solid fa-';
let icons = [
    { family, prefix, type: 'animal', name: 'cat'           },
    { family, prefix, type: 'animal', name: 'crown'         },
    { family, prefix, type: 'animal', name: 'dog'           },
    { family, prefix, type: 'animal', name: 'dove'          },
    { family, prefix, type: 'animal', name: 'dragon'        },
    { family, prefix, type: 'animal', name: 'horse'         },
    { family, prefix, type: 'animal', name: 'hippo'         },
    { family, prefix, type: 'animal', name: 'fish'          },
    { family, prefix, type: 'food',   name: 'carrot'        },
    { family, prefix, type: 'food',   name: 'apple-whole'   },
    { family, prefix, type: 'food',   name: 'lemon'         },
    { family, prefix, type: 'food',   name: 'pepper-hot'    },
    { family, prefix, type: 'people', name: 'user-astronaut'},
    { family, prefix, type: 'people', name: 'user-graduate' },
    { family, prefix, type: 'people', name: 'user-ninja'    },
    { family, prefix, type: 'people', name: 'user-secret'   },
];
const main = document.querySelector('main');
const select = document.querySelector('nav select');
const colors = ['blue', 'orange', 'purple'];
const types = [];


// Taking all the different 'el.type' from 'icons', and printing them as <option>
icons.forEach(el => {
    if (!types.includes(el.type)) {
        types.push(el.type);
        select.innerHTML += `
            <option value="${el.type}">${el.type}</option>
        `;
    }
});


// Adding the property 'color'
icons = icons.map(el => {
    let x = types.indexOf(el.type);
    return {...el, color: colors[x]};
});


// Printing icons in HTML
icons.forEach(el => printing(el, main));


// Filtering icons with value from <select>
filter.onchange = function () {
    const val = this.value;
    main.innerHTML = '';

    icons.forEach(el => {
        if (val === 'all' || val === el.type)
            printing(el, main);
    });
}