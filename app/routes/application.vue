<template lang="html">
  <div class="">
    <header class="nav">

       <!-- Why not v-bind for this attribute? -->
      <h2 class="nav-left">
        <router-link :to= "{ name: 'index' }" class="nav-item is-brand">Puppies</router-link>
      </h2>

      <div class="nav-right">

         <!-- no idea about these v-binds -->
        <router-link :to= "{ name: 'index' }" class="nav-item is-brand">All Puppies</router-link>
        <router-link :to= "{ name: 'new' }" class="nav-item is-brand">Add Puppy</router-link>
      </div>
    </header>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="panel">
               <!-- Should this p tag be in a div? -->
              <p class="panel-heading">Adopt a Pupper</p>

              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
                <div class="panel-block__info">
                <p class="panel-block__name">Esco</p>
                <router-link to="/detail/:id" class="panel-block__more">Read More</a>
              </div>
            </div>

              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail:id" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail:id" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail:id" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail:id" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail:id" class="panel-block__more">Read More</a>
            </div>
              </div>
            </div>
          </div>
          <div class="column is-two-thirds">

            <!-- this tells the other components where to show up -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {

  },
};
</script>
