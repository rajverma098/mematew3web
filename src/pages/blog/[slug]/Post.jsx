import React, { useEffect } from "react";
import loadBackgroudImages from "@/common/loadBackgroudImages";

function Post({ content }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  if (!content) {
    return null; // or loading spinner
  }

  return (
    <div className="container">
      <div className="main-post">

        <div className="item pb-60">
          <div className="row justify-content-center">
            <div className="col-lg-10">

              <div
                className="text drop-cap"
                dangerouslySetInnerHTML={{
                  __html: content?.content || "",
                }}
              />

            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="post-qoute mt-50">
                <h6 className="fz-20">
                  <span className="l-block">
                    {content?.excerpt || ""}
                  </span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="info-area flex mt-20 pb-20">
          <div>
            <div className="tags flex">
              <div className="valign">
                <span>Category :</span>
              </div>

              <div>
                {content?.categories?.map((cat) => (
                  <span key={cat.id} className="me-2">
                    {cat.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Post;