// node automation.js --url="https://gaana.com/" --config=config.json
let minimist = require("minimist");
let fs = require("fs");
let puppeteer = require('puppeteer');
let args = minimist(process.argv);
console.log(args.url);
let configJSON = fs.readFileSync(args.config,"utf-8");
let config = JSON.parse(configJSON);
async function run(){
    let browser = await puppeteer.launch(
        {headless: false,
            args: [
                '--start-fullscreen'
            ],
            defaultViewport: null
        }
        );
    let pages = await browser.pages();
    let page=pages[0];
    await page.goto(args.url);
    await page.waitForSelector("a[href = '/music']");
    await page.click("a[href = '/music']");
    await page.waitForSelector("div._inner>button");
    await page.click("div._inner>button");
    await page.waitForSelector("input[type='text']");
    await page.click("input[type='text']");
   await page.type("input[type='text']", config.userid, {delay:50});
   await page.waitForSelector("button.custom-btn");
   await page.click("button.custom-btn");
   await page.waitForSelector("input.form-input");
   await page.click("input.form-input");
   await page.type("input.form-input", config.password, {delay:50});
   await page.waitForSelector("button.custom-btn");
   await page.click("button.custom-btn");
   await page.waitForSelector("button.cp_btn");
   await page.click("button.cp_btn");
   await page.waitForSelector("input.form-input");
   await page.click("input.form-input");
   await page.type("input.form-input", config.name, {delay:50});
   await page.waitForSelector("button.custom-btn");
   await page.click("button.custom-btn");
   await page.waitForSelector("a[href = '/newrelease']");
   await page.click("a[href = '/newrelease']");
  // await page.click("a[href = '/newrelease']"); 

   await page.waitForSelector("a.al");
   await page.click("a.al"); //click on atrangi re
   await page.click("a.al"); 
  
 

   
 


  

   //await browser.close();
    console.log("Browser closed");
}

run();