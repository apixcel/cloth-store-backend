"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./auth.route"));
const category_route_1 = __importDefault(require("./category.route"));
const product_route_1 = __importDefault(require("./product.route"));
const review_route_1 = __importDefault(require("./review.route"));
const sell_route_1 = __importDefault(require("./sell.route"));
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: "/auth",
        route: auth_route_1.default,
    },
    {
        path: "/category",
        route: category_route_1.default,
    },
    {
        path: "/product",
        route: product_route_1.default,
    },
    {
        path: "/review",
        route: review_route_1.default,
    },
    {
        path: "/sell",
        route: sell_route_1.default,
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
