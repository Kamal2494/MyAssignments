import test, { expect } from "@playwright/test";


test('Handling frames with alerts', async ({page}) =>{

     page.on('dialog',async (Alert) => {
       
        let AlertType = Alert.type()
        console.log('The Alert Type is',AlertType)

        if(AlertType === "confirm"){
            Alert.accept()

        }else{
            Alert.dismiss()
        }
        
     })
     page.waitForLoadState('domcontentloaded')
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm')
    let iframeName = page.frameLocator('//iframe[@id="iframeResult"]')
    await iframeName.locator('//button[text()="Try it"]').click()

   
    const textDisplayed = await iframeName.locator('//p[text()="You pressed OK!"]').textContent() 

    await expect(iframeName.locator('//p[text()="You pressed OK!"]')).toContainText("You pressed OK!")
    console.log("Message Displayed is :", textDisplayed);

})