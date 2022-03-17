const {chromium} = require('playwright-core');

const { runCLI } = require('jest')

const jestConfig = require('./jest.config')

// const sleep = () => new Promise((res, rej) => setTimeout(res, 3000));

const main = async () => {

    // const browser = await chromium.launch({headless: false});
    // var page = await browser.newPage();
    // const context = { page: page };
    //
    // await  page.goto("https://baidu.com");
    //
    // console.log('Page title: ', await page.title());
    // await page.screenshot({path:`eg.png`})
    // await browser.close();
    testMatch = "**/1.test.js";
    const { results } = await runCLI({
        ...jestConfig,
        testMatch: [testMatch]
    }, ['']);
    console.log(JSON.stringify(results))
    // return {
    //     statusCode: 200,
    //     body: JSON.stringify(results)
    // }
};

main()