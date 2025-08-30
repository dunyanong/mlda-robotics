import React from "react";
import DynamicZoneManager from "@/components/dynamic-zone/manager";
import { generateMetadataObject } from "@/lib/shared/metadata";

// Hardcoded contact us page data
const getContactPageData = () => {
  return {
    id: 1,
    slug: "contact",
    seo: {
      metaTitle: "Contact MLDA Robo Team - Get in Touch",
      metaDescription: "Get in touch with the MLDA Robo Team at NTU EEE. Visit us at our lab or reach out through our contact form for collaborations and inquiries.",
    },
    dynamic_zone: [
      {
        __component: "dynamic-zone.hero",
        id: 1,
        heading: "Get in Touch",
        sub_heading: "Connect with the MLDA Robo Team. Whether you're interested in collaboration, have questions about our research, or want to learn more about our projects, we'd love to hear from you.",
        CTAs: [
          {
            text: "Join Us",
            URL: "https://docs.google.com/forms/d/e/1FAIpQLSe2YGzSc73LTPySFZUIff1uZj9co2wXElG8HrG16B_U1JzsjA/viewform",
            variant: "primary",
            target: "_self"
          }
        ]
      },
      {
        __component: "dynamic-zone.form-next-to-section",
        id: 2,
        heading: "Get In Touch!",
        sub_heading: "We will be delighted to connect with you! Whether you are looking to sponsor our programs or invite us to host an outreach event at your school, organization, or venue, do not hesitate to reach out. We are always eager for meaningful partnerships and fresh opportunities to create a positive impact.",
        form: {
          title: "Contact Us",
          description: "Email: ONGD0017@e.ntu.edu.sg",
          fields: [],
          submitText: "Send Email"
        },
        content: {
          heading: "Our Location",
          description: "Find us at the School of Electrical and Electronic Engineering",
          address: {
            title: "MLDA Robo Lab",
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
            question: "What resources are available under MLDA Robo Team?",
            answer: "We have access to GPUs (for training ML models), drones, mobile robots and electronic hardwares. These are valuable for both prototyping and final testing."
          },
          {
            question: "Can I collaborate with your team?",
            answer: "Yes! We're always open to collaborations with other research groups, industry partners, and academic institutions. Please reach out with details about your proposed collaboration."
          },
          {
            question: "As a freshman, do I need to be super good to join?",
            answer: "Not at all! We welcome students of all skill levels. If you're passionate about robotics and eager to learn, we encourage you to apply. Our team values enthusiasm and a willingness to grow."
          },
          {
            question: "Are members expected to travel overseas for competitions?",
            answer: "It depends on the competition. Some competitions may require travel, while others can be participated in locally. We will provide all necessary support and information regarding travel arrangements."
          }
        ]
      },
      {
        __component: "dynamic-zone.cta",
        id: 5,
        heading: "Ready to Join Our Team?",
        sub_heading: "Interested in joining the MLDA Robo Team? Check out our recruitment opportunities and application process.",
        CTAs: [
          {
            text: "Join Us - Apply Here",
            URL: "https://docs.google.com/forms/d/e/1FAIpQLSe2YGzSc73LTPySFZUIff1uZj9co2wXElG8HrG16B_U1JzsjA/viewform",
            variant: "primary",
            target: "_blank"
          },
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