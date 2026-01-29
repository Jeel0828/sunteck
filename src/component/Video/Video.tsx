"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function VideoSection() {
  const videos = [
    {
      thumb:
        "https://sunteckmiraroad.ondevwebs.com/wp-content/uploads/2022/08/v2.webp",
      link: "https://www.youtube.com/watch?v=xxxx",
    },
    {
      thumb:
        "https://sunteckmiraroad.ondevwebs.com/wp-content/uploads/2022/08/v1.webp",
      link: "https://www.youtube.com/watch?v=xxxx",
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span
              className="px-6 py-2 text-sm font-medium font-serif rounded-md bg-yellow-500 text-black"
              style={{ letterSpacing: "1px" }}
            >
              VIDEO
            </span>
          </div>

          <h2
            className="text-2xl md:text-3xl font-medium font-serif text-[#3E4C31]"
            style={{ letterSpacing: "1px" }}
          >
            SUNTECK SKYPARK WALKTHROUGH
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.a
              key={i}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="group relative rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={video.thumb}
                alt="Video Thumbnail"
                className="w-full h-[220px] sm:h-[260px] md:h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition duration-300" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg scale-100 group-hover:scale-110 transition">
                  <Play className="text-white w-7 h-7 ml-1" fill="white" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
