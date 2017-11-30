<style scoped lang="scss">
		.box{
			padding-top: .78rem;
		}
		.head{
		  display: flex;
		  position: fixed;
		  left: 0;
		  top: 0;
		  width: 100%;
		  padding: 6px .4rem 6px .2rem;
		  background: #ffffff;
		  border-bottom: 1px solid #dcdcdc;
		  box-shadow: 0 1px 4px #dcdcdc;
		  align-items: center;
		  img{
		    width: .3rem;
		    margin-right: .1rem;
		  }
		  span{
		    color: #0294dd;
		  }
		  input{
		    width: 5.7rem;
		    height: .5rem;
		    margin-right: .3rem;
		    border-radius: 12px;
		    border: 0;
		    background: #eeeeee;
		    box-sizing: border-box;
		    padding-left: 12px;
		    text-align: center;
		  }
		}
	  .item{
	  	background: #ffffff;
	  	padding: .23rem .2rem .24rem .2rem;
	  	font-size: 14px;
	  	margin-top: .18rem;
	  	.avatar{
	  		background-color: #dcdcdc;
	  		width: .4rem;
	  		height: .4rem;
	  		display: inline-block;
	  		border-radius: 50%;
	  		margin-right: 4px;
	  		background-position: center;
	  		background-size: 100%;
	  	}
	  	.title-box{
	  		margin-bottom: .24rem;
	  		display: flex;
	  		color: #acacac;
	  	}
	  	.title{
	  		font-size: 16px;
	  	}
	  	.content{
				line-height: 1.6;
	  	}
	  	.foot{
	  		margin-top: .2rem;
	  		font-size: 12px;
	  		color: #dcdcdc;
	  	}
	  }
</style>
<template>
	<div class="box">
		<!-- 搜索 -->
    <div class="head">
      <input placeholder="比尔盖茨当选院士" type="text">
      <img src="./img/question.svg" alt="">
      <span>提问</span>
    </div>
		<ul>
			<li v-for="item in list" class="item">
				<div class="title-box">
					<span class="avatar" :style="{backgroundImage: `url(${item.question_author.user_avatar? item.question_author.user_avatar: head})`}"></span>
					<div>来自话题：</div>
					<div v-for="topic in item.question_topic">
						{{topic.topic_name}}
					</div>
				</div>
				<h1 class="title">{{item.question_title}}</h1>
				<div class="content" v-html="item.question_description"></div>
				<div class="foot">
					<span>21,132</span> 赞同  <span>1,333</span> 评论   关注问题
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
import head from './img/head.svg'
	export default {
		data(){
			return {
				list: [],
				head: head
			}
		},
		methods:{
			getList(){
				const params = {
					page_size: 10,
					page: 1
				}
				this.postHttp('/app/question/list',params)
					.then(({data})=>{
						console.log(data);
						if(data.error === 0){
							this.list = data.data;
						}
					})
			}
		},
		created(){
			this.getList();
		}
	};
</script>