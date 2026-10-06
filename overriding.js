"use strict";
class BasePage {
    findElement() {
        console.log("Find the element");
    }
    clickElement() {
        console.log("Clicking the element");
    }
    enterText() {
        console.log("Text");
    }
    performCommonTasks() {
        console.log("Perfome common tasks");
    }
}
class LoginPage extends BasePage {
    performCommonTasks() {
        console.log("Perfomming common tasks from login Page");
        super.performCommonTasks();
    }
}
let Lp = new LoginPage();
Lp.performCommonTasks();
let Bp = new BasePage();
Bp.performCommonTasks();
