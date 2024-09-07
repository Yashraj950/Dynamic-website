export const Contact = () => {
  return (
    <>
      <section className="container section-contact">
        <div className="container">
          <h2 className="section-common--heading">contact us</h2>
          <p className="section-common--subheading">
            Get in touch with us. We are always here to help you.
          </p>
        </div>

        <div className="grid-grid-two--cols">
          <div className="contact-content">
            <form>
              <div className="grid grid-two-cols mb-3">
                <div>
                  <label htmlFor="username">full name</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    required
                    autoComplete="off"
                    placeholder="enter full name"
                  />
                </div>
                <div>
                    <label htmlFor="email">email address</label>
                    <input
                    type="text"
                    name="email"
                    id="email"
                    required
                    autoComplete="off"
                    placeholder="enter Email id"
                  />
                </div>

              </div>

              <div>
                <label htmlFor="message">message</label>
              <textarea
                    type="text"
                    name="message"
                    id="message"
                    cols="30"
                    required
                    autoComplete="off"
                    placeholder="we are always here to help you."
              ></textarea>
                 
                

              </div>
              
            </form>

            <div className="mt-3">
                  <button type="submit" className="btn contact-btn">
                    send message
                  </button>
                </div>
          </div>
        </div>
      </section>
    </>
  );
};
