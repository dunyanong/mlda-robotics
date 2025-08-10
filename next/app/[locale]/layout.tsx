import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingProvider } from "@/components/loading-provider";
import { generateMetadataObject } from "@/lib/shared/metadata";

const inter = Inter({ subsets: ["latin"] });

// Default navbar and footer data
const getHardcodedNavbarData = () => {
  return {
    left_navbar_items: [
      { URL: "/", text: "Home", target: "_self" },
      { URL: "/team", text: "Team", target: "_self" },
      { URL: "/projects", text: "Projects", target: "_self" },
      { URL: "/contactus", text: "Contact Us", target: "_self" },
    ],
    right_navbar_items: [
      { URL: "/contactus", text: "Contact Us", target: "_self" }
    ],
    logo: {
      id: 1,
      company: "MLDA Robotics",
      image: {
        url: "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23000000'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='32' font-family='Arial, sans-serif'%3eMLDA%3c/text%3e%3c/svg%3e",
        alternativeText: "MLDA Robotics Logo",
      },
    },
  };
};

const getHardcodedFooterData = () => {
  return {
    logo: {
      id: 1,
      company: "MLDA Robotics",
      image: {
        url: "data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='200' height='200' fill='%23000000'/%3e%3ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23FFFFFF' font-size='32' font-family='Arial, sans-serif'%3eMLDA%3c/text%3e%3c/svg%3e",
        alternativeText: "MLDA Robotics Logo"
      }
    },
    description: "Building autonomous systems under NTU MLDA@EEE.",
    copyright: "© 2024 MLDA Robotics Team. All rights reserved.",
    // built_with: "Built with Next.js, Tailwind CSS, Motion Animation Lib, and Aceternity UI",
    internal_links: [
      { text: "About", URL: "/about", target: "_self" },
      { text: "Team", URL: "/team", target: "_self" },
      { text: "Projects", URL: "/projects", target: "_self" }
    ],
    policy_links: [
      { text: "Privacy Policy", URL: "/privacy", target: "_self" },
      { text: "Terms of Service", URL: "/terms", target: "_self" },
      { text: "Contact", URL: "/contact", target: "_self" }
    ],
    social_media_links: [
      { text: "GitHub", URL: "https://github.com/mlda-ntu", target: "_blank" },
      { text: "LinkedIn", URL: "https://linkedin.com/company/mlda-ntu", target: "_blank" },
      { text: "Instagram", URL: "https://instagram.com/mlda_ntu", target: "_blank" }
    ]
  };
};

// Default Global SEO for pages without them
export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const defaultSeo = {
    metaTitle: "MLDA Robotics Team - Building Autonomous Systems",
    metaDescription: "Robotics Team under NTU MLDA@EEE, building autonomous systems. 2nd place ICRA BARN 2024, Finalist ICRA BARN 2025.",
  };
  
  return generateMetadataObject(defaultSeo);
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const navbarData = getHardcodedNavbarData();
  const footerData = getHardcodedFooterData();

  return (
    <div className={`${inter.className} bg-charcoal min-h-screen flex flex-col relative`}>
      <LoadingProvider>
        <Navbar
          data={navbarData}
          locale={params.locale}
        />
        <main className="flex-1">
          {children}
        </main>
        <Footer footer={footerData} locale={params.locale} />
      </LoadingProvider>
    </div>
  );
}