import test, { expect } from "@playwright/test";


test('Handling Alert - Prompt',async ({page}) => {

    page.on("dialog",async (alert) => {

       await alert.accept('Playwright')
        
    })
    await page.goto('https://www.leafground.com/alert.xhtml')

    await page.locator('(//button[@role="button"])[6]').click()

    let PromptDialogConfirmation = page.locator('[id="confirm_result"]')
    await expect(PromptDialogConfirmation).toContainText(' User entered name as: Playwright')
    console.log('Message displayed', await PromptDialogConfirmation.innerText())
    
})

test('Handling Alert = Sweet Alert', async({page})=>{
     await page.goto('https://www.leafground.com/alert.xhtml')

    await page.getByRole('button', { name: 'Delete' }).click();
    let sweetAlertTitle= page.locator('(//span[@class="ui-dialog-title"])[4]')
    await expect(sweetAlertTitle).toContainText('Confirmation')
    await page.locator('//span[text()="Yes"]').click()
})


test('Handling Alert - Sweet Alert (Simple Dialog)', async({page}) =>{

    await page.goto('https://www.leafground.com/alert.xhtml')
    await page.locator("//h5[text()='Sweet Alert (Simple Dialog)']/following-sibling::button").click()
    let simpleSweetAlert= page.locator("//span[text()='Dialog']")
    await expect(simpleSweetAlert).toContainText('Dialog')
    console.log('Heading is',await simpleSweetAlert.textContent())
    await page.locator('//span[text()="Dismiss"]').click()
})