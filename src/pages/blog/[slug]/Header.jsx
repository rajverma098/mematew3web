import React, { useEffect } from "react";
import parallaxie from "@/common/parallaxie";

function HeaderBlog({ article }) {
  useEffect(() => {
    if (article) {
      parallaxie(".bg-img.parallaxie", 0.4);
    }
  }, [article]);

  // Prevent build error
  if (!article) {
    return null;
  }

  const category =
    article?._embedded?.["wp:term"]?.[0]?.[0]?.name || "Blog";

  return (
    <header className="page-header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="caption">
              <div className="sub-title fz-12">
                <span>{category}</span>
              </div>

              <h1>{article?.title || ""}</h1>
            </div>

            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <div className="circle-60">
                        <img
                          src="/dark/assets/imgs/blog/author1.jpg"
                          alt="Author"
                          className="circle-img"
                        />
                      </div>

                      <div className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">
                          {article?._embedded?.author?.[0]?.name || "Admin"}
                        </h6>
                      </div>
                    </div>
                  </div>

                  <div className="date ml-50">
                    <span className="opacity-7">Published</span>
                    <h6 className="fz-16">
                      {article?.date
                        ? new Date(article.date).toLocaleDateString()
                        : ""}
                    </h6>
                  </div>
                </div>
              </div>

              <div className="right-info ml-auto">
                <span className="pe-7s-comment fz-18 mr-10"></span>
                <span className="opacity-7">
                  {article?.comment_status === "open"
                    ? "Comments Enabled"
                    : "Comments Disabled"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="background bg-img parallaxie mt-80"
        style={{
          backgroundImage: `url(${article?.image || ""})`,
        }}
      />
    </header>
  );
}

export default HeaderBlog;