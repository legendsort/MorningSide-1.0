import React from "react";

const Blog = () => {
  const hero1ImagePath = "/images/hero1.jpg";
  const hero1ClipPathPoints = "25% 0%, 100% 0%, 101% 70%, 66% 80%, 0% 17%";
  const hero2ImagePath = "/images/hero2.jpg";
  const hero2ClipPathPoints = "50% 0%, 100% 100%, 0% 100%";

  return (
    <div className="section-padding">
      <div className="container">
        <div className="flex flex-col items-center">
          <h2 className="text-primary text-4xl font-bold mb-5 leading-none">
            From Blog
          </h2>
          <p className="text-gray-500 font-medium mt-5">March 20, 2023 GPT-3</p>
          <h2 className="text-primary text-4xl text-center font-bold mb-2 leading-none">
            Understanding GPT-4: ChatGPT's
          </h2>
          <h2 className="text-primary text-4xl text-center font-bold mb-2 leading-none">
            Successor With Advanced Reasoning
          </h2>
          <p className="text-gray-500 font-medium my-5">
            We will discuss OpenAI's latest milestone in scaling up deep
            learning, GPT-4. Let's take a deep dive.
          </p>
          <a href="#" className="theme-btn">
            Read More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
