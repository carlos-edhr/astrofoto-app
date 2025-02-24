"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Separator } from "@/components/ui/separator";

const Home = () => {
  const featuredPost = {
    title:
      "2030: Maya Louviere on IPOs, The No Code Movement & Offending People With The Future",
    excerpt:
      "Turn out, protecting the future one-offend people, even if it can. In the next year, we have already delivered new practices in a variety of words and emotions that would be listening Acreed Goods Today...",
    category: "Design Trends",
    slug: "/posts/2030-maya-louviere",
    author: {
      name: "Phoenix Baker",
      avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
    },
    date: "2024-03-15",
  };

  const posts = [
    {
      title: "Achie Lauren Conversations with London Maker & Co.",
      excerpt:
        "Together to notice that there was a more continual turnover with much, crafted products and poorly made ones, and are even greater...",
      category: "Maker Stories",
      slug: "/posts/achie-lauren",
      author: {
        name: "Phoenix Baker",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    {
      title: "Complive Dissonance Theory: Create Course for UX Designers",
      excerpt:
        "Exploring the psychological aspects of user experience design and how to create effective learning courses...",
      category: "UX Education",
      slug: "/posts/complive-dissonance",
      author: {
        name: "Phoenix Baker",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    {
      title: "Achie Lauren Conversations with London Maker & Co.",
      excerpt:
        "Together to notice that there was a more continual turnover with much, crafted products and poorly made ones, and are even greater...",
      category: "Maker Stories",
      slug: "/posts/achie-lauren",
      author: {
        name: "Phoenix Baker",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    {
      title: "Achie Lauren Conversations with London Maker & Co.",
      excerpt:
        "Together to notice that there was a more continual turnover with much, crafted products and poorly made ones, and are even greater...",
      category: "Maker Stories",
      slug: "/posts/achie-lauren",
      author: {
        name: "Phoenix Baker",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    {
      title: "Achie Lauren Conversations with London Maker & Co.",
      excerpt:
        "Together to notice that there was a more continual turnover with much, crafted products and poorly made ones, and are even greater...",
      category: "Maker Stories",
      slug: "/posts/achie-lauren",
      author: {
        name: "Phoenix Baker",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    {
      title: "Achie Lauren Conversations with London Maker & Co.",
      excerpt:
        "Together to notice that there was a more continual turnover with much, crafted products and poorly made ones, and are even greater...",
      category: "Maker Stories",
      slug: "/posts/achie-lauren",
      author: {
        name: "Phoenix Baker",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    {
      title: "Achie Lauren Conversations with London Maker & Co.",
      excerpt:
        "Together to notice that there was a more continual turnover with much, crafted products and poorly made ones, and are even greater...",
      category: "Maker Stories",
      slug: "/posts/achie-lauren",
      author: {
        name: "Phoenix Baker",
        avatar: "/CIAF7-D1-01 Roberto.jpg", // Add your avatar image path
      },
      date: "2024-03-15",
    },
    // Add more posts as needed
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* New Header Section */}
      <header className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col items-center space-y-4 text-center">
          <Separator className="w-full h-[1px] bg-black" />
          <div className="flex items-center w-full max-w-2xl">
            <div className="px-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                Congreso Internacional de Astrofotografía
              </h1>
              <p className="text-muted-foreground mt-5">
                ¡Bienvenido! Aquí encontrarás historias y artículos sobre el
                Congreso, Astrofotografía y divulgación científica.
              </p>
            </div>
          </div>
          <Separator className="w-full  h-[1px] bg-black" />

          {/* Additional horizontal line below title for mobile */}
          <Separator className="w-full max-w-2xl md:hidden" />
        </div>
      </header>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 relative aspect-video">
            <Image
              src="/CIAF7-D1-01 Roberto.jpg"
              alt="Featured post"
              fill
              className="rounded-lg object-cover"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
            />
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <span className="text-sm font-medium text-primary">
              {featuredPost.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              {featuredPost.title}
            </h1>
            <p className="text-muted-foreground line-clamp-3">
              {featuredPost.excerpt}
            </p>
            {/* Add Author Metadata Section */}
            <div className="flex items-center gap-3 pt-2">
              <div className="relative h-10 w-10">
                <Image
                  src={featuredPost.author.avatar}
                  alt={featuredPost.author.name}
                  fill
                  className="rounded-full object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                />
              </div>
              <div>
                <p className="text-sm font-medium">
                  {featuredPost.author.name}
                </p>
                <p className="text-sm text-muted-foreground">
                  {format(new Date(featuredPost.date), "MMM dd, yyyy")}
                </p>
              </div>
            </div>
            <Button asChild>
              <Link href={featuredPost.slug}>Read More</Link>
            </Button>
          </div>
        </div>
        <Separator className="w-full h-[1px] bg-black mt-16" />
      </section>

      {/* Recent Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-8">Últimos artículos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={post.slug} className="relative">
              <article className="group bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="relative aspect-video">
                  <Image
                    src="/CIAF7-D1-01 Roberto.jpg"
                    alt={post.title}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                  />
                </div>
                <div className="p-6 space-y-4">
                  <span className="text-sm font-medium text-primary">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-semibold line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  {/* Add Author Metadata Section */}
                  <div className="flex items-center gap-3 pt-2">
                    <div className="relative h-10 w-10">
                      <Image
                        src={post.author.avatar}
                        alt={post.author.name}
                        fill
                        className="rounded-full object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {format(new Date(post.date), "MMM dd, yyyy")}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" asChild>
                    <Link
                      href={post.slug}
                      className="group-hover:text-primary transition-colors"
                    >
                      Read Article
                    </Link>
                  </Button>
                </div>
              </article>

              <Separator
                orientation="vertical"
                className="absolute -right-4   w-[1px] top-0 h-full bg-black"
              />
            </div>
          ))}
        </div>
        <Separator className="w-full h-[1px]  m-7 bg-black mt-8" />
      </section>

      {/* Newsletter Section */}
      <section className="bg-primary/10 py-16">
        <div className="container mx-auto px-4 max-w-2xl text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Inside Design: Stories and interviews
          </h2>
          <p className="text-muted-foreground">
            Subscribe for the latest design trends, design software and
            releases, and exclusive interviews with design leaders.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border flex-1 min-w-0"
            />

            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
