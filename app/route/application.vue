<template lang="html">
  <div class="">
    <!-- <header class="nav">

      // Why not v-bind for this attribute?
      <p class="nav-left"><router-link to="/index">Puppies<router-link/></p>

      <div class="nav-right">

        // no idea about these v-binds
        <p class="nav-item"><router-link to="/index">All Puppies</router-link></p>
        <p class="nav-item"><router-link to="/new">Add Puppy</router-link></p>
      </div>
    </header> -->

    <div class="section">
    <div class="container">
      <div class="columns">
        <div class="column">
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
      </div>
      <div class="column is-two-thirds">
        // not sure about bulma styles here down
      <div class="main">
        <div class="main-section">
          <div class="main-section__head">
            <h2 class="main-section__title">Puppies for Adoption</h2>
            <button class="main-section__button">Add a Pupper</button>
          </div>
          <table class="table is-striped">
            <thead>
            <tr>
              <th class="table-head">Name</th>
              <th class="table-head">Age</th>
            </tr>
            </thead>
            <tr>
              <td class="table-data">Zombie Kid</td>
              <td class="table-data">10</td>
              <td class="table-data">Read More</td>
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
              </tr>

            </thead>
              <tr>
                <td class="table-data">Luna</td>
                <td class="table-data">2</td>
              </tr>
              <tr>
                <td class="table-data">Mojo Jojo</td>
                <td class="table-data">27</td>
              </tr>
              <tr>
                <td class="table-data">Foobar</td>
                <td class="table-data">18 mo.</td>
              </tr>
              <tr>
                <td class="table-data">Marvin</td>
                <td class="table-data">3 years</td>
              </tr>
              <tr>
                <td class="table-data">Shawarma</td>
                <td class="table-data">2 Shawarma</td>
              </tr>
          </table>
          </div>

        </div>
      </div>
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
