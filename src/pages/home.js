import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { JumbotronContainer } from "../containers/jumbotron";
import { OptForm, Feature } from "../components";

export default function Home(){
    return (
        <>  
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programs and more.
                    </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                    </Feature.SubTitle>

                    <OptForm>
                        <OptForm.Input  placeholder="Enter your e-mail" />
                        <OptForm.Button>Try it now!</OptForm.Button>
                        <OptForm.Break />
                        <OptForm.Text>Enter your e-mail to create or restart your membership.</OptForm.Text>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}