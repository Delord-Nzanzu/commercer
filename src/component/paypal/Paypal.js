import { Grid } from "@material-ui/core";
import React from "react";

function Paypal({ montant, destination }) {
  const [paid, setPaid] = React.useState(false);
  const [error, setError] = React.useState(null);
  const paypal = React.useRef();
  React.useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Your description",
                amount: {
                  currency_code: "USD",
                  value: montant,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaid(true);
          console.log("ok ==>" + order);
        },
        onError: (err) => {
          //   setError(err),
          console.error(err);
        },
      })
      .render(paypal.current);
  });

  return (
    <Grid container justify="center">
      <Grid item xs={12}>
        <div ref={paypal}></div>
      </Grid>
    </Grid>
  );
}

export default Paypal;
