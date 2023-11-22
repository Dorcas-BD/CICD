import Hero from "@/pages/hero/page";
import { render, screen } from "@testing-library/react";

describe("Hero - Rendering", () => {
  it("should have Dorcas Bamisile in h1 tag", () => {
    render(<Hero />);
    const heroName = screen.getByText(/Dorcas Bamisile/);
    expect(heroName).toBeInTheDocument();
  });
  it("should have Software Engineer in h1 tag", async () => {
    render(<Hero />);
    const heroTitle = screen.findByText(/Software Engineer/);
    await expect(heroTitle);
  });
  it("should have a hero image", () => {
    render(<Hero />);
    const heroImage = screen.getByRole("img");
    expect(heroImage).toBeInTheDocument();
  });
  it("should have a hire me button", () => {
    render(<Hero />);
    const hireMeButton = screen.getByText("Hire Me");
    expect(hireMeButton).toBeInTheDocument();
  });

  it("should have social media icons links", () => {
    render(<Hero />);
    const linkedinIcon = screen.getByTestId("twitter-icon");
    const twitterIcon = screen.getByTestId("twitter-icon");
    const githubIcon = screen.getByTestId("github-icon");

    expect(linkedinIcon).toBeInTheDocument();
    expect(twitterIcon).toBeInTheDocument();
    expect(githubIcon).toBeInTheDocument();
  });
  it("should have a professional summary", () => {
    render(<Hero />);
    const heroText = screen.getByText(
      /JavaScript, TypeScript, React, Next.js, and React Native/
    );
    expect(heroText).toBeInTheDocument();
  });
});
