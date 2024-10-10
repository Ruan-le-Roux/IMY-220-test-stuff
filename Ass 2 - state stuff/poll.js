//Ruan le Roux u23782219
class Poll
{
    constructor(cats)
    {
        this.cats = cats;
    }

    vote(name)
    {
        const cat = this.cats.find(cat => cat.name === name);

        if(cat)
        {
            cat.votes++;
        }
    }

    getVotes()
    {
        return this.cats;
    }
}

module.exports = Poll;