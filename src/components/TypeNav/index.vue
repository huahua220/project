<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="leaveIndex" @mouseenter="entershow">
        <h2 class="all">全部商品分类</h2>
        <transition name="sort">
          <div class="sort" @click="goSearch" v-show="isShow">
            <div class="all-sort-list2">
              <div
                class="item bo"
                v-for="(v, index) in categoryList"
                :key="v.categoryId"
                :class="{ cur: index == currentIndex }"
              >
                <h3 @mouseenter="changeIndex(index)">
                  <a
                    :data-categoryName="v.categoryName"
                    :data-category1Id="v.categoryId"
                    >{{ v.categoryName }}</a
                  >
                </h3>
                <div
                  class="item-list clearfix"
                  :style="{ display: currentIndex == index ? 'block' : 'none' }"
                >
                  <div class="subitem">
                    <dl
                      class="fore"
                      v-for="v2 in v.categoryChild"
                      :key="v2.categoryId"
                    >
                      <dt>
                        <a
                          :data-categoryName="v2.categoryName"
                          :data-category2Id="v2.categoryId"
                          >{{ v2.categoryName }}</a
                        >
                      </dt>
                      <dd>
                        <em v-for="v3 in v2.categoryChild" :key="v3.categoryId">
                          <a
                            :data-categoryName="v3.categoryName"
                            :data-category3Id="v3.categoryId"
                            >{{ v3.categoryName }}</a
                          >
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>

      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "typeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  mounted() {
    //通知vuex发请求，获取数据，存储于仓库中
    // this.$store.dispatch("categoryList");
    if (this.$route.path != "/home") {
      this.isShow = false;
    }
  },
  computed: {
    //把仓库中的值映射为组件身上的属性
    ...mapState({
      categoryList: (state) => {
        // console.log(state)
        return state.home.categoryList.data;
      },
    }),
  },
  methods: {
    // changeIndex(index){
    //     this.currentIndex=index
    // },
    changeIndex: throttle(function (index) {
      // console.log(index)
      this.currentIndex = index;
    }, 50),
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path != "/home") {
        this.isShow = false;
      }
    },
    goSearch(event) {
      //结点a标签，加上了自定义属性data-categoryName
      //   console.log(event.target)
      let element = event.target;
      //结点有一个属性dataset属性，可以获取结点的自定义属性与属性值
      let { categoryname, category1id, category2id, category3id } =
        element.dataset;
      // console.log(element.dataset)
      //只有a标签才会进入这个if
      if (categoryname) {
        //整理路由跳转参数
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else if (category3id) {
          query.category3Id = category3id;
        }
        //判断有没有params参数
        if(this.$route.params){
            location.params=this.$route.params
        }
        location.query = query;
        this.$router.push(location);
      }
    },
    entershow() {
      this.isShow = true;
    },
  },
};
</script>

<style lang="less">
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 27px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // &:hover {
          //     .item-list {
          //         display: block;
          //     }
          // }
        }

        .cur {
          background-color: skyblue;
        }
      }
    }

    //过度动画的样式
    //过度开始的动画（进入）
    .sort-enter{
        height:0px;
    }
    //过度动画结束状态（进入）
    .sort-enter-to{
        height:461px
    }
    //定义动画的时间速率
    .sort-enter-active{
        transition: all 0.5s linear;
        overflow: hidden;
    }

    .sort-leave{
          height:461px
    }

    .sort-leave-to{
        height:0px
    }

     .sort-leave-active{
        transition: all 0.5s linear;
        overflow: hidden;
    }
  }
}
</style>