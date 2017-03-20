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

              <div class="panel-block" v-for="puppy in puppies">
                <!-- <pre>{{puppy}}</pre> -->
                <figure class="image is-64x64">
                  <!-- have to do v-bind for attributes, not {{}} -->
                  <img v-bind:src="puppy.image_url" alt="" class="">
                </figure>
                <div class="panel-block__info">
                  <p class="panel-block__name">{{puppy.name}}</p>
                   <!-- passing in the parameter :id so that it routes to w/e the id page is of that pup -->
                  <router-link :to="{ name: 'detail', params: {id: puppy.id} }" class="panel-block__more">Read More</router-link>
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

// our app needs to know about store
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  data() {
    return {
      // lets component know about changes to puppies
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    // runs when page renders. tells find all to do it's fetch
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
