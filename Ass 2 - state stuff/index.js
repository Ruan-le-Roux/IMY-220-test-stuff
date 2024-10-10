//Ruan le Roux u23782219
const socket = io();

socket.on('connect', () => {
    console.log('I connected with ID: ', socket.id);
});

document.getElementById('poll').addEventListener('submit', (event) => {
    event.preventDefault();

    const cat = document.querySelector('input[name="catName"]:checked');

    if(cat)
    {
        socket.emit('vote', cat.value);
    }
});

socket.on('updateVotes', (votes) => {
    votes.forEach((vote) => {
        const label = document.querySelector(`label[for="${vote.name}"] span`);
        if(label)
        {
            label.textContent = vote.votes;
        }
    });

    const total = votes.reduce((num, vote) => num + vote.votes, 0);

    document.getElementById('total-votes').textContent = total;
});

socket.on('liveFeed', (message) => {
    const feed = document.getElementById('feed');
    const newText = document.createElement('p');

    newText.textContent = message;

    feed.appendChild(newText);
})