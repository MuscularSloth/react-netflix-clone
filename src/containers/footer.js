import React from 'react'
import { Footer } from '../components';


export function FooterContainer(){
    return (
        <Footer>
            <Footer.Title>Questions? Contact Us</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.ListItem>
                        <Footer.Link href="#">FAQ</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Investor Relations</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Ways to Watch</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Corporate Information</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Netflix Originals</Footer.Link>
                    </Footer.ListItem>
                </Footer.Column>

                <Footer.Column>
                    <Footer.ListItem>
                        <Footer.Link href="#">Help Center</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Jobs</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Terms of Use</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Contact Us</Footer.Link>
                    </Footer.ListItem>
                </Footer.Column>

                <Footer.Column>
                    <Footer.ListItem>
                        <Footer.Link href="#">Account</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Redeem Gift Cards</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Privacy</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Speed Test</Footer.Link>
                    </Footer.ListItem>
                </Footer.Column>

                <Footer.Column>
                    <Footer.ListItem>
                        <Footer.Link href="#">Media Center</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Buy Gift Cards</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Cookie Preference</Footer.Link>
                    </Footer.ListItem>
                    <Footer.ListItem>
                        <Footer.Link href="#">Legal Notices</Footer.Link>
                    </Footer.ListItem>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix United Kingdom</Footer.Text>
        </Footer>
    )
}