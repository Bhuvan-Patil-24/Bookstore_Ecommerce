import express from "express";
import mongoose from "mongoose";
import Stripe from "stripe";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
dotenv.config({ path: "./.env" });

// Import routes
import userRoutes from "./Routes/user-routes.js";
import productRoutes from "./Routes/product-routes.js";
import dashboardRoutes from "./Routes/dashboard-routes.js";
import dashboardAgentRoutes from "./Routes/dashboardagent-routes.js";
import userAddressRoutes from "./Routes/user-address-routes.js";
import visitCountRoutes from "./Routes/visit-count-routes.js";

const app = express();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Increase limit to store image in database
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

app.use(cors());
app.use(express.json());

// Use routes
app.use("/ecommerce/user", userRoutes);
app.use("/ecommerce/product", productRoutes);
app.use("/ecommerce/manager", dashboardRoutes);
app.use("/ecommerce/agent", dashboardAgentRoutes);
app.use("/ecommerce/user-address", userAddressRoutes);
app.use("/visitcount", visitCountRoutes); // added newly

// Stripe checkout endpoint
app.post("/checkout", async (req, res) => {
    try {
        const { items } = req.body;

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: "Invalid or empty item data" });
        }

        const line_items = items.map((item) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: item.name,
                },
                unit_amount: item.price * 100,
            },
            quantity: item.quantity,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items,
            success_url: "https://yourfrontend.com/success",
            cancel_url: "https://yourfrontend.com/cancel",
        });

        if (!session || !session.id) {
            return res.status(500).json({ error: "Failed to create a checkout session" });
        }

        res.json({ url: session.url });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Database connection and server start
const port = process.env.PORT || 4000;
const url = process.env.MONGO_URL;

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(port))
    .then(() => console.log(`Connected to DB at port ${port} :)`))
    .catch((err) => console.log(`${err} is error`));
