<template lang="html">
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
          <router-link to="/detail/:id" class="panel-block__more"><td class="table-data rm">Read More</td></a>
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
            <router-link to="/detail/:id" class="panel-block__more"><td class="table-data rm">Read More</td></a>
          </tr>
          <tr>
            <td class="table-data">Mojo Jojo</td>
            <td class="table-data">27</td>
            <router-link to="/detail/:id" class="panel-block__more"><td class="table-data rm">Read More</td></a>
          </tr>
          <tr>
            <td class="table-data">Foobar</td>
            <td class="table-data">18 mo.</td>
            <router-link to="/detail/:id" class="panel-block__more"><td class="table-data rm">Read More</td></a>
          </tr>
          <tr>
            <td class="table-data">Marvin</td>
            <td class="table-data">3 years</td>
            <router-link to="/detail/:id" class="panel-block__more"><td class="table-data rm">Read More</td></a>
          </tr>
          <tr>
            <td class="table-data">Shawarma</td>
            <td class="table-data">2 Shawarma</td>
            <router-link to="/detail/:id" class="panel-block__more"><td class="table-data rm">Read More</td></a>
          </tr>
        </table>
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
