

const browserVersion = "Chrome" 
function getBrowserVersion(){

    if(browserVersion=="Chrome" ){
        let browserVersion = "Chrome1.5";
         console.log("inside if block",browserVersion)
    }
   console.log("outside if block", browserVersion)
}
getBrowserVersion()
console.log("global browserVersion", browserVersion)