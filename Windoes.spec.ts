import { test, expect } from "@playwright/test"

test('Window Handling', async ({ page, context }) => {

    await page.goto('https://leaftaps.com/opentaps/control/main')

    await page.getByLabel('Username').fill('Demosalesmanager')
    await page.getByRole('textbox', { name: 'Password' }).fill('crmsfa')
    await page.getByRole('button').click()

    await page.getByText('CRM/SFA').click()
    await page.getByRole('link', { name: 'Leads' }).click()
    await page.getByRole('link', { name: 'Merge Leads' }).click()

    await page.waitForLoadState('domcontentloaded')

    // Open first lead window
    const promisePage1 = context.waitForEvent('page')
    await page.locator('(//img[@alt="Lookup"])[1]').click()

    const leadPage1 = await promisePage1
    await leadPage1.waitForLoadState('domcontentloaded')

    // Select first lead
    await page.locator('(//a[@class="linktext"])[1]').click()

    // Open second lead window
    const promisePage2 = context.waitForEvent('page')
    await page.locator('(//img[@alt="Lookup"])[2]').click()

    const leadPage2 = await promisePage2
    await leadPage2.waitForLoadState('domcontentloaded')

    // Select second lead
    await page.locator('[id="ext-gen287"]').click()

    
})