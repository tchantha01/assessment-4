let positiveDatabase = require('./db.json')
let globalID = 6


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A fresh start will put you on your way.", "A golden egg of opportunity falls into your lap this month.", "A lifetime of happiness lies ahead of you.", "Allow compassion to guide your decisions."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getMessage: (req, res) => {
        res.status(200).send(positiveDatabase)
        
    },
    deleteMessage: (req, res) => {
        console.log(req.params.id)
        let index = positiveDatabase.findIndex(element => element.id === +req.params.id)
        house.splice(index, 1)
        res.status(200).send(positiveDatabase)
        
    },
    createMessage: (req, res) => {
        console.log(req.body)
        const { address, price, imageURL} = req.body
        let newHouse = {
            id: globalID,
            address, 
            price,
            imageURL
        }
        house.push(newHouse)
        res.status(200).send(house)
        globalID++
        
    },
    updateHouse: (req, res) => {
        console.log(req.params.id)
        console.log(req.body)
        let {id} = req.params
        let {type} = req.body
        let index = house.findIndex(element => element.id === +req.params.id)

        if(house[index].price <= 10000 && type === 'minus'){
            house[index].price = 0
            res.status(200).send(house)

        } else if(type === 'plus') {
            house[index].price += 10000
            res.status(200).send(house)

        } else if(type === 'minus') {
            house[index].price -= 10000
            res.status(200).send(house)
        }else{
            res.status(400)
        }


}        

}