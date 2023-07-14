const videoData = [
  {
    title: '동영상 제목 1',
    description: '동영상 설명 1',
    videoId: 'klg99HyL6ko',
  },
  {
    title: '동영상 제목 2',
    description: '동영상 설명 2',
    videoId: 'JZtEDk15Qcg',
  },
  // 추가 동영상 데이터 추가
]

function createVideoCard(video) {
  const card = document.createElement('div')
  card.classList.add('col-md-6', 'col-lg-4')
  card.innerHTML = `
    <div class="card mb-4">
      <iframe class="card-img-top" src="https://www.youtube.com/embed/${video.videoId}" allowfullscreen></iframe>
      <div class="card-body">
        <h5 class="card-title">${video.title}</h5>
        <p class="card-text">${video.description}</p>
      </div>
    </div>
  `
  return card
}

function loadHomePage() {
  const contentElement = document.getElementById('content')

  // 홈 콘텐츠 영역에 동영상 카드들을 추가하는 로직을 작성합니다.
  contentElement.innerHTML = `
    <section id="home" class="py-5">
      <div class="container">
        <h1 class="text-center">MonTube</h1>
        <div class="embed-responsive embed-responsive-16by9 mb-4">
          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/tsVIQ_-CKFQ" allowfullscreen></iframe>
        </div>
        <div class="row" id="videoCardsContainer">
          <!-- 동영상 카드들이 여기에 동적으로 추가될 것입니다 -->
        </div>
      </div>
    </section>
  `

  const videoCardsContainer = document.getElementById('videoCardsContainer')
  videoData.forEach((video) => {
    const videoCard = createVideoCard(video)
    videoCardsContainer.appendChild(videoCard)
  })
}

// 마지막 전체 들어갈 버튼이동

// 마지막 전체 버튼이동 여기까지

// 홈 버튼 클릭 시 홈 페이지로 이동
const homeButton = document.querySelector('header nav ul li a[href="#home"]')
homeButton.addEventListener('click', function (event) {
  event.preventDefault()
  loadHomePage()
})

// 소개 버튼 클릭 시 소개 페이지로 이동
const aboutButton = document.querySelector('header nav ul li a[href="#about"]')
aboutButton.addEventListener('click', function (event) {
  event.preventDefault()
  loadAboutPage()
})

function loadAboutPage() {
  const contentElement = document.getElementById('content')
  fetch('about.html')
    .then((response) => response.text())
    .then((data) => {
      contentElement.innerHTML = data
    })
    .catch((error) => {
      console.error(error)
    })
}

// 포트폴리오 버튼 클릭 시 포트폴리오 페이지로 이동
const portfolioButton = document.querySelector(
  'header nav ul li a[href="#portfolio"]'
)
portfolioButton.addEventListener('click', function (event) {
  event.preventDefault()
  loadPortfolioPage()
})

function loadPortfolioPage() {
  const contentElement = document.getElementById('content')
  fetch('portfolio.html')
    .then((response) => response.text())
    .then((data) => {
      contentElement.innerHTML = data
    })
    .catch((error) => {
      console.error(error)
    })
}

// 갤러리 버튼 클릭 시 갤러리 페이지로 이동
const galleryButton = document.querySelector(
  'header nav ul li a[href="#gallery"]'
)
galleryButton.addEventListener('click', function (event) {
  event.preventDefault()
  loadGalleryPage()
})

function loadGalleryPage() {
  const contentElement = document.getElementById('content')
  fetch('gallery.html')
    .then((response) => response.text())
    .then((data) => {
      contentElement.innerHTML = data
    })
    .catch((error) => {
      console.error(error)
    })
}

// SNS 버튼 클릭 시 SNS 페이지로 이동
const snsButton = document.querySelector('header nav ul li a[href="#sns"]')
snsButton.addEventListener('click', function (event) {
  event.preventDefault()
  loadSnsPage()
})

function loadSnsPage() {
  const contentElement = document.getElementById('content')
  fetch('sns.html')
    .then((response) => response.text())
    .then((data) => {
      contentElement.innerHTML = data
    })
    .catch((error) => {
      console.error(error)
    })
}

// 메뉴 항목들에 클릭 이벤트 리스너를 등록
const menuItems = document.querySelectorAll('header nav ul li a')
menuItems.forEach((item) => {
  item.addEventListener('click', function (event) {
    event.preventDefault()
    const targetUrl = this.getAttribute('href')
    if (targetUrl === 'about.html') {
      // 변경된 부분: targetUrl을 'about.html'로 확인
      loadAboutPage()
    } else {
      loadContent(targetUrl)
    }
  })
})

// 초기 로딩 시 홈 콘텐츠를 로드
loadHomePage()
