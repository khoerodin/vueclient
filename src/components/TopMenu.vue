 <template>
    <div v-if="userStore.authUser !== null && userStore.authUser.access_token">
        <ul>
            <li>Menu 1</li>
            <li>Menu 2</li>
            <li>Menu 3</li>
            <li>Menu 4</li>
            <li>Menu 5</li>
        </ul>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        computed: {
            ...mapState({
                userStore: state => state.userStore
            })
        }
    }
</script>

<style>
    ul li {
        display: inline;
        list-style-type: none;
        padding-right: 20px;
    }
</style>
