import React from "react";
import { Header } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg'

export function HeaderContainer({children}){
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.ROUTE_HOME} alt="Netflix" src={logo} />
                <Header.ButtonLink to={ROUTES.ROUTE_SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}