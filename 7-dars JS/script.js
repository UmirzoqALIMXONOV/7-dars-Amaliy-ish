var ARR = []

const AddUser = () => {
    var fish = document.getElementById('fish').value
    var match = document.getElementById('match').value
    var pay = document.getElementById('pay').value
    var qator = document.getElementById('qator').value
    var sana = new Date().getDate() + "." + (new Date().getMonth() + 1)

    if (fish !== '' && pay !== '' && match !== '' && qator !== '') {
        ARR.push({ fish, match, pay, qator, sana })
        Draw()
    } else {
        alert('Inputlarni toldiring')
    }

}

function Draw() {
    var tr = ''
    ARR.map((item, index) => tr = tr +
    `  <tr>
            <td>${index + 1}</td>
            <td>${item.fish}</td>
            <td>${item.match}</td>
            <td>${item.pay} so'm</td>
            <td>${item.qator}</td>
            <td>${item.sana}</td>
            <td>
                <button class='btn btn-danger btn-sm' onclick='deleteUser(${index})'>
                    del
                </button>   
            </td>
                
        </tr> `)

    document.getElementById('display').innerHTML = tr

    document.getElementById('fish').value = ''
    document.getElementById('pay').value = ''
    document.getElementById('match').value = ''
    document.getElementById('qator').value = ''
}


function deleteUser(index){
    ARR.splice(index,1)
    Draw()
}
