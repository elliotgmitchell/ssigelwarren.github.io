---
layout: page
title: Contact
permalink: /contact/
---

<div class="contact-container">
  <div class="contact-intro">
    <h1>Get In Touch</h1>
    <p>
      I'm always interested in discussing new theatrical projects, collaborations, or consultations. 
      Whether you're planning a production and need dramaturgical support, seeking script consultation, 
      or have a specific research or translation project in mind, I'd love to hear from you.
    </p>
    <p>
      Please use the form below to reach out, and I'll get back to you as soon as possible.
    </p>
  </div>
  
  <div class="contact-form">
    <form action="https://formspree.io/f/[your-formspree-id]" method="POST">
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required>
      </div>
      
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="_replyto" required>
      </div>
      
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" name="subject" required>
      </div>
      
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" rows="5" required></textarea>
      </div>
      
      <div class="form-group">
        <label for="project-type">Project Type</label>
        <select id="project-type" name="project-type">
          <option value="Dramaturgy">Dramaturgy</option>
          <option value="Script Consultation">Script Consultation</option>
          <option value="Research">Research</option>
          <option value="Translation">Translation</option>
          <option value="Project Management">Project Management</option>
          <option value="Other">Other</option>
        </select>
      </div>
      
      <button type="submit" class="submit-button">Send Message</button>
    </form>
  </div>
</div>

<script src="{{ site.baseurl }}/assets/js/contact-form.js"></script>