import { Fragment } from "react";
import { Route } from "react-router";
import { USER_LOGIN } from "../../util/settings/config";
import { Redirect } from "react-router-dom";

const CheckoutTemplate = (props) => {
  const { Component, ...restProps } = props;

  

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};

export default CheckoutTemplate;
