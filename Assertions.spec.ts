import test, { expect } from "@playwright/test";


test('Assertions', async ({page}) => {
    
    await page.goto('https://leafground.com/input.xhtml');
    
    const textbox = page.locator('[placeholder="Disabled"]')
    await expect(textbox).toBeDisabled()
    const EditTextBox = page.locator('[placeholder="Babu Manickam"]')
    await expect(EditTextBox).toBeEditable()
    await EditTextBox.fill('Kamal')
    const notDisabledBox = page.locator('//input[@id="j_idt106:float-input"]')
    await expect.soft(notDisabledBox).toBeDisabled()
    await page.locator('[value="Chennai"]').fill('Playwright Learning')
})
