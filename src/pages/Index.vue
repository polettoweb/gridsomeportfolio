<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex flex-col lg:flex-row justify-between py-16 border-b border-gray-500"
    >
      <div class="text-4xl font-bold w-full lg:w-3/5 text-center lg:text-left pb-8">
        <h1>
          <span class="leading-tight">Hi, I'm Marco,</span>
          <br />
          <span class="text-blue-700 leading-tight">
            Frontend Developer,
            <br />UI Engineer & Mentor
          </span>
        </h1>
        <p
          class="text-lg sm:text-xl mt-8"
        >My goal is to build clean, performant and accessible user interfaces where the right user experience is a focal point. My job is also my passion and, therefore, seeking out new technologies and stay up-to-date on industry trends and advancements is more a pleasure than a duty. This allows me to stay ahead of the curve and deliver exceptional work to all of my clients.</p>
      </div>

      <div class="right-0 top-0 bg-blue-800 px-8">
        <g-image src="../../static/marco-nobg.png" alt="hero" class="mx-auto" />
      </div>
    </div>
    <!-- end hero -->

    <div class="container-inner mx-auto">
      <div class="flex justify-between flex-col items-center py-6 lg:flex-row">
        <div class="w-120 lg:w-1/2 px-8 py-8 sm:py-0">
          <g-image src="../../static/landing_page.svg" alt="browser" />
        </div>
        <div class="w-full lg:w-1/2 px-8 mt-16 h-64 relative">
          <p
            class="keywords__text"
            v-for="(item, i) in words"
            :key="i"
            :id="item.toLowerCase()"
          >{{item}}</p>
        </div>
      </div>
    </div>

    <div class="overflow-x-hidden">
      <div
        class="projects container-inner mx-auto text-xl border-gray-500 border-b py-16 mb-16 relative"
      >
        <h2 class="font-bold mb-6" id="projects">Here are some projects I've worked on:</h2>

        <div class="absolute right-0" style="top: 50px; transform: translate(100%) rotate(180deg)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6">
            <div>Project One</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Two</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Three</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="checkmark mb-6">
            <div>Project Four</div>
            <div class="text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="overflow-x-hidden border-gray-200 border-b">
      <div class="get-to-know-me container-inner mx-auto text-xl pb-16 relative">
        <h2 class="font-bold mb-6" id="about">Get to know me:</h2>

        <div class="absolute left-0" style="top: 50px; transform: translateX(-100%)">
          <svg width="170px" height="170px">
            <use xlink:href="#dots-triangle" />
          </svg>
        </div>

        <div class="flex flex-col sm:flex-row justify-between items-center mb-16">
          <div>
            <g-image
              src="../../static/avatar.jpg"
              alt="avatar"
              class="w-32 h-32 rounded-full mb-8 lg:mb-0"
            />
          </div>
          <div class="flex-1 text-lg sm:text-xl ml-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum quae
            architecto minus molestias iusto ducimus fuga quo quia libero
            dignissimos, fugiat modi assumenda debitis laboriosam.
          </div>
        </div>

        <div class="responsive-container">
          <iframe
            class="responsive-iframe w-full h-full top-0 left-0 border-0"
            src="https://www.youtube.com/embed/uHo6o1TNQeE"
            style="border:0;"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <!-- end get-to-know me -->
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      words: [
        "JavaScript",
        "React",
        "Vue",
        "NodeJS",
        "SSR",
        "GraphQL",
        "Sass",
        "Webpack",
        "Docker"
      ]
    };
  }
};
</script>
<style>
.keywords__text {
  color: white;
  font-style: italic;
  position: absolute;
}
.keywords__text:nth-child(1) {
  font-size: 96px;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
}
.keywords__text:nth-child(2) {
  top: 5%;
  right: 5%;
  font-size: 48px;
}
.keywords__text:nth-child(3) {
  bottom: 5%;
  left: 5%;
  font-size: 56px;
}
.keywords__text:nth-child(4) {
  left: 2%;
  top: 2%;
  font-size: 40px;
}
.keywords__text:nth-child(5) {
  top: 25%;
  left: 30%;
  font-size: 30px;
}
.keywords__text:nth-child(6) {
  right: 5%;
  bottom: 5%;
  font-size: 38px;
}
.keywords__text:nth-child(7) {
  bottom: 8%;
  left: 45%;
  font-size: 64px;
  transform: translateX(-50%);
}
.keywords__text:nth-child(8) {
  top: 2%;
  left: 45%;
  font-size: 32px;
  transform: translateX(-50%);
}
.keywords__text:nth-child(9) {
  top: 15%;
  left: 55%;
  font-size: 32px;
  transform: translateX(-50%);
}
</style>

