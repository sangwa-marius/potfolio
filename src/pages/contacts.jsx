import { useState } from 'react';


function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send data to backend / email service
    // For demo we just show success message
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's build something awesome together.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Let's talk</h3>
            <ul>
              <li>
                <span className="icon">✉️</span>
                <a href="mailto:hello@yourname.dev">hello@yourname.dev</a>
              </li>
              <li>
                <span className="icon">🐙</span>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  github.com/yourusername
                </a>
              </li>
              <li>
                <span className="icon">𝕏</span>
                <a href="https://x.com/yourhandle" target="_blank" rel="noopener noreferrer">
                  @yourhandle
                </a>
              </li>
            </ul>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              {submitted ? 'Message Sent!' : 'Send Message'}
            </button>

            {submitted && (
              <div className="success-message">
                Thanks! I'll get back to you soon 
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contacts;