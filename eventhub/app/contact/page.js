export const metadata = {
  title: "Contact | EventHub",
  description: "Get in touch with the EventHub team.",
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4 bg-black rounded-lg shadow-lg mt-10 border border-gray-800">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-400">Contact Us</h1>
      <p className="mb-6 text-lg text-gray-300 text-center">
        Have questions, feedback, or need support? We’d love to hear from you! Reach out to the EventHub team using the information below.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Email</h2>
          <p className="mb-4">
            <a href="mailto:support@eventhub.com" className="text-blue-400 underline hover:text-blue-600 transition">
              support@eventhub.com
            </a>
          </p>
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Address</h2>
          <address className="not-italic mb-4 text-gray-400">
            EventHub HQ<br />
            123 Main Street<br />
            Mumbai, Maharashtra 400001<br />
            India
          </address>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-blue-300">Follow Us</h2>
          <ul className="space-y-2">
            <li>
              <a
                href="https://twitter.com/eventhub"
                className="flex items-center text-blue-400 hover:text-blue-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557a9.93 9.93 0 0 1-2.828.775 4.932 4.932 0 0 0 2.165-2.724c-.951.564-2.005.974-3.127 1.195A4.92 4.92 0 0 0 16.616 3c-2.73 0-4.942 2.21-4.942 4.932 0 .386.045.763.127 1.124C7.728 8.807 4.1 6.884 1.671 3.965c-.423.722-.666 1.561-.666 2.475 0 1.708.87 3.216 2.188 4.099a4.904 4.904 0 0 1-2.237-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.936 4.936 0 0 1-2.224.084c.627 1.956 2.444 3.377 4.6 3.417A9.867 9.867 0 0 1 0 21.543a13.94 13.94 0 0 0 7.548 2.209c9.057 0 14.009-7.496 14.009-13.986 0-.213-.005-.425-.014-.636A9.936 9.936 0 0 0 24 4.557z"/>
                </svg>
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/eventhub"
                className="flex items-center text-pink-400 hover:text-pink-600 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.425 3.678 1.406 2.697 2.387 2.403 3.499 2.344 4.78.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.281.353 2.393 1.334 3.374.981.981 2.093 1.275 3.374 1.334C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.353 3.374-1.334.981-.981 1.275-2.093 1.334-3.374.059-1.28.072-1.689.072-4.948s-.013-3.668-.072-4.948c-.059-1.281-.353-2.393-1.334-3.374-.981-.981-2.093-1.275-3.374-1.334C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-2 text-blue-300">Send Us a Message</h2>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            required
          />
          <textarea
            placeholder="Your Message"
            className="w-full px-4 py-2 border border-gray-700 bg-black text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition font-semibold"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}