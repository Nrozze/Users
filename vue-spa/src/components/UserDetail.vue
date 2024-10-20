<template>
  <div>
    <h1>{{ user.name }}</h1>
    <h2>Альбомы</h2>
    <div v-for="album in albums" :key="album.id">
      <h3>{{ album.title }}</h3>
      <div class="carousel">
        <img v-for="photo in album.photos.slice(0, 5)" :key="photo.id" :src="photo.url" />
      </div>
    </div>
    <h2>Посты</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  data() {
    return {
      albums: [],
      posts: [],
    };
  },
  computed: {
    ...mapState(['currentUser']),
  },
  async created() {
    const userId = this.$route.params.id;
    await this.$store.dispatch('fetchUser', userId);
    this.fetchAlbums(userId);
    this.fetchPosts(userId);
  },
  methods: {
    async fetchAlbums(userId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
      this.albums = response.data;
      for (const album of this.albums) {
        const photosResponse = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
        album.photos = photosResponse.data;
      }
    },
    async fetchPosts(userId) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
      this.posts = response.data;
    },
  },
};
</script>

<style scoped>
.carousel {
  display: flex;
  overflow-x: auto;
}
.carousel img {
  width: 100px;
  height: auto;
  margin-right: 10px;
}
</style>
