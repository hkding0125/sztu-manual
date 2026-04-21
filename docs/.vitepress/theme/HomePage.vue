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
          深技大太新了。新到很多信息还没来得及变成“传统”，新到你想找个学长问点事情，发现上面根本没几届人。
        </p>
        <p>
          这里写的不是官网上那套话，而是后来才会慢慢弄明白的东西：怎么判断方向、怎么找实验室、毕业往哪走、在坪山怎么把日子过明白。
        </p>
      </section>

      <nav class="home-toc">
        <h2 class="toc-heading">开局判断</h2>

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

        <h2 class="toc-heading toc-heading-gap">校内生存</h2>

        <a href="/sztu-manual/guide/academic" class="toc-item">
          <span class="toc-chapter">学术篇</span>
          <span class="toc-desc">授课语言、PBL、材料方向、X-Talent</span>
        </a>

        <a href="/sztu-manual/guide/courses" class="toc-item">
          <span class="toc-chapter">选课</span>
          <span class="toc-desc">先定目标，再决定怎么排雷</span>
        </a>

        <a href="/sztu-manual/guide/exams" class="toc-item">
          <span class="toc-chapter">考试</span>
          <span class="toc-desc">救火顺序、复习策略、止损方法</span>
        </a>

        <a href="/sztu-manual/guide/labs" class="toc-item">
          <span class="toc-chapter">实验室篇</span>
          <span class="toc-desc">找组、选老师、进组之后</span>
        </a>

        <a href="/sztu-manual/guide/scholarship" class="toc-item">
          <span class="toc-chapter">奖学金</span>
          <span class="toc-desc">单项奖、校长奖、校长特别奖</span>
        </a>

        <a href="/sztu-manual/guide/life" class="toc-item">
          <span class="toc-chapter">生活篇</span>
          <span class="toc-desc">交通、食堂、宿舍</span>
        </a>

        <h2 class="toc-heading toc-heading-gap">毕业去向</h2>

        <a href="/sztu-manual/guide/career" class="toc-item">
          <span class="toc-chapter">出路篇</span>
          <span class="toc-desc">留学、读研、就业、考公怎么选</span>
        </a>

        <h2 class="toc-heading toc-heading-gap">关于</h2>

        <a href="/sztu-manual/guide/contributing" class="toc-item">
          <span class="toc-chapter">参与贡献</span>
          <span class="toc-desc">补充经验、纠错、继续把它写下去</span>
        </a>
      </nav>

      <footer class="home-footer">
        <p>
          这是一个<a href="https://github.com/hkding0125/sztu-manual" target="_blank">开源项目</a>。有经验想补、有信息想更正，就继续往里写。
        </p>
      </footer>
    </div>
  </div>
</template>
