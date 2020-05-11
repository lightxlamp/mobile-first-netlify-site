import Vue from 'vue' // TODO - Was it a good idea to register all components globally?

import appArticlesList from '@/components/app-articles-list'
import appAuthor from '@/components/app-author'
import appBreadcrumbs from '@/components/app-breadcrumbs'
import appPagination from '@/components/app-pagination'
import dateTimeAuthor from '@/components/date-time-author'
import mainArticle from "@/components/main-article"
import mainStory from "@/components/main-story"
import searchNewsH from "@/components/search-news-h"
import sectionHeader from "@/components/section-header"
import storiesBlock from "@/components/stories-block"

Vue.component('appArticlesList', appArticlesList)
Vue.component('appAuthor', appAuthor)
Vue.component('appBreadcrumbs', appBreadcrumbs)
Vue.component('appPagination', appPagination)
Vue.component('dateTimeAuthor', dateTimeAuthor)
Vue.component('mainArticle', mainArticle)
Vue.component('mainStory', mainStory)
Vue.component('searchNewsH', searchNewsH)
Vue.component('sectionHeader', sectionHeader)
Vue.component('storiesBlock', storiesBlock)

// Global registration often isn’t ideal. For example, if you’re using a build system like Webpack, globally 
// registering all components means that even if you stop using a component, it could still be included in your
// final build. This unnecessarily increases the amount of JavaScript your users have to download.
