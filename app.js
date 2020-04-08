function convert (bin) {
    let result = [];
    let revArr = bin.split('').reverse();
    console.log(revArr)
    revArr.forEach((num, index) => {
        result.push(parseInt(num) * Math.pow(2, index))
    })

    return result.reduce((acc, curr) => acc+=curr , 0)
}

function renderData (decimal) {
    const heading = document.createElement('h3');
    heading.textContent = `Decimal: ${decimal}`;
    decimalData.appendChild(heading);
}

function checkData (event) {
    event.preventDefault();
    const binaryNum = event.target.binary.value;

    console.log(binaryNum.split(''))
    //check that every num is 0 and 1
    const status = binaryNum.split('').every((num) =>{
        return num === '1' || num === '0';
    })

    if(status && binaryNum.length <= 8){
        const decimal = convert(binaryNum);
        renderData(decimal)
    } else {

    }
}


const binaryForm = document.querySelector('.binary-form');
const decimalData = document.querySelector('.decimal-data');
binaryForm.addEventListener('submit', checkData);