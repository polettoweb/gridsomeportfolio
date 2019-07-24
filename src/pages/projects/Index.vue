<template>
  <Layout>{{$page.items}}</Layout>
</template>

<page-query>
query items {
	allPortfolioItem {
    edges {
      node {
        id
        title
        path
        description
      }
    }
  }
}
</page-query>
<script>
export default {};
</script>

<style>

</style>
