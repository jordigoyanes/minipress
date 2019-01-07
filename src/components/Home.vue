<template>
  <div>
    <section class="site-section pt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
                <hooper :autoPlay="true" :playSpeed="2500">
                  <slide>
                  <router-link tag="a" to="/post" class="a-block d-flex align-items-center height-lg" :style="{backgroundImage: `url(${require(`../assets/img_1.jpg`)})`}" >
                    <div class="text half-to-full">
                        <div class="post-meta">
                          <span class="category">Lifestyle</span>
                          <span class="mr-2">March 15, 2018 </span> &bullet;
                          <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                        <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                    </div>
                  </router-link>
                  </slide>
                  <slide>
                
                 <router-link tag="a" to="/post" class="a-block d-flex align-items-center height-lg" :style="{backgroundImage: `url(${require(`../assets/img_2.jpg`)})`}">
                    <div class="text half-to-full">
                      <div class="post-meta">
                        <span class="category">Lifestyle</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                    </div>
                 </router-link>
                </slide>
                  <slide>
                    <router-link tag="a" to="/post" class="a-block d-flex align-items-center height-lg" :style="{backgroundImage: `url(${require(`../assets/img_3.jpg`)})`}">
                      <div class="text half-to-full">
                        <div class="post-meta">
                          <span class="category">Lifestyle</span>
                          <span class="mr-2">March 15, 2018 </span> &bullet;
                          <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                        <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!</p>
                      </div>
                    </router-link>
                  </slide>
                  <hooper-navigation slot="hooper-addons"></hooper-navigation>

                </hooper>
              <!-- </div> -->
              
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-4">
              <router-link tag="a" to="/post" class="a-block d-flex align-items-center height-md" :style="{backgroundImage: `url(${require(`../assets/img_2.jpg`)})`}">
                <div class="text">
                  <div class="post-meta">
                    <span class="category">Lifestyle</span>
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4">
              <router-link tag="a" to="/post" class="a-block d-flex align-items-center height-md" :style="{backgroundImage: `url(${require(`../assets/img_3.jpg`)})`}">
                <div class="text">
                  <div class="post-meta">
                    <span class="category">Travel</span>
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                </div>
              </router-link>
            </div>
            <div class="col-md-6 col-lg-4">
              <router-link tag="a" to="/post" class="a-block d-flex align-items-center height-md" :style="{backgroundImage: `url(${require(`../assets/img_4.jpg`)})`}">
                <div class="text">
                  <div class="post-meta">
                    <span class="category">Food</span>
                    <span class="mr-2">March 15, 2018 </span> &bullet;
                    <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                  </div>
                  <h3>There’s a Cool New Way for Men to Wear Socks and Sandals</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </section>
      <section class="site-section py-sm">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h2 class="mb-4">Lifestyle Category</h2>
            </div>
          </div>
          <div class="row blog-entries">
            <div class="col-md-12 col-lg-8 main-content">
              <div class="row">
                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_5.jpg" alt="Image placeholder">
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Food</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_6.jpg" alt="Image placeholder">
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Travel</span>
                          <span class="mr-2">March 15, 2018 </span> &bullet;
                          <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>

                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_7.jpg" alt="Image placeholder">
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Travel, Asia</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_8.jpg" alt="Image placeholder">
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Travel</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>

                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_9.jpg" alt="Image placeholder">
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Travel</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_10.jpg" alt="Image placeholder">
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Lifestyle</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>

                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_11.jpg" alt="Image placeholder">
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Lifestyle</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-6">
                  <router-link tag="a" to="/post" class="blog-entry element-animate" >
                    <img src="../assets/img_12.jpg" alt="Image placeholder">
                    
                    <div class="blog-content-body">
                      <div class="post-meta">
                        <span class="category">Food</span>
                        <span class="mr-2">March 15, 2018 </span> &bullet;
                        <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                      </div>
                      <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                    </div>
                  </router-link>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 text-center">
                  <nav aria-label="Page navigation" class="text-center">
                    <ul class="pagination">
                      <li class="page-item  active"><a class="page-link" href="#">Prev</a></li>
                      <li class="page-item"><a class="page-link" href="#">1</a></li>
                      <li class="page-item"><a class="page-link" href="#">2</a></li>
                      <li class="page-item"><a class="page-link" href="#">3</a></li>
                      <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                  </nav>
                </div>
              </div>


              <div class="row mb-5 mt-5">

                <div class="col-md-12">
                  <h2 class="mb-4">More Blog Posts</h2>
                </div>
          
                <div class="col-md-12">

                  <div class="post-entry-horzontal">
                    <router-link tag="a" to="/post">
                      <div class="image element-animate"   :style="{backgroundImage: `url(${require(`../assets/img_10.jpg`)})`}"></div>
                      <span class="text">
                        <div class="post-meta">
                          <span class="category">Travel</span>
                          <span class="mr-2">March 15, 2018 </span> &bullet;
                          <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                        <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                      </span>
                    </router-link>
                  </div>
                  <!-- END post -->

                  <div class="post-entry-horzontal">
                    <router-link tag="a" to="/post">
                      <div class="image element-animate"   :style="{backgroundImage: `url(${require(`../assets/img_11.jpg`)})`}"></div>
                      <span class="text">
                        <div class="post-meta">
                          <span class="category">Lifestyle</span>
                          <span class="mr-2">March 15, 2018 </span> &bullet;
                          <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                        <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                      </span>
                    </router-link>
                  </div>
                  <!-- END post -->

                  <div class="post-entry-horzontal">
                    <router-link tag="a" to="/post">
                      <div class="image element-animate"   :style="{backgroundImage: `url(${require(`../assets/img_12.jpg`)})`}"></div>
                      <span class="text">
                        <div class="post-meta">
                          <span class="category">Food</span>
                          <span class="mr-2">March 15, 2018 </span> &bullet;
                          <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                        </div>
                        <h2>There’s a Cool New Way for Men to Wear Socks and Sandals</h2>
                      </span>
                    </router-link>
                  </div>
                  <!-- END post -->

                </div>
              </div>

              

            </div>

            <!-- END main-content -->

            <Sidebar />

          </div>
        </div>
    </section>
  </div>
</template>

<script>
import { Hooper, Slide , Navigation as HooperNavigation } from 'hooper';

import Sidebar from '@/components/Sidebar';

export default {
  name: 'Home',
  components: {
    Slide,
    Sidebar,
    Hooper,
    Slide,
    HooperNavigation
    
  },
  data () {
    return {
      slide_posts:[{
        title: "There’s a Cool New Way for Men to Wear Socks and Sandals",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nobis, ut dicta eaque ipsa laudantium!",
        category:"",
        date: "",
        comments:""
      }],
      slide: 0,
      sliding: null,
      
    }
  },
  methods:{
    onSlideStart (slide) {
      this.sliding = true
    },
    onSlideEnd (slide) {
      this.sliding = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
