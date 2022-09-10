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

    const positiveDatabase = ["Be positive. Be true. Be kind.", "A small positive thought can change your whole day.", " Positive people change the world, while negative people keep it the way it is.", "Every problem has in its hands a gift for you", "Failure is a good opportunity to start over with more intelligence"]

    
}