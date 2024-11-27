import { classes } from "@/lib";

const { Link } = classes;

const links = [
  new Link("/dashboard", "Dashboard"),
  new Link("/shelves", "Shelves"),
  new Link("/profile", "Profile"),
  new Link("/social", "Social"),
  new Link("/explore", "Explore"),
  new Link("/settings", "Settings"),
];

export default links;