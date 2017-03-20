<template lang="html">

    <div class="main">
      <div class="main-section">
        <div class="main-section__head">
          <h2 class="main-section__title">Found A Pupper? We can help!</h2>
        </div>

        <!-- Can always use the tag below to see if input is registering -->
        <!-- <pre>{{formValues}}</pre> -->

        <form @submit.prevent="save(formValues)" action="" class="form">
          <label for="" class="label">Name</label>
          <p class="control">
            <input type="text" class="input" v-model="formValues.name">
          </p>

          <label for="" class="label">Age</label>
          <p class="control">
            <input type="text" class="input" v-model="formValues.age">
          </p>

          <label for="" class="label">Sex</label>
          <p class="control">
            <span class="select">
              <select name="" id="" v-model="formValues.sex">
                <option value="">Male</option>
                <option value="">Female</option>
              </select>
            </span>
          </p>

          <label for="" class="label">Color</label>
          <p class="control">
            <input type="text" class="input" v-model="formValues.color">
          </p>

          <label for="" class="label">Breed</label>
          <p class="control">
            <input type="text" class="input" v-model="formValues.breed">
          </p>

          <label for="" class="label">Image URL</label>
          <p class="control">
            <input type="text" class="input" v-model="formValues.imageURL">
          </p>

          <label for="" class="label">Description</label>
          <p class="control">
            <textarea name="" id="" placeholder="Tell us 'bout yo pup!" class="textarea" v-model="formValues.description"></textarea>
          </p>

          <div class="control is-grouped">
            <p class="control">
              <button class="button">Back</button>
            </p>
            <p class="control">
              <button class="button is-primary">Submit</button>
            </p>

          </div>


        </form>

      </div>

    </div>


</template>

<script>
export default {

  // Makes it so the input data turns into this formValues object
  data() {
    return {
      formValues: {
        name: '',
        age: '',
        sex: '',
        color: '',
        breed: '',
        imageUrl: '',
        description: ''

      }
    };
  },

  methods: {
    save(formValues) {

    },
  },
};
</script>
