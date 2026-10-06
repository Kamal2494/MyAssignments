"use strict";
class WebComponent {
    selector;
    constructor(selector) {
        this.selector = selector;
    }
    click() {
        console.log(`Clicking on component: ${this.selector}`);
    }
    focus() {
        console.log(`Focusing on component: ${this.selector}`);
    }
}
class Button extends WebComponent {
    // Overriding the click() method
    click() {
        console.log(`Button clicked: ${this.selector}`);
        //super.click();
    }
}
class TextInput extends WebComponent {
    value = "";
    enterText(text) {
        this.value = text;
        console.log(`Entering text "${text}" into: ${this.selector}`);
    }
}
function testComponents() {
    // Create Button object
    const button = new Button("#login-button");
    // Create TextInput object
    const textInput = new TextInput("#username");
    // Test Button methods
    button.click();
    button.focus();
    // Test TextInput methods
    textInput.enterText("Kamal");
    textInput.focus();
    console.log(`Text input value: ${textInput.value}`);
}
testComponents();
