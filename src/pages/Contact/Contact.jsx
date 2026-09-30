import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [pending, setPending] = useState(false);
  const [message, setMessage] = useState("");
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const key = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
    if (!key) { setMessage("Contact form is not configured yet. Please email me directly."); return; }
    setPending(true); setMessage("");
    const data = new FormData(form);
    data.append("access_key", key);
    data.append("subject", "New portfolio contact message");
    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: data });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error(result.message || "Unable to send message.");
      form.reset(); setMessage("Message sent. I’ll be in touch soon!");
    } catch (error) { setMessage(error.message || "Connection failed. Please email me directly."); }
    finally { setPending(false); }
  }
  return (
    <section id="contact" className="contact-section section-shell">
      <p className="eyebrow">// OPEN A CONNECTION</p>
      <h2 className="section-heading"><span>04 /</span> Let’s build something.</h2>
      <div className="contact-grid">
        <div className="contact-intro"><p>Have a role, a project, or an idea in mind? Tell me what you’re working on and I’ll get back to you.</p><a href="mailto:jyotishahqwerty@gmail.com">jyotishahqwerty@gmail.com ↗</a><span>Kathmandu, Nepal</span></div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} placeholder="Your name" />
          <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
          <label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" rows="5" required maxLength={5000} placeholder="Tell me about your project..." />
          <button className="action action-primary" type="submit" disabled={pending}>{pending ? "SENDING..." : "[ SEND MESSAGE ↗ ]"}</button>
          {message && <p role="status" className="form-status">{message}</p>}
        </form>
      </div>
    </section>
  );
}
