<template>
    <div class="booking">
        <b-form-group id="table" label="Travel Details" class="dc-1"></b-form-group>
        <b-table striped hover :items="items" :fields="fields"></b-table>
    </div>
</template>

<script>
export default {
    name: 'booking',

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
            sortable: true,
            },
            {   
            key: 'username',
            label: 'Username',
            sortable: true,
            },
            ]
        }
    }
}   
</script>

<style lang="scss" scoped>

</style>