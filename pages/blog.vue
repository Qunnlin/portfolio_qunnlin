<script setup lang="ts">

definePageMeta({
  title: "Blog",
  description: "Blog",
  url: "/blog",
  keywords: "blog",
})

const parsePosts = (posts: any) => {
  return posts.map((post: any) => {
    return {
      title: post.title,
      description: post.description,
      body: post.body,
      date: parseDate(post._file),
      path: post._path,
      post: post
    }
  })
}

// Parses the date from the post name
// Example: <dir>/<timestamp>-<title>.md
// Returns: <day>.<month>.<year> <hour>:<minute> <timezone> (e.g. 12.12.2020 12:12 GMT+1)
const parseDate = (postName: String) => {
  let filename = postName.split('/').pop()
  if (!filename) return ''

  let timestamp: number = +filename.split('-')[0]
  if (!timestamp) return ''

  return new Date(timestamp).toLocaleString()
}

const {data, pending, error, refresh } = await useAsyncData('blog', () => queryContent('blog').find())
const posts = parsePosts(data.value)

let visible = ref(false)
let postTitle = ref('')
let usedPost = ref('')
let postBody = ref('')
let postDate = ref('')
let postPath = ref('')
let postDescription = ref('')

const openPost = (post: any) => {
  postTitle.value = post.title
  usedPost.value = post
  postBody.value = post.body
  postDate.value = post.date
  postPath.value = post.path
  postDescription.value = post.description
  visible.value = true
}

</script>

<template>
<div>
    <timeline :value="posts">
    <template #opposite="slotProps">
      <small class="p-text-secondary">{{slotProps.item.date}}</small>
    </template>
    <template #content="slotProps">
      <h3>{{slotProps.item.title}}</h3>
      <p>{{slotProps.item.description}}</p>
      <button class="p-button p-button-link p-button-raised p-button-label" @click="openPost(slotProps.item.post)">Read More</button>
    </template>
  </timeline>
  <Dialog v-model:visible="visible" modal :header="postTitle" :style="{ width: '90vw' }">
    <ContentRenderer :value="usedPost">
      <template #empty>
        <p>Post not found!</p>
      </template>
    </ContentRenderer>
  </Dialog>
</div>
</template>
<style scoped>

</style>
