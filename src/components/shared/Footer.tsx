import { Linkedin, Github } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} Diksha Miglani. All Rights Reserved.</p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="https://www.linkedin.com/in/dikshamiglani/" aria-label="LinkedIn Profile" className="hover:text-accent">
            <Linkedin />
          </Link>
          <Link href="#" aria-label="GitHub Profile" className="hover:text-accent">
            <Github />
          </Link>
        </div>
      </div>
    </footer>
  );
}
