import React from 'react';
import {Feature, OptForm} from '../components';
import {HeaderContainer} from '../containers/header';
//import {OptForm} from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';
export default function Home() {
    return (
        <>
        <HeaderContainer>
            <Feature>
                <Feature.Title>
                Unlimited movies, Netflix-Originals,TV-Series and more.
                </Feature.Title>
                <Feature.SubTitle>
                    Watch anywhere. Cancel at any time.
                </Feature.SubTitle>
                <OptForm>
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                    <OptForm.Break /> 
                    <OptForm.Input placeholder="Email address" />
                    <OptForm.Button>Get Started</OptForm.Button>
                </OptForm>
            </Feature>
        </HeaderContainer>
        <JumbotronContainer />
        <FaqsContainer />
        <FooterContainer />
        </>
    );
};