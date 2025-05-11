class Start extends Scene {
    create() {
<<<<<<< Updated upstream
        this.engine.show(this.engine.storyData.Title); // TODO: replace this text using this.engine.storyData to find the story title
=======
        this.engine.setTitle(this.engine.storyData.Title); // TODO: replace this text using this.engine.storyData to find the story title
>>>>>>> Stashed changes
        this.engine.addChoice("Begin the story");
        //console.log(this.engine.storyData.Title);
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // TODO: replace this text by the initial location of the story
<<<<<<< Updated upstream
        //console.log(this.engine.storyData.InitialLocation);
=======
>>>>>>> Stashed changes
    }
}

class Location extends Scene {
    create(key) {
        let locationData = this.engine.storyData.Locations[key]; // TODO: use `key` to get the data object for the current story location
<<<<<<< Updated upstream
        //console.log(locationData)
        this.engine.show(locationData.Body); // TODO: replace this text by the Body of the location data
        
        if("Choices" in locationData) { // TODO: check if the location has any Choices
=======
        this.engine.show(locationData.Body); // TODO: replace this text by the Body of the location data
        
        if(locationData.Choices && locationData.Choices.length > 0) { // TODO: check if the location has any Choices
>>>>>>> Stashed changes
            for(let choice of locationData.Choices) { // TODO: loop over the location's Choices
                this.engine.addChoice(choice.Text, choice); // TODO: use the Text of the choice
                // TODO: add a useful second argument to addChoice so that the current code of handleChoice below works
            }
        } else {
            this.engine.addChoice("La Fin")
        }
    }

    handleChoice(choice) {
        if(choice) {
            this.engine.show("&gt; "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        } else {
            this.engine.gotoScene(End);
        }
    }
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}

Engine.load(Start, 'myStory.json');