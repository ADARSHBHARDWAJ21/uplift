import { Send, Mail, Phone, User } from 'lucide-react';

export default function ContactForm() {
  return (
    // This section now holds the "contact" ID for navigation
    <section id="contact" className="py-32 bg-black/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-8">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-center text-lg text-gray-400 mb-12">
          Ready to elevate your brand? Reach out and let's discuss your project.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Column 1: Form */}
          <form
            onSubmit={(e) => e.preventDefault()}
            className="space-y-6"
            aria-labelledby="contact-heading"
          >
            <h3 id="contact-heading" className="text-2xl font-semibold mb-6 sr-only">
              Contact Form
            </h3>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="Your Name"
                />
                <User className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                  placeholder="you@example.com"
                />
                <Mail className="w-5 h-5 text-gray-500 absolute right-4 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition-all"
                placeholder="How can we help?"
              ></textarea>
            </div>

            <button
              type="submit"
              className="group w-full bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-md font-medium transition-all flex items-center justify-center gap-2"
            >
              Send Message
              <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          {/* Column 2: Contact Info */}
          <div className="space-y-8 pt-4">
            <h3 className="text-2xl font-semibold mb-6">Our Contact Details</h3>
            <p className="text-gray-400">
              You can also reach us directly through the channels below. We're
              always happy to chat!
            </p>
            <ul className="space-y-6 text-lg text-gray-300">
              <li className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/30 w-fit rounded-lg">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Call Us</span>
                  <a href="tel:+918966043256" className="hover:text-white">
                    +91 89660 43256
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <div className="p-3 bg-blue-900/30 w-fit rounded-lg">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Email Us</span>
                  <a
                    href="mailto:upliftmarketingagency360@gmail.com"
                    className="hover:text-white break-all"
                  >
                    upliftmarketingagency360@gmail.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
