import { classes } from "@/lib";

const { Link } = classes;

const links = [
  new Link("/about", "About"),
  new Link("/contact", "Contact"),
  new Link("/privacy", "Your Privacy"),
  new Link("/terms-of-service", "Terms of Service"),
  new Link("/auth/sign-in", "Sign In"),
];

export default links;
