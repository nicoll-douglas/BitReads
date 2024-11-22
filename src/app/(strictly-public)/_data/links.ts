class Link {
  href: string;
  title: string;

  constructor(href: string, title: string) {
    this.href = href;
    this.title = title;
  }
}

const links = [
  new Link("/about", "About"),
  new Link("/contact", "Contact"),
  new Link("/privacy", "Your Privacy"),
  new Link("/terms-of-service", "Terms of Service"),
  new Link("/auth/sign-in", "Sign In"),
];

export default links;
