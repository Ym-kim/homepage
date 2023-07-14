const timelineData = [
  {
    date: '2000년',
    title: '시작',
    description: '어떤 일이 시작되었습니다.',
  },
  {
    date: '2005년',
    title: '중간 단계',
    description: '중간에 있었던 단계입니다.',
  },
  // 추가 타임라인 데이터 추가
]

function createTimelineItem(item) {
  const timelineItem = document.createElement('div')
  timelineItem.classList.add('timeline-item')
  timelineItem.innerHTML = `
      <div class="timeline-date">${item.date}</div>
      <div class="timeline-content">
        <h4 class="timeline-title">${item.title}</h4>
        <p class="timeline-description">${item.description}</p>
      </div>
    `
  return timelineItem
}

function loadAboutPage() {
  const contentElement = document.getElementById('content')

  // 소개 페이지의 내용을 로드합니다.
  contentElement.innerHTML = `
      <section id="about" class="py-5">
        <div class="container">
          <h2 class="text-center mb-4">저에 대해</h2>
          <div id="timeline" class="timeline-container"></div>
        </div>
      </section>
    `

  const timelineContainer = document.getElementById('timeline')
  timelineData.forEach((item) => {
    const timelineItem = createTimelineItem(item)
    timelineContainer.appendChild(timelineItem)
  })
}

// 메뉴 항목들에 클릭 이벤트 리스너를 등록
const menuItems = document.querySelectorAll('header nav ul li a')
menuItems.forEach((item) => {
  item.addEventListener('click', function (event) {
    event.preventDefault()
    const targetUrl = this.getAttribute('href')
    if (targetUrl === '#about') {
      loadAboutPage()
    } else {
      loadContent(targetUrl)
    }
  })
})

// 초기 로딩 시 홈 콘텐츠를 로드
loadHomePage()
