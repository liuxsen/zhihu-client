<style lang="scss" scoped>

.footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-around;
  text-align: center;
  padding: .2rem 0;
  & li.active p{
    color: #1a82ff;
  }
  p{
    margin-top: 2px;
    font-size: 14px;
  }
}
.footer-img{
  width: .4rem;
}
</style>
<template>
  <div id="app">
    
    <router-view/>
    <ul class="footer">
    	<li @click="go('index')" :class="{active: routeName==='index'}">
    		<img v-show="routeName==='index'" class="footer-img" src="../static/img/sy2.svg" alt="">
    		<img v-show="routeName!=='index'" class="footer-img" src="../static/img/sy.svg" alt="">
    		<p>首页</p>
    	</li>
    	<li :class="{active: routeName==='think'}" @click="go('think')">
        <img v-show="routeName==='think'" class="footer-img" src="../static/img/xf2.svg" alt="">
    		<img v-show="routeName!=='think'" class="footer-img" src="../static/img/xf.svg" alt="">
    		<p>想法</p>
    	</li>
    	<li :class="{active: routeName==='mark'}" @click="go('mark')">
        <img v-show="routeName==='mark'" class="footer-img" src="../static/img/sc2.svg" alt="">
    		<img v-show="routeName!=='mark'" class="footer-img" src="../static/img/sc.svg" alt="">
    		<p>市场</p>
    	</li>
    	<li :class="{active: routeName==='message'}" @click="go('message')">
        <img v-show="routeName==='message'" class="footer-img" src="../static/img/xx2.svg" alt="">
    		<img v-show="routeName!=='message'" class="footer-img" src="../static/img/xx.svg" alt="">
    		<p>消息</p>
    	</li>
      <li :class="{active: routeName==='more'}" @click="go('more')">
        <img v-show="routeName==='more'" class="footer-img" src="../static/img/more.svg" alt="">
        <img v-show="routeName!=='more'" class="footer-img" src="../static/img/more2.svg" alt="">
        <p>更多</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
  	return {
  		routeName: 'index'
  	}
  },
  methods:{
    go(name){
      this.$router.push({name: name});
    }
  },
  watch:{
  	'$route'(){
  		const name = this.$route.name;
  		this.routeName = name;
  	}
  }
};
</script>


