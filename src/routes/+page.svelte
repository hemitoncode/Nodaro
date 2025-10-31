<script>
    import PageIllustration from "../components/page-illustration.svelte";
</script>

<section class="relative">
  <PageIllustration />
  <div class="mx-auto max-w-6xl px-4 sm:px-6">
    <!-- Hero content -->
    <div class="pb-12 pt-32 md:pb-20 md:pt-40">
      <div class="pb-12 text-center md:pb-16">
        <h1
          class="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,--theme(--color-orange-300/.8),transparent)1] md:text-6xl"
          data-aos="zoom-y-out"
          data-aos-delay="150"
          style="--color-text: var(--color-orange-700)"
        >
          Learn about hardware quick
        </h1>

        <div class="mx-auto max-w-3xl">
          <p
            class="mb-8 text-lg text-orange-700"
            data-aos="zoom-y-out"
            data-aos-delay="300"
          >
            Nodaro is a youth-led organization that empowers students to learn about hardware and electronics.
          </p>

            <div
              class="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
              data-aos="zoom-y-out"
              data-aos-delay="450"
            >
              <a
                class="btn group mb-4 w-full bg-gradient-to-t p-3 rounded-lg from-orange-600 to-orange-500 bg-size-[100%_100%] text-white shadow-sm hover:bg-size-[100%_150%] sm:mb-0 sm:w-auto"
                href="#0"
                style="--color-solid: var(--color-orange-700); --color-hover: var(--color-orange-500)"
              >
                <span class="relative inline-flex items-center">
                  Start learning
                  <span
                    class="ml-1 tracking-normal text-orange-300 transition-transform group-hover:translate-x-0.5"
                  >
                    -&gt;
                  </span>
                </span>
              </a>
            </div>
        </div>
      </div>
  </div>
</section>
