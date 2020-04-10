 <template>
  <div class="main">
    <Link/>
    <router-view v-show="$route.path!=='/home'"></router-view>
  </div>
</template>
<script>
import Link from '@/components/AppMain/Link'
export default {
    components:{
        Link
    }
}
</script>