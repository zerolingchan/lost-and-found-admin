<template>
    <div>
        <h1>{{ isLogin }}</h1>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    name: 'home',
    data () {
        return {

        }
    },
    computed: {
        ...mapState({
            isLogin: 'isLogin'
        })
    },
}
</script>
