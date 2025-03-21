import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section with Background Image */}
      <div
        className="relative text-center py-32 bg-cover bg-center text-white"
        style={{
          backgroundImage: `url("https://static.vecteezy.com/system/resources/thumbnails/016/178/548/small/elegant-golden-scene-diagonal-glowing-with-lighting-effect-sparkle-on-black-background-template-premium-award-design-free-vector.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold">Blockchain Certificate Verification</h1>
          <p className="mt-4 text-lg md:text-xl">Issue and verify academic certificates securely using blockchain.</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white text-lg rounded shadow-lg hover:bg-blue-600 transition-all">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Why Use Our Platform?</h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: "Issue Certificates", color: "bg-blue-600", hover: "hover:bg-blue-700" },
            { title: "Verify Certificates", color: "bg-green-600", hover: "hover:bg-green-700" },
            { title: "Tamper-Proof Records", color: "bg-purple-600", hover: "hover:bg-purple-700" },
            { title: "QR Code Verification", color: "bg-yellow-600", hover: "hover:bg-yellow-700" },
            { title: "Student & Employer Access", color: "bg-indigo-600", hover: "hover:bg-indigo-700" },
            { title: "Decentralized & Secure", color: "bg-red-600", hover: "hover:bg-red-700" },
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center transform transition hover:scale-105">
              <h3 className="text-xl font-bold text-gray-700">{feature.title}</h3>
              <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <button className={`mt-4 ${feature.color} text-white px-4 py-2 rounded ${feature.hover} transition`}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* New Section: Testimonials */}
      <div className="bg-gray-900 text-white py-16">
        <h2 className="text-3xl font-semibold text-center mb-10">What Users Say</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Alice Johnson", text: "This platform made certificate verification seamless and secure!" },
            { name: "David Smith", text: "A game-changer for academic institutions and employers alike." },
            { name: "Emma Brown", text: "I was able to verify my certificate instantly—so easy to use!" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <p className="text-gray-300 italic">"{testimonial.text}"</p>
              <h4 className="mt-4 text-lg font-bold">{testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-10 bg-blue-500 text-white">
        <h3 className="text-2xl font-bold">Ready to Secure Your Certificates?</h3>
        <p className="mt-2">Start issuing or verifying certificates now.</p>
        <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-200 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
