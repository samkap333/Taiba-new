import React from "react";

const testimonialVideos = [
  {
    title: "Video testimonial 1",
    url: "https://www.youtube.com/embed/CFBany9kzio"
  },
  {
    title: "Video testimonial 2",
    url: "https://www.youtube.com/embed/6ao7foLT3qw"
  },
  {
    title: "Video testimonial 3",
    url: "https://www.youtube.com/embed/Q1W4Se9WWYw"
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background SVG pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRDg4NUEzIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] bg-repeat"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-deep-pink/10 text-deep-pink px-8 py-3 rounded-full text-sm font-bold mb-8 border border-deep-pink/20">
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-charcoal">
            Real <span className="text-deep-pink font-serif italic">Transformations</span> From Real Entrepreneurs
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Don't just take our word for it. Watch how confident selling changed lives.
          </p>
        </div>

        {/* Video Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonialVideos.map((video, index) => (
            <div
              key={index}
              className="aspect-video rounded-lg overflow-hidden shadow-lg transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-br from-soft-blush/40 to-baby-pink/30 backdrop-blur-sm rounded-3xl p-12 border border-deep-pink/10 shadow-lg">
            <h3 className="text-3xl font-bold text-charcoal mb-6">
              Ready to Add Your Success Story?
            </h3>
            <p className="text-xl text-gray-700 mb-8">
              Join hundreds of women who've transformed their sales confidence and business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="flex items-center justify-center gap-2 text-deep-pink font-bold">
                <span className="text-green-500">•</span> 95% Success Rate
              </div>
              <div className="flex items-center justify-center gap-2 text-deep-pink font-bold">
                <span className="text-green-500">•</span> Results in 30 Days
              </div>
              <div className="flex items-center justify-center gap-2 text-deep-pink font-bold">
                <span className="text-green-500">•</span> Guaranteed Growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
