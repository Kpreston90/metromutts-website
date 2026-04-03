/*
 * Metro Mutts Instagram Feed Section
 * Brand: Green #48D597, Dark #345460
 * Displays recent Instagram posts in a responsive grid with hover effects
 * Uses Instagram oEmbed-style thumbnails linked to actual posts
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

// Recent posts from @metromuttstulsa — images hosted on CDN for reliability
const posts: InstaPost[] = [
  {
    id: "1",
    permalink: "https://www.instagram.com/p/DWpwZ8iFVA5/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/insta-ad-grooming-final_7ae03431.png",
    caption: "Fresh cuts by Jacque — Tulsa's favorite dog groomer.",
    likes: 0,
    comments: 0,
  },
  {
    id: "2",
    permalink: "https://www.instagram.com/p/DWpwVCtlXKk/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/insta-ad-boarding-v5_5981d89c.png",
    caption: "Their own space at night. New best friends by day.",
    likes: 0,
    comments: 0,
  },
  {
    id: "3",
    permalink: "https://www.instagram.com/p/DWpnjIJkbuo/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-post-3-grooming_cbf47586.jpg",
    caption: "Is your pup looking a little ruff around the edges? Treat them to a spa day at Metro Mutts!",
    likes: 3,
    comments: 0,
  },
  {
    id: "4",
    permalink: "https://www.instagram.com/p/DWpnQJAEUq6/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-post-4-boarding_d6e81999.jpg",
    caption: "Planning a trip but worried about leaving your best friend behind? Give them a vacation of their own!",
    likes: 3,
    comments: 0,
  },
  {
    id: "5",
    permalink: "https://www.instagram.com/p/DWox5bKFP27/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-post-5-wag-wed_f4877458.jpg",
    caption: "WAG WEDNESDAY — This is what your dog's perfect afternoon looks like.",
    likes: 14,
    comments: 0,
  },
  {
    id: "6",
    permalink: "https://www.instagram.com/p/DWm5yfDlXlY/",
    imageUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310519663503607069/K74BFWniuFWtXDKrDiRtHb/ig-post-6-training_36da55ac.jpg",
    caption: "Training Tip Tuesday! Want your pup to master 'sit' like a pro?",
    likes: 12,
    comments: 1,
  },
];

function PostCard({ post, index }: { post: InstaPost; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  const imgSrc = post.imageUrl;

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
        src={imgSrc}
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
