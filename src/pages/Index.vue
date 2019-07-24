<template>
  <Layout>
    <div
      class="hero container-inner mx-auto flex flex-col lg:flex-row flex-wrap justify-between pt-16 pb-24 border-b border-grey-500"
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
      </div>
      <img class="absolute rotate-45 bg-octa" src="../../static/bg-octa.svg" alt />
      <p class="text-lg sm:text-xl mt-8 w-full">
        My goal is to build clean, performant and accessible user interfaces where the right user experience is a focal point.
        My job is also my passion and, therefore, seeking out new technologies and stay up-to-date on industry trends and advancements
        is more a pleasure than a duty. Helping trainee and Junior developers to grow and learn is a major part of my job and my personal mission.
      </p>
    </div>
    <!-- end hero -->

    <div class="overflow-x-hidden">
      <div class="projects container-inner mx-auto text-xl border-gray-500 border-b pb-16 relative">
        <div class="flex flex-row items-center justify-center py-16">
          <img class="w-1/5" src="../../static/vue_js.svg" />
          <h2
            class="w-4/5 font-bold text-4xl mb-6 text-center"
            id="projects"
          >Latest from workshops and tutorials</h2>
        </div>
        <ul class="text-lg sm:text-xl">
          <li class="checkmark mb-6">
            <div class="pb-2">Project One</div>
            <div class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="checkmark mb-6">
            <div class="pb-2">Project Two</div>
            <div class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="checkmark mb-6">
            <div class="pb-2">Project Three</div>
            <div class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
          <li class="checkmark mb-6">
            <div class="pb-2">Project Four</div>
            <div class="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ab
              nam animi iure nemo exercitationem a, eius non culpa itaque!
            </div>
          </li>
        </ul>
      </div>
      <!-- end projects -->
    </div>

    <div class="container-inner mx-auto">
      <div class="flex flex-row items-center justify-center py-16">
        <h2 class="w-3/5 font-bold text-4xl mb-6 text-left" id="projects">Latest from blog</h2>
        <img class="w-2/5" src="../../static/static_asset.svg" />
      </div>
      <div
        v-for="post in $page.posts.edges"
        :key="post.id"
        class="post border-gray-400 border-b mb-12"
      >
        <h2 class="text-3xl font-bold">
          <g-link :to="post.node.path" class="text-copy-primary">{{ post.node.title }}</g-link>
        </h2>
        <div class="text-copy-secondary mb-4">
          <span>{{ post.node.date }}</span>
          <span>&middot;</span>
          <span>{{ post.node.timeToRead }} min read</span>
        </div>

        <div class="text-lg mb-4">{{ post.node.summary }}</div>

        <div class="mb-8">
          <g-link :to="post.node.path" class="font-bold uppercase">Read More</g-link>
        </div>
      </div>
      <!-- end post -->
      <div class="overflow-x-hidden">
        <div class="get-to-know-me container-inner mx-auto text-4xl pb-16 relative">
          <h2 class="font-bold mb-6" id="about">About me:</h2>
          <div class="flex flex-col sm:flex-row justify-between items-center">
            <div>
              <g-image
                src="../../static/marco-exa.png"
                alt="avatar"
                class="w-48 h-48 mb-8 lg:mb-0"
              />
            </div>
            <div class="flex-1 text-lg sm:text-xl ml-6">
              I am a passionate frontend developer and mentor from Venice and based in Amsterdam. I love to work with JavaScript, CSS and mainly everything around user interfaces.
              I am using daily VueJS, GraphQL and Sass for a wonderful company in the southeast of Amsterdam. I've started my career with HTML 3.0, CSS(1) and FireWorks
            </div>
          </div>
        </div>
        <!-- end about me -->
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        timeToRead
        path
      }
    }
  }
}
</page-query>

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

