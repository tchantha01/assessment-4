const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const messageContainer = document.getElementById("message-container")
// const form = document.querySelector("form")


const baseURL = "http://localhost:4000/api/compliment"

const messageCallback = ({ data: positiveDatabase }) => displayMessage(positiveDatabase)
const errCallback = err => console.log(err)

const getAllMessage = () => axios.get(baseURL).then(messageCallback).catch(errCallback)
const createMessage = body => axios.post(baseURL, body).then(messageCallback).catch(errCallback)
const deleteMessage = id => axios.delete(`${baseURL}/${id}`).then(messageCallback).catch(errCallback)
const updateMessage = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(messageCallback).catch(errCallback)




const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

fortuneBtn.addEventListener('click', getFortune)

function submitHandler(e) {
    e.preventDefault()

    let message = document.querySelector('#message')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        message: message.value,
        imageURL: imageURL.value
    }

    createMessage(bodyObj)

    message.value = ''
    imageURL.value = ''
}

function createMessageCard(positiveDatabase) {
    const messageCard = document.createElement('div')
    messageCard.classList.add('message-card')

    messageCard.innerHTML = `<img alt='message cover image' src=${positiveDatabase.imageURL} class="message-cover-image"/>
    <p class="message">${positiveDatabase.address}</p>
    <button onclick="deleteMessage(${positiveDatabase.id})">delete</button>
    `


   messageContainer.appendChild(messageCard)
}

function displayMessage(arr) {
    messageContainer.innerHTML = ``
    for (let i = 0; i < arr.length; i++) {
        createMessageCard(arr[i])
    }
}

form.addEventListener('submit', submitHandler)

getAllMessage()