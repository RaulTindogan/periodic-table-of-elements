let container = document.getElementById('container')
fetch('https://kineticzephyr.onrender.com/periodictable')
.then(response => response.json())
.then(data => {
    data.data.map(element => {     
        switch(element.number) {
            case 1:
                pushElement('boxes1 diatomic-nonmetal', 'grid-area: 1/1;', element.symbol, element.number, element.name)
                break;
            case 2: 
                pushElement('boxes1 noble-gas', 'grid-area: 1/18;', element.symbol, element.number, element.name)
                break;
            case 3: 
                pushElement('boxes1 alkali-metal', 'grid-area: 2/1;', element.symbol, element.number, element.name)
                break;
            case 4: 
                pushElement('boxes1 alkaline-earth-metal', 'grid-area: 2/2;', element.symbol, element.number, element.name)
                break;
            case 5: 
                pushElement('boxes1 metalloid', 'grid-area: 2/13;', element.symbol, element.number, element.name)
                break;
            case 6: 
                pushElement('boxes1 polyatomic-nonmetal', 'grid-area: 2/14;', element.symbol, element.number, element.name)
                break;
            case 7: 
                pushElement('boxes1 diatomic-nonmetal', 'grid-area: 2/15;', element.symbol, element.number, element.name)
                break;
            case 8: 
                pushElement('boxes1 diatomic-nonmetal', 'grid-area: 2/16;', element.symbol, element.number, element.name)
                break;
            case 9: 
                pushElement('boxes1 diatomic-nonmetal', 'grid-area: 2/17;', element.symbol, element.number, element.name)
                break;
            case 10: 
                pushElement('boxes1 noble-gas', 'grid-area: 2/18;', element.symbol, element.number, element.name)
                break;
            case 11: 
                pushElement('boxes1 alkali-metal', 'grid-area: 3/1;', element.symbol, element.number, element.name)
                break;
            case 12: 
                pushElement('boxes1 alkaline-earth-metal', 'grid-area: 3/2;', element.symbol, element.number, element.name)
                break;
            case 13: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 3/13;', element.symbol, element.number, element.name)
                break;
            case 14: 
                pushElement('boxes1 metalloid', 'grid-area: 3/14;', element.symbol, element.number, element.name)
                break;
            case 15: 
                pushElement('boxes1 polyatomic-nonmetal', 'grid-area: 3/15;', element.symbol, element.number, element.name)
                break;
            case 16: 
                pushElement('boxes1 polyatomic-nonmetal', 'grid-area: 3/16;', element.symbol, element.number, element.name)
                break;
            case 17: 
                pushElement('boxes1 diatomic-nonmetal', 'grid-area: 3/17;', element.symbol, element.number, element.name)
                break;
            case 18: 
                pushElement('boxes1 noble-gas', 'grid-area: 3/18;', element.symbol, element.number, element.name)
                break;



            case 19:
                pushElement('boxes1 alkali-metal', 'grid-area: 4/1;', element.symbol, element.number, element.name)
                break;
            case 20: 
                pushElement('boxes1 alkaline-earth-metal', 'grid-area: 4/2;', element.symbol, element.number, element.name)
                break;
            case 21: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/3;', element.symbol, element.number, element.name)
                break;
            case 22: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/4;', element.symbol, element.number, element.name)
                break;
            case 23: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/5;', element.symbol, element.number, element.name)
                break;
            case 24: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/6;', element.symbol, element.number, element.name)
                break;
            case 25: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/7;', element.symbol, element.number, element.name)
                break;
            case 26: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/8;', element.symbol, element.number, element.name)
                break;
            case 27: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/9;', element.symbol, element.number, element.name)
                break;
            case 28: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/10;', element.symbol, element.number, element.name)
                break;
            case 29: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/11;', element.symbol, element.number, element.name)
                break;
            case 30: 
                pushElement('boxes1 transition-metal', 'grid-area: 4/12;', element.symbol, element.number, element.name)
                break;
            case 31: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 4/13;', element.symbol, element.number, element.name)
                break;
            case 32: 
                pushElement('boxes1 metalloid', 'grid-area: 4/14;', element.symbol, element.number, element.name)
                break;
            case 33: 
                pushElement('boxes1 metalloid', 'grid-area: 4/15;', element.symbol, element.number, element.name)
                break;
            case 34: 
                pushElement('boxes1 polyatomic-nonmetal', 'grid-area: 4/16;', element.symbol, element.number, element.name)
                break;
            case 35: 
                pushElement('boxes1 diatomic-nonmetal', 'grid-area: 4/17;', element.symbol, element.number, element.name)
                break;
            case 36: 
                pushElement('boxes1 noble-gas', 'grid-area: 4/18;', element.symbol, element.number, element.name)
                break;



            case 37:
                pushElement('boxes1 alkali-metal', 'grid-area: 5/1;', element.symbol, element.number, element.name)
                break;
            case 38: 
                pushElement('boxes1 alkaline-earth-metal', 'grid-area: 5/2;', element.symbol, element.number, element.name)
                break;
            case 39: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/3;', element.symbol, element.number, element.name)
                break;
            case 40: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/4;', element.symbol, element.number, element.name)
                break;
            case 41: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/5;', element.symbol, element.number, element.name)
                break;
            case 42: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/6;', element.symbol, element.number, element.name)
                break;
            case 43: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/7;', element.symbol, element.number, element.name)
                break;
            case 44: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/8;', element.symbol, element.number, element.name)
                break;
            case 45: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/9;', element.symbol, element.number, element.name)
                break;
            case 46: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/10;', element.symbol, element.number, element.name)
                break;
            case 47: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/11;', element.symbol, element.number, element.name)
                break;
            case 48: 
                pushElement('boxes1 transition-metal', 'grid-area: 5/12;', element.symbol, element.number, element.name)
                break;
            case 49: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 5/13;', element.symbol, element.number, element.name)
                break;
            case 50: 
                pushElement('boxes1 post-transition-metal post-transition-metal', 'grid-area: 5/14;', element.symbol, element.number, element.name)
                break;
            case 51: 
                pushElement('boxes1 metalloid', 'grid-area: 5/15;', element.symbol, element.number, element.name)
                break;
            case 52: 
                pushElement('boxes1 metalloid', 'grid-area: 5/16;', element.symbol, element.number, element.name)
                break;
            case 53: 
                pushElement('boxes1 diatomic-nonmetal', 'grid-area: 5/17;', element.symbol, element.number, element.name)
                break;
            case 54: 
                pushElement('boxes1 noble-gas', 'grid-area: 5/18;', element.symbol, element.number, element.name)
                break;
            case 55: 
                pushElement('boxes1 alkali-metal', 'grid-area: 6/1;', element.symbol, element.number, element.name)
                break;
            case 56: 
                pushElement('boxes1 alkaline-earth-metal', 'grid-area: 6/2;', element.symbol, element.number, element.name)
                break;

            

            case 57: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/3;', element.symbol, element.number, element.name)
                break;
            case 58: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/4;', element.symbol, element.number, element.name)
                break;
            case 59: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/5;', element.symbol, element.number, element.name)
                break;
            case 60: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/6;', element.symbol, element.number, element.name)
                break;
            case 61: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/7;', element.symbol, element.number, element.name)
                break;
            case 62: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/8;', element.symbol, element.number, element.name)
                break;
            case 63: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/9;', element.symbol, element.number, element.name)
                break;
            case 64: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/10;', element.symbol, element.number, element.name)
                break;
            case 65: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/11;', element.symbol, element.number, element.name)
                break;
            case 66: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/12;', element.symbol, element.number, element.name)
                break;
            case 67: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/13;', element.symbol, element.number, element.name)
                break;
            case 68: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/14;', element.symbol, element.number, element.name)
                break;
            case 69: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/15;', element.symbol, element.number, element.name)
                break;
            case 70: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/16;', element.symbol, element.number, element.name)
                break;
            case 71: 
                pushElement('boxes1 lanthanide', 'grid-area: 9/17;', element.symbol, element.number, element.name)
                break;


            
            case 72: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/4;', element.symbol, element.number, element.name)
                break;
            case 73: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/5;', element.symbol, element.number, element.name)
                break;
            case 74: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/6;', element.symbol, element.number, element.name)
                break;
            case 75: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/7;', element.symbol, element.number, element.name)
                break;
            case 76: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/8;', element.symbol, element.number, element.name)
                break;
            case 77: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/9;', element.symbol, element.number, element.name)
                break;
            case 78: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/10;', element.symbol, element.number, element.name)
                break;
            case 79: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/11;', element.symbol, element.number, element.name)
                break;
            case 80: 
                pushElement('boxes1 transition-metal', 'grid-area: 6/12;', element.symbol, element.number, element.name)
                break;
            case 81: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 6/13;', element.symbol, element.number, element.name)
                break;
            case 82: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 6/14;', element.symbol, element.number, element.name)
                break;
            case 83: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 6/15;', element.symbol, element.number, element.name)
                break;
            case 84: 
                pushElement('boxes1 metalloid', 'grid-area: 6/16;', element.symbol, element.number, element.name)
                break;
            case 85: 
                pushElement('boxes1 metalloid', 'grid-area: 6/17;', element.symbol, element.number, element.name)
                break;
            case 86: 
                pushElement('boxes1 noble-gas', 'grid-area: 6/18;', element.symbol, element.number, element.name)
                break;
            
            case 87: 
                pushElement('boxes1 alkali-metal', 'grid-area: 7/1;', element.symbol, element.number, element.name)
                break;
            case 88: 
                pushElement('boxes1 alkaline-earth-metal', 'grid-area: 7/2;', element.symbol, element.number, element.name)
                break;




            case 89: 
                pushElement('boxes1 actinide', 'grid-area: 10/3;', element.symbol, element.number, element.name)
                break;
            case 90: 
                pushElement('boxes1 actinide', 'grid-area: 10/4;', element.symbol, element.number, element.name)
                break;
            case 91: 
                pushElement('boxes1 actinide', 'grid-area: 10/5;', element.symbol, element.number, element.name)
                break;
            case 92: 
                pushElement('boxes1 actinide', 'grid-area: 10/6;', element.symbol, element.number, element.name)
                break;
            case 93: 
                pushElement('boxes1 actinide', 'grid-area: 10/7;', element.symbol, element.number, element.name)
                break;
            case 94: 
                pushElement('boxes1 actinide', 'grid-area: 10/8;', element.symbol, element.number, element.name)
                break;
            case 95: 
                pushElement('boxes1 actinide', 'grid-area: 10/9;', element.symbol, element.number, element.name)
                break;
            case 96: 
                pushElement('boxes1 actinide', 'grid-area: 10/10;', element.symbol, element.number, element.name)
                break;
            case 97: 
                pushElement('boxes1 actinide', 'grid-area: 10/11;', element.symbol, element.number, element.name)
                break;
            case 98: 
                pushElement('boxes1 actinide', 'grid-area: 10/12;', element.symbol, element.number, element.name)
                break;
            case 99: 
                pushElement('boxes1 actinide', 'grid-area: 10/13;', element.symbol, element.number, element.name)
                break;
            case 100: 
                pushElement('boxes1 actinide', 'grid-area: 10/14;', element.symbol, element.number, element.name)
                break;
            case 101: 
                pushElement('boxes1 actinide', 'grid-area: 10/15;', element.symbol, element.number, element.name)
                break;
            case 102: 
                pushElement('boxes1 actinide', 'grid-area: 10/16;', element.symbol, element.number, element.name)
                break;
            case 103: 
                pushElement('boxes1 actinide', 'grid-area: 10/17;', element.symbol, element.number, element.name)
                break;

            
            case 104: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/4;', element.symbol, element.number, element.name)
                break;
            case 105: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/5;', element.symbol, element.number, element.name)
                break;
            case 106: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/6;', element.symbol, element.number, element.name)
                break;
            case 107: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/7;', element.symbol, element.number, element.name)
                break;
            case 108: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/8;', element.symbol, element.number, element.name)
                break;
            case 109: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/9;', element.symbol, element.number, element.name)
                break;
            case 110: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/10;', element.symbol, element.number, element.name)
                break;
            case 111: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/11;', element.symbol, element.number, element.name)
                break;
            case 112: 
                pushElement('boxes1 transition-metal', 'grid-area: 7/12;', element.symbol, element.number, element.name)
                break;
            case 113: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 7/13;', element.symbol, element.number, element.name)
                break;
            case 114: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 7/14;', element.symbol, element.number, element.name)
                break;
            case 115: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 7/15;', element.symbol, element.number, element.name)
                break;
            case 116: 
                pushElement('boxes1 post-transition-metal', 'grid-area: 7/16;', element.symbol, element.number, element.name)
                break;
            case 117: 
                pushElement('boxes1 metalloid', 'grid-area: 7/17;', element.symbol, element.number, element.name)
                break;
            case 118: 
                pushElement('boxes1 noble-gas', 'grid-area: 7/18;', element.symbol, element.number, element.name)
                break;

            case 119: 
                pushElement('boxes1 alkali-metal', 'grid-area: 8/1;', element.symbol, element.number, element.name)
                break;
        }
        
    })
})

function pushElement(className, style, elementSymbol, atomicNumber, elementName) {
    container.innerHTML += `<div class='${className}' style="${style}"><p class="atomic-number">${atomicNumber}</p><p class="element-symbol">${elementSymbol}<p><p class="element-name">${elementName}</p></div>`
}