let jokes = ["Why don't they play poker in the jungle? <br> Too many cheetahs.",
    "What is the difference between a cat and a comma? <br> One has the paws before the claws and the other has the clause before the pause.",
    "Where do dogs go when they lose their tails? <br> To the retail store.",
    "What kind of dog tells time? <br> <br> atch dog.",
    "What has four legs and an arm? <br> appy pit bull.",
    "Why is a tree like a dog? <br> Because they both lose their bark when they die.",
    "Did you hear about the cowboy who got himself a dachshund? <br> Everyone kept telling him to get a long, little doggie.",
    "Did you hear about the new breed in pet shops? <br> They crossed a pit bull with a collie; it bites your leg off and goes for help.",
    "How do you know if there is an elephant under the bed? <br> Your nose is touching the ceiling.",
    "Why did the turtle cross the road? <br> To get to the Shell station!",
    "Why did the chicken lawyer cross the road? <br> To get to the car accident on the other side.",
    "Why did chicken Jim Morrison cross the road? <br> To break on through to the other side.",
    "Why do birds fly South? <br> Because it's too far to walk.",
    "Why do hummingbirds hum? <br> Because they don't know the words.",
    "Where does a blackbird go for a drink? <br> To a crow bar.",
    "Why was the crow perched on a telephone wire? <br> He was going to make a long-distance caw.",
    "What did the chick say when it saw an orange in the nest? <br> Look at the orange mama laid.",
    "Is it good manners to eat fried chicken with your fingers? <br> No, you should eat your fingers separately.",
    "Why do hens lay eggs? <br> If they dropped them, they'd break.",
    "Why do seagulls live near the sea? <br> Because if they lived near the bay, they would be called bagels.",
    "Diner: Do you serve chicken here? <br> Waiter: Sit down, sir. We serve anyone.",
    "Diner: I can't eat this chicken. Call the manager. <br> Waiter: It's no use. He can't eat it either.",
    "Which side of a chicken has the most feathers? <br> The outside.",
    "What do you get when you cross a parrot with a centipede? <br> alkie-talkie, of course.",
    "Have you heard of that disease that you get from kissing birds? <br> Chirpes. It's one of those canarial diseases. I hear it's untweetable.",
    "Why did the farmer name his pig ink? <br> Because he kept running ot of his pen",
    "What do you call an alligator in a vest? <br> An Investigator",
    "What's the similarity between a Alligator and Windows? <br> Neither of them has enough bytes!",
    "How many arms has a alligator got? <br> Depends how far he has got with eating his dinner!",
    "Why don't alligators like fast food? <br> Because they can't catch it!",
    "What do you get if you cross a alligator with a flower? <br> I don't know, but I'm not going to smell it!",
    "Did you hear about the law firm with the most intimidating lawyers? <br> It's filled with liti-gators.",
    "What do you call a crocodile with GPS? <br> avi-gator.",
    "What do alligators call human children? <br> Appetizers.",
    "Who gives alligators presents on Christmas? <br> Santa Jaws!",
    "What's worse than one alligator coming to dinner? <br> Two alligators coming to dinner",
    "What do alligators drink before a race? <br> Gator-Ade.",
    "Why are alligators comedians so funny? <br> Their wit is as razor sharp as their teeth!",
    "Why won't alligators attack lawyers? <br> Professional courtesy!",
    "Why shouldn't you shoot an alligator? <br> He'll just bite the bullet and make the best of it.",
    "What do you call an alligator that sneaks up and bites you from behind? <br> ail-gater.",
    "What do yuppie alligators like to drink <br> Jaw-va",
    "What was the nerd alligators favorite programming language <br> Jaw-va",
    "What do you call an alligator that makes others fight? <br> An Instigator.",
    "What is an alligators favorite smell? <br> Human blood.",
    "What do you get a girl that likes crocodiles? <br> All I got her is shoes.",
    "What do you call a man too big for an alligator to eat? <br> a jawbreaker.",
    "Did you hear about the crocodile who became a congressman? <br> He was an expert dele-gator.",
    "Why shouldn't you taunt an alligator? <br> Because it might come back to bite you in the end.",
    "What do you call a reptile that works on a farm? <br> An irri-gator.",
    "What's the difference between a dog and a gator? <br> One's bark is worst than his bite."]

const randomJokes = () => {
    const randomIndex =  Math.floor(Math.random() * jokes.length)
    return jokes[randomIndex];
}

document.getElementById('jokesBtn').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        randomJokes();
        document.getElementById('output').innerHTML = randomJokes();
    }
});

document.getElementById('jokesBtn').addEventListener('click', (event) => {
    randomJokes();
    document.getElementById('output').innerHTML = randomJokes();
});