<template>
  <div class="table">
    <b-form-group label="View Users" class="dc-1"></b-form-group>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fields: [
          {
            key: 'last_name',
            sortable: true
          },
          {
            key: 'first_name',
            sortable: true
          },
          {
            key: 'age',
            label: 'Age',
            sortable: false,
          },
          {   
            key: 'username',
            label: 'Username',
            sortable: false,
          },
          {
            key: 'password',
            label: 'Password',
            sortable: false,
          },
          {
            key: 'group',
            label: 'Group',
            sortable: true,
          }
        ],
        items: [
          {  age: 40, first_name: 'Dickerson', last_name: 'Macdonald', username: 'mcdick', password: '1234', group: 'A' },
          {  age: 21, first_name: 'Larsen', last_name: 'Shaw', username: 'lshaw', password: '1234', group: 'B'  },
          {  age: 89, first_name: 'Geneva', last_name: 'Wilson', username: 'gwilson', password: '1234', group: 'A' },
          {  age: 38, first_name: 'Jami', last_name: 'Carney', username: 'jcarney', password: '1234', group: 'C'  }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>