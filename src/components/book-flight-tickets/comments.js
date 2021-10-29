import React from "react";
import Commenter1 from "../../assets/commenter1.jfif";
import Commenter2 from "../../assets/commenter2.jfif";
import Commenter3 from "../../assets/commenter3.jfif";
import "./comments.scss";
const Comments = () => {
  return (
    <React.Fragment>
      <div className="comments-wrapper">
        <div className="comments-header">
          <span className="comments-header-span">
            What <span className="comments-header-span-highlight">Tripma</span>{" "}
            users are saying
          </span>
        </div>
        <div className="comments-grid-container">
          <div className="comments-grid-container__item--1">
            <div className="comments-container">
              <img
                className="comments-container-img"
                src={Commenter1}
                alt="Commenter1"
              />
              <div className="comments-container-desc">
                <div className="comments-container-desc-name">
                  <span>Yifei Chen</span>
                </div>
                <div className="comments-container-desc-place">
                  <span>Seoul, South Korea | April 2019</span>
                </div>
                <div className="comments-container-desc-stars">
                  <svg
                    width="120"
                    height="32"
                    viewBox="0 0 120 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.5754 11.6829C11.771 11.3683 12.229 11.3683 12.4246 11.6829L14.908 15.6771C14.9768 15.7878 15.0862 15.8672 15.2127 15.8985L19.7788 17.0261C20.1385 17.1149 20.28 17.5504 20.0412 17.8337L17.01 21.4298C16.9259 21.5295 16.8842 21.658 16.8936 21.788L17.2322 26.4791C17.2588 26.8486 16.8884 27.1178 16.5451 26.9782L12.1883 25.2066C12.0676 25.1575 11.9324 25.1575 11.8117 25.2066L7.45488 26.9782C7.11165 27.1178 6.74115 26.8486 6.76783 26.4791L7.10644 21.788C7.11583 21.658 7.07406 21.5295 6.99004 21.4298L3.95879 17.8337C3.71999 17.5504 3.86151 17.1149 4.22122 17.0261L8.78727 15.8985C8.91383 15.8672 9.02318 15.7878 9.09202 15.6771L11.5754 11.6829Z"
                      fill="url(#paint0_linear_1620:4818)"
                    />
                    <path
                      d="M35.5754 11.6829C35.771 11.3683 36.229 11.3683 36.4246 11.6829L38.908 15.6771C38.9768 15.7878 39.0862 15.8672 39.2127 15.8985L43.7788 17.0261C44.1385 17.1149 44.28 17.5504 44.0412 17.8337L41.01 21.4298C40.9259 21.5295 40.8842 21.658 40.8936 21.788L41.2322 26.4791C41.2588 26.8486 40.8884 27.1178 40.5451 26.9782L36.1883 25.2066C36.0676 25.1575 35.9324 25.1575 35.8117 25.2066L31.4549 26.9782C31.1117 27.1178 30.7412 26.8486 30.7678 26.4791L31.1064 21.788C31.1158 21.658 31.0741 21.5295 30.99 21.4298L27.9588 17.8337C27.72 17.5504 27.8615 17.1149 28.2212 17.0261L32.7873 15.8985C32.9138 15.8672 33.0232 15.7878 33.092 15.6771L35.5754 11.6829Z"
                      fill="url(#paint1_linear_1620:4818)"
                    />
                    <path
                      d="M59.5754 11.6829C59.771 11.3683 60.229 11.3683 60.4246 11.6829L62.908 15.6771C62.9768 15.7878 63.0862 15.8672 63.2127 15.8985L67.7788 17.0261C68.1385 17.1149 68.28 17.5504 68.0412 17.8337L65.01 21.4298C64.9259 21.5295 64.8842 21.658 64.8936 21.788L65.2322 26.4791C65.2588 26.8486 64.8884 27.1178 64.5451 26.9782L60.1883 25.2066C60.0676 25.1575 59.9324 25.1575 59.8117 25.2066L55.4549 26.9782C55.1117 27.1178 54.7412 26.8486 54.7678 26.4791L55.1064 21.788C55.1158 21.658 55.0741 21.5295 54.99 21.4298L51.9588 17.8337C51.72 17.5504 51.8615 17.1149 52.2212 17.0261L56.7873 15.8985C56.9138 15.8672 57.0232 15.7878 57.092 15.6771L59.5754 11.6829Z"
                      fill="url(#paint2_linear_1620:4818)"
                    />
                    <path
                      d="M83.5754 11.6829C83.771 11.3683 84.229 11.3683 84.4246 11.6829L86.908 15.6771C86.9768 15.7878 87.0862 15.8672 87.2127 15.8985L91.7788 17.0261C92.1385 17.1149 92.28 17.5504 92.0412 17.8337L89.01 21.4298C88.9259 21.5295 88.8842 21.658 88.8936 21.788L89.2322 26.4791C89.2588 26.8486 88.8884 27.1178 88.5451 26.9782L84.1883 25.2066C84.0676 25.1575 83.9324 25.1575 83.8117 25.2066L79.4549 26.9782C79.1117 27.1178 78.7412 26.8486 78.7678 26.4791L79.1064 21.788C79.1158 21.658 79.0741 21.5295 78.99 21.4298L75.9588 17.8337C75.72 17.5504 75.8615 17.1149 76.2212 17.0261L80.7873 15.8985C80.9138 15.8672 81.0232 15.7878 81.092 15.6771L83.5754 11.6829Z"
                      fill="url(#paint3_linear_1620:4818)"
                    />
                    <path
                      d="M107.575 11.6829C107.771 11.3683 108.229 11.3683 108.425 11.6829L110.908 15.6771C110.977 15.7878 111.086 15.8672 111.213 15.8985L115.779 17.0261C116.138 17.1149 116.28 17.5504 116.041 17.8337L113.01 21.4298C112.926 21.5295 112.884 21.658 112.894 21.788L113.232 26.4791C113.259 26.8486 112.888 27.1178 112.545 26.9782L108.188 25.2066C108.068 25.1575 107.932 25.1575 107.812 25.2066L103.455 26.9782C103.112 27.1178 102.741 26.8486 102.768 26.4791L103.106 21.788C103.116 21.658 103.074 21.5295 102.99 21.4298L99.9588 17.8337C99.72 17.5504 99.8615 17.1149 100.221 17.0261L104.787 15.8985C104.914 15.8672 105.023 15.7878 105.092 15.6771L107.575 11.6829Z"
                      fill="url(#paint4_linear_1620:4818)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1620:4818"
                        x1="12"
                        y1="11"
                        x2="12"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1620:4818"
                        x1="36"
                        y1="11"
                        x2="36"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1620:4818"
                        x1="60"
                        y1="11"
                        x2="60"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1620:4818"
                        x1="84"
                        y1="11"
                        x2="84"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_1620:4818"
                        x1="108"
                        y1="11"
                        x2="108"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="comments-container-desc-comment">
                  <span>
                    What a great experience using Tripma! I booked all of my
                    flights for my gap year through Tripma and never had any
                    issues. When I had to cancel a flight because of an
                    emergency, Tripma support helped me{" "}
                    <span className="comments-container-desc-comment-highlight">
                      read more...
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="comments-grid-container__item--2">
            <div className="comments-container">
              <img
                className="comments-container-img"
                src={Commenter2}
                alt="Commenter2"
              />
              <div className="comments-container-desc">
                <div className="comments-container-desc-name">
                  <span>Kaori Yamaguchi</span>
                </div>
                <div className="comments-container-desc-place">
                  <span>Honolulu, Hawaii | February 2017</span>
                </div>
                <div className="comments-container-desc-stars">
                  <svg
                    width="121"
                    height="32"
                    viewBox="0 0 121 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.242 11.6829C12.4376 11.3683 12.8956 11.3683 13.0912 11.6829L15.5746 15.6771C15.6434 15.7878 15.7528 15.8672 15.8794 15.8985L20.4454 17.0261C20.8051 17.1149 20.9466 17.5504 20.7078 17.8337L17.6766 21.4298C17.5926 21.5295 17.5508 21.658 17.5602 21.788L17.8988 26.4791C17.9255 26.8486 17.555 27.1178 17.2118 26.9782L12.855 25.2066C12.7342 25.1575 12.599 25.1575 12.4783 25.2066L8.1215 26.9782C7.77828 27.1178 7.40778 26.8486 7.43446 26.4791L7.77307 21.788C7.78245 21.658 7.74068 21.5295 7.65667 21.4298L4.62542 17.8337C4.38661 17.5504 4.52813 17.1149 4.88784 17.0261L9.4539 15.8985C9.58046 15.8672 9.68981 15.7878 9.75864 15.6771L12.242 11.6829Z"
                      fill="url(#paint0_linear_1620:4836)"
                    />
                    <path
                      d="M36.242 11.6829C36.4376 11.3683 36.8956 11.3683 37.0912 11.6829L39.5746 15.6771C39.6434 15.7878 39.7528 15.8672 39.8794 15.8985L44.4454 17.0261C44.8051 17.1149 44.9466 17.5504 44.7078 17.8337L41.6766 21.4298C41.5926 21.5295 41.5508 21.658 41.5602 21.788L41.8988 26.4791C41.9255 26.8486 41.555 27.1178 41.2118 26.9782L36.855 25.2066C36.7342 25.1575 36.599 25.1575 36.4783 25.2066L32.1215 26.9782C31.7783 27.1178 31.4078 26.8486 31.4345 26.4791L31.7731 21.788C31.7825 21.658 31.7407 21.5295 31.6567 21.4298L28.6254 17.8337C28.3866 17.5504 28.5281 17.1149 28.8878 17.0261L33.4539 15.8985C33.5805 15.8672 33.6898 15.7878 33.7586 15.6771L36.242 11.6829Z"
                      fill="url(#paint1_linear_1620:4836)"
                    />
                    <path
                      d="M60.242 11.6829C60.4376 11.3683 60.8956 11.3683 61.0912 11.6829L63.5746 15.6771C63.6434 15.7878 63.7528 15.8672 63.8794 15.8985L68.4454 17.0261C68.8051 17.1149 68.9466 17.5504 68.7078 17.8337L65.6766 21.4298C65.5926 21.5295 65.5508 21.658 65.5602 21.788L65.8988 26.4791C65.9255 26.8486 65.555 27.1178 65.2118 26.9782L60.855 25.2066C60.7342 25.1575 60.599 25.1575 60.4783 25.2066L56.1215 26.9782C55.7783 27.1178 55.4078 26.8486 55.4345 26.4791L55.7731 21.788C55.7825 21.658 55.7407 21.5295 55.6567 21.4298L52.6254 17.8337C52.3866 17.5504 52.5281 17.1149 52.8878 17.0261L57.4539 15.8985C57.5805 15.8672 57.6898 15.7878 57.7586 15.6771L60.242 11.6829Z"
                      fill="url(#paint2_linear_1620:4836)"
                    />
                    <path
                      d="M84.242 11.6829C84.4376 11.3683 84.8956 11.3683 85.0912 11.6829L87.5746 15.6771C87.6434 15.7878 87.7528 15.8672 87.8794 15.8985L92.4454 17.0261C92.8051 17.1149 92.9466 17.5504 92.7078 17.8337L89.6766 21.4298C89.5926 21.5295 89.5508 21.658 89.5602 21.788L89.8988 26.4791C89.9255 26.8486 89.555 27.1178 89.2118 26.9782L84.855 25.2066C84.7342 25.1575 84.599 25.1575 84.4783 25.2066L80.1215 26.9782C79.7783 27.1178 79.4078 26.8486 79.4345 26.4791L79.7731 21.788C79.7825 21.658 79.7407 21.5295 79.6567 21.4298L76.6254 17.8337C76.3866 17.5504 76.5281 17.1149 76.8878 17.0261L81.4539 15.8985C81.5805 15.8672 81.6898 15.7878 81.7586 15.6771L84.242 11.6829Z"
                      fill="url(#paint3_linear_1620:4836)"
                    />
                    <path
                      d="M108.102 24.2802L108.102 24.2802L104.49 25.749L104.77 21.86C104.799 21.47 104.673 21.0843 104.421 20.7853L101.908 17.8041L105.694 16.8693C106.073 16.7756 106.401 16.5372 106.608 16.2051L108.667 12.8939L110.725 16.2051L111.575 15.6771L110.725 16.2051C110.932 16.5372 111.26 16.7756 111.64 16.8693L115.425 17.8041L112.912 20.7853C112.66 21.0843 112.535 21.47 112.563 21.86L112.843 25.749L109.232 24.2802L108.855 25.2066L109.232 24.2802C108.869 24.1329 108.464 24.1329 108.102 24.2802ZM101.128 17.9969L101.128 17.9967C101.128 17.9968 101.128 17.9968 101.128 17.9969L101.008 17.5115L101.128 17.9969Z"
                      stroke="url(#paint4_linear_1620:4836)"
                      stroke-width="2"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1620:4836"
                        x1="12.6666"
                        y1="11"
                        x2="12.6666"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1620:4836"
                        x1="36.6666"
                        y1="11"
                        x2="36.6666"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1620:4836"
                        x1="60.6666"
                        y1="11"
                        x2="60.6666"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1620:4836"
                        x1="84.6666"
                        y1="11"
                        x2="84.6666"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_1620:4836"
                        x1="108.667"
                        y1="11"
                        x2="108.667"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="comments-container-desc-comment">
                  <span>
                    My family and I visit Hawaii every year, and we usually book
                    our flights using other services. Tripma was recommened to
                    us by a long time friend, and I’m so glad we tried it out!
                    The process was easy and{" "}
                    <span className="comments-container-desc-comment-highlight">
                      read more...
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="comments-grid-container__item--3">
            <div className="comments-container">
              <img
                className="comments-container-img"
                src={Commenter3}
                alt="Commenter3"
              />
              <div className="comments-container-desc">
                <div className="comments-container-desc-name">
                  <span>Anthony Lewis</span>
                </div>
                <div className="comments-container-desc-place">
                  <span>Berlin, Germany | April 2019</span>
                </div>
                <div className="comments-container-desc-stars">
                  <svg
                    width="121"
                    height="32"
                    viewBox="0 0 121 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9086 11.6829C12.1043 11.3683 12.5622 11.3683 12.7579 11.6829L15.2412 15.6771C15.3101 15.7878 15.4194 15.8672 15.546 15.8985L20.112 17.0261C20.4717 17.1149 20.6133 17.5504 20.3745 17.8337L17.3432 21.4298C17.2592 21.5295 17.2174 21.658 17.2268 21.788L17.5654 26.4791C17.5921 26.8486 17.2216 27.1178 16.8784 26.9782L12.5216 25.2066C12.4008 25.1575 12.2657 25.1575 12.1449 25.2066L7.78813 26.9782C7.4449 27.1178 7.07441 26.8486 7.10108 26.4791L7.43969 21.788C7.44908 21.658 7.40731 21.5295 7.32329 21.4298L4.29204 17.8337C4.05324 17.5504 4.19476 17.1149 4.55447 17.0261L9.12052 15.8985C9.24708 15.8672 9.35644 15.7878 9.42527 15.6771L11.9086 11.6829Z"
                      fill="url(#paint0_linear_1620:4854)"
                    />
                    <path
                      d="M35.9086 11.6829C36.1043 11.3683 36.5622 11.3683 36.7579 11.6829L39.2412 15.6771C39.3101 15.7878 39.4194 15.8672 39.546 15.8985L44.112 17.0261C44.4717 17.1149 44.6133 17.5504 44.3745 17.8337L41.3432 21.4298C41.2592 21.5295 41.2174 21.658 41.2268 21.788L41.5654 26.4791C41.5921 26.8486 41.2216 27.1178 40.8784 26.9782L36.5216 25.2066C36.4008 25.1575 36.2657 25.1575 36.1449 25.2066L31.7881 26.9782C31.4449 27.1178 31.0744 26.8486 31.1011 26.4791L31.4397 21.788C31.4491 21.658 31.4073 21.5295 31.3233 21.4298L28.292 17.8337C28.0532 17.5504 28.1948 17.1149 28.5545 17.0261L33.1205 15.8985C33.2471 15.8672 33.3564 15.7878 33.4253 15.6771L35.9086 11.6829Z"
                      fill="url(#paint1_linear_1620:4854)"
                    />
                    <path
                      d="M59.9086 11.6829C60.1043 11.3683 60.5622 11.3683 60.7579 11.6829L63.2412 15.6771C63.3101 15.7878 63.4194 15.8672 63.546 15.8985L68.112 17.0261C68.4717 17.1149 68.6133 17.5504 68.3745 17.8337L65.3432 21.4298C65.2592 21.5295 65.2174 21.658 65.2268 21.788L65.5654 26.4791C65.5921 26.8486 65.2216 27.1178 64.8784 26.9782L60.5216 25.2066C60.4008 25.1575 60.2657 25.1575 60.1449 25.2066L55.7881 26.9782C55.4449 27.1178 55.0744 26.8486 55.1011 26.4791L55.4397 21.788C55.4491 21.658 55.4073 21.5295 55.3233 21.4298L52.292 17.8337C52.0532 17.5504 52.1948 17.1149 52.5545 17.0261L57.1205 15.8985C57.2471 15.8672 57.3564 15.7878 57.4253 15.6771L59.9086 11.6829Z"
                      fill="url(#paint2_linear_1620:4854)"
                    />
                    <path
                      d="M83.9086 11.6829C84.1043 11.3683 84.5622 11.3683 84.7579 11.6829L87.2412 15.6771C87.3101 15.7878 87.4194 15.8672 87.546 15.8985L92.112 17.0261C92.4717 17.1149 92.6133 17.5504 92.3745 17.8337L89.3432 21.4298C89.2592 21.5295 89.2174 21.658 89.2268 21.788L89.5654 26.4791C89.5921 26.8486 89.2216 27.1178 88.8784 26.9782L84.5216 25.2066C84.4008 25.1575 84.2657 25.1575 84.1449 25.2066L79.7881 26.9782C79.4449 27.1178 79.0744 26.8486 79.1011 26.4791L79.4397 21.788C79.4491 21.658 79.4073 21.5295 79.3233 21.4298L76.292 17.8337C76.0532 17.5504 76.1948 17.1149 76.5545 17.0261L81.1205 15.8985C81.2471 15.8672 81.3564 15.7878 81.4253 15.6771L83.9086 11.6829Z"
                      fill="url(#paint3_linear_1620:4854)"
                    />
                    <path
                      d="M107.909 11.6829C108.104 11.3683 108.562 11.3683 108.758 11.6829L111.241 15.6771C111.31 15.7878 111.419 15.8672 111.546 15.8985L116.112 17.0261C116.472 17.1149 116.613 17.5504 116.374 17.8337L113.343 21.4298C113.259 21.5295 113.217 21.658 113.227 21.788L113.565 26.4791C113.592 26.8486 113.222 27.1178 112.878 26.9782L108.522 25.2066C108.401 25.1575 108.266 25.1575 108.145 25.2066L103.788 26.9782C103.445 27.1178 103.074 26.8486 103.101 26.4791L103.44 21.788C103.449 21.658 103.407 21.5295 103.323 21.4298L100.292 17.8337C100.053 17.5504 100.195 17.1149 100.554 17.0261L105.121 15.8985C105.247 15.8672 105.356 15.7878 105.425 15.6771L107.909 11.6829Z"
                      fill="url(#paint4_linear_1620:4854)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_1620:4854"
                        x1="12.3333"
                        y1="11"
                        x2="12.3333"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint1_linear_1620:4854"
                        x1="36.3333"
                        y1="11"
                        x2="36.3333"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint2_linear_1620:4854"
                        x1="60.3333"
                        y1="11"
                        x2="60.3333"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint3_linear_1620:4854"
                        x1="84.3333"
                        y1="11"
                        x2="84.3333"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                      <linearGradient
                        id="paint4_linear_1620:4854"
                        x1="108.333"
                        y1="11"
                        x2="108.333"
                        y2="29"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#605DEC" />
                        <stop offset="1" stop-color="#2A26D9" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="comments-container-desc-comment">
                  <span>
                    When I was looking to book my flight to Berlin from LAX,
                    Tripma had the best browsing experiece so I figured I’d give
                    it a try. It was my first time using Tripma, but I’d
                    definitely recommend it to a friend and use it for{" "}
                    <span className="comments-container-desc-comment-highlight">
                      read more...
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Comments;
