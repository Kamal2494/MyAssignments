function launchBrowser(browserName) {
    if (browserName.toLowerCase() == "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching browser: " + browserName);
    }
}

function runTests(testType) {
    switch (testType.toLowerCase()) {
        case "smoke":
            console.log("Running smoke tests");
            break;
        case "sanity":
            console.log("Running sanity tests");
            break;
        case "regression":
            console.log("Running regression tests");
            break;
        default:
            console.log("Running smoke tests"); // default case
            break;
    }
}


let browserName = "Chrome";
console.log("The browserName is", browserName);
launchBrowser(browserName);

let testType = "sanity";
console.log("The testType is", testType);
runTests(testType);