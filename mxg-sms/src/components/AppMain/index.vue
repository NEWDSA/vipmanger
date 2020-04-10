 <template>
  <div class="main">
    <Link v-show="$route.path!=='/home'"/>
    <router-view></router-view>
  </div>
</template>
<script>
import Link from '@/components/AppMain/Link'
export default {
  components: {
    Link
  }
}
</script>
