

const express = require("express");
const fs = require("fs");
const path = require("path");

const marketRouter = express.Router();

marketRouter.get("/marketdata", (req, res) => {
    const filePath = path.join(__dirname, "../lennar_data.json");

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            return res.status(500).send("Error reading data");
        }

        const homes = JSON.parse(data);

        const formatted = homes.map((home) => ({
            mpc: home["MPC"],
            community: home["Community"],
            city: home["City"],
            state: home["State"],
            zipcode: home["Zipcode"],
            latitude: home["Latitude"],
            longitude: home["Longitude"],
            planUrl: home["Plan URL"],
            homesitePrice: home["Homesite Price"],
            homesiteSqft: home["Homesite Sq.Ft."]
        })).slice(0, 100);
        




        res.status(200).json(formatted);
    });
});

module.exports = marketRouter;

