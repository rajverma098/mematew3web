import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "@/layouts/default";
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Preview/Navbar";
import Header from "@/components/InnerPages/Blog/Header";
import Footer from "@/components/CreativeAgency/Footer";


function BlogClassic() {
  const [blogs, setBlogs] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
  document.body.classList.add("main-bg");

  fetch("https://w3webtechnologies.com/blog/wp-json/w3web/v1/posts")
    .then((res) => res.json())
    .then((data) => {
      setBlogs(data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });

  return () => document.body.classList.remove("main-bg");
}, []);


  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "OUR BLOG",
    title: "Latest News.",
  };

  return (
    <>
      <Head>
        <title>W3Web Technologies</title>
      </Head>

      <Loader />
      <Navbar mainBg />

      <main className="main-bg">
        <Header data={metadata} />

        <section className="blog-modern section-padding sub-bg">
          <div className="container">
            <div className="row">
              {blogs.map((item) => (
                <div className="col-lg-4 col-md-6 pb-30" key={item.id}>
                  <div className="blog-card">
                    <div className="img">
                     <img src={item.image} alt={item.title} />

                      <div className="date">
                    <Link
  href={`/blog/${item.slug}`}
  target="_blank"
  rel="noopener noreferrer"
>
  {new Date(item.date).toLocaleDateString()}
</Link>
                      </div>
                    </div>

                    <div className="cont mt-10">
                      <h6>
                                        <Link
  href={`/blog/${item.slug}`}
  target="_blank"
  rel="noopener noreferrer"
>
                         {item.title}
                        </Link>
                      </h6>

                      <p><div
  dangerouslySetInnerHTML={{
    __html: item.excerpt,
  }}
/></p>

                      <Link
                          href={`/blog/${item.slug}`}
                        className="mt-20 ls1 sub-title"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

BlogClassic.getLayout = (page) => <Layout>{page}</Layout>;

export default BlogClassic;