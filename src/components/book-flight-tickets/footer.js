import React from "react";
import GooglePlayimg from '../../assets/googleplay.png';
import "./footer.scss";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <div></div>
        <div className="footer-content-col1">
          <span>
            <svg
              width="131"
              height="54"
              viewBox="0 0 131 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6533 16.3051H12V12H32.7089V16.3051H25.0556V34.9979C25.0556 35.4952 24.6525 35.8983 24.1552 35.8983C21.6689 35.8983 19.6533 33.8827 19.6533 31.3964V16.3051Z"
                fill="#605DEC"
              />
              <path
                d="M44.3751 21.1149C44.4544 22.1933 43.6623 23.1395 42.5867 23.251L41.5739 23.3559C40.1195 23.4915 39.0921 23.8983 38.4919 24.5763C37.8916 25.2316 37.5915 26.113 37.5915 27.2203V34.8983C37.5915 35.4506 37.1438 35.8983 36.5915 35.8983H34.3623C33.2577 35.8983 32.3623 35.0029 32.3623 33.8983V20.2542C32.3623 19.702 32.81 19.2542 33.3623 19.2542H36.3837C36.936 19.2542 37.3837 19.702 37.3837 20.2542V22.0678C38.2379 20.1469 40.004 19.096 42.6821 18.9153C43.5253 18.859 44.2559 19.4938 44.3179 20.3366L44.3751 21.1149Z"
                fill="#605DEC"
              />
              <path
                d="M46.2617 20.2542C46.2617 19.702 46.7095 19.2542 47.2617 19.2542H50.4909C51.0432 19.2542 51.4909 19.702 51.4909 20.2542V34.8983C51.4909 35.4506 51.0432 35.8983 50.4909 35.8983H48.2617C47.1572 35.8983 46.2617 35.0029 46.2617 33.8983V20.2542Z"
                fill="#605DEC"
              />
              <path
                d="M66.0218 18.8475C67.4763 18.8475 68.7691 19.2203 69.9004 19.9661C71.0547 20.6893 71.9436 21.7175 72.5669 23.0508C73.2134 24.3616 73.5366 25.8757 73.5366 27.5932C73.5366 29.3107 73.2134 30.8249 72.5669 32.1356C71.9436 33.4237 71.0663 34.4181 69.935 35.1186C68.8038 35.8192 67.4994 36.1695 66.0218 36.1695C64.8675 36.1695 63.817 35.9435 62.8705 35.4915C61.947 35.017 61.2313 34.3616 60.7234 33.5254V41.1285C60.7234 41.6098 60.3332 42 59.8519 42C57.4452 42 55.4942 40.049 55.4942 37.6424V20.2542C55.4942 19.702 55.9419 19.2542 56.4942 19.2542H59.6541C60.2064 19.2542 60.6541 19.702 60.6541 20.2542V21.5932C61.162 20.7345 61.8893 20.0678 62.8358 19.5932C63.7824 19.096 64.8444 18.8475 66.0218 18.8475ZM64.4981 32.2712C65.7217 32.2712 66.6682 31.8757 67.3378 31.0847C68.0073 30.2712 68.342 29.1073 68.342 27.5932C68.342 26.0565 68.0073 24.8701 67.3378 24.0339C66.6682 23.1751 65.7217 22.7458 64.4981 22.7458C63.2745 22.7458 62.3279 23.1638 61.6584 24C60.9889 24.8136 60.6541 25.9887 60.6541 27.5254C60.6541 29.0396 60.9889 30.2147 61.6584 31.0508C62.3279 31.8644 63.2745 32.2712 64.4981 32.2712Z"
                fill="#605DEC"
              />
              <path
                d="M95.2787 18.8475C97.218 18.8475 98.6609 19.4237 99.6075 20.5763C100.554 21.7288 101.027 23.4915 101.027 25.8644V33.8983C101.027 35.0029 100.132 35.8983 99.0273 35.8983H97.7982C96.6936 35.8983 95.7982 35.0029 95.7982 33.8983V26.0339C95.7982 24.904 95.6135 24.0904 95.2441 23.5932C94.8978 23.096 94.2975 22.8475 93.4433 22.8475C91.8206 22.8475 91.2539 24.3635 91.2539 26.7119V33.8983C91.2539 35.0029 90.3585 35.8983 89.2539 35.8983H88.0247C86.9202 35.8983 86.0247 35.0029 86.0247 33.8983V26.0339C86.0247 24.904 85.84 24.0904 85.4707 23.5932C85.1244 23.096 84.5241 22.8475 83.6699 22.8475C82.0472 22.8475 81.4805 24.3635 81.4805 26.7119V33.8983C81.4805 35.0029 80.5851 35.8983 79.4805 35.8983H78.2513C77.1468 35.8983 76.2513 35.0029 76.2513 33.8983V22.2542C76.2513 20.5974 77.5945 19.2542 79.2513 19.2542H80.342C80.8942 19.2542 81.342 19.702 81.342 20.2542V21.4915C82.4865 19.6406 83.0013 18.8475 85.5745 18.8475C88.091 18.8475 89.7764 19.8757 90.6306 21.9322C91.8088 19.9139 92.5463 18.8475 95.2787 18.8475Z"
                fill="#605DEC"
              />
              <path
                d="M111.554 18.8475C114.094 18.8475 115.964 19.435 117.165 20.6102C118.388 21.7853 119 23.6045 119 26.0678V33.3734C119 35.0302 117.657 36.3734 116 36.3734H114.048V33.4237C113.702 34.2825 113.124 34.9605 112.316 35.4576C111.508 35.9322 110.562 36.1695 109.477 36.1695C108.322 36.1695 107.272 35.9435 106.325 35.4915C105.402 35.0396 104.663 34.4068 104.109 33.5932C103.578 32.7797 103.312 31.8757 103.312 30.8814C103.312 29.661 103.624 28.7006 104.248 28C104.894 27.2994 105.921 26.791 107.33 26.4746C108.738 26.1582 110.666 26 113.113 26H114.013V25.3898C114.013 24.3955 113.794 23.6949 113.355 23.2881C112.917 22.8814 112.155 22.678 111.07 22.678C110.239 22.678 109.315 22.8249 108.299 23.1186C107.962 23.2161 107.63 23.3261 107.303 23.4484C106.254 23.8411 105.018 23.4193 104.598 22.381C104.256 21.5362 104.575 20.5573 105.413 20.1985C106.064 19.9197 106.784 19.6727 107.572 19.4576C109.003 19.0508 110.331 18.8475 111.554 18.8475ZM110.619 32.6441C111.635 32.6441 112.455 32.3164 113.078 31.661C113.702 30.9831 114.013 30.113 114.013 29.0508V28.4746H113.425C111.554 28.4746 110.239 28.6215 109.477 28.9153C108.738 29.209 108.369 29.7401 108.369 30.5085C108.369 31.1186 108.576 31.6271 108.992 32.0339C109.431 32.4407 109.973 32.6441 110.619 32.6441Z"
                fill="#605DEC"
              />
              <path
                d="M51.5 15C51.5 16.3807 50.3807 17.5 49 17.5C47.6193 17.5 46.5 16.3807 46.5 15C46.5 13.6193 47.6193 12.5 49 12.5C50.3807 12.5 51.5 13.6193 51.5 15Z"
                fill="#605DEC"
              />
            </svg>
          </span>
        </div>
        <div className="footer-content-col">
          <div className="footer-content-col-header">About</div>
          <div className="footer-content-col-text">About Tripma</div>
          <div className="footer-content-col-text">How it works</div>
          <div className="footer-content-col-text">Careers</div>
          <div className="footer-content-col-text">Press</div>
          <div className="footer-content-col-text">Blog</div>
          <div className="footer-content-col-text">Forum</div>
        </div>
        <div className="footer-content-col">
          <div className="footer-content-col-header">Partner with us</div>
          <div className="footer-content-col-text">Partnership programs</div>
          <div className="footer-content-col-text">Affiliate program</div>
          <div className="footer-content-col-text">Connectivity partners</div>
          <div className="footer-content-col-text">Promotions and events</div>
          <div className="footer-content-col-text">Integrations</div>
          <div className="footer-content-col-text">Community</div>
          <div className="footer-content-col-text">Loyalty program</div>
        </div>
        <div className="footer-content-col">
          <div className="footer-content-col-header">Support</div>
          <div className="footer-content-col-text">Help Center</div>
          <div className="footer-content-col-text">Contact us</div>
          <div className="footer-content-col-text">Privacy policy</div>
          <div className="footer-content-col-text">Terms of service</div>
          <div className="footer-content-col-text">Trust and safety</div>
          <div className="footer-content-col-text">Accessibility</div>
        </div>
        <div className="footer-content-col">
          <div className="footer-content-col-header">Get the app</div>
          <div className="footer-content-col-text">Tripma for Android</div>
          <div className="footer-content-col-text">Tripma for iOS</div>
          <div className="footer-content-col-text">Mobile site</div>
          <div className="footer-content-col-text">Terms of service</div>
          <div className="footer-content-col-text">Trust and safety</div>
          <div className="footer-content-col-text">Accessibility</div>
          <div className="footer-content-col-text">
            <svg
              width="135"
              height="40"
              viewBox="0 0 135 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4C0 1.79086 1.79086 0 4 0H131C133.209 0 135 1.79086 135 4V36C135 38.2091 133.209 40 131 40H4C1.79086 40 0 38.2091 0 36V4Z"
                fill="black"
              />
              <path
                d="M17.9911 30.7175C17.5119 30.3968 17.0865 30.004 16.731 29.5503C16.343 29.0803 15.9835 28.586 15.6532 28.0744C14.8773 26.9376 14.2706 25.6941 13.8503 24.3837C13.3438 22.8592 13.0977 21.3995 13.0977 19.9714C13.0977 18.3778 13.442 16.9872 14.1126 15.8199C14.6089 14.9064 15.3484 14.1421 16.2397 13.6051C17.1007 13.0671 18.1035 12.7728 19.1164 12.7525C19.4709 12.7525 19.8558 12.8032 20.261 12.9047C20.5547 12.9859 20.9093 13.1179 21.3448 13.2803C21.9019 13.4934 22.2058 13.6254 22.3071 13.6559C22.6312 13.7777 22.9047 13.8284 23.1174 13.8284C23.2795 13.8284 23.5125 13.7777 23.7707 13.6965C23.9176 13.6457 24.1962 13.5543 24.5912 13.3818C24.9822 13.2397 25.2921 13.1179 25.5383 13.0265C25.9131 12.9149 26.2757 12.8134 26.6018 12.7626C26.9969 12.7017 27.3889 12.6814 27.7647 12.7119C28.4838 12.7626 29.1422 12.9149 29.7297 13.1382C30.7629 13.5543 31.5965 14.204 32.2185 15.1276C31.9551 15.2901 31.712 15.4789 31.4841 15.6859C30.9908 16.1224 30.5725 16.64 30.2382 17.2135C29.8027 17.9951 29.5798 18.8782 29.5859 19.7714C29.6011 20.8707 29.8796 21.837 30.4367 22.6744C30.8287 23.2834 31.3524 23.8052 31.9906 24.2335C32.3046 24.4467 32.5801 24.5938 32.8414 24.6903C32.7199 25.0709 32.5861 25.4414 32.4312 25.8068C32.0797 26.6259 31.6614 27.4106 31.165 28.1515C30.7274 28.791 30.3831 29.2681 30.1217 29.5827C29.7145 30.0699 29.3215 30.4354 28.9265 30.6962C28.4909 30.9855 27.9794 31.1388 27.4557 31.1388C27.1012 31.154 26.7467 31.1083 26.4084 31.0099C26.1146 30.9134 25.8249 30.8048 25.5413 30.682C25.2445 30.546 24.9376 30.4303 24.6246 30.3369C24.2397 30.2354 23.8447 30.1867 23.4456 30.1877C23.0404 30.1877 22.6454 30.2384 22.2706 30.3349C21.9566 30.4242 21.6527 30.5338 21.3519 30.6648C20.9265 30.8424 20.6479 30.9591 20.4859 31.0099C20.1577 31.1073 19.8214 31.1662 19.4831 31.1875C18.9564 31.1875 18.4661 31.0352 17.9779 30.7307L17.9911 30.7175ZM24.9336 11.98C24.2448 12.3251 23.5904 12.4713 22.9351 12.4226C22.8338 11.7669 22.9351 11.0929 23.2086 10.355C23.4517 9.72564 23.7758 9.15723 24.2215 8.64971C24.6874 8.12189 25.2445 7.68543 25.8725 7.37077C26.5411 7.02566 27.1792 6.84295 27.787 6.8125C27.868 7.50272 27.787 8.18279 27.5337 8.91362C27.3028 9.56324 26.9584 10.1621 26.5208 10.7001C26.0802 11.2279 25.5332 11.6644 24.9143 11.979L24.9336 11.98Z"
                fill="white"
              />
              <path
                d="M43.6836 14H46.0518C48.1465 14 49.377 12.6963 49.377 10.4746V10.4648C49.377 8.25293 48.1367 6.9541 46.0518 6.9541H43.6836V14ZM44.5625 13.209V7.74512H45.9932C47.5898 7.74512 48.4785 8.7168 48.4785 10.4746V10.4844C48.4785 12.2324 47.5898 13.209 45.9932 13.209H44.5625Z"
                fill="white"
              />
              <path
                d="M52.8434 14.0977C54.2447 14.0977 55.192 13.082 55.192 11.4609V11.4512C55.192 9.83008 54.2398 8.82422 52.8385 8.82422C51.4371 8.82422 50.4898 9.83496 50.4898 11.4512V11.4609C50.4898 13.0771 51.4322 14.0977 52.8434 14.0977ZM52.8482 13.3457C51.9498 13.3457 51.359 12.6572 51.359 11.4609V11.4512C51.359 10.2646 51.9547 9.57617 52.8385 9.57617C53.7369 9.57617 54.3229 10.2598 54.3229 11.4512V11.4609C54.3229 12.6523 53.7418 13.3457 52.8482 13.3457Z"
                fill="white"
              />
              <path
                d="M57.4572 14H58.3215L59.4641 10.0693H59.4836L60.6311 14H61.4953L62.9113 8.92188H62.0715L61.0559 13.0527H61.0363L59.884 8.92188H59.0637L57.9162 13.0527H57.8967L56.8811 8.92188H56.0363L57.4572 14Z"
                fill="white"
              />
              <path
                d="M64.0096 14H64.8592V11.0117C64.8592 10.1475 65.3816 9.57617 66.1824 9.57617C66.9637 9.57617 67.3494 10.0303 67.3494 10.8555V14H68.199V10.7041C68.199 9.54688 67.5545 8.82422 66.4412 8.82422C65.6697 8.82422 65.1521 9.1709 64.8787 9.64453H64.8592V8.92188H64.0096V14Z"
                fill="white"
              />
              <path d="M69.727 14H70.5766V6.9541H69.727V14Z" fill="white" />
              <path
                d="M74.2285 14.0977C75.6299 14.0977 76.5771 13.082 76.5771 11.4609V11.4512C76.5771 9.83008 75.625 8.82422 74.2236 8.82422C72.8223 8.82422 71.875 9.83496 71.875 11.4512V11.4609C71.875 13.0771 72.8174 14.0977 74.2285 14.0977ZM74.2334 13.3457C73.335 13.3457 72.7441 12.6572 72.7441 11.4609V11.4512C72.7441 10.2646 73.3398 9.57617 74.2236 9.57617C75.1221 9.57617 75.708 10.2598 75.708 11.4512V11.4609C75.708 12.6523 75.127 13.3457 74.2334 13.3457Z"
                fill="white"
              />
              <path
                d="M79.3209 14.0977C79.9996 14.0977 80.61 13.7314 80.9078 13.1748H80.9273V14H81.777V10.4893C81.777 9.47363 81.025 8.82422 79.8238 8.82422C78.6275 8.82422 77.9 9.49805 77.8268 10.333L77.8219 10.3867H78.6422L78.652 10.3428C78.7496 9.88867 79.1598 9.57617 79.8141 9.57617C80.5221 9.57617 80.9273 9.95215 80.9273 10.5723V10.9971L79.4723 11.0801C78.3053 11.1484 77.6314 11.6904 77.6314 12.5547V12.5645C77.6314 13.4873 78.3102 14.0977 79.3209 14.0977ZM78.5006 12.5645V12.5547C78.5006 12.0811 78.8912 11.7783 79.5699 11.7393L80.9273 11.6562V12.0713C80.9273 12.8086 80.3121 13.3604 79.5113 13.3604C78.901 13.3604 78.5006 13.0527 78.5006 12.5645Z"
                fill="white"
              />
              <path
                d="M85.1652 14.0977C85.8928 14.0977 86.4592 13.7314 86.7766 13.1406H86.7961V14H87.6457V6.9541H86.7961V9.77148H86.7766C86.4592 9.18555 85.8684 8.82422 85.1506 8.82422C83.8762 8.82422 83.007 9.85449 83.007 11.4561V11.4609C83.007 13.0625 83.8664 14.0977 85.1652 14.0977ZM85.3312 13.3457C84.4328 13.3457 83.8762 12.6279 83.8762 11.4609V11.4561C83.8762 10.2988 84.4328 9.57617 85.3312 9.57617C86.1857 9.57617 86.801 10.3232 86.801 11.4561V11.4609C86.801 12.5986 86.1906 13.3457 85.3312 13.3457Z"
                fill="white"
              />
              <path
                d="M93.7484 14.0977C95.1498 14.0977 96.0971 13.082 96.0971 11.4609V11.4512C96.0971 9.83008 95.1449 8.82422 93.7436 8.82422C92.3422 8.82422 91.3949 9.83496 91.3949 11.4512V11.4609C91.3949 13.0771 92.3373 14.0977 93.7484 14.0977ZM93.7533 13.3457C92.8549 13.3457 92.2641 12.6572 92.2641 11.4609V11.4512C92.2641 10.2646 92.8598 9.57617 93.7436 9.57617C94.642 9.57617 95.2279 10.2598 95.2279 11.4512V11.4609C95.2279 12.6523 94.6469 13.3457 93.7533 13.3457Z"
                fill="white"
              />
              <path
                d="M97.3564 14H98.2061V11.0117C98.2061 10.1475 98.7285 9.57617 99.5293 9.57617C100.311 9.57617 100.696 10.0303 100.696 10.8555V14H101.546V10.7041C101.546 9.54688 100.901 8.82422 99.7881 8.82422C99.0166 8.82422 98.499 9.1709 98.2256 9.64453H98.2061V8.92188H97.3564V14Z"
                fill="white"
              />
              <path
                d="M107.131 14.0977C107.297 14.0977 107.478 14.0781 107.585 14.0635V13.375C107.512 13.3799 107.414 13.3945 107.312 13.3945C106.858 13.3945 106.618 13.2432 106.618 12.7012V9.625H107.585V8.92188H106.618V7.5498H105.739V8.92188H104.997V9.625H105.739V12.7061C105.739 13.6777 106.198 14.0977 107.131 14.0977Z"
                fill="white"
              />
              <path
                d="M108.942 14H109.792V11.0361C109.792 10.1719 110.314 9.57617 111.1 9.57617C111.891 9.57617 112.36 10.1182 112.36 11.0361V14H113.21V10.8896C113.21 9.65918 112.472 8.82422 111.393 8.82422C110.637 8.82422 110.085 9.16113 109.811 9.73242H109.792V6.9541H108.942V14Z"
                fill="white"
              />
              <path
                d="M116.779 14.0977C117.887 14.0977 118.717 13.4336 118.883 12.5938L118.893 12.5449H118.058L118.043 12.5889C117.897 13.0234 117.443 13.3457 116.798 13.3457C115.895 13.3457 115.319 12.7354 115.299 11.6904H118.956V11.3779C118.956 9.85449 118.112 8.82422 116.725 8.82422C115.338 8.82422 114.44 9.90332 114.44 11.4756V11.4805C114.44 13.0771 115.319 14.0977 116.779 14.0977ZM116.72 9.57617C117.462 9.57617 118.009 10.04 118.092 11.0264H115.314C115.407 10.0791 115.983 9.57617 116.72 9.57617Z"
                fill="white"
              />
              <path
                d="M51.4639 28.0205H46.5068L45.4697 31H43.1582L47.9922 18.2031H49.9873L54.8301 31H52.5098L51.4639 28.0205ZM47.1309 26.2275H50.8398L48.9854 20.9189L47.1309 26.2275Z"
                fill="white"
              />
              <path
                d="M64.1883 26.3418C64.1883 27.8125 63.8543 28.9873 63.1863 29.8662C62.5184 30.7393 61.6219 31.1758 60.4969 31.1758C59.4539 31.1758 58.6189 30.833 57.992 30.1475V34.6562H55.8562V21.4902H57.825L57.9129 22.457C58.5398 21.6953 59.3924 21.3145 60.4705 21.3145C61.6307 21.3145 62.5389 21.748 63.1951 22.6152C63.8572 23.4766 64.1883 24.6748 64.1883 26.21V26.3418ZM62.0613 26.1572C62.0613 25.208 61.8709 24.4551 61.49 23.8984C61.115 23.3418 60.576 23.0635 59.8729 23.0635C58.9998 23.0635 58.3729 23.4238 57.992 24.1445V28.3633C58.3787 29.1016 59.0115 29.4707 59.8904 29.4707C60.5701 29.4707 61.1004 29.1982 61.4813 28.6533C61.868 28.1025 62.0613 27.2705 62.0613 26.1572Z"
                fill="white"
              />
              <path
                d="M74.5309 26.3418C74.5309 27.8125 74.1969 28.9873 73.5289 29.8662C72.8609 30.7393 71.9645 31.1758 70.8395 31.1758C69.7965 31.1758 68.9615 30.833 68.3346 30.1475V34.6562H66.1988V21.4902H68.1676L68.2555 22.457C68.8824 21.6953 69.735 21.3145 70.8131 21.3145C71.9732 21.3145 72.8814 21.748 73.5377 22.6152C74.1998 23.4766 74.5309 24.6748 74.5309 26.21V26.3418ZM72.4039 26.1572C72.4039 25.208 72.2135 24.4551 71.8326 23.8984C71.4576 23.3418 70.9186 23.0635 70.2154 23.0635C69.3424 23.0635 68.7154 23.4238 68.3346 24.1445V28.3633C68.7213 29.1016 69.3541 29.4707 70.233 29.4707C70.9127 29.4707 71.443 29.1982 71.8238 28.6533C72.2105 28.1025 72.4039 27.2705 72.4039 26.1572Z"
                fill="white"
              />
              <path
                d="M88.1232 27.7041C88.1232 27.1416 87.924 26.708 87.5256 26.4033C87.133 26.0986 86.4211 25.791 85.3898 25.4805C84.3586 25.1699 83.5383 24.8242 82.9289 24.4434C81.7629 23.7109 81.1799 22.7559 81.1799 21.5781C81.1799 20.5469 81.5988 19.6973 82.4367 19.0293C83.2805 18.3613 84.3732 18.0273 85.715 18.0273C86.6057 18.0273 87.3996 18.1914 88.0969 18.5195C88.7941 18.8477 89.342 19.3164 89.7404 19.9258C90.1389 20.5293 90.3381 21.2002 90.3381 21.9385H88.1232C88.1232 21.2705 87.9123 20.749 87.4904 20.374C87.0744 19.9932 86.4768 19.8027 85.6975 19.8027C84.9709 19.8027 84.4055 19.958 84.0012 20.2686C83.6027 20.5791 83.4035 21.0127 83.4035 21.5693C83.4035 22.0381 83.6203 22.4307 84.0539 22.7471C84.4875 23.0576 85.2023 23.3623 86.1984 23.6611C87.1945 23.9541 87.9943 24.291 88.5979 24.6719C89.2014 25.0469 89.6437 25.4805 89.925 25.9727C90.2062 26.459 90.3469 27.0303 90.3469 27.6865C90.3469 28.7529 89.9367 29.6025 89.1164 30.2354C88.302 30.8623 87.1945 31.1758 85.7941 31.1758C84.8684 31.1758 84.0158 31.0059 83.2365 30.666C82.4631 30.3203 81.8596 29.8457 81.426 29.2422C80.9982 28.6387 80.7844 27.9355 80.7844 27.1328H83.008C83.008 27.8594 83.2482 28.4219 83.7287 28.8203C84.2092 29.2188 84.8977 29.418 85.7941 29.418C86.5676 29.418 87.1477 29.2627 87.5344 28.9521C87.927 28.6357 88.1232 28.2197 88.1232 27.7041Z"
                fill="white"
              />
              <path
                d="M94.9678 19.1787V21.4902H96.6465V23.0723H94.9678V28.3809C94.9678 28.7441 95.0381 29.0078 95.1787 29.1719C95.3252 29.3301 95.583 29.4092 95.9521 29.4092C96.1982 29.4092 96.4473 29.3799 96.6992 29.3213V30.9736C96.2129 31.1084 95.7441 31.1758 95.293 31.1758C93.6523 31.1758 92.832 30.2705 92.832 28.46V23.0723H91.2676V21.4902H92.832V19.1787H94.9678Z"
                fill="white"
              />
              <path
                d="M97.8221 26.1572C97.8221 25.2256 98.0066 24.3877 98.3758 23.6436C98.7449 22.8936 99.2635 22.3193 99.9314 21.9209C100.599 21.5166 101.367 21.3145 102.234 21.3145C103.517 21.3145 104.557 21.7275 105.354 22.5537C106.157 23.3799 106.591 24.4756 106.655 25.8408L106.664 26.3418C106.664 27.2793 106.482 28.1172 106.119 28.8555C105.762 29.5938 105.246 30.165 104.572 30.5693C103.904 30.9736 103.131 31.1758 102.252 31.1758C100.91 31.1758 99.8348 30.7305 99.0262 29.8398C98.2234 28.9434 97.8221 27.751 97.8221 26.2627V26.1572ZM99.9578 26.3418C99.9578 27.3203 100.16 28.0879 100.564 28.6445C100.969 29.1953 101.531 29.4707 102.252 29.4707C102.972 29.4707 103.532 29.1895 103.93 28.627C104.335 28.0645 104.537 27.2412 104.537 26.1572C104.537 25.1963 104.329 24.4346 103.913 23.8721C103.503 23.3096 102.943 23.0283 102.234 23.0283C101.537 23.0283 100.983 23.3066 100.573 23.8633C100.163 24.4141 99.9578 25.2402 99.9578 26.3418Z"
                fill="white"
              />
              <path
                d="M113.649 23.4414C113.368 23.3945 113.078 23.3711 112.779 23.3711C111.8 23.3711 111.141 23.7461 110.801 24.4961V31H108.666V21.4902H110.705L110.757 22.5537C111.273 21.7275 111.988 21.3145 112.902 21.3145C113.207 21.3145 113.459 21.3555 113.658 21.4375L113.649 23.4414Z"
                fill="white"
              />
              <path
                d="M119.21 31.1758C117.857 31.1758 116.758 30.751 115.914 29.9014C115.077 29.0459 114.658 27.9092 114.658 26.4912V26.2275C114.658 25.2783 114.839 24.4316 115.203 23.6875C115.572 22.9375 116.087 22.3545 116.749 21.9385C117.412 21.5225 118.15 21.3145 118.964 21.3145C120.259 21.3145 121.258 21.7275 121.961 22.5537C122.67 23.3799 123.025 24.5488 123.025 26.0605V26.9219H116.811C116.875 27.707 117.136 28.3281 117.593 28.7852C118.056 29.2422 118.636 29.4707 119.333 29.4707C120.312 29.4707 121.109 29.0752 121.724 28.2842L122.875 29.3828C122.495 29.9512 121.985 30.3936 121.346 30.71C120.713 31.0205 120.001 31.1758 119.21 31.1758ZM118.955 23.0283C118.37 23.0283 117.895 23.2334 117.532 23.6436C117.174 24.0537 116.946 24.625 116.846 25.3574H120.915V25.1992C120.869 24.4844 120.678 23.9453 120.344 23.582C120.01 23.2129 119.547 23.0283 118.955 23.0283Z"
                fill="white"
              />
              <path
                d="M4 1H131V-1H4V1ZM134 4V36H136V4H134ZM131 39H4V41H131V39ZM1 36V4H-1V36H1ZM4 39C2.34315 39 1 37.6569 1 36H-1C-1 38.7614 1.23858 41 4 41V39ZM134 36C134 37.6569 132.657 39 131 39V41C133.761 41 136 38.7614 136 36H134ZM131 1C132.657 1 134 2.34315 134 4H136C136 1.23858 133.761 -1 131 -1V1ZM4 -1C1.23858 -1 -1 1.23858 -1 4H1C1 2.34315 2.34315 1 4 1V-1Z"
                fill="#A1A1A1"
              />
            </svg>
          </div>
          <div className="footer-content-col-text">
            <img className="footer-content-col-img" src={GooglePlayimg} alt="Google play img"/>
          </div>
        </div>
        <div></div>
      </div>
      <div className="footer-copyright"></div>
    </div>
  );
};
export default Footer;