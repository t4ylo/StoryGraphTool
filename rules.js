class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title); // Set the story title
        this.engine.addChoice("Begin the story");
    }

    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // Go to the initial location
    }
}

class Location extends Scene {
    create(key) {
        let locationData = this.engine.storyData.Locations[key]; // Get data for current location
        let bodyText = locationData.Body;
        if (bodyText.includes("{{RANDOM_TAPE_MESSAGE}}")) {
            let options = this.engine.storyData.RandomTapeMessages;
            let randomMessage = options[Math.floor(Math.random() * options.length)];
            bodyText = bodyText.replace("{{RANDOM_TAPE_MESSAGE}}", randomMessage);
        }
        this.engine.show(bodyText);

        if (locationData.Choices && locationData.Choices.length > 0) {
            for (let choice of locationData.Choices) {
                this.engine.addChoice(choice.Text, choice); // Store entire choice object
            }
        } else {
            this.engine.addChoice("La Fin");
        }
    }

    handleChoice(choice) {
        if (choice && choice.Target) {
            this.engine.show("&gt; " + choice.Text);
            this.engine.gotoScene(Location, choice.Target); // Move to next scene
        } else {
            this.engine.gotoScene(End); // End of story
        }
    }

    
}

class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits); // Show the credits
    }
}



Engine.load(Start, 'myStory.json');