/* Shared case data — homepage stack + work.html */
(function (global) {
  /** @type {Record<string, object>} */
  const CASES = {
    bs: {
      slug: 'bs',
      title: 'BusyStrong90',
      logoMark: 'BusyStrong90',
      year: '2026',
      href: 'https://busystrong90.com/',
      host: 'busystrong90.com',
      client: 'Busy Strong 90',
      servicesKey: 'work.bs.services',
      copyKey: 'work.bs.copy',
      copyMobileKey: 'work.bs.copyMobile',
      stats: [{ numKey: 'work.weeks4', labelKey: 'work.stat.build' }],
      poster: './assets/works/busystrong90.jpg?v=2',
      posterMobile: './assets/works/busystrong90-mobile.jpg?v=2',
      mp4: './assets/works/videos/busystrong90.mp4?v=3',
      mp4Mobile: './assets/works/videos/mobile/busystrong90.mp4?v=3',
      stills: [
        { src: './assets/works/busystrong90.jpg?v=2', altKey: 'work.bs.still1' },
        { src: './assets/works/busystrong90-mobile.jpg?v=2', altKey: 'work.bs.still2' },
      ],
      shotsDesktop: ['./assets/works/shots/bs/desktop-01.jpg?v=7','./assets/works/shots/bs/desktop-02.jpg?v=7','./assets/works/shots/bs/desktop-03.jpg?v=7','./assets/works/shots/bs/desktop-04.jpg?v=7','./assets/works/shots/bs/desktop-05.jpg?v=7'],
      shotsMobile: ['./assets/works/shots/bs/mobile-01.jpg?v=7','./assets/works/shots/bs/mobile-02.jpg?v=7','./assets/works/shots/bs/mobile-03.jpg?v=7','./assets/works/shots/bs/mobile-04.jpg?v=7','./assets/works/shots/bs/mobile-05.jpg?v=7','./assets/works/shots/bs/mobile-06.jpg?v=7','./assets/works/shots/bs/mobile-07.jpg?v=7','./assets/works/shots/bs/mobile-08.jpg?v=7','./assets/works/shots/bs/mobile-09.jpg?v=7','./assets/works/shots/bs/mobile-10.jpg?v=7'],
    },
    lk: {
      slug: 'lk',
      title: 'Lenkolino',
      logoMark: 'Lenkolino',
      year: '2025',
      href: 'https://www.lenkolino.shop/',
      host: 'lenkolino.shop',
      client: 'Leniwood / Lenkolino',
      servicesKey: 'work.lk.services',
      copyKey: 'work.lk.copy',
      copyMobileKey: 'work.lk.copyMobile',
      stats: [{ numKey: 'work.weeks5', labelKey: 'work.stat.build' }],
      poster: './assets/works/lenkolino.jpg?v=2',
      posterMobile: './assets/works/lenkolino-mobile.jpg?v=2',
      mp4: './assets/works/videos/lenkolino.mp4?v=3',
      mp4Mobile: './assets/works/videos/mobile/lenkolino.mp4?v=3',
      stills: [
        { src: './assets/works/lenkolino.jpg?v=2', altKey: 'work.lk.still1' },
        { src: './assets/works/lenkolino-mobile.jpg?v=2', altKey: 'work.lk.still2' },
      ],
      shotsDesktop: ['./assets/works/shots/lk/desktop-01.jpg?v=7','./assets/works/shots/lk/desktop-02.jpg?v=7','./assets/works/shots/lk/desktop-03.jpg?v=7','./assets/works/shots/lk/desktop-04.jpg?v=7'],
      shotsMobile: ['./assets/works/shots/lk/mobile-01.jpg?v=7','./assets/works/shots/lk/mobile-02.jpg?v=7','./assets/works/shots/lk/mobile-03.jpg?v=7','./assets/works/shots/lk/mobile-04.jpg?v=7','./assets/works/shots/lk/mobile-05.jpg?v=7','./assets/works/shots/lk/mobile-06.jpg?v=7'],
    },
    tm: {
      slug: 'tm',
      title: 'Thrivewithmarina',
      logoMark: 'Marina',
      year: '2025',
      href: 'https://thrivewithmarina.vercel.app/',
      host: 'thrivewithmarina.vercel.app',
      client: 'Marina Savić',
      servicesKey: 'work.tm.services',
      copyKey: 'work.tm.copy',
      copyMobileKey: 'work.tm.copyMobile',
      stats: [{ numKey: 'work.weeks3', labelKey: 'work.stat.build' }],
      poster: './assets/works/thrivewithmarina.jpg?v=2',
      posterMobile: './assets/works/thrivewithmarina-mobile.jpg?v=2',
      mp4: './assets/works/videos/thrivewithmarina.mp4?v=3',
      mp4Mobile: './assets/works/videos/mobile/thrivewithmarina.mp4?v=3',
      stills: [
        { src: './assets/works/thrivewithmarina.jpg?v=2', altKey: 'work.tm.still1' },
        { src: './assets/works/thrivewithmarina-mobile.jpg?v=2', altKey: 'work.tm.still2' },
      ],
      shotsDesktop: ['./assets/works/shots/tm/desktop-01.jpg?v=9','./assets/works/shots/tm/desktop-02.jpg?v=9','./assets/works/shots/tm/desktop-03.jpg?v=9','./assets/works/shots/tm/desktop-04.jpg?v=9','./assets/works/shots/tm/desktop-05.jpg?v=9','./assets/works/shots/tm/desktop-06.jpg?v=9','./assets/works/shots/tm/desktop-07.jpg?v=9','./assets/works/shots/tm/desktop-08.jpg?v=9','./assets/works/shots/tm/desktop-09.jpg?v=9','./assets/works/shots/tm/desktop-10.jpg?v=9'],
      shotsMobile: ['./assets/works/shots/tm/mobile-01.jpg?v=7','./assets/works/shots/tm/mobile-02.jpg?v=7','./assets/works/shots/tm/mobile-03.jpg?v=7','./assets/works/shots/tm/mobile-04.jpg?v=7','./assets/works/shots/tm/mobile-05.jpg?v=7','./assets/works/shots/tm/mobile-06.jpg?v=7','./assets/works/shots/tm/mobile-07.jpg?v=7','./assets/works/shots/tm/mobile-08.jpg?v=7','./assets/works/shots/tm/mobile-09.jpg?v=7','./assets/works/shots/tm/mobile-10.jpg?v=7'],
    },
  };

  global.G8_WORK_ORDER = ['bs', 'lk', 'tm'];
  global.G8_WORK_CASES = CASES;
})(typeof window !== 'undefined' ? window : globalThis);
