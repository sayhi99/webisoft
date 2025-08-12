'use client';
import './main.css';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';

export default function HomePage() {
  useEffect(() => {
    const html = document.querySelector('html');
    html.classList.add('is-ready');
  }, []);

  useEffect(() => {
    // progress carousel 내부에서만 마우스 이벤트 처리
    const progressCarouselInner = document.querySelector(
      '.c-progress-carousel_inner'
    );
    const cursor = document.querySelector('.c-progress-carousel_cursor');
    const swiper = document.querySelector('.c-progress-carousel_list');

    if (progressCarouselInner && cursor && swiper) {
      let animationFrameId;
      let currentX = 0;
      let currentY = 0;
      let targetX = 0;
      let targetY = 0;
      let isDragging = false;

      // 부드러운 애니메이션 함수
      const animateCursor = () => {
        // 현재 위치에서 목표 위치로 부드럽게 이동
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;

        // 커서 위치 업데이트
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

        // 애니메이션 계속 실행
        animationFrameId = requestAnimationFrame(animateCursor);
      };

      // 애니메이션 시작
      animateCursor();

      // 마우스 위치 업데이트 함수
      const updateCursorPosition = (e) => {
        // 부모 컨테이너 기준으로 상대적 위치 계산
        const rect = progressCarouselInner.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // 커서 요소의 크기 절반을 계산하여 중앙 정렬
        const cursorHalfWidth = cursor.offsetWidth / 2;
        const cursorHalfHeight = cursor.offsetHeight / 2;

        // 커서가 컨테이너 내부에만 위치하도록 제한 (중앙 정렬 고려)
        const maxX = rect.width - cursor.offsetWidth;
        const maxY = rect.height - cursor.offsetHeight;

        // 마우스 커서가 cursor 요소의 중앙에 오도록 목표 위치 계산
        targetX = Math.max(0, Math.min(x - cursorHalfWidth, maxX));
        targetY = Math.max(0, Math.min(y - cursorHalfHeight, maxY));

        // 커서가 컨테이너 내부에 있을 때 is-active 클래스 추가
        cursor.classList.add('is-active');
      };

      // 일반 마우스 이벤트
      progressCarouselInner.addEventListener('mousemove', updateCursorPosition);

      // 마우스가 컨테이너를 벗어나면 is-active 클래스 제거
      progressCarouselInner.addEventListener('mouseleave', () => {
        cursor.classList.remove('is-active');
      });

      // 마우스가 컨테이너에 들어오면 is-active 클래스 추가
      progressCarouselInner.addEventListener('mouseenter', () => {
        cursor.classList.add('is-active');
      });

      // Swiper 드래그 이벤트 처리
      if (swiper.swiper) {
        // 드래그 시작
        swiper.swiper.on('dragStart', () => {
          isDragging = true;
        });

        // 드래그 중
        swiper.swiper.on('dragMove', (e) => {
          if (isDragging) {
            // 드래그 중일 때도 마우스 위치 업데이트
            updateCursorPosition(e);
          }
        });

        // 드래그 종료
        swiper.swiper.on('dragEnd', () => {
          isDragging = false;
        });
      }

      // 전역 마우스 이벤트로 드래그 중에도 커서 추적
      const handleGlobalMouseMove = (e) => {
        if (isDragging && progressCarouselInner.contains(e.target)) {
          updateCursorPosition(e);
        }
      };

      document.addEventListener('mousemove', handleGlobalMouseMove);

      // cleanup 함수에서 애니메이션 정리
      return () => {
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        document.removeEventListener('mousemove', handleGlobalMouseMove);

        // Swiper 이벤트 정리
        if (swiper.swiper) {
          swiper.swiper.off('dragStart');
          swiper.swiper.off('dragMove');
          swiper.swiper.off('dragEnd');
        }
      };
    }
  }, []);

  return (
    <>
      <div data-load-container="" className="">
        <div data-module-scroll="m88">
          <div className="c-hero -home" data-scroll-to-hero="">
            <div className="c-hero_inner">
              <div className="c-hero_header">
                <div
                  className="c-hero_header_inner is-inview"
                  data-scramble-appear=""
                  data-scroll=""
                  data-scroll-call="scrambleText"
                >
                  <p
                    className="c-text -label || u-hidden@from-small"
                    data-scramble-text=""
                    data-scramble-delay=".2"
                  >
                    /Welcome
                  </p>

                  <a
                    className="c-hero_header_cta || c-button -default -inverted"
                    href="/contact"
                    data-scramble-hover=""
                    data-load="false"
                    data-load-url="false"
                    aria-label="Let's Talk"
                    title="Let's Talk"
                    style={{}}
                  >
                    <span className="u-screen-reader-text">Let's Talk</span>
                    <span
                      className="c-button_label"
                      data-scramble-text=""
                      data-scramble-delay=".4"
                    >
                      Let's Talk
                    </span>

                    <span className="c-button_icon">
                      <span className="c-icon">
                        <svg
                          className="svg-arrow-right"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use href="/static/images/sprite.svg#arrow-right"></use>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
              </div>
              <div className="c-hero_container">
                <div
                  className="c-hero_content is-inview"
                  data-scramble-appear=""
                  data-scroll=""
                  data-scroll-call="scrambleText"
                >
                  <div className="c-hero_content_top">
                    <div className="c-hero_introduction c-block-heading_text">
                      AN ELITE TEAM OF SOFTWARE ENGINEERS
                    </div>
                  </div>
                  <div className="c-hero_content_bottom">
                    <div className="c-grid-labels || c-hero_grid-labels">
                      <ul className="c-grid-labels_list">
                        <li className="c-grid-labels_item">
                          <p
                            className="c-text -label"
                            data-scramble-text=""
                            data-scramble-delay="0"
                          >
                            WBSFT®
                          </p>
                        </li>
                        <li className="c-grid-labels_item">
                          <p
                            className="c-text -label"
                            data-scramble-text=""
                            data-scramble-delay=".1"
                          >
                            MTL (CAN)
                          </p>
                        </li>
                        <li className="c-grid-labels_item">
                          <p
                            className="c-text -label"
                            data-scramble-text=""
                            data-scramble-delay=".2"
                          >
                            /0025
                          </p>
                        </li>
                        <li className="c-grid-labels_item">
                          <p
                            className="c-text -label"
                            data-scramble-text=""
                            data-scramble-delay=".3"
                          >
                            ENGINEERING_
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="c-lines || c-hero_lines is-inview"
                      data-module-lines="m89"
                      data-scroll=""
                      data-scroll-offset="0,0"
                      data-scroll-repeat=""
                      data-scroll-call="toggle, Lines"
                    >
                      <div className="c-lines_wrapper" data-lines="wrapper">
                        <canvas
                          className="c-lines_canvas"
                          width="1488"
                          height="460"
                          style={{ width: '1487px', height: '457px' }}
                        ></canvas>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="c-hero_footer">
                <div
                  className="c-hero_footer_content || o-grid -cols -gutters-x is-inview"
                  data-scramble-appear=""
                  data-scroll=""
                  data-scroll-call="scrambleText"
                >
                  <div
                    className="o-grid_item || u-gc-1/10@from-small"
                    aria-hidden="true"
                  >
                    <div
                      className="c-hero_logo is-inview"
                      data-scroll=""
                      data-scroll-offset="15%, 15%"
                    >
                      <span className="c-icon || c-hero_logo_icon">
                        <svg
                          className="svg-hero-logo"
                          viewBox="0 0 936 124"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 0 }}
                            d="M124.082 51.1358C120.476 65.6551 116.68 81.1675 113.378 96.0773C110.379 81.1675 107.076 65.6439 103.471 50.935L91.3625 3.68335H68.4489L56.3406 50.9238C52.8362 65.6327 49.3317 80.9555 46.2317 95.8653C43.1316 81.0559 39.1217 65.6327 35.5274 51.1247L23.318 3.68335H0L32.8204 121.299H57.7334L70.246 72.3511C73.7505 58.8363 77.0527 44.6295 79.8496 30.713C82.6464 44.6295 86.1508 58.8363 89.4531 72.3511L101.966 121.299H127.081L159.598 3.68335H136.482L124.071 51.1247L124.082 51.1358Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 1 }}
                            d="M167.773 121.4H254.126V101.379H189.991V70.655H248.319V51.4262H189.991V23.7047H190.081H254.531V3.68359H167.773V121.4Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 2 }}
                            d="M343.857 59.4392C353.662 54.4395 359.571 45.7235 359.571 34.117C359.571 18.1024 348.664 3.68359 321.55 3.68359H268.32V121.4H323.358C351.079 121.4 364.288 107.784 364.288 87.6629H364.389C364.389 75.956 357.785 64.5393 343.879 59.4392H343.857ZM290.627 22.0977H319.842C331.445 22.0977 337.353 28.2022 337.353 37.0075C337.353 46.7167 331.445 52.8212 319.842 52.8212H290.627V22.0865V22.0977ZM322.145 102.974H290.627V70.443H322.145C334.152 70.443 341.453 75.6435 341.453 86.7589C341.453 97.0708 334.646 102.974 322.145 102.974Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 3 }}
                            d="M398.303 3.68359H375.984V121.299H398.303V3.68359Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 4 }}
                            d="M472.056 52.832L461.846 50.8343C444.335 47.2296 438.933 42.9219 438.933 33.5139C438.933 24.6082 445.84 18.9947 460.049 18.9947C478.661 18.9947 485.164 26.1037 485.962 38.6141H507.572C506.775 16.4949 492.667 0.982422 459.645 0.982422C431.43 0.982422 416.019 14.6981 416.019 34.217C416.019 55.5327 431.025 65.6437 453.838 69.9515L463.745 71.9491C481.761 75.5538 487.86 79.7611 487.86 88.9682C487.86 100.084 479.458 105.987 464.048 105.987C447.638 105.987 435.226 101.077 434.934 82.5623H413.121C413.368 109.525 432.171 123.899 463.554 123.899C492.87 123.899 511.088 110.987 511.088 87.6625C511.088 69.0475 499.777 58.2334 472.068 52.832H472.056Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 5 }}
                            d="M418.871 82.5624H419.072C419.072 82.5624 419.072 82.4954 419.072 82.4619L418.871 82.5624Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 6 }}
                            d="M579.811 1.08301C544.384 1.08301 520.977 25.5123 520.977 62.5414C520.977 99.5704 544.598 124 579.811 124C615.024 124 638.443 99.5704 638.443 62.5414C638.443 25.5123 615.237 1.08301 579.811 1.08301ZM579.811 104.38C558.301 104.38 544.283 88.5666 544.283 62.5414C544.283 36.5161 558.29 20.7024 579.811 20.7024C601.332 20.7024 615.338 36.6166 615.338 62.5414C615.338 88.4661 601.332 104.38 579.811 104.38Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 7 }}
                            d="M650.934 121.4H673.241V70.655H728.582V51.4262H673.241V23.7047H733.984V3.68359H650.934V121.4Z"
                          ></path>
                          <path
                            className="svg-hero-logo_char"
                            style={{ '--index': 8 }}
                            d="M745.301 23.7047H782.929V121.4H805.438V23.7047H843.066V3.68359H745.301V23.7047Z"
                          ></path>
                          <g
                            className="svg-hero-logo_char"
                            style={{ '--index': 9 }}
                          >
                            <path d="M907.687 56.9389L907.181 51.1357C906.979 47.1292 905.777 44.0268 902.183 42.3304C906.283 40.4332 908.091 36.7281 908.091 32.6212C908.091 24.9096 902.284 20.4121 892.883 20.4121H873.676V62.7533H883.279V47.04H892.186C895.994 47.04 897.185 48.3457 897.488 52.4414L897.791 56.9501C897.993 59.4499 898.297 61.2579 899.296 62.7533H909.405C908.305 61.2467 907.799 59.5504 907.608 56.9501H907.709L907.687 56.9389ZM892.377 39.1163H883.268V28.704H892.074C896.073 28.704 898.173 30.5008 898.173 33.8042C898.173 37.1075 895.972 39.1052 892.366 39.1052L892.377 39.1163Z"></path>
                            <path d="M890.077 1.08301C866.456 1.08301 847.945 19.3966 847.945 42.018C847.945 64.6394 866.254 82.8526 890.077 82.8526C913.901 82.8526 932.198 64.6394 932.198 42.018C932.198 19.3966 913.699 1.08301 890.077 1.08301ZM890.077 73.9581C871.567 73.9581 857.358 60.3428 857.358 42.0292C857.358 23.7156 871.364 9.799 890.077 9.799C908.79 9.799 922.797 23.7156 922.797 42.0292C922.797 60.3428 908.588 73.9581 890.077 73.9581Z"></path>
                          </g>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <p className="o-grid_item || u-gc-10/13@from-small">
                    <button
                      className="c-hero_scrollto || c-button -slash -has-icon"
                      data-module-scroll-to-hero="m90"
                      data-scramble-hover=""
                      style={{}}
                    >
                      <span
                        className="c-button_label"
                        data-scramble-text=""
                        data-scramble-delay=".5"
                      >
                        Explore
                      </span>

                      <span className="c-button_icon">
                        <span className="c-icon">
                          <svg
                            className="svg-arrow-right"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use href="/static/images/sprite.svg#arrow-bottom"></use>
                          </svg>
                        </span>
                      </span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="full-height-container"></div>
          <div
            className="c-reveal"
            data-module-reveal="m91"
            data-images-sequence=""
            style={{
              '--sequence-folds': 2.8,
              '--reveal-progress': 0.2176278563656148,
            }}
          >
            <div
              className="c-reveal_progress is-inview"
              data-scroll=""
              data-scroll-offset="0, 100%"
              data-scroll-event-progress="revealProgress"
              data-scroll-ignore-fold=""
            ></div>
            <div
              className="c-reveal_trigger is-inview"
              data-scroll=""
              data-scroll-offset="50%, 0"
              data-scroll-call="revealStickyUI, Reveal"
              data-scroll-ignore-fold=""
            ></div>
            <div
              className="c-reveal_trigger_video is-inview"
              data-scroll=""
              data-scroll-offset="0, 0"
              data-scroll-repeat=""
              data-scroll-call="toggle, ImagesSequence"
              data-scroll-event-progress="progressSequenceVideo"
              data-scroll-ignore-fold=""
            ></div>
            <div className="c-reveal_video">
              <div
                className="c-reveal_video_inner"
                data-module-images-sequence="m92"
                data-images-sequence-directory="opening"
                data-images-sequence-length="127"
              >
                <canvas
                  width="1520"
                  height="920"
                  style={{ width: '1519px', height: '919px' }}
                ></canvas>
              </div>
            </div>
            <div
              className="c-reveal_sticky_ui_wrapper"
              data-reveal="sticky"
              data-scramble-appear=""
            >
              <div className="c-reveal_sticky_ui || o-container">
                <div className="c-grid-labels">
                  <ul className="c-grid-labels_list">
                    <li className="c-grid-labels_item" data-scramble-scroll="">
                      <div
                        className="c-text -label"
                        data-scramble-text=""
                        data-scramble-delay="0"
                      >
                        WBSFT®
                      </div>
                    </li>
                    <li className="c-grid-labels_item">
                      <div className="c-text -label">
                        <p>Advisory</p>

                        <p>Blockchain</p>

                        <p>Product Development</p>

                        <p>Enterprise Software</p>

                        <p>Artificial Intelligence (AI)</p>
                      </div>
                    </li>
                    <li className="c-grid-labels_item" data-scramble-scroll="">
                      <div
                        className="c-text -label"
                        data-scramble-text=""
                        data-scramble-delay=".2"
                      >
                        /0025
                      </div>
                    </li>
                    <li className="c-grid-labels_item" data-scramble-scroll="">
                      <div
                        className="c-text -label"
                        data-scramble-text=""
                        data-scramble-delay=".3"
                      >
                        ENGINEERING_
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="c-reveal_intro || o-container">
              <div
                className="c-reveal_intro_inner"
                data-scroll=""
                data-scroll-offset="25%, 25%"
                data-scroll-call="scrambleText"
                data-scramble-appear=""
              >
                <h2
                  className="c-reveal_intro_label || c-text -label"
                  data-scramble-scroll=""
                >
                  <span data-scramble-text="">WHO WE ARE</span>
                  <span>/</span>
                </h2>
                <div className="c-reveal_intro_content">
                  <div
                    className="c-fadein-text"
                    data-module-fadein-text="m93"
                    data-fadein-text-base-color="#A7A7A7"
                  >
                    <div
                      className="c-fadein-text_area"
                      data-scroll=""
                      data-scroll-offset="50%, 50%"
                      data-scroll-event-progress="fadeinTextProgress"
                    ></div>
                    <p
                      className="c-fadein-text_paragraph || c-heading -h1"
                      data-fadein-text="content"
                      aria-label="A North American team of specialists with profound technical expertise."
                    >
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            A
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            N
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            h
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            A
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            n
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            m
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            f
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            s
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            w
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            h
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            f
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            u
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            n
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            d
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            n
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            l
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            x
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(167, 167, 167)',
                            }}
                          >
                            .
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>

                  <div className="c-reveal_intro_cta">
                    <a
                      className="c-button -default wait-appear-animation"
                      href="/contact"
                      data-scramble-hover=""
                      data-scramble-scroll=""
                      title="Contact Us"
                      aria-label="Contact Us"
                    >
                      <span className="u-screen-reader-text">Contact Us</span>
                      <span
                        className="c-button_label"
                        data-scramble-text=""
                        data-scroll=""
                        data-scroll-offset="25%, 25%"
                        data-scroll-call="scrambleText"
                        data-scramble-appear=""
                      >
                        Contact Us
                      </span>
                      <span className="c-button_icon">
                        <span className="c-icon">
                          <svg
                            className="svg-arrow-right"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use href="/static/images/sprite.svg#arrow-right"></use>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-block simple-text-banner u-padding-big-top u-padding-medium-bottom">
            <div
              className="c-section-heading"
              data-scroll=""
              data-scroll-offset="25%, 25%"
              data-scroll-call="scrambleText"
              data-scramble-appear=""
            >
              <div className="o-container">
                <div className="c-section-heading_inner || o-grid -cols -gutters-x || c-heading -h2">
                  <div
                    className="c-section-heading_left || o-grid_item u-gc-1/4@from-small"
                    data-scramble-scroll=""
                  >
                    <p className="c-section-heading_separator || c-text -label">
                      /
                    </p>
                    <p
                      className="c-section-heading_category || c-text -label"
                      data-scramble-text=""
                      data-scramble-delay=".1"
                    >
                      Services
                    </p>
                  </div>
                  <div className="c-section-heading_center || o-grid_item u-gc-4/10@from-small">
                    <h2 className="c-section-heading_title || c-heading -h2">
                      Tech stacks for a rapidly evolving world:
                    </h2>
                  </div>
                  <div
                    className="c-section-heading_right || o-grid_item u-gc-10/13@from-small"
                    data-scramble-scroll=""
                  >
                    <p
                      className="c-section-heading_index || c-text -label"
                      data-scramble-text=""
                      data-scramble-delay=".3"
                    >
                      /005
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-block u-padding-big-top u-padding-big-bottom">
            <div
              className="c-stacking"
              data-module-stacking="m94"
              data-scroll=""
              data-scroll-offset="100%,100%"
              data-scroll-css-progress=""
            >
              <ul
                className="c-stacking_list"
                data-stacking="list"
                style={{
                  '--total-height': '2765px',
                  '--negative-offset': '-10px',
                }}
              >
                <li
                  className="c-stacking_item 160"
                  data-stacking="item"
                  style={{
                    '--position-top': '0px',
                    '--area-height': '2765px',
                  }}
                >
                  <div className="c-stacking_area">
                    <div
                      className="c-stacking_trigger"
                      data-stacking="trigger"
                      data-scroll=""
                      data-scroll-repeat=""
                      data-scroll-call="triggerStackingItem"
                      style={{
                        height: '553px',
                      }}
                    ></div>
                    <div className="c-stacking_element" data-stacking="element">
                      <article className="c-tile-stacking">
                        <div className="o-container">
                          <div className="c-tile-stacking_inner || c-heading -h3">
                            <div className="c-tile-stacking_header">
                              <div
                                className="c-tile-stacking_header_inner"
                                data-stacking="header"
                              >
                                <p
                                  className="c-tile-stacking_index || c-text -label"
                                  data-scramble-text=""
                                >
                                  S/001
                                </p>
                                <p className="c-tile-stacking_title || c-heading -h3">
                                  Advisory
                                </p>
                              </div>
                            </div>
                            <div
                              className="c-tile-stacking_content"
                              data-scroll=""
                              data-scroll-call="scrambleText"
                              data-scramble-appear=""
                            >
                              <div className="c-tile-stacking_description || c-text -body">
                                <p>
                                  Gain strategic insights from our fractional
                                  CTOs, benefit from comprehensive technical
                                  reviews, and achieve accelerated development
                                  with expert backend, frontend, and DevOps
                                  solutions.
                                </p>
                              </div>

                              <div className="text-right-xs">
                                <a
                                  className="c-button c-tile-stacking_cta -default wait-appear-animation"
                                  href="/advisory"
                                  aria-label="See our services"
                                  data-scramble-scroll=""
                                  data-scramble-hover=""
                                >
                                  <span
                                    className="c-button_label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    SEE OUR SERVICES
                                  </span>
                                  <span className="c-button_icon">
                                    <span className="c-icon">
                                      <svg
                                        className="svg-arrow-right"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use href="/static/images/sprite.svg#arrow-right"></use>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="c-tile-stacking_visual">
                              <div className="c-tile-stacking_visual_inner">
                                <div
                                  className="c-tile-stacking_visual_media || c-lottie-icon"
                                  data-module-lottie-player="m95"
                                  data-lottie-player-path="/media/service/advisory_hKBm80m.json"
                                  data-lottie-id="id_lottie_tile_stack_160_1"
                                >
                                  <canvas
                                    id="id_lottie_tile_stack_160_1_canvas"
                                    width="434"
                                    height="217"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  ></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>

                <li
                  className="c-stacking_item 139"
                  data-stacking="item"
                  style={{
                    '--position-top': '94px',
                    '--area-height': '2212px',
                  }}
                >
                  <div className="c-stacking_area">
                    <div
                      className="c-stacking_trigger"
                      data-stacking="trigger"
                      data-scroll=""
                      data-scroll-repeat=""
                      data-scroll-call="triggerStackingItem"
                      style={{
                        height: '553px',
                      }}
                    ></div>
                    <div className="c-stacking_element" data-stacking="element">
                      <article className="c-tile-stacking">
                        <div className="o-container">
                          <div className="c-tile-stacking_inner || c-heading -h3">
                            <div className="c-tile-stacking_header">
                              <div
                                className="c-tile-stacking_header_inner"
                                data-stacking="header"
                              >
                                <p
                                  className="c-tile-stacking_index || c-text -label"
                                  data-scramble-text=""
                                >
                                  S/002
                                </p>
                                <p className="c-tile-stacking_title || c-heading -h3">
                                  Blockchain
                                </p>
                              </div>
                            </div>
                            <div
                              className="c-tile-stacking_content"
                              data-scroll=""
                              data-scroll-call="scrambleText"
                              data-scramble-appear=""
                            >
                              <div className="c-tile-stacking_description || c-text -body">
                                <p>
                                  Delivering secure immutable data, smart
                                  contract development, tokenomics, and
                                  zero-knowledge proof technologies to optimize
                                  security, transparency, and financial
                                  operations.&nbsp;₿
                                </p>
                              </div>

                              <div className="text-right-xs">
                                <a
                                  className="c-button c-tile-stacking_cta -default wait-appear-animation"
                                  href="/blockchain"
                                  aria-label="See our services"
                                  data-scramble-hover=""
                                  data-scramble-scroll=""
                                >
                                  <span
                                    className="c-button_label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    SEE OUR SERVICES
                                  </span>
                                  <span className="c-button_icon">
                                    <span className="c-icon">
                                      <svg
                                        className="svg-arrow-right"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use href="/static/images/sprite.svg#arrow-right"></use>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="c-tile-stacking_visual">
                              <div className="c-tile-stacking_visual_inner">
                                <div
                                  className="c-tile-stacking_visual_media || c-lottie-icon"
                                  data-module-lottie-player="m96"
                                  data-lottie-player-path="/media/service/blockchain_KwrUPE9.json"
                                  data-lottie-id="id_lottie_tile_stack_139_2"
                                >
                                  <canvas
                                    id="id_lottie_tile_stack_139_2_canvas"
                                    width="434"
                                    height="217"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  ></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>

                <li
                  className="c-stacking_item 152"
                  data-stacking="item"
                  style={{
                    '--position-top': '188px',
                    '--area-height': '1659px',
                  }}
                >
                  <div className="c-stacking_area">
                    <div
                      className="c-stacking_trigger"
                      data-stacking="trigger"
                      data-scroll=""
                      data-scroll-repeat=""
                      data-scroll-call="triggerStackingItem"
                      style={{
                        height: '553px',
                      }}
                    ></div>
                    <div className="c-stacking_element" data-stacking="element">
                      <article className="c-tile-stacking">
                        <div className="o-container">
                          <div className="c-tile-stacking_inner || c-heading -h3">
                            <div className="c-tile-stacking_header">
                              <div
                                className="c-tile-stacking_header_inner"
                                data-stacking="header"
                              >
                                <p
                                  className="c-tile-stacking_index || c-text -label"
                                  data-scramble-text=""
                                >
                                  S/003
                                </p>
                                <p className="c-tile-stacking_title || c-heading -h3">
                                  Product Development
                                </p>
                              </div>
                            </div>
                            <div
                              className="c-tile-stacking_content"
                              data-scroll=""
                              data-scroll-call="scrambleText"
                              data-scramble-appear=""
                            >
                              <div className="c-tile-stacking_description || c-text -body">
                                <p>
                                  Bring market-ready products to life with our
                                  product development services. Prototypes &amp;
                                  MVPs, SaaS, web, and mobile applications,
                                  managed services from planning and design to
                                  coding, testing, and ongoing maintenance.
                                </p>
                              </div>

                              <div className="text-right-xs">
                                <a
                                  className="c-button c-tile-stacking_cta -default wait-appear-animation"
                                  href="/product-development"
                                  aria-label="See our services"
                                  data-scramble-scroll=""
                                  data-scramble-hover=""
                                >
                                  <span
                                    className="c-button_label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    SEE OUR SERVICES
                                  </span>
                                  <span className="c-button_icon">
                                    <span className="c-icon">
                                      <svg
                                        className="svg-arrow-right"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use href="/static/images/sprite.svg#arrow-right"></use>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="c-tile-stacking_visual">
                              <div className="c-tile-stacking_visual_inner">
                                <div
                                  className="c-tile-stacking_visual_media || c-lottie-icon"
                                  data-module-lottie-player="m97"
                                  data-lottie-player-path="/media/service/product.json"
                                  data-lottie-id="id_lottie_tile_stack_152_3"
                                >
                                  <canvas
                                    id="id_lottie_tile_stack_152_3_canvas"
                                    width="434"
                                    height="217"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  ></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>

                <li
                  className="c-stacking_item 159"
                  data-stacking="item"
                  style={{
                    '--position-top': '282px',
                    '--area-height': '1106px',
                  }}
                >
                  <div className="c-stacking_area">
                    <div
                      className="c-stacking_trigger"
                      data-stacking="trigger"
                      data-scroll=""
                      data-scroll-repeat=""
                      data-scroll-call="triggerStackingItem"
                      style={{
                        height: '553px',
                      }}
                    ></div>
                    <div className="c-stacking_element" data-stacking="element">
                      <article className="c-tile-stacking">
                        <div className="o-container">
                          <div className="c-tile-stacking_inner || c-heading -h3">
                            <div className="c-tile-stacking_header">
                              <div
                                className="c-tile-stacking_header_inner"
                                data-stacking="header"
                              >
                                <p
                                  className="c-tile-stacking_index || c-text -label"
                                  data-scramble-text=""
                                >
                                  S/004
                                </p>
                                <p className="c-tile-stacking_title || c-heading -h3">
                                  Enterprise Software
                                </p>
                              </div>
                            </div>
                            <div
                              className="c-tile-stacking_content"
                              data-scroll=""
                              data-scroll-call="scrambleText"
                              data-scramble-appear=""
                            >
                              <div className="c-tile-stacking_description || c-text -body">
                                <p>
                                  Scale effectively with our enterprise software
                                  solutions: streamline operations with
                                  customized platforms, enhance productivity
                                  through advanced integrations, and secure your
                                  infrastructure with a robust support systems.
                                </p>
                              </div>

                              <div className="text-right-xs">
                                <a
                                  className="c-button c-tile-stacking_cta -default wait-appear-animation"
                                  href="/enterprise-software"
                                  aria-label="See our services"
                                  data-scramble-hover=""
                                  data-scramble-scroll=""
                                >
                                  <span
                                    className="c-button_label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    SEE OUR SERVICES
                                  </span>
                                  <span className="c-button_icon">
                                    <span className="c-icon">
                                      <svg
                                        className="svg-arrow-right"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use href="/static/images/sprite.svg#arrow-right"></use>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="c-tile-stacking_visual">
                              <div className="c-tile-stacking_visual_inner">
                                <div
                                  className="c-tile-stacking_visual_media || c-lottie-icon"
                                  data-module-lottie-player="m98"
                                  data-lottie-player-path="/media/service/team_WRVVwRk.json"
                                  data-lottie-id="id_lottie_tile_stack_159_4"
                                >
                                  <canvas
                                    id="id_lottie_tile_stack_159_4_canvas"
                                    width="434"
                                    height="217"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  ></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>

                <li
                  className="c-stacking_item 158"
                  data-stacking="item"
                  data-scroll=""
                  data-scroll-position="end,end"
                  data-scroll-offset="0,0"
                  data-scroll-event-progress="stackingProgress"
                  style={{
                    '--position-top': '376px',
                    '--area-height': '553px',
                  }}
                >
                  <div className="c-stacking_area">
                    <div
                      className="c-stacking_trigger"
                      data-stacking="trigger"
                      data-scroll=""
                      data-scroll-repeat=""
                      data-scroll-call="triggerStackingItem"
                      style={{
                        height: '553px',
                      }}
                    ></div>
                    <div className="c-stacking_element" data-stacking="element">
                      <article className="c-tile-stacking">
                        <div className="o-container">
                          <div className="c-tile-stacking_inner || c-heading -h3">
                            <div className="c-tile-stacking_header">
                              <div
                                className="c-tile-stacking_header_inner"
                                data-stacking="header"
                              >
                                <p
                                  className="c-tile-stacking_index || c-text -label"
                                  data-scramble-text=""
                                >
                                  S/005
                                </p>
                                <p className="c-tile-stacking_title || c-heading -h3">
                                  Artificial Intelligence (AI)
                                </p>
                              </div>
                            </div>
                            <div
                              className="c-tile-stacking_content"
                              data-scroll=""
                              data-scroll-call="scrambleText"
                              data-scramble-appear=""
                            >
                              <div className="c-tile-stacking_description || c-text -body">
                                <p>
                                  Enhance operations with AI, &nbsp;from
                                  strategy to development, LLM ntegration,
                                  automated decision systems, and OCR
                                  technology, tailored to optimize performance
                                  and efficiency.
                                </p>
                              </div>

                              <div className="text-right-xs">
                                <a
                                  className="c-button c-tile-stacking_cta -default wait-appear-animation"
                                  href="/artificial-intelligence-ai"
                                  aria-label="See our services"
                                  data-scramble-hover=""
                                  data-scramble-scroll=""
                                >
                                  <span
                                    className="c-button_label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    SEE OUR SERVICES
                                  </span>
                                  <span className="c-button_icon">
                                    <span className="c-icon">
                                      <svg
                                        className="svg-arrow-right"
                                        focusable="false"
                                        aria-hidden="true"
                                      >
                                        <use href="/static/images/sprite.svg#arrow-right"></use>
                                      </svg>
                                    </span>
                                  </span>
                                </a>
                              </div>
                            </div>
                            <div className="c-tile-stacking_visual">
                              <div className="c-tile-stacking_visual_inner">
                                <div
                                  className="c-tile-stacking_visual_media || c-lottie-icon"
                                  data-module-lottie-player="m99"
                                  data-lottie-player-path="/media/service/ai.json"
                                  data-lottie-id="id_lottie_tile_stack_158_5"
                                >
                                  <canvas
                                    id="id_lottie_tile_stack_158_5_canvas"
                                    width="434"
                                    height="217"
                                    style={{
                                      width: '100%',
                                      height: '100%',
                                    }}
                                  ></canvas>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="custom-block simple-text-banner  u-padding-big-bottom">
            <div
              className="c-section-heading"
              data-scroll=""
              data-scroll-offset="25%, 25%"
              data-scroll-call="scrambleText"
              data-scramble-appear=""
            >
              <div className="o-container">
                <div className="c-section-heading_inner || o-grid -cols -gutters-x || c-heading -h2">
                  <div
                    className="c-section-heading_left || o-grid_item u-gc-1/4@from-small"
                    data-scramble-scroll=""
                  >
                    <p className="c-section-heading_separator || c-text -label">
                      /
                    </p>
                    <p
                      className="c-section-heading_category || c-text -label"
                      data-scramble-text=""
                      data-scramble-delay=".1"
                    >
                      Our Clients
                    </p>
                  </div>
                  <div className="c-section-heading_center || o-grid_item u-gc-4/10@from-small">
                    <h2 className="c-section-heading_title || c-heading -h2">
                      We engage with:
                    </h2>
                  </div>
                  <div
                    className="c-section-heading_right || o-grid_item u-gc-10/13@from-small"
                    data-scramble-scroll=""
                  >
                    <p
                      className="c-section-heading_index || c-text -label"
                      data-scramble-text=""
                      data-scramble-delay=".3"
                    >
                      /008
                    </p>

                    <a
                      className="c-button -link -primary -has-icon wait-appear-animation"
                      href="/projects"
                      title="View all"
                      aria-label="View all"
                      data-scramble-hover=""
                      data-scramble-scroll=""
                    >
                      <span className="u-screen-reader-text">View all</span>
                      <span
                        className="c-button_label"
                        data-scramble-text=""
                        data-scramble-delay=".3"
                      >
                        View all
                      </span>
                      <span className="c-button_icon">
                        <span className="c-icon">
                          <svg
                            className="svg-arrow-right"
                            focusable="false"
                            aria-hidden="true"
                          >
                            <use href="/static/images/sprite.svg#arrow-right"></use>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="custom-block  ">
            <div
              className="c-progress-carousel"
              data-module-progress-carousel="m100"
              data-scroll=""
              data-scroll-call="toggle, ProgressCarousel"
              data-scroll-call-self=""
              style={{
                '--items-length': '3',
                '--item-height': '554px',
                '--indicator-progress': '0%',
              }}
            >
              <div className="c-progress-carousel_container || o-container">
                <div
                  className="c-progress-carousel_inner"
                  data-module-cursor="m101"
                  data-scroll=""
                  data-scroll-call="toggle, Cursor"
                  data-scroll-repeat=""
                  data-scroll-ignore-fold=""
                >
                  <Swiper
                    className="c-progress-carousel_list"
                    data-progress-carousel="list"
                    effect={'creative'}
                    creativeEffect={{
                      prev: {
                        shadow: true,
                        translate: [0, 0, -400],
                        opacity: 0,
                      },
                      next: {
                        translate: ['100%', 0, 0],
                        opacity: 1,
                      },
                    }}
                    modules={[EffectCreative]}
                  >
                    <SwiperSlide
                      className="c-progress-carousel_item"
                      data-progress-carousel="item"
                    >
                      <div
                        className="c-progress-carousel_item_content"
                        data-progress-carousel="content"
                        style={{
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(0%, 0px)',
                          opacity: '1',
                        }}
                      >
                        <article
                          className="c-tile-industry"
                          data-scroll=""
                          data-scroll-offset="25%, 25%"
                          data-scroll-call="scrambleText"
                          data-scramble-appear=""
                        >
                          <div className="c-tile-industry_inner">
                            <p
                              className="c-tile-industry_label || c-text -label"
                              data-scramble-text=""
                            >
                              I/001
                            </p>
                            <div className="c-tile-industry_layout">
                              <div className="c-tile-industry_layout_item">
                                <h3 className="c-tile-industry_title || c-heading -h3">
                                  Startups
                                </h3>
                                <div className="c-tile-industry_content">
                                  <div className="c-tile-industry_description || c-wysiwyg">
                                    <p>
                                      Empowering startups with agile development
                                      and cost-effective solutions, we excel in
                                      product thinking, rapid prototyping, MVP
                                      development, and comprehensive mobile and
                                      SaaS solutions.
                                    </p>
                                  </div>

                                  <a
                                    className="c-tile-industry_cta || c-button -default wait-appear-animation"
                                    href="/projects"
                                    aria-label="Explore clients"
                                    title="Explore clients"
                                    data-scramble-hover=""
                                    data-cursor="disable"
                                  >
                                    <span className="u-screen-reader-text">
                                      Explore clients
                                    </span>
                                    <span
                                      className="c-button_label"
                                      data-scramble-text=""
                                    >
                                      Explore clients
                                    </span>
                                    <span className="c-button_icon">
                                      <span className="c-icon">
                                        <svg
                                          className="svg-arrow-right"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use href="/static/images/sprite.svg#arrow-right"></use>
                                        </svg>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>

                              <div className="c-tile-industry_layout_item">
                                <div className="c-tile-industry_media">
                                  <div
                                    className="c-image -cover -scroll-reveal -lazy-loaded"
                                    data-scroll=""
                                    data-scroll-offset="15%, 15%"
                                  >
                                    <div className="c-image_inner">
                                      <img
                                        className="c-image_img"
                                        alt="Startups"
                                        width="311"
                                        height="465"
                                        src="/media/progress-carousel/pexels-cottonbro-8721327_2.webp"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide
                      className="c-progress-carousel_item"
                      data-progress-carousel="item"
                    >
                      <div
                        className="c-progress-carousel_item_content"
                        data-progress-carousel="content"
                      >
                        <article
                          className="c-tile-industry"
                          data-scroll=""
                          data-scroll-offset="25%, 25%"
                          data-scroll-call="scrambleText"
                          data-scramble-appear=""
                        >
                          <div className="c-tile-industry_inner">
                            <p
                              className="c-tile-industry_label || c-text -label"
                              data-scramble-text=""
                            >
                              I/002
                            </p>
                            <div className="c-tile-industry_layout">
                              <div className="c-tile-industry_layout_item">
                                <h3 className="c-tile-industry_title || c-heading -h3">
                                  Enterprises
                                </h3>
                                <div className="c-tile-industry_content">
                                  <div className="c-tile-industry_description || c-wysiwyg">
                                    <p>
                                      Our Enterprise Services streamline
                                      operations by building new products,
                                      deploying ERPs, and enabling access to new
                                      technologies. With diligent monitoring and
                                      support we safeguard your business around
                                      the clock.
                                    </p>
                                  </div>

                                  <a
                                    className="c-tile-industry_cta || c-button -default wait-appear-animation"
                                    href="/projects"
                                    aria-label="Explore Clients"
                                    title="Explore Clients"
                                    data-scramble-hover=""
                                    data-cursor="disable"
                                  >
                                    <span className="u-screen-reader-text">
                                      Explore Clients
                                    </span>
                                    <span
                                      className="c-button_label"
                                      data-scramble-text=""
                                    >
                                      Explore Clients
                                    </span>
                                    <span className="c-button_icon">
                                      <span className="c-icon">
                                        <svg
                                          className="svg-arrow-right"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use href="/static/images/sprite.svg#arrow-right"></use>
                                        </svg>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>

                              <div className="c-tile-industry_layout_item">
                                <div className="c-tile-industry_media">
                                  <div
                                    className="c-image -cover -scroll-reveal -lazy-loaded"
                                    data-scroll=""
                                    data-scroll-offset="15%, 15%"
                                  >
                                    <div className="c-image_inner">
                                      <img
                                        className="c-image_img"
                                        alt="Enterprises"
                                        width="311"
                                        height="465"
                                        src="/media/progress-carousel/pexels-wal_-172619-2838227-22776627_1_aMw44Bg.webp"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </SwiperSlide>

                    <SwiperSlide
                      className="c-progress-carousel_item"
                      data-progress-carousel="item"
                    >
                      <div
                        className="c-progress-carousel_item_content"
                        data-progress-carousel="content"
                      >
                        <article
                          className="c-tile-industry"
                          data-scroll=""
                          data-scroll-offset="25%, 25%"
                          data-scroll-call="scrambleText"
                          data-scramble-appear=""
                        >
                          <div className="c-tile-industry_inner">
                            <p
                              className="c-tile-industry_label || c-text -label"
                              data-scramble-text=""
                            >
                              I/003
                            </p>
                            <div className="c-tile-industry_layout">
                              <div className="c-tile-industry_layout_item">
                                <h3 className="c-tile-industry_title || c-heading -h3">
                                  Web 3 Companies
                                </h3>
                                <div className="c-tile-industry_content">
                                  <div className="c-tile-industry_description || c-wysiwyg">
                                    <p>
                                      From establishing Layer 1 and Layer 2
                                      protocols to crafting intricate smart
                                      contracts and creating engaging frontend,
                                      we spearhead projects forward, whether
                                      it's a meme coin or a complex zkproof
                                      system.
                                    </p>
                                  </div>

                                  <a
                                    className="c-tile-industry_cta || c-button -default wait-appear-animation"
                                    href="/projects"
                                    aria-label="Explore Clients"
                                    title="Explore Clients"
                                    data-scramble-hover=""
                                    data-cursor="disable"
                                  >
                                    <span className="u-screen-reader-text">
                                      Explore Clients
                                    </span>
                                    <span
                                      className="c-button_label"
                                      data-scramble-text=""
                                    >
                                      Explore Clients
                                    </span>
                                    <span className="c-button_icon">
                                      <span className="c-icon">
                                        <svg
                                          className="svg-arrow-right"
                                          focusable="false"
                                          aria-hidden="true"
                                        >
                                          <use href="/static/images/sprite.svg#arrow-right"></use>
                                        </svg>
                                      </span>
                                    </span>
                                  </a>
                                </div>
                              </div>

                              <div className="c-tile-industry_layout_item">
                                <div className="c-tile-industry_media">
                                  <div
                                    className="c-image -cover -scroll-reveal -lazy-loaded"
                                    data-scroll=""
                                    data-scroll-offset="15%, 15%"
                                  >
                                    <div className="c-image_inner">
                                      <img
                                        className="c-image_img"
                                        alt="Web"
                                        companies=""
                                        width="311"
                                        height="465"
                                        src="/media/progress-carousel/pexels-tima-miroshnichenko-7567529_1.webp"
                                        loading="lazy"
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <div className="c-progress-carousel_bullets || c-carousel-bullets">
                    <ul
                      className="c-carousel-bullets_list"
                      data-cursor="disable"
                    >
                      <li className="c-carousel-bullets_item">
                        <button
                          className="c-carousel-bullets_element"
                          data-progress-carousel="bullet"
                        >
                          <span className="u-screen-reader-text">Slide 1</span>
                        </button>
                      </li>

                      <li className="c-carousel-bullets_item">
                        <button
                          className="c-carousel-bullets_element"
                          data-progress-carousel="bullet"
                        >
                          <span className="u-screen-reader-text">Slide 2</span>
                        </button>
                      </li>

                      <li className="c-carousel-bullets_item">
                        <button
                          className="c-carousel-bullets_element"
                          data-progress-carousel="bullet"
                        >
                          <span className="u-screen-reader-text">Slide 3</span>
                        </button>
                      </li>
                    </ul>
                    <div
                      className="c-carousel-bullets_indicator"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div
                    className="c-progress-carousel_cursor"
                    data-cursor="cursor"
                  >
                    <div className="c-progress-carousel_cursor_inner">
                      <span className="c-icon">
                        <svg
                          className="svg-drag-arrow-left"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use href="/static/images/sprite.svg#drag-arrow-left"></use>
                        </svg>
                      </span>
                      <span className="c-text -label">Drag</span>
                      <span className="c-icon">
                        <svg
                          className="svg-drag-arrow-right"
                          focusable="false"
                          aria-hidden="true"
                        >
                          <use href="/static/images/sprite.svg#drag-arrow-right"></use>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="c-section tabs || u-padding-large-top u-padding-big-bottom default">
            <div className="c-tabs-listing list">
              <div
                className="c-tabs"
                data-module-tabs="m102"
                data-scroll=""
                data-scroll-call="scrambleText"
                data-scroll-offset="20%,20%"
              >
                <h2 className="u-screen-reader-text">Tabs</h2>
                <div className="c-tabs_inner">
                  <div className="o-container">
                    <div className="c-tabs_grid">
                      <div
                        className="c-tabs_list || c-text -label"
                        role="tablist"
                        aria-labelledby="tablist-projects"
                      >
                        <button
                          className="c-tabs_tab || c-button -default wait-appear-animation"
                          data-tabs="tab"
                          role="tab"
                          id="tab-project-group-131408"
                          aria-controls="tabpanel-tab-131408"
                          aria-selected="true"
                          data-scramble-hover=""
                        >
                          <span
                            className="c-button_label"
                            data-scramble-text=""
                          >
                            Expertise
                          </span>
                        </button>

                        <button
                          className="c-tabs_tab || c-button -default wait-appear-animation"
                          data-tabs="tab"
                          role="tab"
                          id="tab-project-group-131412"
                          aria-controls="tabpanel-tab-131412"
                          aria-selected="false"
                          data-scramble-hover=""
                          tabIndex="-1"
                        >
                          <span
                            className="c-button_label"
                            data-scramble-text=""
                          >
                            Values
                          </span>
                        </button>

                        <button
                          className="c-tabs_tab || c-button -default wait-appear-animation"
                          data-tabs="tab"
                          role="tab"
                          id="tab-project-group-131416"
                          aria-controls="tabpanel-tab-131416"
                          aria-selected="false"
                          data-scramble-hover=""
                          tabIndex="-1"
                        >
                          <span
                            className="c-button_label"
                            data-scramble-text=""
                          >
                            Methodology
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div
                    className="c-tabs_panel_list"
                    data-tabs="panels-list"
                    style={{
                      '--list-height': '600px',
                    }}
                  >
                    <div
                      className="c-tabs_panel || u-anim-parent is-active"
                      id="tabpanel-tab-131408"
                      role="tabpanel"
                      aria-labelledby="tab-131408"
                    >
                      <article
                        className="c-tabs_tab-item || o-container"
                        data-scramble-appear=""
                      >
                        <div
                          className="c-tabs_tab-item_inner || o-container"
                          style={{
                            backgroundColor: 'var(--dca-gray-lightest)',
                            color: 'var(--dca-black)',
                          }}
                        >
                          <div className="c-tabs_tab-item_header">
                            <p className="c-content-heading_separator || c-heading -h4">
                              /
                            </p>
                            <h2 className="c-content-heading_title || c-heading  -h2">
                              Expertise
                            </h2>
                            <div className="c-tabs_tab-item_header_description">
                              <h3 className="c-tabs_tab-item_description || c-heading -h3"></h3>
                            </div>
                          </div>
                          <div className="c-tabs_tab-item_body || o-grid -cols -gutters-x">
                            <div className="c-tabs_tab-item_index">
                              <span className="c-tabs_tab-item_index_inner">
                                1
                              </span>
                            </div>
                            <div className="c-tabs_tab-item_content">
                              <ol
                                className="c-stacked-list c-stacked-list-tabs is-fullwidth || u-anim-parent"
                                data-scroll=""
                                data-scroll-offset="20%,20%"
                                data-scramble-appear=""
                                data-scroll-call="scrambleText"
                              >
                                <li
                                  className="default"
                                  style={{ '--index': '1' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".1"
                                  >
                                    &nbsp;
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Edgetech
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        The latest in technology trends, from
                                        blockchain to artificial intelligence.
                                      </p>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="default"
                                  style={{ '--index': '2' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".2"
                                  >
                                    &nbsp;
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      In-House
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        Professional local talent in your
                                        timezone, no outsourcing involved.
                                        Direct communication and collaboration.
                                      </p>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="default"
                                  style={{ '--index': '3' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    &nbsp;
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Experienced
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        Hackers to straight-A students, over 90%
                                        of our developers are senior engineers
                                        with various areas of expertise
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div
                      className="c-tabs_panel || u-anim-parent is-hidden"
                      id="tabpanel-tab-131412"
                      role="tabpanel"
                      aria-labelledby="tab-131412"
                    >
                      <article
                        className="c-tabs_tab-item || o-container"
                        data-scramble-appear=""
                      >
                        <div
                          className="c-tabs_tab-item_inner || o-container"
                          style={{
                            backgroundColor: 'var(--dca-gray-lightest)',
                            color: 'var(--dca-black)',
                          }}
                        >
                          <div className="c-tabs_tab-item_header">
                            <p className="c-content-heading_separator || c-heading -h4">
                              /
                            </p>
                            <h2 className="c-content-heading_title || c-heading  -h2">
                              Values
                            </h2>
                            <div className="c-tabs_tab-item_header_description">
                              <h3 className="c-tabs_tab-item_description || c-heading -h3"></h3>
                            </div>
                          </div>
                          <div className="c-tabs_tab-item_body || o-grid -cols -gutters-x">
                            <div className="c-tabs_tab-item_index">
                              <span className="c-tabs_tab-item_index_inner">
                                2
                              </span>
                            </div>
                            <div className="c-tabs_tab-item_content">
                              <ol
                                className="c-stacked-list c-stacked-list-tabs is-fullwidth || u-anim-parent is-inview"
                                data-scroll=""
                                data-scroll-offset="20%,20%"
                                data-scramble-appear=""
                                data-scroll-call="scrambleText"
                              >
                                <li
                                  className="default"
                                  style={{ '--index': '1' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".1"
                                  >
                                    01
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Flexibility
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        We adapt swiftly to the evolving needs
                                        of our clients and markets, ensuring
                                        tailored solutions.
                                      </p>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="default"
                                  style={{ '--index': '2' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".2"
                                  >
                                    02
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Performance
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        Driven by excellence, we consistently
                                        deliver top-tier results, setting
                                        industry standards for quality and
                                        efficiency.
                                      </p>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="default"
                                  style={{ '--index': '3' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    03
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Innovation
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        Our commitment to innovation keeps us at
                                        the forefront of technology, empowering
                                        us to solve complex challenges
                                        creatively.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>

                    <div
                      className="c-tabs_panel || u-anim-parent is-hidden"
                      id="tabpanel-tab-131416"
                      role="tabpanel"
                      aria-labelledby="tab-131416"
                    >
                      <article
                        className="c-tabs_tab-item || o-container"
                        data-scramble-appear=""
                      >
                        <div
                          className="c-tabs_tab-item_inner || o-container"
                          style={{
                            backgroundColor: 'var(--dca-gray-lightest)',
                            color: 'var(--dca-black)',
                          }}
                        >
                          <div className="c-tabs_tab-item_header">
                            <p className="c-content-heading_separator || c-heading -h4">
                              /
                            </p>
                            <h2 className="c-content-heading_title || c-heading  -h2">
                              Methodology
                            </h2>
                            <div className="c-tabs_tab-item_header_description">
                              <h3 className="c-tabs_tab-item_description || c-heading -h3"></h3>
                            </div>
                          </div>
                          <div className="c-tabs_tab-item_body || o-grid -cols -gutters-x">
                            <div className="c-tabs_tab-item_index">
                              <span className="c-tabs_tab-item_index_inner">
                                3
                              </span>
                            </div>
                            <div className="c-tabs_tab-item_content">
                              <ol
                                className="c-stacked-list c-stacked-list-tabs is-fullwidth || u-anim-parent is-inview"
                                data-scroll=""
                                data-scroll-offset="20%,20%"
                                data-scramble-appear=""
                                data-scroll-call="scrambleText"
                              >
                                <li
                                  className="default"
                                  style={{ '--index': '1' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".1"
                                  >
                                    01
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Product Thinking
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        <span style={{ color: '#000000' }}>
                                          Product-centric mindset, focusing on
                                          delivering functional, user-oriented
                                          solutions that drive value.
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="default"
                                  style={{ '--index': '2' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".2"
                                  >
                                    02
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Collaborative
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        Working closely with your team to ensure
                                        their vision and objectives are fully
                                        realized in every project.
                                      </p>
                                    </div>
                                  </div>
                                </li>

                                <li
                                  className="default"
                                  style={{ '--index': '3' }}
                                >
                                  <p
                                    className="c-stacked-list_index || c-text -label"
                                    data-scramble-text=""
                                    data-scramble-delay=".3"
                                  >
                                    03
                                  </p>
                                  <div className="c-stacked-list_block title">
                                    <div className="c-stacked-list_title || c-text -body">
                                      Scalable
                                    </div>
                                  </div>
                                  <div className="c-stacked-list_block content">
                                    <div className="c-stacked-list_content || c-text -body">
                                      <p>
                                        Designed to scale seamlessly with your
                                        business needs, ensuring robust
                                        solutions that accommodate growth and
                                        change.
                                      </p>
                                    </div>
                                  </div>
                                </li>
                              </ol>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div
            className="custom-block c-blockquote"
            data-scroll=""
            data-scroll-offset="100%, 0"
            data-scroll-css-progress=""
          >
            <div className="c-blockquote_inner || o-container">
              <figure className="c-blockquote_figure">
                <blockquote className="c-blockquote_element" cite="">
                  <div
                    className="c-fadein-text"
                    data-module-fadein-text="m103"
                    data-fadein-text-base-color="#B3B2B2"
                  >
                    <span
                      className="c-fadein-text_active_content"
                      style={{ '--base-color': '#B3B2B2' }}
                    >
                      “
                    </span>
                    <div
                      className="c-fadein-text_area"
                      data-scroll=""
                      data-scroll-offset="50%, 50%"
                      data-scroll-event-progress="fadeinTextProgress"
                    ></div>
                    <p
                      className="c-fadein-text_paragraph"
                      data-fadein-text="content"
                      aria-label="I was truly impressed by their level of flexibility, professionalism,
 and dedication when it came to tackling the workload. Their commitment to the task at hand, coupled with their serious approach, truly stood out to me."
                    >
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            I
                          </span>
                        </span>
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            w
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                        </span>
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            u
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            y
                          </span>
                        </span>
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                        </span>
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            b
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            y
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            v
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            f
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            f
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            x
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            b
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            y
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            ,
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            f
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            n
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            ,
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            n
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            n
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            w
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            n
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            k
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            n
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            g
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            w
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            k
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            .
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            T
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            n
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            k
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            n
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            ,
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            u
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            w
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            i
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            u
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            p
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            a
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            c
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            h
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            ,
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            r
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            u
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            l
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            y
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            s
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            d
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            u
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            t
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            o
                          </span>
                        </span>{' '}
                      </span>
                      <span
                        className="c-fadein-paragraph_line"
                        aria-hidden="true"
                        style={{
                          position: 'relative',
                          display: 'inline',
                          textAlign: 'start',
                        }}
                      >
                        <span
                          className="c-fadein-paragraph_word"
                          aria-hidden="true"
                          style={{
                            position: 'relative',
                            display: 'inline',
                          }}
                        >
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            m
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            e
                          </span>
                          <span
                            className="c-fadein-paragraph_char"
                            aria-hidden="true"
                            style={{
                              position: 'relative',
                              display: 'inline',
                              color: 'rgb(179, 178, 178)',
                            }}
                          >
                            .
                          </span>
                        </span>
                      </span>
                    </p>
                  </div>
                </blockquote>
                <figcaption className="c-blockquote_figcaption">
                  <div className="c-blockquote_figcaption_inner">
                    <div className="c-blockquote_portrait">
                      <div className="c-blockquote_portrait_inner">
                        <div
                          className="c-image -cover -scroll-reveal -lazy-loaded"
                          data-scroll=""
                          data-scroll-offset="15%, 15%"
                        >
                          <div className="c-image_inner">
                            <img
                              className="c-image_img"
                              alt=""
                              width="155"
                              height="179"
                              src="/media/blockquote/amber_logo_bw_long.webp"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="c-blockquote_infos">
                      <p className="c-text -label">
                        <span>Eugen</span>
                        <span>Baicea</span>
                      </p>
                      <p className="c-text -label">
                        <span>Sr. Producer</span>
                        <span>Amber Studio</span>
                      </p>
                    </div>
                  </div>
                </figcaption>
              </figure>
              <div
                className="c-blockquote_background || c-image -cover -scroll-reveal -parallax -lazy-loaded"
                data-scroll=""
                data-scroll-offset="15%, 15%"
                data-module-image-parallax="m104"
                style={{ '--parallax-scale': '1.1603839441535777' }}
              >
                <picture
                  className="c-image_inner"
                  data-scroll=""
                  data-scroll-speed="-.1"
                  data-image-parallax="parallax"
                >
                  <img
                    className="c-image_img"
                    alt=""
                    width="2160"
                    height="1664"
                    src="/media/blockquote/blockquote_jDGMjsK-min.webp"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          </div>
          <section className="custom-block big-title-block c-section || u-padding-big-top ">
            <div
              className="c-push-project"
              data-module-push-reveal="m105"
              data-scroll=""
              data-scroll-offset="25%, 0"
              data-scroll-call="triggerReveal, PushReveal"
              data-scroll-call-self=""
              data-scroll-module-progress=""
            >
              <div className="o-container">
                <div className="c-push-project_inner">
                  <h2 className="c-push-project_title">
                    <span className="c-push-project_title_line">
                      <span
                        className="c-push-project_title_line_inner"
                        data-push-reveal="line"
                        style={{
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(0px, 100%)',
                        }}
                      >
                        <span>We</span>
                        <span>Drive</span>
                      </span>
                    </span>
                    <span className="c-push-project_title_line">
                      <span
                        className="c-push-project_title_line_inner"
                        data-push-reveal="line"
                        style={{
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(-1em, 100%)',
                        }}
                      >
                        <span className="c-push-project_title_icon">
                          <span className="c-icon">
                            <svg
                              className="svg-arrow-right"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use href="/static/images/sprite.svg#arrow-right"></use>
                            </svg>
                          </span>
                        </span>
                        <span>Your</span>
                      </span>
                    </span>
                    <span className="c-push-project_title_line">
                      <span
                        className="c-push-project_title_line_inner"
                        data-push-reveal="line"
                        style={{
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(0px, 100%)',
                        }}
                      >
                        <span>Systems</span>
                      </span>
                    </span>
                    <span className="c-push-project_title_line">
                      <span
                        className="c-push-project_title_line_inner"
                        data-push-reveal="line"
                        style={{
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(0px, 100%)',
                        }}
                      >
                        <span>Fwrd</span>
                      </span>
                    </span>
                  </h2>
                  <div
                    className="c-push-project_content"
                    data-scroll=""
                    data-scroll-offset="25%, 25%"
                    data-scroll-call="scrambleText"
                    data-scramble-appear=""
                  >
                    <div className="c-push-project_description || c-text -body">
                      <p>Digital architectures for an ever-shifting world.</p>
                    </div>

                    <div className="container-cta">
                      <a
                        className="c-button c-push-project_cta -default -has-icon wait-appear-animation"
                        href="/contact"
                        title="Let's talk"
                        aria-label="Let's talk"
                        data-scramble-hover=""
                      >
                        <span className="u-screen-reader-text">Let's talk</span>
                        <span className="c-button_label" data-scramble-text="">
                          &nbsp;
                        </span>
                        <span className="c-button_icon">
                          <span className="c-icon">
                            <svg
                              className="svg-arrow-right"
                              focusable="false"
                              aria-hidden="true"
                            >
                              <use href="/static/images/sprite.svg#arrow-right"></use>
                            </svg>
                          </span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div
            className="custom-block c-separator"
            data-scramble-appear=""
            data-scroll=""
            data-scroll-offset="25%, 25%"
            data-scroll-call="scrambleText"
          >
            <div className="c-separator_inner">
              <p
                className="c-separator_label || c-text -label"
                data-scramble-text=""
              >
                &nbsp;
              </p>
              <p
                className="c-separator_label || c-text -label"
                data-scramble-text=""
                data-scramble-delay=".1"
              >
                &nbsp;
              </p>
            </div>
            <div
              className="c-separator_image || c-image -scroll-reveal -cover -parallax -lazy-loaded"
              data-scroll=""
              data-scroll-offset="15%, 15%"
              data-module-image-parallax="m106"
              style={{ '--parallax-scale': '1.3789690721649484' }}
            >
              <picture
                className="c-image_inner"
                data-scroll=""
                data-scroll-speed="-.1"
                data-image-parallax="parallax"
              >
                <img
                  className="c-image_img"
                  alt=""
                  width="1920"
                  height="1080"
                  src="/static/images/footer.jpg"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
