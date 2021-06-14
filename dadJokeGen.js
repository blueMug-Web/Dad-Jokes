function generateRandomNumber(num) {
    //Get a # from 0 to (num - 1)
    return Math.floor(Math.random() * num);
}

// Day of week
// The joke
// Random rating for the joke
const dadJokeData = {
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    joke: [`What do you call a fish wearing a bowtie? \nSofishticated.`,
    `What did the ocean say to the beach? \nNothing, it just waved.`,
    `What is Forrest Gump's Facebook password? \n1forest1.`,
    `What did the fisherman say to the magician? \nPick a cod, any cod.`,
    `I made a pencil with two erasers. \nIt was pointless.`,
    `Why are spiders so smart? \nThey can find everything on the web.` ],
    rating: [`10/10! Final Dad mode achieved!`, `I'll see myself out...`, `Coulda been better.`]
}

//Put response data into an array then use the objects properties to customize the day of week, dad joke and rating.
let dailyDadJoke = [];

//Iterate over the object
for(let prop in dadJokeData){
    let optionIdx = generateRandomNumber(dadJokeData[prop].length);

    switch(prop){
        case 'dayOfWeek': 
            dailyDadJoke.push(`Today is: "${dadJokeData[prop][optionIdx]}"`)
            break
        case 'joke': 
            dailyDadJoke.push(`Your Daily Dad Joke is: \n"${dadJokeData[prop][optionIdx]}"`)
            break
        case 'rating': 
            dailyDadJoke.push(`Dad Joke Rating: "${dadJokeData[prop][optionIdx]}"`)
            break
        default:
            dailyDadJoke.push('There is not enough info')

    }
}

function formatJoke(joke){
    const formatted = dailyDadJoke.join('\n');
    console.log(formatted);
}

formatJoke(dailyDadJoke);