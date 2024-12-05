import { Link } from "@/components/atomic";

export default function FooterLinks() {
  return (
    <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 max-w-fit">
      <h2>Links:</h2>
      <div className="flex gap-x-4 gap-y-1 flex-wrap">
        <Link href="/about">About BitReads</Link>
        <Link href="/contact">Contact us!</Link>
        <Link href="/terms-of-service">Terms of Service</Link>
        <Link href="/privacy">Your Privacy</Link>
      </div>
    </div>
  );
}
