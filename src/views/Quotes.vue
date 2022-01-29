<template>
  <div class="about">
  <!--================ Start Banner Area =================-->
  <section class="banner_area">
      <div class="banner_inner d-flex align-items-center">
          <div class="container">
              <div class="banner_content text-center">
                  <div class="page_link">
                      <router-link to="/"><a>Home</a></router-link>
                      <router-link to="/quotes"><a>Quotes</a></router-link>
                  </div>
              </div>
          </div>
      </div>
  </section>
	<!--================ Start Portfolio Area =================-->
	<section class="portfolio_area" id="portfolio">
		<div class="container" data-aos="fade-up">
			<div class="row">
				<div class="col-lg-12">
					<div class="main_title">
						<p class="top_text">Social Media posts <span></span></p>
						<h2>My Quotes</h2>
					</div>
				</div>
			</div>

			<div class="filters portfolio-filter">
				<ul>
					<li class="active" data-filter="*">all</li>
					<li data-filter=".linkedin">LinkedIn</li>
					<li data-filter=".twitter">Twitter</li>
					<li data-filter=".facebook">Facebook</li>
					<li data-filter=".intagram">Intagram</li>
				</ul>
			</div>

			<div class="filters-content">
				<div class="row portfolio-grid">
					<div class="grid-sizer col-md-6 col-lg-3"></div>

					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/about_sunday.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/about_sunday.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/lose.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/lose.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/revers.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/revers.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/silent.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/silent.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/sleep.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/sleep.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/spenttime.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/spenttime.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/stoplearning.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/stop learning.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/stopwaiting.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/stop waiting.png">Click to open</a></h4>
							</div>
						</div>
					</div>
					<div class="col-lg-3 col-md-6 all linkedin">
						<div class="single_portfolio">
							<img class="img-fluid w-100" src="/img/quotes/thinkingdid.png" alt="">
							<div class="overlay"></div>
							<div class="short_info">
								<h4><a target="_blank" href="/img/quotes/thinking did.png">Click to open</a></h4>
							</div>
						</div>
					</div>


				</div>
			</div>
		</div>
	</section>
	<!--================ End Portfolio Area =================-->

	<Footer/>

  </div>
</template>

<script>

import Footer from '../components/Footer.vue'

export default {
    name: 'About', 
    components: {
        Footer
    },
    methods: {

  }
}
</script>