<template lang="html">
  <div class="">
    <header class="nav">

      // Why not v-bind for this attribute?
      <p class="nav-left"><router-link to="/index">Puppies<router-link/></p>

      <div class="nav-right">

        // no idea about these v-binds
        <p class="nav-right__item"><router-link to="/index">All Puppies</router-link></p>
        <p class="nav-right__item"><router-link to="/new">Add Puppy</router-link></p>
      </div>
    </header>

    <div class="container">
      <div class="side-bar">
        // Should this p tag be in a div?
        <p class="side-bar__head">Adopt a Pupper</p>

        <div class="side-bar__item">
          <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="side-bar__item__img">
          <p class="side-bar__item__name">Esco</p>
          <router-link to="/detail" class="sid-bar__item__info">Read More</a>
        </div>
        <div class="side-bar__item">
          <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="side-bar__item__img">
          <p class="side-bar__item__name">Esco</p>
          <router-link to="/detail" class="sid-bar__item__info">Read More</a>
        </div>
        <div class="side-bar__item">
          <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="side-bar__item__img">
          <p class="side-bar__item__name">Esco</p>
          <router-link to="/detail" class="sid-bar__item__info">Read More</a>
        </div>
        <div class="side-bar__item">
          <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="side-bar__item__img">
          <p class="side-bar__item__name">Esco</p>
          <router-link to="/detail" class="sid-bar__item__info">Read More</a>
        </div>
        <div class="side-bar__item">
          <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="side-bar__item__img">
          <p class="side-bar__item__name">Esco</p>
          <router-link to="/detail" class="sid-bar__item__info">Read More</a>
        </div>
        <div class="side-bar__item">
          <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="side-bar__item__img">
          <p class="side-bar__item__name">Esco</p>
          <router-link to="/detail" class="sid-bar__item__info">Read More</a>
        </div>
      </div>
      <div class="main">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },

  methods: {

  },
};
</script>
