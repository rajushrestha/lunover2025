import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  name: string;
  email: string;
  company: string;
  services: string[];
  project: string;
  date: string;
  userData: string;
}

export const ContactFormEmail = ({
  name,
  email,
  company,
  services,
  project,
  date,
  userData,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>New Contact Form Submission from {name}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>

        <Section style={section}>
          <Text style={label}>Date:</Text>
          <Text style={value}>{date} - (Nepal Time)</Text>

          <Text style={label}>Name:</Text>
          <Text style={value}>{name}</Text>

          <Text style={label}>Company:</Text>
          <Text style={value}>{company}</Text>

          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>

          <Text style={label}>Services Interested In:</Text>
          <Text style={value}>{services?.join(", ")}</Text>

          <Text style={label}>Project Details:</Text>
          <Text style={value}>{project}</Text>

          <Text style={label}>User Data:</Text>
          <code style={code}>{userData}</code>
        </Section>

        <Text style={footer}>
          This email was sent from the contact form at lunover.com
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  color: "#1d1c1d",
  fontSize: "24px",
  fontWeight: "700",
  lineHeight: "1.4",
  margin: "0 0 24px",
};

const section = {
  padding: "24px",
  backgroundColor: "#f6f6f6",
  borderRadius: "4px",
};

const label = {
  color: "#1d1c1d",
  fontSize: "14px",
  fontWeight: "700",
  marginBottom: "4px",
};

const value = {
  color: "#1d1c1d",
  fontSize: "14px",
  margin: "0 0 24px",
};

const code = {
  display: "inline-block",
  padding: "16px",
  width: "100%",
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  border: "1px solid #eee",
  color: "#333",
  fontSize: "14px",
  margin: "0",
  whiteSpace: "pre-wrap",
};

const footer = {
  color: "#898989",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "24px",
  textAlign: "center" as const,
};

export default ContactFormEmail;
