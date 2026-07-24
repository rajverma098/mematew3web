import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submitContact, clearContactState } from "../../../store/contactSlice";

function Form() {
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector(
    (state) => state.contact
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    await dispatch(submitContact(formData)).unwrap();

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    dispatch(clearContactState());

  } catch (err) {
    console.error(err);
  }
};

  useEffect(() => {
    if (success) {
      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      dispatch(clearContactState());
    }
  }, [success, dispatch]);

  return (
    <section className="contact-crev section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="sec-lg-head mb-80">
              <h6 className="dot-titl-non mb-10">Get In Touch</h6>
              <h2 className="fz-50">
                Let's get in <br /> touch with us.
              </h2>

              <p className="fz-15 mt-10">
                If you would like to work with us or just want to get in touch,
                we'd love to hear from you!
              </p>

              <div className="phone fz-30 fw-600 mt-30 underline">
                <a href="tel:+919814930250">+91 9814930250</a>
              </div>

              <ul className="rest social-text d-flex mt-60">
                <li className="mr-30">
                  <a href="#">Facebook</a>
                </li>
                <li className="mr-30">
                  <a href="#">Twitter</a>
                </li>
                <li className="mr-30">
                  <a href="#">LinkedIn</a>
                </li>
                <li>
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-6 offset-lg-1 valign">
            <div className="full-width">
              <form onSubmit={handleSubmit}>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group mb-30">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        rows="4"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    {error && (
                      <p className="text-danger mt-2">
                        {error.message || "Something went wrong."}
                      </p>
                    )}

                    {success && (
                      <p className="text-success mt-2">
                        Message sent successfully.
                      </p>
                    )}

                    <div className="mt-30">
                      <button
                        type="submit"
                        className="butn butn-md butn-bord radius-30"
                        disabled={loading}
                      >
                        <span className="text">
                          {loading ? "Sending..." : "Let's Talk"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Form;