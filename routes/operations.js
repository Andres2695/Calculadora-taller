const express = require("express");
const { body }= require("express-validator");
const operationsController = require("../controllers/operations");


const route = express.Router();

route.post("/sum",[
    body("valueOne")
    .exists()
    .withMessage("El valueOne es requerido")
    .matches(/^[0-9]+$/,"i")
    .withMessage("El valueOne debe ser numerico")
    .trim()
    .escape(),

    body("valueTwo")
    .exists()
    .withMessage("El valueTwo es requerido")
    .matches(/^[0-9]+$/,"i")
    .withMessage("El valueTwo debe ser numerico")
    .trim()
    .escape()
    ],
    operationsController.sum

);
route.post("/res",[
    body("valueOne")
    .exists()
    .withMessage("El valueOne es requerido")
    .matches(/^[0-9]+$/,"i")
    .withMessage("El valueOne debe ser numerico")
    .trim()
    .escape(),

    body("valueTwo")
    .exists()
    .withMessage("El valueTwo es requerido")
    .matches(/^[0-9]+$/,"i")
    .withMessage("El valueTwo debe ser numerico")
    .trim()
    .escape()
    ],
    operationsController.resta

);

route.post("/mult",[
    body("valueOne")
    .exists()
    .withMessage("El valueOne es requerido")
    .matches(/^[0-9]+$/,"i")
    .withMessage("El valueOne debe ser numerico")
    .trim()
    .escape(),

    body("valueTwo")
    .exists()
    .withMessage("El valueTwo es requerido")
    .matches(/^[0-9]+$/,"i")
    .withMessage("El valueTwo debe ser numerico")
    .trim()
    .escape()
    ],
    operationsController.mult

);




route.post("/div",[
    body("valueOne")
    .exists()
    .withMessage("El valueOne es requerido")
    .matches(/^[0-9]+$/,"i")
    .withMessage("El valueOne debe ser numerico")
    .trim()
    .escape(),

    body("valueTwo")
    .exists()
    .withMessage("El valueTwo es requerido")
    .matches(/^[1-9]+$/,"i")
    .withMessage("El valueTwo debe ser numerico y no puede ser 0")
    .trim()
    .escape()
    ],
    operationsController.div

);
module.exports = route;