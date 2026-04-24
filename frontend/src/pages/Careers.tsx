import { Briefcase, Users, Heart, TrendingUp, Globe, Zap, Coffee, Laptop, Calendar, DollarSign, GraduationCap, Award } from 'lucide-react';
import { useState } from 'react';

export default function Careers() {
    const [open, setOpen] = useState(false);
  const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', description: 'Industry-leading compensation packages with performance bonuses' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive medical, dental, and vision coverage for you and your family' },
    { icon: Laptop, title: 'Remote Flexibility', description: 'Work from anywhere with flexible hours that fit your lifestyle' },
    { icon: Calendar, title: 'Unlimited PTO', description: 'Take the time you need to recharge and maintain work-life balance' },
    { icon: GraduationCap, title: 'Learning Budget', description: 'Annual stipend for courses, conferences, and professional development' },
    { icon: Coffee, title: 'Premium Perks', description: 'Home office setup, coworking spaces, and wellness stipends' },
  ];

  const values = [
    { icon: Users, title: 'Collaborative Spirit', description: 'We believe the best ideas come from diverse teams working together toward shared goals' },
    { icon: TrendingUp, title: 'Growth Mindset', description: 'We invest in our people and encourage continuous learning and career advancement' },
    { icon: Globe, title: 'Customer First', description: 'Everything we do is guided by our commitment to delivering exceptional value to customers' },
    { icon: Zap, title: 'Innovation Drive', description: 'We embrace change, experiment boldly, and turn creative ideas into reality' },
  ];

  const openings = [
    {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Build scalable systems that power our platform for millions of users worldwide'
    },
    {
      title: 'Product Designer',
      department: 'Design',
      location: 'Remote (Global)',
      type: 'Full-time',
      description: 'Create beautiful, intuitive experiences that delight users and solve real problems'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Help our customers succeed by providing expert guidance and strategic support'
    },
    {
      title: 'Marketing Manager',
      department: 'Marketing',
      location: 'Hybrid (NYC)',
      type: 'Full-time',
      description: 'Drive growth through creative campaigns that connect with our target audience'
    },
    {
      title: 'Data Analyst',
      department: 'Analytics',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Turn data into insights that drive strategic decisions across the organization'
    },
    {
      title: 'Sales Development Representative',
      department: 'Sales',
      location: 'Remote (US)',
      type: 'Full-time',
      description: 'Connect with potential customers and help them discover how we can solve their challenges'
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Engineering Manager',
      quote: 'The culture here is truly special. I have the autonomy to make decisions, the support to grow my career, and colleagues who inspire me every day.',
      years: '3 years'
    },
    {
      name: 'Michael Chen',
      role: 'Product Designer',
      quote: 'I have never felt more empowered to do my best work. The team trusts my expertise and gives me the resources I need to create exceptional experiences.',
      years: '2 years'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Customer Success Lead',
      quote: 'What sets this company apart is how much we genuinely care about our customers and each other. It is more than a job—it is a community.',
      years: '4 years'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Build Your Career With Us</h1>
          <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
            Join a team of passionate innovators creating products that make a real difference in people's lives
          </p>
          <a href="#openings" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors">
            View Open Positions
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">Why Join Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We are building something special, and we want talented people who share our vision to be part of the journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {values.map((value, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-cyan-600" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-900">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We invest in our people because their success is our success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold mb-4 text-gray-900">What Our Team Says</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear directly from the people who make this place great
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="text-gray-700 italic mb-4">"{testimonial.quote}"</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
                <p className="text-sm text-cyan-600 mt-1">{testimonial.years} with the company</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div id="openings" className="bg-cyan-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold mb-4 text-gray-900">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find your next opportunity and start making an impact
            </p>
          </div>

          <div className="space-y-4">
            {openings.map((job, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-gray-600 mb-3">{job.description}</p>
                    <div className="flex flex-wrap gap-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-cyan-100 text-cyan-700">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {job.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                        <Globe className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <button onClick={() => setOpen(true)} className="w-full md:w-auto bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold mb-4 text-gray-900">Our Hiring Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            We have designed our interview process to be transparent, respectful, and focused on finding the right fit for both sides
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              1
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Apply</h3>
            <p className="text-gray-600">Submit your application and tell us why you are excited about this role</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              2
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Initial Call</h3>
            <p className="text-gray-600">Have a casual conversation with our recruiting team to learn more about each other</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              3
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Team Interviews</h3>
            <p className="text-gray-600">Meet with team members to discuss your experience and explore potential collaboration</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
              4
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900">Offer</h3>
            <p className="text-gray-600">Receive your offer and start your journey with us as we welcome you to the team</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-cyan-600 to-cyan-800 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-extrabold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl mb-8 text-cyan-100">
            We are always looking for talented individuals who are passionate about building great products and creating positive change. Even if you do not see a perfect match above, we would love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#openings" className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors">
              Browse Open Roles
            </a>
            <button className="inline-block bg-cyan-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-600 transition-colors border-2 border-white">
              Send General Application
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
{open && (
  <div
    className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
    onClick={() => setOpen(false)}
  >
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white rounded-xl shadow-2xl w-full max-w-3xl p-8 relative"
    >
      {/* Close Button */}
      <button
        onClick={() => setOpen(false)}
        className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-xl"
      >
        ✕
      </button>

      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Apply for the Job
      </h2>

      {/* Form */}
      <form className="space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Position Applying For</label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Frontend Developer"
            />
          </div>
        </div>

        {/* Row 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Resume Link</label>
            <input
              type="url"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Google Drive / Dropbox link"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Portfolio / GitHub (Optional)</label>
            <input
              type="url"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
              placeholder="Portfolio or GitHub"
            />
          </div>
        </div>

        {/* Cover letter full width */}
        <div>
          <label className="block text-sm font-medium mb-1">Cover Letter</label>
          <textarea
            rows={4}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            placeholder="Tell us why you're a good fit..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-cyan-600 text-white py-3 rounded-lg font-semibold hover:bg-cyan-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  </div>
)}

    </div>
  );
}
