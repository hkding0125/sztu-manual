<script setup>
import { ref, onMounted } from 'vue'

const contributors = ref([])

onMounted(async () => {
  try {
    const res = await fetch('https://api.github.com/repos/hkding0125/sztu-manual/contributors')
    if (res.ok) {
      const data = await res.json()
      contributors.value = data.filter(u => u.type === 'User')
    }
  } catch (e) {
    // fail silently
  }
})
</script>

<template>
  <div class="home-page">
    <div class="home-content">
      <header class="home-header">
        <h1 class="home-title">未来技术学院生存手册</h1>
        <div class="home-contributors" v-if="contributors.length">
          <span class="contributors-label">非官方 ·</span>
          <a
            v-for="c in contributors"
            :key="c.login"
            :href="c.html_url"
            target="_blank"
            class="contributor-link"
            :title="c.login"
          >
            <img :src="c.avatar_url + '&s=64'" :alt="c.login" class="contributor-avatar" />
          </a>
        </div>
        <p v-else class="home-subtitle">非官方</p>
      </header>

      <section class="home-intro">
        <p>
          深技大太新了。新到很多信息还没来得及变成"传统"，新到你想找个学长问点事情，发现上面根本没几届人。
        </p>
        <p>
          这本手册记的是官网上找不到的东西：怎么选方向、怎么找实验室、毕业往哪走、在坪山怎么生活。写错了的地方欢迎来改。
        </p>
      </section>

      <nav class="home-toc">
        <h2 class="toc-heading">立志篇</h2>

        <a href="/sztu-manual/guide/intro" class="toc-item">
          <span class="toc-chapter">序言</span>
          <span class="toc-desc">四年怎么过，没有人教你</span>
        </a>

        <a href="/sztu-manual/guide/time" class="toc-item">
          <span class="toc-chapter">你的时间值多少钱</span>
          <span class="toc-desc">一万小时，你打算怎么花</span>
        </a>

        <a href="/sztu-manual/guide/thinking" class="toc-item">
          <span class="toc-chapter">思维篇</span>
          <span class="toc-desc">绩点、信息差、方向</span>
        </a>

        <h2 class="toc-heading toc-heading-gap">生存技巧</h2>

        <a href="/sztu-manual/guide/academic" class="toc-item">
          <span class="toc-chapter">学术篇</span>
          <span class="toc-desc">授课语言、PBL、材料方向、X-Talent</span>
        </a>

        <a href="/sztu-manual/guide/courses" class="toc-item">
          <span class="toc-chapter">选课</span>
          <span class="toc-desc">选老师比选课重要</span>
        </a>

        <a href="/sztu-manual/guide/exams" class="toc-item">
          <span class="toc-chapter">考试</span>
          <span class="toc-desc">突击备考和考场策略</span>
        </a>

        <a href="/sztu-manual/guide/labs" class="toc-item">
          <span class="toc-chapter">实验室篇</span>
          <span class="toc-desc">找组、选老师、进组之后</span>
        </a>

        <a href="/sztu-manual/guide/teachers" class="toc-item">
          <span class="toc-chapter">导师一览</span>
          <span class="toc-desc">三个中心 23 位老师，附匿名评价入口</span>
        </a>

        <h2 class="toc-heading toc-heading-gap">出路</h2>

        <a href="/sztu-manual/guide/career" class="toc-item">
          <span class="toc-chapter">深造篇</span>
          <span class="toc-desc">考研、留学、就业、考公</span>
        </a>

        <a href="/sztu-manual/guide/life" class="toc-item">
          <span class="toc-chapter">生活篇</span>
          <span class="toc-desc">交通、食堂、宿舍</span>
        </a>
      </nav>

      <footer class="home-footer">
        <p>
          这是一个<a href="https://github.com/hkding0125/sztu-manual" target="_blank">开源项目</a>。如果你有经验想分享、有信息想更正，欢迎提交 Pull Request。
        </p>
      </footer>
    </div>
  </div>
</template>
