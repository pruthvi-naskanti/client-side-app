// function Check() {
//     let total = parseFloat(document.getElementById("total").value);
//     console.log(typeof total);
//     let rate = parseFloat(document.getElementById("rate").value);
//     document.getElementById("tip").innerHTML = "$" + total * rate / 100;
//     document.getElementById("tax").innerHTML = "$" + total * 5.50 / 100;
//     document.getElementById("grandtotal").innerHTML = "$" + (total + (total * rate / 100) + (total * 5.50 / 100));
//     return false;
// }

// function wc(l) {
//    if (isNaN(l)) {
//        throw Error("The entered argument is not number");
//    }
//    return (l / 2.2046)

// }

//function weightConverter() {
//    const x = parseInt(document.getElementById('lb').value);
//    localStorage.setItem("lbs", x)
//    let d = wc(localStorage.getItem("lbs"))
//    document.getElementById("kg").innerHTML = d
// }



function weightConverter() {
    const x = document.getElementById('lb').value;
    const s = convert(x);
    document.getElementById("kg").value = s;
}

const convert = (x) => { return x / 2.2046 }

const jokeURI = 'https://dog.ceo/api/breeds/image/random'

// fetch information
const getJoke = async() => {
    try {
        const response = await fetch(jokeURI)
        const obj = await response.json()
        console.log(`FETCHED. Response JSON ${obj}`)
        const joke = obj.message || 'No joke for you.'
        return joke
    } catch (error) { console.error(error) }
}
const updateWithJoke = async(event) => {
        try {
            document.querySelector('#dogarea').src = ''
            const answer = await getJoke()
            document.querySelector('#dogarea').src = answer
        } catch (error) { console.error(error) }
    }
    // document.getElementById('getscore').onclick(getJoke);
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'getscore') { updateWithJoke(event) }
})