import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "@/components/footer";
import "@testing-library/jest-dom";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("should render the footer", () => {
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("should render the logo with correct src and alt attributes", () => {
    const logoImage = screen.getByAltText("Company Logo");
    expect(logoImage).toHaveAttribute("src", "/logo.svg");
    expect(logoImage).toHaveAttribute("alt", "Company Logo");
  });

  it("should have a link that navigates to the home page", () => {
    const homeLink = screen.getByRole("link", { name: /Go to home page/i });
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
