/*
 * Metro Mutts Instagram Feed Section
 * Brand: Green #48D597, Dark #345460
 * Displays the latest 6 Instagram posts in a responsive grid with hover effects
 * Updated manually each time a new post is published via MCP
 * Last updated: 2026-04-04
 */
import { motion } from "framer-motion";
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react";
import { useState } from "react";

interface InstaPost {
  id: string;
  permalink: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
}

// Latest 6 posts from @metromuttstulsa — images hosted on CDN for reliability
// UPDATE THIS ARRAY every time a new Instagram post is published
const posts: InstaPost[] = [
  {
    id: "17912658624359597",
    permalink: "https://www.instagram.com/p/DWtdfCglCNZ/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-latest-1-boarding-night_64642d36.jpg",
    caption: "Before lights out at Metro Mutts. Bowls filled. Beds fluffed. Staff on-site all night.",
    likes: 1,
    comments: 0,
  },
  {
    id: "18079797950104930",
    permalink: "https://www.instagram.com/p/DWrCspnFPIl/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-latest-2-tbt_d600edce.jpg",
    caption: "THROWBACK THURSDAY — Nothing beats the look on their face when they realize it's daycare day.",
    likes: 4,
    comments: 1,
  },
  {
    id: "17905078146222994",
    permalink: "https://www.instagram.com/p/DWpwZ8iFVA5/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/insta-ad-grooming-final_7ae03431.png",
    caption: "Fresh cuts by Jacque — Tulsa's favorite dog groomer.",
    likes: 8,
    comments: 0,
  },
  {
    id: "18020682698818265",
    permalink: "https://www.instagram.com/p/DWpwVCtlXKk/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/insta-ad-boarding-v5_5981d89c.png",
    caption: "Their own space at night. New best friends by day.",
    likes: 5,
    comments: 0,
  },
  {
    id: "18100351012948262",
    permalink: "https://www.instagram.com/p/DWpnjIJkbuo/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-post-3-grooming_cbf47586.jpg",
    caption: "Is your pup looking a little ruff around the edges? Treat them to a spa day at Metro Mutts!",
    likes: 3,
    comments: 0,
  },
  {
    id: "17896024626286930",
    permalink: "https://www.instagram.com/p/DWpnQJAEUq6/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-post-4-boarding_d6e81999.jpg",
    caption: "Planning a trip but worried about leaving your best friend behind? Give them a vacation of their own!",
    likes: 4,
    comments: 0,
  },
];

function PostCard({ post, index }: { post: InstaPost; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block aspect-square overflow-hidden rounded-2xl bg-gray-100"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={post.imageUrl}
        alt={post.caption}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Hover overlay */}
      <div
        className={`absolute inset-0 bg-[#345460]/70 flex flex-col items-center justify-center gap-3 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex items-center gap-6 text-white">
          {post.likes > 0 && (
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5 fill-white" />
              <span className="font-semibold text-lg">{post.likes}</span>
            </div>
          )}
          {post.comments > 0 && (
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5 fill-white" />
              <span className="font-semibold text-lg">{post.comments}</span>
            </div>
          )}
        </div>
        <p className="text-white/80 text-sm text-center px-4 line-clamp-2 max-w-[90%]">
          {post.caption}
        </p>
        <ExternalLink className="w-4 h-4 text-white/60 mt-1" />
      </div>
    </motion.a>
  );
}

export default function InstagramFeed() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 via-purple-500 to-orange-400 text-white px-5 py-2 rounded-full text-sm font-semibold mb-5">
            <Instagram className="w-4 h-4" />
            @metromuttstulsa
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#345460] tracking-tight">
            Follow the{" "}
            <span className="text-[#48D597]">Pack</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            See what our pups are up to. Fresh grooms, happy boarders, and daily daycare adventures.
          </p>
        </motion.div>

        {/* Grid — 3 columns on desktop, 2 on tablet, 2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5 max-w-5xl mx-auto">
          {posts.map((post, index) => (
            <PostCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <a
            href="https://www.instagram.com/metromuttstulsa/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#345460] hover:bg-[#2a444e] text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
          >
            <Instagram className="w-5 h-5" />
            Follow Us on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
