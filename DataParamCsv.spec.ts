import test, { expect } from "@playwright/test";
import { skip } from "node:test";
import { parse } from "csv-parse/sync";
import fs from 'fs';

    let csvDataValue:any = parse(fs.readFileSync('utils/loginData.csv','utf-8'),{columns:true,skip_empty_lines:true})

    for(let CsrData of csvDataValue){

    test(`Read data from CSv ${CsrData.tcid}`, async ({page}) => {
    
    await page.goto('https://leaftaps.com/opentaps/control/main')


    await page.locator("#username").fill(CsrData.Username);
    await page.locator("#password").fill(CsrData.Password);
    await page.locator('input[type="submit"]').click();
    await expect(page.locator('page.locator("text=CRM/SFA")')).toBeTruthy()
    
})
}
