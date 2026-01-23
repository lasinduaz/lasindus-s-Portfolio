export interface ContactLink {
  name: string;
  url: string;
  icon: string;
  displayValue: string;
  copyable?: boolean;
}

export interface ContactData {
  headline: string;
  subheadline: string;
  links: ContactLink[];
  resumePath: string;
}

export const contactData: ContactData = {
  headline: "Let's Connect",
  subheadline: "Ready to collaborate on your next DevOps challenge? Reach out through any of these channels.",
  links: [
    {
      name: "Email",
      url: "lasinduaz@gmail.com",
      icon: "mail",
      displayValue: "lasinduaz@gmail.com",
      copyable: true,
    },
    {
      name: "GitHub",
      url: "https://github.com/lasinduaz",
      icon: "github",
      displayValue: "github.com/lasinduaz",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/lasindusamarajeewa",
      icon: "linkedin",
      displayValue: "linkedin.com/in/lasindusamarajeewa",
    },
  ],
  resumePath: `${import.meta.env.BASE_URL}resume.pdf`,
};
