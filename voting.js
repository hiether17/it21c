class VotingApp {
    constructor(ctx, data) {
        this.ctx = ctx;
        this.votes = {};

        // Options from JSON
        this.options = data.map(item => item.option);  
        this.colors = data.map(item => item.color);    
    }
}