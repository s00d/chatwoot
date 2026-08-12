<script>
export default {
  props: {
    rows: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      currentSlug: window.location?.hash?.substring(1) || '',
      intersectionObserver: null,
    };
  },
  computed: {
    tocHeader() {
      return window.portalConfig?.tocHeader || 'On this page';
    },
    h1Count() {
      return this.rows.filter(el => el.tag === 'h1').length;
    },
    h2Count() {
      return this.rows.filter(el => el.tag === 'h2').length;
    },
  },
  mounted() {
    this.initializeIntersectionObserver();
    window.addEventListener('hashchange', this.onURLHashChange);
  },
  unmounted() {
    window.removeEventListener('hashchange', this.onURLHashChange);
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  },
  methods: {
    getClassName(el) {
      if (el.tag === 'h1') {
        return '';
      }
      if (el.tag === 'h2') {
        if (this.h1Count > 0) {
          return 'ltr:ml-2 rtl:mr-2';
        }
        return '';
      }

      if (el.tag === 'h3') {
        if (!this.h1Count && !this.h2Count) {
          return '';
        }
        return 'ltr:ml-4 rtl:mr-4';
      }

      return '';
    },
    initializeIntersectionObserver() {
      this.intersectionObserver = new IntersectionObserver(
        entries => {
          const currentSection = entries.find(entry => entry.isIntersecting);
          if (currentSection) {
            this.currentSlug = currentSection.target.id;
          }
        },
        {
          threshold: 0.25,
          rootMargin: '0px 0px -20% 0px',
        }
      );

      this.rows.forEach(el => {
        const sectionElement = document.getElementById(el.slug);
        if (!sectionElement) return;
        this.intersectionObserver.observe(sectionElement);
      });
    },
    onURLHashChange() {
      this.currentSlug = window.location?.hash?.substring(1) || '';
    },
    isElementActive(el) {
      return this.currentSlug === el.slug;
    },
    elementBorderStyles(el) {
      if (this.isElementActive(el)) {
        return 'border-n-portal transition-colors duration-200';
      }
      return 'border-n-weak';
    },
    elementTextStyles(el) {
      if (this.isElementActive(el)) {
        return 'text-n-portal transition-colors duration-200';
      }
      return 'text-n-slate-11 hover:text-n-slate-12';
    },
  },
};
</script>

<template>
  <div class="py-2 scroll-mt-[5rem] ltr:pl-2 rtl:pr-2 sticky top-[3.5rem]">
    <div v-if="rows.length > 0" class="overflow-auto">
      <p
        class="mb-2 text-[11px] font-semibold uppercase tracking-wider text-n-slate-10"
      >
        {{ tocHeader }}
      </p>
      <nav>
        <ol
          role="list"
          class="flex flex-col gap-0.5 text-xs ltr:border-l-2 rtl:border-r-2 border-solid border-n-weak"
        >
          <li
            v-for="element in rows"
            :key="element.slug"
            class="leading-5 ltr:border-l-2 rtl:border-r-2 relative ltr:-left-0.5 rtl:-right-0.5 border-solid"
            :class="elementBorderStyles(element)"
          >
            <p class="py-0.5 px-2" :class="getClassName(element)">
              <a
                :href="`#${element.slug}`"
                data-turbo="false"
                class="font-medium cursor-pointer"
                :class="elementTextStyles(element)"
              >
                {{ element.title }}
              </a>
            </p>
          </li>
        </ol>
      </nav>
    </div>
  </div>
</template>
