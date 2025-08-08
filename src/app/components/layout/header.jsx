'use client';
import './header.css';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

export default function Header() {
  useEffect(() => {
    const html = document.querySelector('html');
    const menu = document.querySelector('.c-menu');
    const menuModalInner = document.querySelector('.c-menu_modal_inner');
    const burgerBtn = document.querySelector('.c-burger-button');
    menuModalInner.classList.add('is-ready');
    burgerBtn.addEventListener('click', () => {
      html.classList.toggle('has-menu-open');
      menu.classList.toggle('is-active');
      menu.classList.toggle('is-ready');
    });

    const menuModal = document.querySelector('.c-menu_modal');
    const headerBar = document.querySelector('.c-header_bar');

    document.addEventListener('click', (e) => {
      // 메뉴가 열려있을 때만 체크
      if (menu.classList.contains('is-active')) {
        // 클릭된 요소가 메뉴 배경 영역 밖인지 확인
        if (
          !menuModal.contains(e.target) &&
          !headerBar.contains(e.target) &&
          !burgerBtn.contains(e.target) //
        ) {
          menu.classList.remove('is-ready');
          menu.classList.remove('is-active');
          html.classList.remove('has-menu-open');
        } else {
        }
      }
    });
  }, []);

  useEffect(() => {
    // GSAP를 사용한 아코디언 애니메이션
    const accordionSummaries = document.querySelectorAll(
      '.c-menu-accordion_summary'
    );

    accordionSummaries.forEach((summary) => {
      const accordion = summary.closest('.c-menu-accordion');
      const content = accordion.querySelector('.c-menu-accordion_content');

      // open 속성 변화 감지
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (
            mutation.type === 'attributes' &&
            mutation.attributeName === 'open'
          ) {
            const isOpen = accordion.hasAttribute('open');

            if (isOpen) {
              // 열기 애니메이션 - details 요소의 높이 계산
              const summaryHeight = summary.offsetHeight;
              const contentHeight = content.scrollHeight;
              const totalHeight = summaryHeight + contentHeight;

              gsap.to(accordion, {
                height: totalHeight,
                duration: 0.3,
                ease: 'power2.out',
              });

              gsap.to(content, {
                // opacity: 1,
                duration: 0.3,
                ease: 'power2.out',
              });
            } else {
              // 닫기 애니메이션 - details 요소의 높이 제어
              const currentHeight = accordion.offsetHeight;
              gsap.set(accordion, { height: currentHeight });

              gsap.to(accordion, {
                height: summary.offsetHeight,
                duration: 0.3,
                ease: 'power2.in',
              });

              gsap.to(content, {
                // opacity: 0,
                duration: 0.3,
                ease: 'power2.in',
              });
            }
          }
        });
      });

      // open 속성 변화 감지 시작
      observer.observe(accordion, {
        attributes: true,
        attributeFilter: ['open'],
      });
    });
  }, []);

  useEffect(() => {
    // 페이지 로드 시 스크롤을 최상단으로 이동
    window.scrollTo(0, 0);

    gsap.registerPlugin(ScrollTrigger);
    const html = document.querySelector('html');

    // ScrollTrigger 설정
    ScrollTrigger.create({
      trigger: '.c-reveal',
      start: 'top+=100 top',
      scrub: true,
      // markers: true,
      onUpdate: (self) => {
        if (self.progress > 0) {
          html.classList.add('has-scrolled');
        } else {
          html.classList.remove('has-scrolled');
        }
      },
    });

    // data-scramble-scroll 요소들에 대한 ScrollTrigger 생성
    const scrambleScrollElements = document.querySelectorAll(
      '[data-scramble-scroll]'
    );

    scrambleScrollElements.forEach((scrollElement) => {
      ScrollTrigger.create({
        trigger: scrollElement,
        start: 'center center',
        // markers: true,
        onEnter: () => {
          // 해당 요소 내부의 data-scramble-text 요소들에 대해 이벤트 발생
          const textElements = scrollElement.querySelectorAll(
            '[data-scramble-text]'
          );
          textElements.forEach((textElement) => {
            window.dispatchEvent(
              new CustomEvent('scrambleText', {
                detail: { target: scrollElement },
              })
            );
          });
        },
      });
    });
  }, []);

  // text scramble
  useEffect(() => {
    gsap.registerPlugin(ScrambleTextPlugin);

    const scrambleTimelines = [];

    const onMouseEnter = (e) => {
      const targetScrambleTimelineObj = scrambleTimelines.filter(
        (obj) => obj.$hoverParent === e.target
      );
      if (!targetScrambleTimelineObj.length) return;

      for (const obj of targetScrambleTimelineObj) {
        obj.hoverTl.restart();
      }
    };

    const onScrambleText = (e) => {
      const targets = scrambleTimelines.filter(
        (scrambleItem) => scrambleItem.$scrollParent === e.detail.target
      );
      for (const target of targets) {
        // scrollTl이 존재하고 paused 상태일 때만 restart
        if (target.scrollTl) {
          target.scrollTl.restart();
        }
      }
    };

    const initScrambleText = () => {
      const $texts = document.querySelectorAll('[data-scramble-text]');

      for (const $text of $texts) {
        const $hoverParent = $text.closest('[data-scramble-hover]');
        const $scrollParent = $text.closest('[data-scramble-scroll]');

        // Appear Timeline
        let scrollTl;
        if ($scrollParent) {
          const delay = $text.dataset.scrambleDelay ?? 0;
          const textContent = $text.textContent.trim();

          // 초기 상태를 빈 문자열로 설정
          $text.textContent = '';

          scrollTl = gsap.timeline({
            paused: true,
            onStart: () => {
              $hoverParent && ($hoverParent.style.pointerEvents = 'none');
            },
            onComplete: () => {
              $hoverParent && ($hoverParent.style.pointerEvents = '');
              if ($text && textContent) {
                $text.textContent = textContent;
              }
            },
          });

          scrollTl.to(
            $text,
            {
              scrambleText: {
                chars: 'WEBISOFT',
                text: textContent,
                speed: 1,
              },
              duration: 0.8,
            },
            delay
          );
        }

        // Hover Timeline
        let hoverTl;
        if ($hoverParent) {
          hoverTl = gsap.timeline({
            paused: true,
          });

          hoverTl.to($text, {
            scrambleText: {
              chars: 'WEBISOFT',
              text: '{original}',
              speed: 1,
            },
            duration: 0.8,
          });
        }

        // Store Data

        scrambleTimelines.push({
          $scrollParent,
          $hoverParent,
          scrollTl,
          hoverTl,
        });

        // Events
        $hoverParent?.addEventListener('mouseenter', onMouseEnter);
      }

      // Global event
      window.addEventListener('scrambleText', onScrambleText);
    };

    const destroyScrambleText = () => {
      for (const [index, scrambleTimeline] of scrambleTimelines.entries()) {
        scrambleTimeline.scrollTl?.kill();
        scrambleTimeline.hoverTl?.kill();
        scrambleTimeline.scrollTl = null;
        scrambleTimeline.hoverTl = null;

        scrambleTimeline.$hoverParent?.removeEventListener(
          'mouseenter',
          onMouseEnter
        );

        scrambleTimelines.splice(index, 1);
      }

      window.removeEventListener('scrambleText', onScrambleText);
    };

    initScrambleText();

    return () => {
      destroyScrambleText();
    };
  }, []);

  return (
    <>
      <header
        className="c-header || c-menu is-inview"
        data-scramble-appear=""
        data-scroll=""
        data-scroll-call="scrambleText"
        data-module-menu="m2"
        aria-hidden="true"
      >
        <div className="c-header_inner">
          <div className="c-header_background_wrapper">
            <div className="c-header_background">
              <div className="c-header_background_bar">
                <span className="c-icon">
                  <svg
                    className="svg-header-footer"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <use href="/images/sprite.svg#header-footer"></use>
                  </svg>
                </span>
              </div>
            </div>
          </div>
          <div className="c-header_bar" data-menu="bar">
            <div className="c-header_bar_inner">
              <a href="/" className="c-header_bar_logo">
                <span className="u-screen-reader-text">Webisoft</span>
                <span className="c-icon">
                  <svg
                    className="svg-header-logo"
                    focusable="false"
                    aria-hidden="true"
                  >
                    <use href="/images/sprite.svg#header-logo"></use>
                  </svg>
                </span>
              </a>
              <div className="c-header_bar_content">
                <div className="c-text -label" aria-hidden="true">
                  <p>WBSFT®</p>
                </div>
                <div className="c-text -label">
                  <p>
                    DEVELOPMENT
                    <br />
                    LABS
                  </p>
                </div>
              </div>
              <button
                className="c-header_bar_burger-button || c-burger-button"
                type="button"
                data-menu="burger"
                aria-expanded="false"
              >
                <span className="u-screen-reader-text">Menu</span>
                <span className="c-burger-button_icon -open || c-header_button_icon">
                  <span className="c-burger-button_icon_line"></span>
                  <span className="c-burger-button_icon_line"></span>
                  <span className="c-burger-button_icon_line"></span>
                </span>
                <span className="c-burger-button_icon -close || c-header_button_icon">
                  <span className="c-burger-button_icon_line"></span>
                  <span className="c-burger-button_icon_line"></span>
                  <span className="c-burger-button_icon_line"></span>
                </span>
              </button>
            </div>
          </div>
          <div
            className="c-header_menu || c-menu_element"
            data-lenis-prevent=""
          >
            <div className="c-menu_modal -primary" data-menu="primary">
              <div className="c-menu_modal_wrapper">
                <div className="c-menu_modal_header"></div>
                <div className="c-menu_modal_inner">
                  <div className="c-menu_modal_content">
                    <nav className="c-nav">
                      <ul className="c-nav_list -primary">
                        <li
                          style={{ '--index': 1 }}
                          data-menu-scramble-appear=""
                        >
                          <details
                            className="c-menu-accordion"
                            data-module-accordion="m3"
                          >
                            <summary
                              className="c-menu-accordion_summary"
                              data-accordion="summary"
                            >
                              <span className="c-summary-button">
                                <span className="c-summary-button_index">
                                  <span
                                    className="c-text -label"
                                    data-menu-scramble-appear-text=""
                                  ></span>
                                </span>
                                <span className="c-summary-button_title">
                                  <span className="c-heading -h4">
                                    Services
                                  </span>
                                </span>
                                <span className="c-summary-button_arrow">
                                  <span className="c-summary-button_arrow_icon || c-heading -h4"></span>
                                </span>
                              </span>
                            </summary>
                            <div
                              className="c-menu-accordion_content"
                              data-accordion="content"
                            >
                              <ul className="c-nav_list -secondary">
                                <li>
                                  <a
                                    href="/advisory"
                                    className="c-nav-button"
                                    data-menu-scramble-hover=""
                                  >
                                    <span className="c-nav-button_index">
                                      <span
                                        className="c-text -label"
                                        data-menu-scramble-hover-text=""
                                      >
                                        &nbsp;
                                      </span>
                                    </span>
                                    <span className="c-nav-button_title">
                                      <span className="c-heading -h5">
                                        Advisory
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/blockchain"
                                    className="c-nav-button"
                                    data-menu-scramble-hover=""
                                  >
                                    <span className="c-nav-button_index">
                                      <span
                                        className="c-text -label"
                                        data-menu-scramble-hover-text=""
                                      >
                                        &nbsp;
                                      </span>
                                    </span>
                                    <span className="c-nav-button_title">
                                      <span className="c-heading -h5">
                                        Blockchain
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/product-development"
                                    className="c-nav-button"
                                    data-menu-scramble-hover=""
                                  >
                                    <span className="c-nav-button_index">
                                      <span
                                        className="c-text -label"
                                        data-menu-scramble-hover-text=""
                                      >
                                        &nbsp;
                                      </span>
                                    </span>
                                    <span className="c-nav-button_title">
                                      <span className="c-heading -h5">
                                        Product Development
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/enterprise-software"
                                    className="c-nav-button"
                                    data-menu-scramble-hover=""
                                  >
                                    <span className="c-nav-button_index">
                                      <span
                                        className="c-text -label"
                                        data-menu-scramble-hover-text=""
                                      >
                                        &nbsp;
                                      </span>
                                    </span>
                                    <span className="c-nav-button_title">
                                      <span className="c-heading -h5">
                                        Enterprise Software
                                      </span>
                                    </span>
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="/artificial-intelligence-ai"
                                    className="c-nav-button"
                                    data-menu-scramble-hover=""
                                  >
                                    <span className="c-nav-button_index">
                                      <span
                                        className="c-text -label"
                                        data-menu-scramble-hover-text=""
                                      >
                                        &nbsp;
                                      </span>
                                    </span>
                                    <span className="c-nav-button_title">
                                      <span className="c-heading -h5">
                                        Artificial Intelligence (AI)
                                      </span>
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </details>
                        </li>
                        <li
                          style={{ '--index': 1 }}
                          data-menu-scramble-appear=""
                        >
                          <a href="/projects" className="c-summary-button">
                            <span className="c-summary-button_index">
                              <span
                                className="c-text -label"
                                data-menu-scramble-appear-text=""
                              ></span>
                            </span>
                            <span className="c-summary-button_title">
                              <span className="c-heading -h4">Projects</span>
                            </span>
                          </a>
                        </li>
                        <li
                          style={{ '--index': 1 }}
                          data-menu-scramble-appear=""
                        >
                          <a href="/expertise" className="c-summary-button">
                            <span className="c-summary-button_index">
                              <span
                                className="c-text -label"
                                data-menu-scramble-appear-text=""
                              ></span>
                            </span>
                            <span className="c-summary-button_title">
                              <span className="c-heading -h4">Expertise</span>
                            </span>
                          </a>
                        </li>
                        <li
                          style={{ '--index': 1 }}
                          data-menu-scramble-appear=""
                        >
                          <a href="/contact" className="c-summary-button">
                            <span className="c-summary-button_index">
                              <span
                                className="c-text -label"
                                data-menu-scramble-appear-text=""
                              ></span>
                            </span>
                            <span className="c-summary-button_title">
                              <span className="c-heading -h4">Contact</span>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="c-menu_modal_footer">
                    <a href="/contact" className="c-menu_modal_footer_inner">
                      <div className="c-menu_modal_footer_heading">
                        <div className="c-text -label">
                          <p>
                            Contact
                            <br />
                            us
                          </p>
                        </div>
                      </div>
                      <div className="c-menu_modal_footer_content">
                        <div
                          className="c-menu_modal_footer_text || c-heading -h4"
                          aria-hidden="true"
                        >
                          <p>Let's talk</p>
                        </div>
                        <div className="c-menu_modal_footer_label || c-text -label">
                          <span
                            data-menu-scramble-appear=""
                            data-scramble-delay=".1"
                          >
                            <span data-menu-scramble-appear-text=""></span>
                          </span>
                          <p>F034671</p>
                        </div>
                      </div>
                      <span
                        className="c-menu_modal_footer_button || c-arrow-button -right"
                        type="button"
                      >
                        <span className="u-screen-reader-text">Back</span>
                        <span className="c-arrow-button_icon_wrapper">
                          <span className="c-arrow-button_icon">
                            <span className="c-icon">
                              <svg
                                className="svg-back-arrow-right"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use href="/images/sprite.svg#back-arrow-right"></use>
                              </svg>
                            </span>
                          </span>
                          <span className="c-arrow-button_icon">
                            <span className="c-icon">
                              <svg
                                className="svg-back-arrow-right"
                                focusable="false"
                                aria-hidden="true"
                              >
                                <use href="/images/sprite.svg#back-arrow-right"></use>
                              </svg>
                            </span>
                          </span>
                        </span>
                      </span>
                      <div className="c-menu_modal_footer_bar">
                        <span className="c-icon">
                          <svg
                            className="svg-header-footer"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use href="/images/sprite.svg#header-footer"></use>
                          </svg>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
