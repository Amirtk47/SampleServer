var express = require("express");
var router = express.Router();

import {registerRoutes} from "./handlers"

registerRoutes(router);
