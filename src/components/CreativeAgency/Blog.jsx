import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

const swiperOptions = {
  
  modules: [Navigation],
  slidesPerView: 3,
  loop: true,
  spaceBetween: 10,
  speed: 1000,

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".blog-modern .swiper-button-next",
    prevEl: ".blog-modern .swiper-button-prev",
  },
};

function Blog() {
    const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  




useEffect(() => {
  document.body.classList.add("main-bg");

  fetch("https://w3webtechnologies.com/blog/wp-json/wp/v2/posts?_embed")
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



  const [loadSwiper, setLoadSwiper] = useState(false);

  useEffect(() => {
    setLoadSwiper(true);
  }, []);

  return (
    <section className="blog-modern section-padding">
      <div className="container">

        {/* Header */}

        <div className="blog-carsouel">
          {loadSwiper && blogs.length > 0 ? (
            <Swiper
              {...swiperOptions}
              id="content-carousel-container-unq-blog"
              className="swiper-container"
            >
                 {blogs.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="item">

                    <div className="img">
                              <img
  src={item._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
  alt={item.title.rendered}
/>

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

                    <div className="cont mt-30">
                       <h6>
                                        <Link
  href={`/blog/${item.slug}`}
  target="_blank"
  rel="noopener noreferrer"
>
                          {item.title.rendered}
                        </Link>
                      </h6>

                        <p><div
  dangerouslySetInnerHTML={{
    __html: item.excerpt.rendered,
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
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <p>No blogs found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Blog;