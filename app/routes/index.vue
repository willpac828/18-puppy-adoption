<template lang="html">
  <div class="main">
    <div class="main-section">
      <!-- <pre>{{puppies}}</pre> -->
      <div class="main-section__head">
        <h2 class="main-section__title">Puppies for Adoption</h2>
        <button class="main-section__button">Add a Pupper</button>
      </div>
      <table class="table is-striped">
        <thead>
          <tr>
            <th class="table-head">Name</th>
            <th class="table-head">Age</th>
            <th></th>
          </tr>
        </thead>
        <tr v-for="puppy in puppies" v-if="!puppy.adopted">
          <td class="table-data">{{puppy.name}}</td>
          <td class="table-data">{{puppy.age}}</td>
          <router-link :to="{ name: 'detail', params: {id: puppy.id} }" class="panel-block__more"><td class="table-data rm">Read More</td></a>
        </tr>
      </table>
      <div class="main-section">
        <div class="main-section__head">
          <h2 class="main-section__title">Adopted Puppers</h2>
        </div>
        <table class="table is-striped">
          <thead>
            <tr>
              <th class="table-head">Name</th>
              <th class="table-head">Age</th>
              <th></th>
            </tr>

          </thead>
          <tr v-for="puppy in puppies" v-if="puppy.adopted">
            <td class="table-data">{{puppy.name}}</td>
            <td class="table-data">{{puppy.age}}</td>
            <router-link :to="{ name: 'detail', params: {id: puppy.id} }" class="panel-block__more"><td class="table-data rm">Read More</td></a>
          </tr>

        </table>
      </div>

    </div>
  </div>
</template>

<script>
import store from '../store';
import { findAll } from '../actions/puppy';

export default {
  data() {
    return {
      // we need puppies so template recognizes it
      // this.$select Let's component know about changes to puppies
      puppies: this.$select('puppies'),
    };
  },

  mounted() {
    store.dispatch(findAll());
  },

  methods: {

  },
};
</script>
