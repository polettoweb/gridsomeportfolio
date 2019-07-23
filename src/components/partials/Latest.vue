<template>
  <div class="home__latest">
    <h2>Latest from blog</h2>

    <article v-for="(article, i) in articles" class="home__blog" :key="i">
      <!--to do -->
      <router-link class="home__latest-title" :to="`/blog/${article.slug}`">
        {article.title}
      </router-link>
      <p class="home__latest-text">{ article.excerpt }</p>
    </article>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      articles: state => state.blog
    })
  },
  methods: {
    ...mapActions(["getBlog"])
  },
  created() {
    this.articles === null && this.getBlog();
  }
};
</script>
