<template>   
    <footer class="site-footer">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-4">
            <h3>Paragraph</h3>
            <p>
              <img src="../assets/img_1.jpg" alt="Image placeholder" class="img-fluid">
            </p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, accusantium optio unde perferendis eum illum voluptatibus dolore tempora, consequatur minus asperiores temporibus reprehenderit.</p>
          </div>
          <div class="col-md-6 ml-auto">
            <div class="row">
              <div class="col-md-7">
                <h3>Latest Post</h3>
                <div class="post-entry-sidebar">
                  <ul>
                    <li>
                      <router-link tag="a" to="/post">
                        <img src="../assets/img_6.jpg" alt="Image placeholder" class="mr-4">
                        <div class="text">
                          <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                          <div class="post-meta">
                            <span class="mr-2">March 15, 2018 </span> &bullet;
                            <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/post">
                        <img src="../assets/img_3.jpg" alt="Image placeholder" class="mr-4">
                        <div class="text">
                          <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                          <div class="post-meta">
                            <span class="mr-2">March 15, 2018 </span> &bullet;
                            <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link tag="a" to="/post">
                        <img src="../assets/img_4.jpg" alt="Image placeholder" class="mr-4">
                        <div class="text">
                          <h4>There’s a Cool New Way for Men to Wear Socks and Sandals</h4>
                          <div class="post-meta">
                            <span class="mr-2">March 15, 2018 </span> &bullet;
                            <span class="ml-2"><span class="fa fa-comments"></span> 3</span>
                          </div>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-1"></div>
              
              <div class="col-md-4">

                <div class="mb-5">
                  <h3>Quick Links</h3>
                  <ul class="list-unstyled">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Adventure</a></li>
                    <li><a href="#">Courses</a></li>
                    <li><a href="#">Categories</a></li>
                  </ul>
                </div>
                
                <div class="mb-5">
                  <h3>Social</h3>
                  <ul class="list-unstyled footer-social">
                    <li><a href="#"><span class="fa fa-twitter"></span> Twitter</a></li>
                    <li><a href="#"><span class="fa fa-facebook"></span> Facebook</a></li>
                    <li><a href="#"><span class="fa fa-instagram"></span> Instagram</a></li>
                    <li><a href="#"><span class="fa fa-github"></span> Github</a></li>
                    <li><a href="#"><span class="fa fa-youtube-play"></span> Youtube</a></li>
                    <li><a href="#"><span class="fa fa-snapchat"></span> Snapshot</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
Copyright &copy; {{ new Date().getFullYear() }} All rights reserved | Made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://github.com/jordigoyanes" target="_blank">Jordi Goyanes</a>
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
          </div>
        </div>
      </div>
</footer>
</template>

<script>
export default {
    name:'Footer'
}
</script>
