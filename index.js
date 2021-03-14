const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  const url = "https://www.udemy.com/home/my-courses/learning/";
  // await page.setRequestInterception(true);

  await page.goto(url);
  await page.type("#email", "");
  await page.type("#id_password", "");
  await page.click("#submit-id-submit");
  await page.waitForNavigation();

  let data = await page.evaluate(() => {
    let title = document.querySelector("details__name").innerText;
    let instructor = document.querySelector("details__instructor").innerText;

    return {
      title,
      instructor
    };
  });

  console.log(data);

//   debugger;

  await browser.close();
})();
