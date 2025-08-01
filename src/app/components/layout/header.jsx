'use client';
import './header.css';
import { useEffect } from 'react';

export default function Header() {
  useEffect(() => {
    const html = document.querySelector('html');
    const menuModalInner = document.querySelector('.c-menu_modal_inner');
    const burgerBtn = document.querySelector('.c-burger-button');
    menuModalInner.classList.add('is-ready');
    burgerBtn.addEventListener('click', () => {
      html.classList.toggle('has-menu-open');
    });
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
