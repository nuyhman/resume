import { Mail, Github, Globe, Terminal, FolderSearch } from 'lucide-react';

export default function Resume() {
  return (
    <div className='max-w-4xl mx-auto p-8 font-sans'>
      <header className='mb-8 relative'>
        <h1 className='text-4xl font-extrabold mb-2'>
          김남현 <small className='font-bold'>| FE Developer</small>
        </h1>
        <div className='inline-flex items-center gap-4 text-sm text-gray'>
          <a
            href='http://github.com/nuyhman'
            className='flex items-center hover:text-blue'
          >
            <Github size='16' className='mr-1' />
            GitHub
          </a>
          <a
            href='https://nuyhman.github.io/'
            className='flex items-center hover:text-blue'
          >
            <Globe className='w-4 h-4 mr-1' />
            Blog
          </a>
          <a
            href='mailto:nhpunch@email.com'
            className='flex items-center hover:text-blue'
          >
            <Mail className='w-4 h-4 mr-1' />
            nhpunch@email.com
          </a>
        </div>
      </header>

      <section className='mb-8 text-base'>
        <p className='mb-4'>
          사회에 기여할 수 있는 제품을 개발하고 싶은 2년차 개발자 입니다.
        </p>
        <p className='mb-4'>
          열린 마음으로 고객 피드백을 빠르게 적용하고 이를 통해 프로젝트의
          완성도가 높아진다고 믿습니다.
        </p>
        <p className='mb-4'>
          적극적으로 문제를 정의하여{' '}
          <a
            href='https://www.notion.so/f32c23972c46470e99959f401adb1b43?pvs=4'
            target='_blank'
            className='text-blue opacity-80 hover:opacity-100'
          >
            업무 파악과 개선을 동시에 이루어낸 경험
          </a>
          이 있습니다.
        </p>
        <p>
          UX뿐만 아니라 DX도 중요하게 생각해{' '}
          <a
            href='https://nuyhman.github.io/autumatically-includes-commit-messages/'
            target='_blank'
            className='text-blue opacity-80 hover:opacity-100'
          >
            반복 작업을 해소하여 팀의 리소스를 개선한 경험
          </a>
          이 있습니다.
        </p>
      </section>

      {/* 포트폴리오 Portfolio */}
      <section className='flex gap-2 border-solid border-lightGray border p-6 my-10 rounded'>
        <Terminal className='w-5 h-5 mr-1' />
        <div className='flex-1'>
          <p className='font-semibold'>
            제가 경험한 프로젝트를 더 자세히 보실 수 있습니다.
          </p>
          <hr className='my-2 border-t border-lightGray' />
          <a
            href='https://nhpunch.notion.site/Portfolio-2af3eab06648413c84d3063c26978e4d?pvs=4'
            target='_blank'
            className='flex gap-1 font-medium'
          >
            <FolderSearch className='w-5 h-5 mr-1' />
            Portfolio
          </a>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl font-bold my-8'>
          Work Experience<span className='text-blue'>.</span>
        </h2>
        <div className='mb-10'>
          <div className='flex justify-between items-baseline mb-8'>
            <h3 className='text-xl font-semibold shared message'>YOIL</h3>
            <span className='text-sm text-gray'>
              (2023.08 ~ 2024.02) | 재정 악화로 인한 권고사직
            </span>
          </div>
          <div className='flex mb-4 '>
            <div className='w-1/2 pr-2'>
              <div className='font-medium'>소개</div>
              <div className=' mt-1'>키즈 콘텐츠 기반 메타 플랫폼</div>
            </div>
            <div className='w-1/2 pl-2'>
              <div className='font-medium'>서비스</div>
              <a
                href='https://kurate.site'
                target='_blank'
                className='mt-1 inline-flex items-center'
              >
                <img
                  src='/resume/kurate-logo.webp'
                  alt='kurate logo'
                  className='w-6 rounded-md'
                />
                <span className='font-medium'>큐레이트(KURATE)</span>
              </a>
            </div>
          </div>

          <div className='mt-4 mb-6 divide-y divide-lightGray border-y border-solid border-lightGray'>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>projects</div>
              <div className='w-3/4 '>
                숏폼 콘텐츠 개발, CI/CD 배포 속도 개선, 웹 성능 최적화, 웹뷰
                대응 리팩토링
              </div>
            </div>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>tech</div>
              <div className='w-3/4 '>
                Next.js, TypeScript, GraphQL, Apollo, Tailwind, Docker
              </div>
            </div>
          </div>
          <h4>웹 성능 최적화</h4>
          <p>
            기존{' '}
            <a
              href='https://yoil.co.kr/'
              target='_blank'
              className='text-gray hover:text-blue'
            >
              @YOIL
            </a>{' '}
            서비스에서{' '}
            <a
              href='https://www.kurate.site'
              target='_blank'
              className='text-gray hover:text-blue'
            >
              @Kurate
            </a>{' '}
            로 빠르게 피봇되면서 개선되지 않은 부분을 주도적으로 최적화
            했습니다.
          </p>
          <ul className='mb-6'>
            <li>
              LightHouse를 기준으로 <strong>60점대에서 90점대로 향상</strong>
            </li>
            <li>
              이미지 최적화
              <ul className=''>
                <li>
                  Next/Image 컴포넌트를 이용하여 최대{' '}
                  <strong>90MB까지 요청하는 페이지의 경우 9MB 로 개선</strong>
                </li>
                <li>Skeleton UI를 통한 레이아웃 시프트(CLS) 개선</li>
              </ul>
            </li>
            <li>
              Next.js 앱 번들 사이즈 최적화
              <ul className=''>
                <li>
                  @next/bundle-analyzer로 분석 후, 사이즈가 큰 라이브러리
                  Dynamic import 처리
                </li>
                <li>
                  페이지 첫 진입 시 불필요한 컴포넌트 Code Sptitting을 적용,{' '}
                  <strong>스크립트 로드 시간 0.9s → 0.6s (30% 개선)</strong>
                </li>
              </ul>
            </li>
            <li>
              SEO 최적화
              <ul className=''>
                <li>페이지 별 동적 메타 태그 설정</li>
                <li>
                  누락된 마크다운 속성 보강, 웹 접근성을 고려한 aria-label 속성
                  적용
                </li>
              </ul>
            </li>
          </ul>

          <h4>숏폼 콘텐츠 개발</h4>
          <p>
            기존 앰배서더 콘텐츠를 숏폼 형식으로 개편하였습니다.{' '}
            <a
              href='https://store.kurate.site/content/story/story-doo9u3xq-20240109/new-kids'
              target='_blank'
              className='text-gray hover:text-blue'
            >
              @Short-form
            </a>{' '}
          </p>
          <ul className='mb-6'>
            <li>
              모바일 퍼스트 플랫폼에 맞는 숏폼 개발을 통해 서비스 체류시간 증가
            </li>
            <li>
              Apollo Server를 통해{' '}
              <strong>BFF 패턴을 적용하여 네트워크 요청을 통합</strong>
              <ul className=''>
                <li>
                  프론트 단에서 화면에 필요한 데이터만 받아 화면에 그릴 수
                  있도록 함
                </li>
              </ul>
            </li>
            <li>
              무한 스크롤이 적용된 리스트에{' '}
              <strong>Route as Modal 패턴을 적용하여 UX 개선</strong>
              <ul className='ml-4'>
                <li>
                  Modal로 상세 페이지를 보여주어 뒤로가기 시 스크롤, 데이터 유지
                </li>
                <li>
                  링크 공유와 SEO를 위한 상세 페이지는{' '}
                  <strong>서버사이드 렌더링</strong>으로 구성
                </li>
              </ul>
            </li>
          </ul>

          <h4>CI/CD 배포 속도 개선</h4>
          <p>
            멀티레포 프로젝트를 배포함에 있어서 개발팀의 유휴시간을 최소화
            했습니다.
          </p>
          <ul className='mb-6'>
            <li>
              Next.js standalone, Docker 멀티 스테이지 빌드 적용
              <ul className=''>
                <li>
                  Docker image 사이즈를 최소화하여 ECR 컨테이너 저장공간 확보
                </li>
                <li>ECR에 push & pull 하는 시간이 감소되어 배포 시간 단축</li>
              </ul>
            </li>
            <li>
              Image <strong>3.5GB → 285MB (약 92% 개선)</strong>
            </li>
            <li>
              Deploy <strong>8분 → 5분(3분 단축)</strong>
            </li>
          </ul>

          <h4>웹뷰 대응 리팩토링</h4>
          <p>
            앱(웹뷰) 환경에 대한 분기 처리를 공통으로 관리하기 위한 작업을
            진행하였습니다.
          </p>
          <ul className='mb-4 space-y-2'>
            <li>
              앱 감지를 위한 User-Agent를 파싱하는 util 함수를 통해 다양한
              환경에 대응
            </li>
            <li>
              앱 네비게이션 인터페이스가 필요한 경우, useAppRouter 커스텀훅을
              통해 페이지 라우팅 처리
            </li>
          </ul>
        </div>

        {/* 조아라 */}
        <div className='mb-10'>
          <div className='flex justify-between items-baseline mb-8'>
            <h3 className='text-xl font-semibold shared message'>조아라</h3>
            <span className='text-sm text-gray'>
              (2023.02 ~ 2023.07) | 프리랜서{' '}
            </span>
          </div>
          <div className='flex mb-4 '>
            <div className='w-1/2 pr-2'>
              <div className='font-medium'>소개</div>
              <div className='mt-1'>
                120만명의 회원을 보유한 1세대 웹소설 플랫폼
              </div>
            </div>
            <div className='w-1/2 pl-2'>
              <div className='font-medium'>서비스</div>
              <div className='mt-1'>
                <a
                  href='https://joara.com'
                  target='_blank'
                  className='inline-flex gap-1 items-center justify-center'
                >
                  <img
                    src='/resume/joara-favicon.ico'
                    alt='joara logo'
                    className='w-5 h-5 rounded-md'
                  />
                  <span className='font-medium'>
                    조아라 : 스토리 본능을 깨우다
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='mt-4 mb-6 divide-y divide-lightGray border-y border-solid border-lightGray'>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>projects</div>
              <div className='w-3/4 '>
                Auth 2.0 개편, Tablet UI 개선, 레거시 코드 개선
              </div>
            </div>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>tech</div>
              <div className='w-3/4 '>
                Next.js, TypeScript, react-query, react-hook-form, Tailwind{' '}
              </div>
            </div>
          </div>

          <h4>Auth 2.0 개편</h4>
          <p>
            Auth 도메인 2.0 버전업 프로젝트에 참여하여 개편을 진행하였습니다.
          </p>
          <ul className='mb-4 space-y-2'>
            <li>
              Bitbucket Pipelines을 이용한 <strong>CI/CD 구축</strong>
            </li>
            <li>
              디자인 일관성과 생선성을 높이기 위한 공통적으로 사용할 UI Kit 개발
            </li>
            <li>
              react-query에서 요청 쿼리에{' '}
              <strong>글로벌 에러 핸들러 적용</strong>
            </li>
            <li>
              API 응답 에러 로깅을 위한 Sentry 적용 및 Discord Webhook 연동
            </li>
          </ul>

          <h4>Tablet UI 개선</h4>
          <p>일부 태블릿 기기에서 PC 화면으로 보이는 이슈를 개선하였습니다.</p>
          <ul className='mb-4 space-y-2'>
            <li>
              기존 반응형 웹을 제어하던 미디어쿼리에서 User-Agent를 확인하는
              커스텀훅으로 제어
            </li>
            <li>User-Agent를 기반으로 모바일, PC 환경에 맞는 UI를 렌더링</li>
          </ul>

          <h4>레거시 코드 개선</h4>
          <p>
            jQuery로 되어있던 외부 페이지를 react 프로젝트로 관리할 수 있게
            리팩토링하였습니다.
          </p>
          <ul className='mb-4 space-y-2'>
            <li>
              react-helmet으로 메타태그 설정을 통한 <strong>SEO 개선</strong>
            </li>
            <li>컴포넌트를 통해 기존 코드 1/3 이하로 개선</li>
          </ul>
        </div>

        <div className='mb-10'>
          <div className='flex justify-between items-baseline mb-8'>
            <h3 className='text-xl font-semibold shared message'>싸요싸</h3>
            <span className='text-sm text-gray'>
              (2022.08 ~ 2022.12) | 프리랜서
            </span>
          </div>
          <div className='flex mb-4 '>
            <div className='w-1/2 pr-2'>
              <div className='font-medium'>소개</div>
              <div className='mt-1'>
                온누리상품권을 활용한 소상공인 친화적인 하이브리드 앱{' '}
              </div>
            </div>

            <div className='w-1/2 pl-2'>
              <div className='font-medium'>서비스</div>
              <div className='mt-1'>
                <span className='text-gray '>deprecated</span>
              </div>
            </div>
          </div>

          <div className='mt-4 mb-6 divide-y divide-lightGray border-y border-solid border-lightGray'>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>projects</div>
              <div className='w-3/4 '>MVP 모델 개발, R&D 연구 서포트 </div>
            </div>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>tech</div>
              <div className='w-3/4 '>
                React, TypeScript, react-query, Zustand, Tailwind{' '}
              </div>
            </div>
          </div>

          <h4>MVP 모델 개발</h4>
          <p>
            프로젝트 초기 단계에 참여하여 기획 및 최소기능구현 개발에
            참여하였습니다.
          </p>
          <ul className='mb-4 space-y-2'>
            <li>서버와 통신하여 상태에 따른 화면 렌더링</li>
            <li>
              다량의 데이터를 불러오는 페이지에 무한스크롤을 적용하여 성능 개선
            </li>
            <li>
              모바일 환경에서 이미지 업로드 시 90° 회전되는 현상을 EXIF 회전값
              변경 util 제공하여 해결
            </li>
          </ul>

          <h4>R&D 사업 서포트</h4>
          <p>MVP 개발 이후 R&D 사업을 서포트한 경험이 있습니다.</p>
          <ul className='mb-4 space-y-2'>
            <li>네트워크 I/O 부하 테스트를 위한 테스트 페이지 구성</li>
          </ul>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-3xl font-bold my-8'>
          Side Projects<span className='text-blue'>.</span>
        </h2>
        <div className='mb-10'>
          <div className='flex justify-between items-baseline mb-8'>
            <h3 className='text-xl font-semibold shared message'>Spoo6</h3>
            <span className='text-sm text-gray'>(2024.04 ~ current) </span>
          </div>
          <div className='flex mb-4 '>
            <div className='w-1/2 pr-2'>
              <div className='font-medium'>소개</div>
              <div className='mt-1'>
                견적 문의 없이 상품 링크로 바로 구매 가능한 역직구 플랫폼
              </div>
            </div>
            <div className='w-1/2 pl-2'>
              <div className='font-medium'>서비스</div>
              <div className='mt-1'>
                <a
                  href='https://spoo6.com/'
                  target='_blank'
                  className='inline-flex gap-1 items-center justify-center'
                >
                  <img
                    src='/resume/spoo6-favicon.ico'
                    alt='spoo6 logo'
                    className='w-5 h-5 rounded-md mb-1'
                  />
                  <span className='font-medium'>
                    Spoo6 | Easily buy Korean goods
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className='mt-4 mb-6 divide-y divide-lightGray border-y border-solid border-lightGray'>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>projects</div>
              <div className='w-3/4 '>Link-based Product Request</div>
            </div>
            <div className='flex py-4'>
              <div className='w-1/4 font-bold'>tech</div>
              <div className='w-3/4 '>
                Remix.js, GraphQL, TypeScript, Tailwind, Shopify Hydrogen{' '}
              </div>
            </div>
          </div>

          <h4>Link-based Product Request</h4>
          <p>
            사용자가 상품 링크만으로 간편하게 상품을 요청할 수 있는 링크 기반
            상품 요청 기능 개발하였습니다.
          </p>
          <ul className='mb-4 space-y-2'>
            <li>
              (견적 요청 → 구매 가능 여부 확인 → 고객 피드백 → 구매 의사결정)
              과정을 생략하여 사용자, 운영진 편의성 향상
            </li>
            <li>
              페이지 전환 시{' '}
              <strong>View Transitions API를 적용하여 지연 시간 개선</strong>
            </li>
            <li>
              전역으로 활용되는 장바구니 기능에{' '}
              <strong>Optimistic UI 패턴을 적용</strong>하여 체감 성능 향상
            </li>
            <li>
              프로젝트 초기 세팅 및 MVP 구현에 필요한 CRUD 기능 개발 및 페이지
              작업
            </li>
          </ul>
        </div>
      </section>

      <section className='mb-12'>
        <h2 className='text-2xl font-bold mb-2'>Open Source</h2>
        <hr className='my-2 border-t border-lightGray' />
        <div className='mb-4 space-y-2'>
          <div className='flex items-center gap-2'>
            <h3 className='text-lg font-semibold'>React Spotify Player</h3>
            <a
              href='https://www.npmjs.com/package/@nuyhman/react-spotify-player'
              className='flex gap-1 items-center text-gray text-sm hover:text-blue'
            >
              <img
                src='/resume/npm.png'
                alt='npm logo'
                className='w-4 h-4 rounded'
              />
              <p>@nuyhman/react-spotify-player</p>
            </a>
          </div>
          <p>
            <span className='text-gray'>(2024.09)</span> Spotify 임베디드
            플레이어를 확장한 라이브러리
          </p>
        </div>
        <div className='mb-4 space-y-2'>
          <div className='flex items-center gap-2'>
            <h3 className='text-lg font-semibold'>Musvi Youtube</h3>
            <a
              href='https://chromewebstore.google.com/detail/musvi-youtube/efdhldepogfgcdfmangmmdaiakekbhlo?hl=ko'
              target='_blank'
              className='flex gap-1 items-center text-gray text-sm hover:text-blue'
            >
              <img
                src='/resume/chrome-extension.svg'
                alt='chrome extension logo'
                className='w-4 h-4 mb-1'
              />
              <p>Chrome Web Store</p>
            </a>
          </div>
          <p>
            <span className='text-gray'>(2024.02)</span> YouTube Music에서
            프리미엄 구독 페이지를 우회하는 확장 프로그램
          </p>
        </div>
        <div className='mb-4 space-y-2'>
          <div className='flex items-center gap-2'>
            <h3 className='text-lg font-semibold'>Watchable YouTube Shorts</h3>
            <a
              href='https://chromewebstore.google.com/detail/watchable-youtube-shorts/gfijlbpijabbidnapnfnimcmipbljhid?hl=ko'
              target='_blank'
              className='flex gap-1 items-center text-gray text-sm hover:text-blue'
            >
              <img
                src='/resume/chrome-extension.svg'
                alt='chrome extension logo'
                className='w-4 h-4 mb-1'
              />
              <p>Chrome Web Store</p>
            </a>
          </div>
          <p>
            <span className='text-gray'>(2024.02)</span> YouTube Shorts의
            불필요한 요소를 제어하여 UX를 개선한 확장 프로그램
          </p>
        </div>
      </section>

      {/* 자격증: Certificates */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold pb-2 mb-2 border-b border-lightGray'>
          Certificates
        </h2>

        <ul className=''>
          <li>
            정보통신기사{' '}
            <span className='text-gray'>@한국방송통신전파진흥원 (2019.11)</span>
          </li>
          <li>
            정보처리기사{' '}
            <span className='text-gray'>@한국산업인력공단 (2019.5)</span>
          </li>
        </ul>
      </section>

      {/* 교육: Education */}
      <section className='mb-12'>
        <h2 className='text-2xl font-bold pb-2 mb-2 border-b border-lightGray'>
          Education
        </h2>
        <div className='mb-4'>
          <h3 className='text-lg font-semibold'>코드스테이츠</h3>
          <p>
            <span className='text-gray'>(2021.11 ~ 2022.5)</span> SW 과정 수료
          </p>
        </div>
        <div>
          <h3 className='text-lg font-semibold'>조선대학교</h3>
          <p>
            <span className='text-gray'>(2014.03 ~ 2020.2)</span> 정보통신공학과
            졸업
          </p>
        </div>
      </section>

      {/* 경험: Experience */}
      <section>
        <h2 className='text-2xl font-bold pb-2 mb-2 border-b border-lightGray'>
          Experience
        </h2>
        <ul>
          <li>
            교내 캡스톤 경진대회 대상 3회 수상{' '}
            <span className='text-gray'>
              <a
                href='https://drive.google.com/file/d/1tZgTeOBHsuXjg18JSz_UE6A1OJs5MgyG/view'
                target='_blank'
                className='hover:text-blue'
              >
                @graduation project{' '}
              </a>{' '}
              (2020.10){' '}
            </span>
          </li>
          <li>
            현장실습{' '}
            <span className='text-gray'>
              <a
                href='https://launchpack.co.kr/home'
                target='_blank'
                className='hover:text-blue'
              >
                @LAUNCH PACK
              </a>{' '}
              (2019.1)
            </span>
          </li>
        </ul>
      </section>
    </div>
  );
}
