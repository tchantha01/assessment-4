const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const messageContainer = document.getElementById("message-container")



const baseURL = "http://localhost:4000/api/compliment"

const messageCallback = ({ data: positiveDatabase }) => displayMessage(positiveDatabase)
const errCallback = err => console.log(err)






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

