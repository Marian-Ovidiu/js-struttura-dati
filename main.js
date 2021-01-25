$(document).ready(function(){

  // Abbiamo creato un oggetto di oggetti, come riferimento
  // di una edizione. Se ad esempio scrivo editions['SP']
  // allora otterrò tutto un oggetto che descrive
  // con più dettagli l'edizione.
  // come oggetto di oggetti, può essere navigato solo con il for-in

  // array di oggetti da usare dentro cards
  const fieldCodes = [
    'W', 'U', 'B', 'R', 'G'
  ]

  const cardTypes = [
    'terre',
    'creature',
    'incantesimi',
    'artefatti',
    'instantanei',
    'stregonerie'
  ]

  const editions = {

    'BL': {
        edition: 'Boolean',
        rarity: 'blue'
    },

    'SP': {
        edition: 'Special',
        rarity: 'red'
    }

  }

  const powerValue = [1, 2, 3, 4, 5];

  // Fine array di oggetti da usare dentro cards

  // Inizio array di oggetti delle carte
  const cards = [{

    cardName: 'Grizzly Bears',
    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],  // 'W',  - un suo riferimento
        fieldCodes[2]   // 'B'
      ],
    },
    picture: 'images/i.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',
    editionType: editions['BL'],
    description: 'Lorem ipsum',
    story: 'Naltro Lorem Ipsum',
    score: {
      power: 2,  // filtrarlo per power
      toughness: 2
    }
    },
    {
    cardName: 'Sviluppatore guerriero',
    cost: {
    genericCostNumber: 3,
    costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[2],
        fieldCodes[3]
      ],
    },
    picture: 'images/g.png',  // da inserire immagine
    cardType: cardTypes[1],
    cardObject: 'Bear',
    editionType: editions['BL'],
    description: 'Lo sviluppatore guerriero spezza i byte in bit!',
    story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',
    score: {
      power: 5,  // r
      toughness: 3
      }
    },
    {
    cardName: 'Rivelazione di Alrund',
    cost: {
    genericCostNumber: 5,
    costFields: [
      fieldCodes[2],
      fieldCodes[2]
        ],
      },
    picture: 'images/g.png',
    cardType: cardTypes[6],
    cardObject: 'Fire',
    editionType: editions['BL'],
    description: 'Crea due pedine creatura Uccello 1/1 blu con volare. Gioca un turno extra dopo questo. Esilia la Rivelazione di Alrund.',
    story: 'Durante il tuo turno questa carta bla bla bla bla',
    score: {
      power: 3,
      toughness: 3
      }
    },
    {
    cardName: 'Varragoth, Sovrano del Cielo di Sangue',
    cost: {
      genericCostNumber: 2,
      costFields: [
        fieldCodes[3],
          ],
        },
    picture: 'images/g.png',
    cardType: cardTypes[1],
    cardObject: 'Demon',
    editionType: editions['BL'],
    description: 'Tocco letale. Un giocatore bersaglio passa in rassegna il suo grimorio per una caarta, poi rimescola il suo grimorio e mette quella carta in cima.',
    story: 'Attiva questa abilità solo se questa creatura ha attaccato in questo turno e solo una volta per turno.',
    score: {
      power: 2,
      toughness: 3
      }
    },
    {
    cardName: 'Tibalt, Impostore del Cosmo',
    cost: {
      genericCostNumber: 5,
      costFields: [
        fieldCodes[3],
        fieldCodes[4]
          ],
        },
    picture: 'images/g.png',
    cardType: cardTypes[3],
    cardObject: 'Fire',
    editionType: editions['BL'],
    description: 'Mentre Tibalt entra nel campo di battaglia, ottieni un emblema con "Puoi giocare con carte esiliate con Tibalt, Impostore del Cosmo e Puoi spendere mana come se fosse mana di qualsiasi colore per lanciare quelle magie."',
    story: 'Esilia la prima carta del grimorio di ogni giocatore.',
    score: {
      power: 5,
      toughness: 5
      }
    },
  ]

  // Filtra le carte per la potenza data per parametro
  function filteredByPower(powerValue, array){
    return array.filter((element) => {
      return element.score.power === powerValue;
    })
  }

  function render(DOMElementId, array){
    const cardListHTMLElement = document.getElementById(DOMElementId);
    cardListHTMLElement.innerHTML = '';

    array.forEach((item) => {
      cardListHTMLElement.innerHTML += `<li>${item.cardName}</li>`;
    });
  }

  function renderSelect(DOMElementId, array){
    const powerValue = document.getElementById(DOMElementId);

    array.forEach((item) => {
      powerValue.innerHTML +=`<option value="${item}">${item}</option> `
    });
  }

  render('cardList', cards);
  renderSelect('PowerSelect', powerValue);

  $('#PowerSelect').change(function(){
    const selectValue = parseInt($(this).val());
    const filteredArray = filteredByPower(selectValue, cards);

    render('cardList', filteredArray);
  })

})
