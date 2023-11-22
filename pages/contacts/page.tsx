import React from "react";

interface Contact {
  title: string;
  value: string;
  icon?: string;
}

const Contacts: React.FC = () => {
  const contactData: Contact[] = [
    {
      title: "Email:",
      value: "bamisiledorcas@gmail.com",
    },
    {
      title: "Phone Number:",
      value: "+2347057258425",
    },
  ];

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact__container">
        <div className="contact__data">
          {contactData.map((item, index) => (
            <div key={index} className="contact__information">
              <h3 className="contact__subtitle">{item.title}</h3>
              <span className="contact__description">{item.value}</span>
            </div>
          ))}
        </div>
        <form action="" className="contact__form">
          {["Name", "Email"].map((placeholder, index) => (
            <input
              key={index}
              type={index === 1 ? "email" : "text"}
              placeholder={placeholder}
              className="contact__input"
            />
          ))}
          <textarea
            name=""
            id=""
            cols={0}
            rows={0}
            placeholder="Message"
            className="contact__input"
          ></textarea>
          <input
            type="button"
            value="Send Message"
            className="contact__input button"
          />
        </form>
      </div>
    </section>
  );
};

export default Contacts;
