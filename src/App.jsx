import { NavLink, Navigate, Route, Routes } from 'react-router-dom'

const navItems = [
  { to: '/', label: '首页' },
  { to: '/schedule', label: '更新时间表' },
  { to: '/detail', label: '番剧详情' },
  { to: '/player', label: '播放页' },
]

const trendingCards = [
  ['Shadow Monarch', 'Action, Fantasy', '4.9', '/images/stitch/img-08.jpg'],
  ['Neon Horizon', 'Sci-Fi, Cyberpunk', '4.8', '/images/stitch/img-24.jpg'],
  ['Starlight Journey', 'Adventure, Slice of Life', '4.8', '/images/stitch/img-25.jpg'],
  ['Zenith Blades', 'Samurai, Drama', '4.6', '/images/stitch/img-13.jpg'],
  ['Arcane Legacy', 'Magic, Supernatural', '5.0', '/images/stitch/img-12.jpg'],
  ['Data Protocol', 'Thriller, Sci-Fi', '4.5', '/images/stitch/img-07.jpg'],
]

const continueWatching = [
  ['第 11 话', '破碎群岛的回响', '78%', '/images/stitch/img-26.jpg'],
  ['第 05 话', 'Stellar Voyage', '42%', '/images/stitch/img-19.jpg'],
  ['第 19 话', '咒术回战 第二季', '91%', '/images/stitch/img-18.jpg'],
]

const scheduleCards = [
  ['咒术回战 第二季', '23:30 更新', '第 24 话', '/images/stitch/img-18.jpg'],
  ['鬼灭之刃 柱训练篇', '22:00 更新', '第 08 话', '/images/stitch/img-02.jpg'],
  ['间谍过家家', '23:00 更新', '第 12 话', '/images/stitch/img-04.jpg'],
  ['葬送的芙莉莲', '00:00 更新', '第 28 话', '/images/stitch/img-17.jpg'],
  ['迷宫饭', '21:30 更新', '第 20 话', '/images/stitch/img-22.jpg'],
  ['我推的孩子', '23:00 更新', '第 11 话', '/images/stitch/img-14.jpg'],
  ['电锯人', '01:00 更新', '第 12 话', '/images/stitch/img-23.jpg'],
  ['一拳超人', '22:00 更新', '第 12 话', '/images/stitch/img-21.jpg'],
  ['怪兽 8 号', '19:30 更新', '第 10 话', '/images/stitch/img-20.jpg'],
  ['星穹航线', '20:00 更新', '第 05 话', '/images/stitch/img-19.jpg'],
]

const recommend = [
  ['Stellar Voyage', '/images/stitch/img-19.jpg'],
  ['Neon Horizon', '/images/stitch/img-24.jpg'],
  ['Arcane Legacy', '/images/stitch/img-12.jpg'],
]

function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-background-dark/85 px-6 py-4 backdrop-blur-md lg:px-20">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-8">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-2 text-primary">
            <span className="material-symbols-outlined text-3xl">movie_filter</span>
            <h1 className="text-xl font-bold tracking-tight">AniStream</h1>
          </div>
          <nav className="hidden items-center gap-2 rounded-xl bg-slate-900/80 p-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-semibold transition ${
                    isActive ? 'bg-primary text-white' : 'text-slate-300 hover:bg-slate-800'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="relative hidden w-full max-w-xs sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-lg text-slate-400">search</span>
            <input
              className="w-full rounded-lg border-0 bg-slate-900 py-2 pl-10 pr-3 text-sm text-slate-200 outline-none ring-1 ring-slate-800 placeholder:text-slate-500 focus:ring-primary"
              placeholder="搜索动漫..."
            />
          </div>
          <button className="rounded-full p-2 hover:bg-slate-900">
            <span className="material-symbols-outlined text-slate-300">notifications</span>
          </button>
          <div className="hidden items-center gap-2 lg:flex">
            <span className="text-sm font-semibold text-slate-300">Alex Chen</span>
            <div className="size-9 overflow-hidden rounded-full border border-primary/30">
              <img src="/images/stitch/img-27.jpg" alt="user" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="size-9 overflow-hidden rounded-full border border-primary/30 lg:hidden">
            <img src="/images/stitch/img-27.jpg" alt="user" className="h-full w-full object-cover" />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-3 flex w-full max-w-[1440px] gap-1 md:hidden">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `rounded-lg px-3 py-2 text-xs font-semibold ${isActive ? 'bg-primary text-white' : 'bg-slate-900 text-slate-300'}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </header>
  )
}

function SiteFooter() {
  return (
    <footer className="mt-14 border-t border-slate-800 p-8">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-between gap-5 md:flex-row">
        <div className="flex items-center gap-2 text-primary">
          <span className="material-symbols-outlined text-2xl">movie_filter</span>
          <span className="font-bold">AniStream</span>
        </div>
        <div className="flex gap-8 text-sm text-slate-400">
          <a href="#" className="hover:text-primary">服务条款</a>
          <a href="#" className="hover:text-primary">隐私政策</a>
          <a href="#" className="hover:text-primary">帮助中心</a>
        </div>
        <p className="text-xs text-slate-500">© 2026 AniStream</p>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <main className="relative">
      <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />

      <section className="px-6 py-6 lg:px-20">
        <div className="relative mx-auto w-full max-w-[1440px] overflow-hidden rounded-3xl">
          <div className="relative aspect-[21/9] min-h-[520px]">
            <img src="/images/stitch/img-26.jpg" alt="hero" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark/95 via-background-dark/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/95 via-transparent to-transparent" />
            <div className="relative z-10 flex h-full max-w-2xl flex-col justify-end gap-5 p-8 lg:p-14">
              <div className="flex gap-2">
                <span className="rounded bg-primary px-3 py-1 text-xs font-bold">新番</span>
                <span className="rounded bg-slate-800/80 px-3 py-1 text-xs font-bold">热血</span>
              </div>
              <h2 className="text-5xl font-black leading-tight lg:text-7xl">
                破碎群岛的 <span className="text-primary">回响</span>
              </h2>
              <p className="text-slate-300">在浮空群岛与深渊迷雾之间，年轻领航员将揭开失落文明最后的坐标。</p>
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="flex items-center gap-2 rounded-xl bg-primary px-7 py-4 font-bold hover:bg-primary/90">
                  <span className="material-symbols-outlined filled">play_arrow</span>
                  立即观看
                </button>
                <button className="flex items-center gap-2 rounded-xl bg-white/10 px-7 py-4 font-bold backdrop-blur hover:bg-white/20">
                  <span className="material-symbols-outlined">add</span>
                  加入追番
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-8 lg:px-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-3xl text-primary">trending_up</span>
              <h3 className="text-2xl font-bold">热门番剧</h3>
            </div>
            <a href="#" className="text-sm font-semibold text-primary">查看全部</a>
          </div>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
            {trendingCards.map(([title, genre, score, image]) => (
              <article key={title} className="group cursor-pointer">
                <div className="relative mb-3 aspect-[3/4] overflow-hidden rounded-2xl">
                  <img src={image} alt={title} className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                  <div className="absolute right-2 top-2 flex items-center gap-1 rounded bg-black/60 px-2 py-1 text-xs font-bold">
                    <span className="material-symbols-outlined filled text-xs text-yellow-400">star</span>
                    {score}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 transition group-hover:opacity-100">
                    <span className="material-symbols-outlined filled rounded-full bg-white p-2 text-primary">play_arrow</span>
                  </div>
                </div>
                <h4 className="font-bold group-hover:text-primary">{title}</h4>
                <p className="text-sm text-slate-400">{genre}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-10 lg:px-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <h3 className="mb-6 text-2xl font-bold">继续观看</h3>
          <div className="grid gap-4 md:grid-cols-3">
            {continueWatching.map(([ep, name, progress, image]) => (
              <article key={name} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/70">
                <div className="relative aspect-video">
                  <img src={image} alt={name} className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-sm font-bold">{name}</div>
                </div>
                <div className="p-4">
                  <div className="mb-2 flex justify-between text-xs text-slate-300">
                    <span>{ep}</span>
                    <span>{progress}</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-slate-700">
                    <div className="h-1.5 rounded-full bg-primary" style={{ width: progress }} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900/40 px-6 py-10 lg:px-20">
        <div className="mx-auto w-full max-w-[1440px]">
          <div className="mb-7 flex items-center gap-2">
            <span className="material-symbols-outlined text-3xl text-primary">category</span>
            <h3 className="text-2xl font-bold">按分类浏览</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {[
              ['local_fire_department', '热血'],
              ['auto_fix_high', '奇幻'],
              ['sentiment_very_satisfied', '搞笑'],
              ['favorite', '恋爱'],
              ['rocket_launch', '科幻'],
              ['sports_martial_arts', '动作'],
            ].map(([icon, label]) => (
              <button key={label} className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 text-center transition hover:border-primary">
                <span className="material-symbols-outlined text-4xl text-primary transition group-hover:scale-110">{icon}</span>
                <p className="mt-3 font-bold">{label}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function SchedulePage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 py-10 lg:px-20">
      <h2 className="text-3xl font-black">新番更新时间表</h2>
      <p className="mt-2 text-slate-400">每日更新，发现你最喜欢的二次元世界</p>

      <div className="sticky top-[81px] z-40 mt-6 bg-background-dark pb-5">
        <div className="flex gap-2 overflow-x-auto rounded-xl bg-slate-900/80 p-2">
          {['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map((day, index) => (
            <button
              key={day}
              className={`min-w-[100px] rounded-lg px-4 py-3 text-sm font-bold ${
                index === 0 ? 'bg-primary text-white shadow-lg' : 'text-slate-400 hover:bg-slate-800'
              }`}
            >
              {day}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {scheduleCards.map(([name, time, episode, image], index) => (
          <article key={`${name}-${index}`} className="group flex flex-col gap-3">
            <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-800">
              <img src={image} alt={name} className="h-full w-full object-cover transition duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/80 via-transparent to-transparent p-4 opacity-0 transition group-hover:opacity-100">
                <button className="w-full rounded-lg bg-primary py-2 text-sm font-bold">立即播放</button>
              </div>
              {index % 3 === 0 ? <div className="absolute right-2 top-2 rounded bg-black/60 px-2 py-1 text-[10px] font-bold uppercase">独家</div> : null}
            </div>
            <div>
              <p className="line-clamp-1 text-lg font-bold group-hover:text-primary">{name}</p>
              <div className="mt-1 flex items-center gap-2">
                <span className="rounded bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{time}</span>
                <span className="text-xs text-slate-400">{episode}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}

function DetailPage() {
  return (
    <main className="mx-auto w-full max-w-[1440px] px-6 py-8 lg:px-20">
      <div className="relative mb-8 h-[400px] overflow-hidden rounded-2xl md:h-[500px]">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/stitch/img-01.jpg')" }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-0 flex w-full flex-col gap-7 p-6 md:flex-row md:items-end md:p-10">
          <div className="hidden h-72 w-48 overflow-hidden rounded-lg border-4 border-slate-800/50 shadow-2xl md:block">
            <img src="/images/stitch/img-19.jpg" alt="poster" className="h-full w-full object-cover" />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex gap-2 text-xs">
              <span className="rounded-full bg-primary px-3 py-1 font-bold">科幻</span>
              <span className="rounded-full bg-slate-700 px-3 py-1 font-bold">动作</span>
              <span className="rounded-full bg-slate-700 px-3 py-1 font-bold">悬疑</span>
            </div>
            <h2 className="text-4xl font-black leading-tight md:text-5xl">Stellar Voyage: Echoes of Eternity</h2>
            <div className="flex items-center gap-4 text-sm text-slate-300">
              <span>4.8 分 (12.4k)</span>
              <span>TV 动画</span>
              <span>连载中</span>
            </div>
          </div>
          <button className="rounded-lg bg-primary px-7 py-3 font-bold">立即播放</button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <section className="space-y-8 lg:col-span-8">
          <div>
            <h3 className="mb-4 text-xl font-bold">剧情介绍</h3>
            <p className="text-lg leading-relaxed text-slate-300">
              公元 2384 年，年轻驾驶员 Kaito 在废弃矿业殖民地中唤醒了一艘远古智能战舰。为了追查预示文明终结的回响信号，他与战舰穿越边境星域，在联邦追捕和古代遗迹之间寻找人类存续的最后答案。
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xl font-bold">播放列表</h3>
            <div className="mb-4 flex gap-2">
              <button className="rounded-lg bg-primary px-4 py-2 text-sm font-bold">线路一</button>
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-slate-300">线路二</button>
              <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-bold text-slate-300">备用线路</button>
            </div>
            <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
              {Array.from({ length: 12 }).map((_, i) => (
                <button
                  key={i}
                  className={`rounded-lg py-3 text-sm font-bold ${
                    i === 0
                      ? 'border border-primary/30 bg-primary/10 text-primary'
                      : 'border border-transparent bg-slate-900 text-slate-300 hover:border-primary/40 hover:text-primary'
                  }`}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>
        </section>

        <aside className="space-y-6 lg:col-span-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
            <h3 className="mb-4 text-lg font-bold">评论区</h3>
            <textarea className="min-h-[100px] w-full rounded-lg border-0 bg-slate-800 p-4 text-sm outline-none ring-1 ring-slate-700 focus:ring-primary" placeholder="写下你的评论..." />
            <button className="mt-2 w-full rounded-lg bg-primary py-2 text-sm font-bold">发表评论</button>
            <div className="mt-4 space-y-4 text-sm text-slate-300">
              <p>漫评达人: 这部作品的星际设定非常宏大，第一集就被震撼到。</p>
              <p>动画爱好者: 期待后续剧情展开，希望作画保持这个水准。</p>
            </div>
          </div>
          <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300">
            <h3 className="mb-3 text-lg font-bold">番剧信息</h3>
            <ul className="space-y-2">
              <li>评分: 4.8 / 5 (12.4k)</li>
              <li>状态: 连载中</li>
              <li>总集数: 12</li>
              <li>地区: 日本</li>
            </ul>
          </div>
        </aside>
      </div>
    </main>
  )
}

function PlayerPage() {
  return (
    <main className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 p-4 lg:flex-row lg:p-8">
      <div className="flex flex-1 flex-col gap-6">
        <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-black shadow-glow">
          <img src="/images/stitch/img-05.jpg" alt="player" className="h-full w-full object-cover opacity-80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="rounded-full bg-primary p-6 shadow-lg transition hover:scale-110">
              <span className="material-symbols-outlined filled text-4xl">play_arrow</span>
            </button>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6">
            <div className="relative h-1.5 rounded-full bg-white/20">
              <div className="h-full w-1/3 rounded-full bg-primary" />
              <div className="absolute right-0 top-1/2 size-3 -translate-y-1/2 rounded-full bg-white" />
            </div>
            <div className="mt-3 flex items-center justify-between text-sm">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined">play_arrow</span>
                <span className="material-symbols-outlined">skip_next</span>
                <span className="material-symbols-outlined">volume_up</span>
                <span>12:45 / 24:00</span>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined">settings</span>
                <span className="material-symbols-outlined">branding_watermark</span>
                <span className="material-symbols-outlined">fullscreen</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">第 12 集：永恒的终焉之战</h2>
            <p className="mt-1 text-slate-400">第 1 季 · 动作 / 超自然 / 剧情</p>
          </div>
          <div className="flex gap-3">
            <button className="rounded-lg bg-slate-900 px-4 py-2 font-medium">加入追番</button>
            <button className="rounded-lg bg-primary px-4 py-2 font-medium">分享</button>
          </div>
        </div>
      </div>

      <aside className="w-full space-y-6 lg:w-[400px]">
        <div className="overflow-hidden rounded-xl border border-slate-800 bg-slate-900/70">
          <div className="flex items-center justify-between border-b border-slate-800 p-4">
            <h3 className="font-bold">播放列表</h3>
            <span className="text-xs text-slate-400">自动播放 开启</span>
          </div>
          {[12, 13, 14].map((ep, idx) => (
            <div key={ep} className={`flex gap-3 p-3 ${idx === 0 ? 'border-l-4 border-primary bg-primary/10' : 'border-b border-slate-800 hover:bg-slate-800/50'}`}>
              <div className="relative w-32 overflow-hidden rounded-lg">
                <img src="/images/stitch/img-10.jpg" alt={`ep-${ep}`} className="h-full w-full object-cover" />
              </div>
              <div className="self-center">
                <p className="text-[10px] font-bold uppercase text-primary">{idx === 0 ? '正在播放' : '即将播放'}</p>
                <p className="text-sm font-bold">E{ep} - Episode Title</p>
                <p className="text-xs text-slate-400">24 mins</p>
              </div>
            </div>
          ))}
          <button className="w-full border-t border-slate-800 py-3 text-sm font-bold text-slate-400 hover:text-primary">查看全部剧集</button>
        </div>

        <div className="rounded-xl border border-primary/20 bg-gradient-to-br from-primary/20 to-transparent p-6">
          <h4 className="mb-2 text-lg font-bold">升级高级版</h4>
          <p className="mb-4 text-sm text-slate-300">享受无广告观看、4K 分辨率，并优先观看最新剧集。</p>
          <button className="w-full rounded-lg bg-primary py-2 font-bold">免费试用 7 天</button>
        </div>

        <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-5">
          <h4 className="mb-3 text-lg font-bold">相关推荐</h4>
          <div className="space-y-3">
            {recommend.map(([title, image]) => (
              <div key={title} className="flex gap-3">
                <img src={image} alt={title} className="h-14 w-24 rounded object-cover" />
                <div>
                  <p className="text-sm font-bold">{title}</p>
                  <p className="text-xs text-slate-400">点击查看详情</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </main>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-slate-100">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/detail" element={<DetailPage />} />
        <Route path="/player" element={<PlayerPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <SiteFooter />
    </div>
  )
}

export default App
