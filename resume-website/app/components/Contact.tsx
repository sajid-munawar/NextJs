import React from "react";

const Contact = () => {
  return (
    <div className="px-6 py-20 lg:flex gap-10  lg:py-36 lg:px-20" id="contact">
      <div className="flex justify-center">
        <h1 className="text-cyan-900 text-3xl lg:text-4xl lg:text-start font-bold font-inter text-center w-[327px] lg:w-[400px] lg:tracking-wider">
          I&apos;m always <br className="lg:hidden" /> interested in hearing
          about new projects, so if you&apos;d like to chat please get in touch.
        </h1>
      </div>
      <form
        id="form"
        action="https://formspree.io/f/myyodjdo"
        method="post"
        className="flex flex-col"
      >
        <input
          type="text"
          placeholder="Full name"
          name="Full name"
          id="fName"
          maxLength={30}
          required
          className="mt-40 lg:mt-0 pl-3 border-none text-xl h-10"
        />
        <input
          type="email"
          placeholder="Email address"
          name="email"
          id="email"
          required
          className="my-10 pl-3 border-none text-xl h-10"
        />
        <textarea
          cols={30}
          rows={7}
          placeholder="Write me something..."
          maxLength={500}
          required
          id="message"
          name="Message"
          className="my-10 pl-3 border-none text-xl bg-[url('/formbg.png')] bg-no-repeat bg-right-bottom"
        ></textarea>
        <div className="text-center lg:text-start">
          <button className="font-inter font-bold bg-orange-500 p-3 tracking-wider text-lg text-white">
            Get in touch
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
