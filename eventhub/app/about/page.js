export const metadata = {
  title: "About | EventHub",
  description: "Learn more about EventHub and our mission.",
};

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-4">About EventHub</h1>
      <p className="mb-4">
        EventHub is your one-stop platform for discovering, organizing, and sharing events. Whether you’re looking for local meetups, professional conferences, or fun activities, EventHub connects you with the events that matter most.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to make event discovery and management seamless for everyone. We believe in building communities by bringing people together through shared experiences.
      </p>
      <h2 className="text-xl font-semibold mt-8 mb-2">Why Choose EventHub?</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Easy event discovery and registration</li>
        <li>Personalized recommendations</li>
        <li>Tools for organizers to manage events efficiently</li>
        <li>Secure and user-friendly platform</li>
      </ul>
      <p>
        Join EventHub today and never miss out on the events that inspire you!
      </p>
    </main>
  );
}