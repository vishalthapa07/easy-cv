import React from "react";
import { IconBrandGithub } from "@tabler/icons-react";
import { FaLinkedinIn } from "react-icons/fa";
import { FloatingDock } from "./ui/floating-dock";

export function FloatingDockContact() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/vishal-thapa-7a6692141/",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/vishalthapa07",
    },
  ];
  return (
    <div className="flex items-center justify-center w-full">
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}
