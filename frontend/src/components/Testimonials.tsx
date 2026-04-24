import { useEffect, useRef } from "react";

export default function Testimonials() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Founder, TechStart LLC",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "The Future Perfect Global made forming my LLC incredibly simple. The process was straightforward, and their support team answered all my questions promptly. Highly recommend!"
    },
    {
      name: "Michael Chen",
      role: "CEO, Digital Solutions Inc",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Best business formation service I've used. Professional, efficient, and affordable. They handled everything seamlessly from start to finish."
    },
    {
      name: "Emily Rodriguez",
      role: "Owner, Creative Studio",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "I was nervous about starting my business, but The Future Perfect Global's team made it easy. The dashboard is great for tracking everything. Worth every penny!"
    },
    {
      name: "David Anderson",
      role: "Co-Founder, GreenLeaf Farms",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Super fast service. Got my documents earlier than expected. Their reminders for compliance filings are a lifesaver."
    },
    {
      name: "Priya Mehta",
      role: "Owner, Bliss Boutique",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "I didn’t understand the paperwork at all, but The Future Perfect Global handled everything for me. Friendly customer support and clear pricing."
    },
    {
      name: "James Williams",
      role: "Consultant",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "This is my second LLC with them. The experience is consistent — smooth, reliable, zero hassle."
    },
    {
      name: "Olivia Brown",
      role: "Freelancer, OB Content Studio",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Loved the user dashboard and status tracking. I always knew what stage my filing was in. Very transparent service."
    },
    {
      name: "Robert Miller",
      role: "Restaurant Owner",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "They helped me with my EIN and operating agreement too. Everything in one place made it so convenient."
    },
    {
      name: "Sophia Martinez",
      role: "Founder, Bright Minds Academy",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Very professional and supportive team. They walked me through each requirement without overwhelming me."
    },
    {
      name: "Daniel Kim",
      role: "E-commerce Entrepreneur",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200",
      rating: 5,
      text: "Best value for money in formation services. I compared many providers and I’m glad I chose The Future Perfect Global."
    }
  ];

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        container.scrollBy({ left: 350, behavior: "smooth" });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scroll = (direction: string) => {
    const container = scrollRef.current;
    if (!container) return;
    const amount = direction === "left" ? -400 : 400;
    container.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-cyan-100/50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <div className="inline-block bg-cyan-100 text-cyan-600 px-6 py-3 rounded-full font-bold mb-4">
            ⭐ Trusted by Thousands
          </div>
          <h2 className="text-5xl font-black text-gray-900 mb-3">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-lg">
            Based on 23,143 verified reviews
          </p>
        </div>

        {/* buttons */}
        <div className="flex justify-end gap-4 mb-6">
          <button onClick={() => scroll("left")} className="bg-white shadow px-4 py-2 rounded-full font-bold">
            ←
          </button>
          <button onClick={() => scroll("right")} className="bg-white shadow px-4 py-2 rounded-full font-bold">
            →
          </button>
        </div>

        {/* scroll container */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="min-w-[340px] md:min-w-[380px] bg-white rounded-3xl p-8 shadow-xl snap-start hover:shadow-2xl border-2 border-transparent hover:border-cyan-500 transition-all"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={t.image} alt={t.name} className="w-16 h-16 rounded-full object-cover border-4 border-cyan-200" />
                <div>
                  <div className="font-black text-gray-900">{t.name}</div>
                  <div className="text-gray-600 text-sm">{t.role}</div>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
