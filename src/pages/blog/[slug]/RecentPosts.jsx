import React, { useEffect, useState } from "react";
import Link from "next/link";

function RecentPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(
      "https://w3webtechnologies.com/blog/wp-json/wp/v2/posts?_embed&per_page=2&orderby=date&order=desc"
    )
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="recent-posts blog-list-half crev sub-bg section-padding mt-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-60">
              <h3>Recent Posts</h3>
            </div>
          </div>
        </div>

        <div className="row">
          {posts.map((post) => (
            <div className="col-lg-6 md-mb50" key={post.id}>
              <div className="item mb-30">
                <div className="row rest">
                  <div className="col-md-6">
                    <div className="img">
                      <img
                        src={
                          post._embedded?.["wp:featuredmedia"]?.[0]
                            ?.source_url ||
                          "/dark/assets/imgs/blog/default.jpg"
                        }
                        alt={post.title.rendered}
                      />
                    </div>
                  </div>

                  <div className="col-md-6 valign">
                    <div className="cont">
                      <span className="date fz-12 ls1 text-u opacity-7 mb-15">
                        {new Date(post.date).toLocaleDateString()}
                      </span>

                      <h5>
                        <Link href={`/blog/${post.slug}`}>
                          <span
                            dangerouslySetInnerHTML={{
                              __html: post.title.rendered,
                            }}
                          />
                        </Link>
                      </h5>

                      <div className="tags colorbg mt-15">
                        {post._embedded?.["wp:term"]?.[0]?.map((cat) => (
                          <span
                            key={cat.id}
                            className="me-2"
                          >
                            {cat.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RecentPosts;