import React from "react";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import { generateMetadataObject } from "@/lib/shared/metadata";

// Hardcoded contact us page data
const getContactPageData = () => {
  return {
    id: 1,
    slug: "contact",
    seo: {
      metaTitle: "Contact MLDA Robotics Team - Get in Touch",
      metaDescription: "Get in touch with the MLDA Robotics Team at NTU EEE. Visit us at our lab or reach out through our contact form for collaborations and inquiries.",
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.hero",
        id: 1,
        heading: "Get in Touch",
        sub_heading: "Connect with the MLDA Robotics Team. Whether you're interested in collaboration, have questions about our research, or want to learn more about our projects, we'd love to hear from you.",
        CTAs: [
          {
            text: "Visit Our Lab",
            URL: "#visit",
            variant: "primary",
            target: "_self"
          },
          {
            text: "Join Us",
            URL: "#join",
            variant: "simple",
            target: "_self"
          }
        ]
      },
      {
        __component: "dynamic-zone.form-next-to-section",
        id: 2,
        heading: "Visit Us",
        sub_heading: "Come visit our lab and see our autonomous robotics systems in action.",
        form: {
          title: "Send us a Message",
          description: "Have a question or want to schedule a visit? Drop us a message.",
          fields: [
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Your Email",
              required: true
            },
            {
              name: "subject",
              type: "text",
              placeholder: "Subject",
              required: true
            },
            {
              name: "message",
              type: "textarea",
              placeholder: "Your message...",
              required: true
            }
          ],
          submitText: "Send Message"
        },
        content: {
          heading: "Our Location",
          description: "Find us at the School of Electrical and Electronic Engineering",
          address: {
            title: "MLDA Robotics Lab",
            street: "50 Nanyang Ave",
            building: "School of Electrical and Electronic Engineering",
            room: "S2.1-B4-01",
            postal: "639798",
            country: "Singapore"
          },
          map: {
            embedded: true,
            latitude: 1.3460,
            longitude: 103.6802,
            zoom: 15
          }
        }
      },
      // {
      //   __component: "dynamic-zone.features",
      //   id: 3,
      //   heading: "Connect With Us",
      //   sub_heading: "Multiple ways to reach out and stay connected with our research and activities."
      // },
      {
        __component: "dynamic-zone.faq",
        id: 3,
        heading: "Frequently Asked Questions",
        sub_heading: "Common questions about contacting and visiting our lab",
        faqs: [
          {
            question: "How can I schedule a lab visit?",
            answer: "You can schedule a visit by sending us a message through the contact form above or emailing us directly. We welcome visitors interested in our research and are happy to provide lab tours."
          },
          {
            question: "What are your lab operating hours?",
            answer: "Our lab is typically active Monday to Friday, 9 AM to 6 PM. However, as research schedules vary, we recommend contacting us in advance to ensure someone will be available to meet with you."
          },
          {
            question: "Can I collaborate with your team?",
            answer: "Yes! We're always open to collaborations with other research groups, industry partners, and academic institutions. Please reach out with details about your proposed collaboration."
          },
          {
            question: "Do you offer internship opportunities?",
            answer: "We occasionally offer internship positions for qualified students. Check our recruitment page or contact us directly to inquire about current opportunities."
          },
          {
            question: "How can I stay updated on your research?",
            answer: "Follow us on our social media channels and check our website regularly for updates on our latest research, publications, and competition results."
          },
          {
            question: "Can I use your research for my project?",
            answer: "Many of our research outputs are published in academic papers. For specific collaboration or usage requests, please contact us with details about your project."
          }
        ]
      },
      {
        __component: "dynamic-zone.cta",
        id: 5,
        heading: "Ready to Join Our Team?",
        sub_heading: "Interested in joining the MLDA Robotics Team? Check out our recruitment opportunities and application process.",
        CTAs: [
          {
            text: "Join Us - Apply Here",
            URL: "https://www.notion.so/mlda-robotics/Join-MLDA-Robotics-Team-Recruitment-Template-123456789",
            variant: "primary",
            target: "_blank"
          },
          {
            text: "Learn More About Us",
            URL: "/about",
            variant: "simple",
            target: "_self"
          }
        ]
      }
    ]
  };
};

export async function generateMetadata() {
  const page = getContactPageData();
  return generateMetadataObject(page.seo);
}

export default async function ContactPage() {
  const page = getContactPageData();

  return (
    <DynamicZoneManager dynamicZone={page.dynamic_zone} locale="en" />
  );
}