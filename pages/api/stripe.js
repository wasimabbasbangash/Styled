import Stripe from "stripe";
import { getSession } from "@auth0/nextjs-auth0";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY}`);

export default async function Handler(req, res) {
  const session = await getSession(req, res);
  const user = session?.user;
  if (user) {
    const stripeId = user["http://localhost:3000/stripe_coustomer_id"];

    if (req.method === "POST") {
      // console.log(req.body);
      try {
        // create checkout session
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          customer: stripeId,
          payment_method_types: ["card"],
          shipping_options: [{ shipping_rate: "shr_1MJFxrFdHENnOHSBXCoYQakQ" }],
          shipping_address_collection: {
            allowed_countries: ["DE", "FR"],
          },
          allow_promotion_codes: true,

          line_items: req.body.map((item) => {
            {
              return {
                price_data: {
                  currency: "eur",
                  product_data: {
                    name: item.Title,
                    images: [
                      `http://localhost:1337` +
                        item.Image.data[0].attributes.formats.thumbnail.url,
                    ],
                  },
                  unit_amount: item.Fee * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.quantity,
              };
            }
          }),
          // redirect to success page
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}`,
        });
        console.log(session);
        res.status(200).json(session);
      } catch (error) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  } else {
    if (req.method === "POST") {
      // console.log(req.body);
      try {
        // create checkout session
        const session = await stripe.checkout.sessions.create({
          submit_type: "pay",
          mode: "payment",
          payment_method_types: ["card"],
          shipping_options: [{ shipping_rate: "shr_1MJFxrFdHENnOHSBXCoYQakQ" }],
          shipping_address_collection: {
            allowed_countries: ["DE", "FR"],
          },
          allow_promotion_codes: true,

          line_items: req.body.map((item) => {
            {
              return {
                price_data: {
                  currency: "eur",
                  product_data: {
                    name: item.Title,
                    images: [
                      `http://localhost:1337` +
                        item.Image.data[0].attributes.formats.thumbnail.url,
                    ],
                  },
                  unit_amount: item.Fee * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1,
                },
                quantity: item.quantity,
              };
            }
          }),
          // redirect to success page
          success_url: `${req.headers.origin}/success?&session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${req.headers.origin}`,
        });
        console.log(session);
        res.status(200).json(session);
      } catch (error) {
        res.status(error.statusCode || 500).json(error.message);
      }
    }
  }
}
