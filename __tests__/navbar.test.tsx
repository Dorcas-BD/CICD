import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import NavBar from "@/pages/navbar/page";

describe("NavBar Component", () => {
  test("renders navigation links and toggles mobile menu", () => {
    render(<NavBar />);

    const logoLink = screen.getByText(/dorcas bamisile/i).closest("a");
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute("href", "/");

    const homeLink = screen.getByText(/home/i);
    const aboutLink = screen.getByText(/about/i);
    const projectsLink = screen.getByText(/projects/i);
    const contactsLink = screen.getByText(/contacts/i);

    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(contactsLink).toBeInTheDocument();

    const mobileNavMenu = screen.queryByTestId("mobile-nav-menu");
    expect(mobileNavMenu).not.toBeInTheDocument();

    const hamburgerIcon = screen.getByAltText(/hamburger/i);
    fireEvent.click(hamburgerIcon);

    const updatedMobileNavMenu = screen.getByTestId("mobile-nav-menu");
    expect(updatedMobileNavMenu).toBeInTheDocument();

    const mobileHomeLink = screen.getByTestId("mobile-home-link");
    fireEvent.click(mobileHomeLink);

    const finalMobileNavMenu = screen.queryByTestId("mobile-nav-menu");
    expect(finalMobileNavMenu).not.toBeInTheDocument();
  });
});
