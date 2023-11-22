import About from "@/pages/about/page";
import { fireEvent, render, screen } from "@testing-library/react";

describe("About Page - Rendering", () => {
  it("should have 'About Me' as title and professional summary", () => {
    render(<About />);
    const aboutTitle = screen.getByText("About Me");
    const aboutSummary = screen.getByText(
      /proficient Software Engineer specializing in frontend development, leveraging my expertise in JavaScript and TypeScript/
    );
    expect(aboutTitle).toBeInTheDocument();
    expect(aboutSummary).toBeInTheDocument();
  });

  it("should have tab title of 'Skills', 'Experiences', 'Education'", () => {
    render(<About />);
    let skillsTab = screen.getByText("Skills");
    let experiencesTab = screen.getByText("Experiences");
    let educationTab = screen.getByText("Education");

    expect(skillsTab).toBeInTheDocument();
    expect(experiencesTab).toBeInTheDocument();
    expect(educationTab).toBeInTheDocument();
  });

  it("should switch tab and display tab content", () => {
    render(<About />);
    const skillsContent = screen.getByText("Programming Languages");
    expect(skillsContent).toBeInTheDocument();

    const experiencesTab = screen.getByText("Experiences");
    fireEvent.click(experiencesTab);

    const experiencesContent = screen.getByText("Frontend Developer Intern");
    expect(experiencesContent).toBeInTheDocument();

    const educationTab = screen.getByText("Education");
    fireEvent.click(educationTab);

    const educationContent = screen.getByText(
      "BSc. Computer Science with Mathematics"
    );
    expect(educationContent).toBeInTheDocument();
  });
});
