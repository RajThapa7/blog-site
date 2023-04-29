import Link from "next/link";

export default function TitleLink() {
  return (
    <Link
      href="#"
      className="transition-smooth text-2xl font-semibold hover:underline-offset-2"
    >
      TitleLink
    </Link>
  );
}
