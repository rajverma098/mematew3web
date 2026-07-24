import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import HeaderBlog from "./Header";
import Content from "./Content";

import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Preview/Navbar";
import Header from "@/components/InnerPages/Blog/Header";
import Footer from "@/components/CreativeAgency/Footer";

function Details() {
  const router = useRouter();
  const { slug } = router.query;

  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News.",
  };

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(
          `https://w3webtechnologies.com/blog/wp-json/w3web/v1/posts`  
        );

        const data = await res.json();

        if (data.length > 0) {
          setArticle(data[0]);
        } else {
          setArticle(null);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return <Loader />;
  }

  if (!article) {
    return <h2 style={{ textAlign: "center", padding: "100px 0" }}>Blog not found.</h2>;
  }

  return (
    <>
      <Head>
        <title>{article.title.rendered}</title>

       <meta
  name="description"
  content={article?.excerpt?.rendered?.replace(/<[^>]+>/g, "") || ""}
/>
      </Head>

      <Navbar mainBg />

      <main className="main-bg">
        <Header data={metadata} />

        <HeaderBlog article={article} />

        <Content content={article} />/
      </main>

      <Footer />
    </>
  );
}

export default Details;