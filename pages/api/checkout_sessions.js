const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const {title, totalVal, imgSrc, desc} = req.body;
  console.log("hello")
  
      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create({
       
        line_items: [
          {
            description: desc,
            quantity: 1,
            price_data: {
              currency: "cad",
              unit_amount: totalVal*100,
              product_data: {
                name: title,
                images: [imgSrc]
              }
            }
          },
        ],
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
    
      });

      res.status(200).json({id: session.id})
    } 
  
