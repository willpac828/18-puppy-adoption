<template lang="html">
  <div class="">
    <header class="nav">

       <!-- Why not v-bind for this attribute? -->
      <h2 class="nav-left">
        <router-link to="/index" class="nav-item is-brand">Puppies<router-link/>
      </h2>

      <div class="nav-right">

         <!-- no idea about these v-binds -->
        <router-link to="/index" class="nav-item is-brand">All Puppies</router-link>
        <router-link to="/new" class="nav-item is-brand">Add Puppy</router-link>
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
                <router-link to="/detail" class="panel-block__more">Read More</a>
              </div>
            </div>

              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail" class="panel-block__more">Read More</a>
            </div>
              </div>
              <div class="panel-block">
                <figure class="image is-64x64">
                <img src="http://cdn1-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg" alt="" class="">
              </figure>
              <div class="panel-block__info">
              <p class="panel-block__name">Esco</p>
              <router-link to="/detail" class="panel-block__more">Read More</a>
            </div>
              </div>
            </div>
          </div>
          <div class="column is-two-thirds">
             <!-- not sure about bulma styles here down -->
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
                      <th></th>
                    </tr>
                  </thead>
                  <tr>
                    <td class="table-data">Zombie Kid</td>
                    <td class="table-data">10</td>
                    <td class="table-data rm">Read More</td>
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
                    <tr>
                      <td class="table-data">Luna</td>
                      <td class="table-data">2</td>
                      <td class="table-data rm">Read More</td>
                    </tr>
                    <tr>
                      <td class="table-data">Mojo Jojo</td>
                      <td class="table-data">27</td>
                      <td class="table-data rm">Read More</td>
                    </tr>
                    <tr>
                      <td class="table-data">Foobar</td>
                      <td class="table-data">18 mo.</td>
                      <td class="table-data rm">Read More</td>
                    </tr>
                    <tr>
                      <td class="table-data">Marvin</td>
                      <td class="table-data">3 years</td>
                      <td class="table-data rm">Read More</td>
                    </tr>
                    <tr>
                      <td class="table-data">Shawarma</td>
                      <td class="table-data">2 Shawarma</td>
                      <td class="table-data rm">Read More</td>
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
