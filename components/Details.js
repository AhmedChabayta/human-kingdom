/* eslint-disable @next/next/no-img-element */
import React from "react";

function Details({ flags, name, nativeName }) {
  return (
    <div className="flex overflow-x-scroll h-full snap-mandatory snap-x p-10 scrollbar-hide">
      <div className="w-[80vw] flex flex-col flex-shrink-0 snap-start">
        <div dir="auto" className="flex flex-col justify-center items-center">
          <h1
            style={{
              backgroundImage: `url(${flags.svg})`,
              backgroundRepeat: "none",
              backgroundPosition: "center center",
              backgroundSize: "contain",
            }}
            className="inline-flex hover:text-transparent bg-clip-text self-start text-5xl p-5 font-serif
            pl-10 transition-all duration:200 ease-linear"
          >
            {" "}
            {nativeName.official || name.official}
          </h1>
          <img className="pb-5 w-1/2 object-contain" src={flags.svg} alt="" />
        </div>
        <div>
          <p className="px-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            fugit adipisci vel aut enim officia quaerat, consequatur nulla et
            pariatur autem. Id magni itaque assumenda quam autem animi
            repellendus accusamus. At ratione optio quae, fugit eligendi et
            aliquid adipisci aperiam esse, dolorum temporibus! Aliquam expedita
            eum fuga exercitationem aut eligendi iste enim soluta, nostrum
            ducimus eveniet alias maxime, est veritatis. Necessitatibus
            assumenda similique quisquam, mollitia corporis enim tenetur
            architecto sed dignissimos nemo numquam non at rerum corrupti
            dolorum cupiditate deserunt neque ex odio commodi! Qui quisquam
            dolorum molestias earum hic! Maiores deserunt harum iure illum
            excepturi mollitia aliquid nesciunt eos pariatur, voluptates quos,
            adipisci unde blanditiis! Optio ullam nobis magnam quod in? Minus
            veritatis voluptatum beatae dolorem quibusdam, quidem tenetur!
            Ratione, quos deserunt? Odio illo nobis et maxime enim quaerat
            quidem architecto, consectetur doloribus, temporibus quis sit dicta.
            Consectetur sunt nemo quam blanditiis, quidem quas exercitationem
            neque aut architecto maxime?
          </p>
        </div>
      </div>

      <div className="w-[80vw] flex flex-col flex-shrink-0 h-full snap-start">
        <div className="flex flex-col justify-center items-center">
          <h1 className="inline-flex self-start text-5xl p-2 italic font-serif pl-10">
            Culture
          </h1>
          <img className="pb-5 w-1/2 object-contain" src={flags.svg} alt="" />
        </div>
        <div>
          <p className="px-20">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            fugit adipisci vel aut enim officia quaerat, consequatur nulla et
            pariatur autem. Id magni itaque assumenda quam autem animi
            repellendus accusamus. At ratione optio quae, fugit eligendi et
            aliquid adipisci aperiam esse, dolorum temporibus! Aliquam expedita
            eum fuga exercitationem aut eligendi iste enim soluta, nostrum
            ducimus eveniet alias maxime, est veritatis. Necessitatibus
            assumenda similique quisquam, mollitia corporis enim tenetur
            architecto sed dignissimos nemo numquam non at rerum corrupti
            dolorum cupiditate deserunt neque ex odio commodi! Qui quisquam
            dolorum molestias earum hic! Maiores deserunt harum iure illum
            excepturi mollitia aliquid nesciunt eos pariatur, voluptates quos,
            adipisci unde blanditiis! Optio ullam nobis magnam quod in? Minus
            veritatis voluptatum beatae dolorem quibusdam, quidem tenetur!
            Ratione, quos deserunt? Odio illo nobis et maxime enim quaerat
            quidem architecto, consectetur doloribus, temporibus quis sit dicta.
            Consectetur sunt nemo quam blanditiis, quidem quas exercitationem
            neque aut architecto maxime?
          </p>
        </div>
      </div>
    </div>
  );
}

export default Details;
