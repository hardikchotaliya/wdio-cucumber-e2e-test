import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/,async function() {
    await browser.url("https://www.google.com/"); 
    console.log('Browser opened and hit the google site!');

});

When(/^search with (.*)$/, async function (searchText) {
    console.log(`>> searchText: ${searchText}`);
    let ele = await $("input[name='q']"); 
    await ele.setValue(searchText);
    await browser.keys("Enter"); 
});

Then(/^Click on he first result$/, async function () {
    let ele = await $("<h3>"); 
    await ele.click();
});

Then(/^URL shoudl match the (.*)$/, async function (expectedURL) {
    console.log(`>> expectedURL: ${expectedURL}`);
    let currentURL = await browser.getUrl(); 
    chai.expect(currentURL).to.equal(expectedURL); 
});