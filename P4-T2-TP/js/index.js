const start = () => {
    const table = document.getElementById('cTable')

    const sortBtn = document.getElementById('sortBtn')
    sortBtn.onclick = sortTable
}

const inputArray = [// inputs
    [document.getElementById('sui-suicam'), document.getElementById('cam-suicam')],
    [document.getElementById('bra-braser'), document.getElementById('ser-braser')],
    [document.getElementById('cam-camser'), document.getElementById('ser-camser')],
    [document.getElementById('bra-brasui'), document.getElementById('sui-brasui')],
    [document.getElementById('cam-cambra'), document.getElementById('bra-cambra')],
    [document.getElementById('ser-sersui'), document.getElementById('sui-sersui')]
]

const t = [// teams
    document.getElementById('tbra'),
    document.getElementById('tcam'),
    document.getElementById('tser'),
    document.getElementById('tsui')
]

const m = Array(6).fill(Array(2).fill(0))//matches

const fillMatches = () => {
    m[0][0] = t[3]
    m[0][1] = t[1]
    m[1][0] = t[0]
    m[1][1] = t[2]
    m[2][0] = t[1]
    m[2][1] = t[2]
    m[3][0] = t[0]
    m[3][1] = t[3]
    m[4][0] = t[1]
    m[4][1] = t[0]
    m[5][0] = t[2]
    m[5][1] = t[3]
}

function matrix(row, col) {
    var result = []
    for(var i = 0; i < col; i++) {
        result.push(new Array(row).fill(0))
    }
    return result
}

/* const m = [// matches
    (t[3], t[1]),
    (t[0], t[2]),
    (t[1], t[2]),
    (t[0], t[3]),
    (t[1], t[0]),
    (t[2], t[3])
] */

//
//

const calcValues = () => {
    console.log(inputArray[0[0]])
}

const sortTable = () => {
    alert('...')

    for(let i=0, j=0, k=0; i<6; i++, j+=2, k+=2) {
        if(inputArray[i].value > inputArray[i].value) {
            m[j[k]].childNodes[2] += 3
        }
    }

    /* for (let i=0, j=0, k=1; i < 6; i++, j+=2, k+=2) {
        if(inputArray[i].value > inputArray[j].value) {
            m[j].m1[0].childNodes[2] += 3
        } else if (inputArray[i].value < inputArray[j].value) {
            m[k].childNodes[2] += 3
        } else {
            // m[j].childNodes[2].childNodes += 1
            // m[j].childNodes[2] += 1
            m[k].childNodes[2].value += 1
        }
        m[j].childNodes[3] += (inputArray[i].value - inputArray[j].value)
        m[k].childNodes[3] += (inputArray[i].value - inputArray[j].value)
    } */
}

const sortTable2 = () => {
    var table, rows, switching, i, x, y, shouldSwitch
    table = document.getElementsById('cTable')
    switching = true
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
        //
        for (let i=0, j=0, k=1; i < 6; i++, j+=2, k+=2) {
            if(inputPointsArray[i].value > inputPointsArray[j].value) {
                m[j].childNodes[2] += 3
            } else if (inputPointsArray[i].value < inputPointsArray[j].value) {
                m[k].childNodes[2] += 3
            } else {
                m[j].childNodes[2] += 1
                m[k].childNodes[2] += 1
            }
            m[j].childNodes[3] += (inputPointsArray[i].value - inputPointsArray[j].value)
            m[k].childNodes[3] += (inputPointsArray[i].value - inputPointsArray[j].value)
        }
        // Start by saying: no switching is done:
        switching = false
        rows = table.rows
        /* Loop through all table rows (except the
        first, which contains table headers): */
        for (i = 1; i < (rows.length - 1); i++) {
            // Start by saying there should be no switching:
            shouldSwitch = false
            
            //
            //

            
            /* m.forEach((t, t) => {
                
            }) */

            

            //
            //

            /* Get the two elements you want to compare,
            one from current row and one from the next: */
            x = rows[i].getElementsByTagName("TD")[2]
            y = rows[i + 1].getElementsByTagName("TD")[2]
            // Check if the two rows should switch place:
            if (x.innerHTML > y.innerHTML) {
                // If so, mark as a switch and break the loop:
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            /* If a switch has been marked, make the switch
            and mark that a switch has been done: */
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i])
            switching = true
        }
    }
}

/*
    const createNewGuest = () => {
    const inputGuestName = document.getElementById('guestName')
    const newItem = createListItem(inputGuestName.value)
    const list = document.getElementById('guestList')
    list.appendChild(newItem)

    clearAndFocusInputElement(inputGuestName)
}

const createListItem = contentListItem => {
    const newItem = document.createElement('li')
    const itemTextNode = document.createTextNode(contentListItem)
    newItem.appendChild(itemTextNode)

    const deleteButton = document.createElement('input')
    deleteButton.type = 'button'
    deleteButton.value = 'Remover'
    deleteButton.onclick = deleteListItemEvent
    newItem.appendChild(deleteButton)

    return newItem
}

const clearAndFocusInputElement = input => {
    input.value = ''
    input.focus()
}

const deleteListItemEvent = event => {
    const input = event.target
    const listItem = input.parentNode
    const list = listItem.parentNode
    list.removeChild(listItem)
}
*/

start()