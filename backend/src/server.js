const express = require("express");
const ejs = require("ejs");
const path = require("path");
const cors = require("cors");
const puppeteer = require("puppeteer");

const headerTemplate = require("./images/headerTemplate");
const footerTemplate = require("./images/footerTemplate");

const app = express();

app.use(cors());
app.use(express.json());

let passengers = {};

app.post("/pdf", async (request, response) => {
  passengers = request.body;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`${request.protocol}://${request.get("host")}/`, {
    waitUntil: "networkidle0",
  });

  const pdf = await page.pdf({
    displayHeaderFooter: true,
    format: "A4",
    headerTemplate,
    footerTemplate,
    scale: 1,
    printBackground: true,
  });

  await browser.close();

  response.contentType("application/pdf");

  return response.send(pdf);
});

app.get("/", (request, response) => {
  const filePath = path.join(__dirname, "templates", "teste.ejs");

  ejs.renderFile(
    filePath,
    ({
      clientName,
      clientCPF,
      clientRG,
      clientUF,
      clientBirthDate,
      firstLawyer,
      firstOAB,
      secondLawyer,
      secondOAB,
    } = passengers),
    (err, html) => {
      if (err) {
        return response.status(500).send("Erro na leitura do arquivo!");
      }
      return response.send(html);
    }
  );
});

app.listen(3333);
