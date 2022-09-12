// Step 1: Select HTML element

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const messageContainer = document.getElementById("message-container")
const posQuote = document.getElementById("quotes")

const form = document.querySelector("form")


const baseURL = "http://localhost:4000"

const checkValue = element.options[element.selectedIndex].value
const checkText = element.options[element.selectedIndex].text

const messageCallback = ({ data: positiveDatabase }) => displayMessage(positiveDatabase)
const errCallback = err => console.log(err)

const getAllMessage = () => axios.get(baseURL).then(messageCallback).catch(errCallback)
const createMessage = body => axios.post(baseURL, body).then(messageCallback).catch(errCallback)
const deleteMessage = id => axios.delete(`${baseURL}/${id}`).then(messageCallback).catch(errCallback)
const updateMessage = (id, type) => axios.put(`${baseURL}/${id}`, {type}).then(messageCallback).catch(errCallback)




// Step 2: Write the function
const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};



const getFortune = () => {
    axios.get(`${baseURL}/api/fortune`)
        .then(res => {
            // console.log(res.data)
            const data = res.data;
            alert(data);
    })
    .catch((err) => {
        console.log(err)
    })
    
};



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



posQuote.addEventListener("change", (e) => {
    const value = e.target.value;
    const text = element.options[element.selectedIndex].text;
   
    if (value) {
      document.getElementById("pick").textContent = `Value Selected: ${value}`;
    } else {
      document.getElementById("pick").textContent = "";
    }
  });

  // Step 3: Combine with event listener
  
  complimentBtn.addEventListener('click', getCompliment)
  fortuneBtn.addEventListener('click', getFortune)
  form.addEventListener('submit', submitHandler)

    getAllMessage()