import React, { JSXElementConstructor, ReactElement } from 'react';
import { NavigateFunction, Params, useLocation, useNavigate, useOutlet, useParams,Location } from 'react-router-dom';


function WithRouter<T extends object>(Componnent: React.ComponentType<IWithRouterProps & T>) {
  function ComponentWithRouterProp(props: T) {
    const location = useLocation();
    const navigate = useNavigate();
    const params = useParams();
    const outlet = useOutlet();

    const rouProps: IWithRouterProps = {
      params, location, navigate, outlet,
    }

    return <Componnent {...props}  {...rouProps} />;
  }

  return ComponentWithRouterProp;
}

export default WithRouter;

export interface IWithRouterProps {
  location: Location;
  navigate: NavigateFunction;
  params: Params<string>;
  outlet: ReactElement<any, string | JSXElementConstructor<any>> | null
}
