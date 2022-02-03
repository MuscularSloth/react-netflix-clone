/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Footer } from "../../components";

describe("<Footer />", () => {
	it("renders the <Footer/> with populated data", () => {
		const { container, getByText } = render(
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
		);

		expect(getByText("Questions? Contact Us")).toBeTruthy();
		expect(getByText("FAQ")).toBeTruthy();
		expect(getByText("Investor Relations")).toBeTruthy();
		expect(getByText("Ways to Watch")).toBeTruthy();
		expect(getByText("Corporate Information")).toBeTruthy();
		expect(getByText("Netflix Originals")).toBeTruthy();

		expect(getByText("Help Center")).toBeTruthy();
		expect(getByText("Jobs")).toBeTruthy();
		expect(getByText("Terms of Use")).toBeTruthy();
		expect(getByText("Contact Us")).toBeTruthy();

		expect(getByText("Account")).toBeTruthy();
		expect(getByText("Redeem Gift Cards")).toBeTruthy();
		expect(getByText("Privacy")).toBeTruthy();
		expect(getByText("Speed Test")).toBeTruthy();

		expect(getByText("Media Center")).toBeTruthy();
		expect(getByText("Buy Gift Cards")).toBeTruthy();
		expect(getByText("Cookie Preference")).toBeTruthy();
		expect(getByText("Legal Notices")).toBeTruthy();

		expect(getByText("Netflix United Kingdom")).toBeTruthy();
	});
});
