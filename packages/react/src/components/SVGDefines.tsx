import React from "react";

const SVGDefines: React.FC = () => (
  <svg
    style={{ position: "absolute", width: 0, height: 0 }}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <defs>
      <symbol viewBox="0 0 24 24" fill="none" id="add">
        <rect
          x="4.75"
          y="4.75"
          width="14.5"
          height="14.5"
          rx="0.75"
          stroke="#424A59"
          strokeOpacity="0.9"
          strokeWidth="1.5"
        />
        <rect x="11.25" y="8.5" width="1.5" height="7" fill="#535B68" />
        <rect
          x="15.5"
          y="11.25"
          width="1.5"
          height="7"
          transform="rotate(90 15.5 11.25)"
          fill="#535B68"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-bottom">
        <path d="M9.25 12.5L12.0002 15.5L14.75 12.5H9.25Z" fill="#525C6F" />
        <rect x="5.5" y="16.5" width="13" height="1.5" fill="#525C6F" />
        <rect x="11.25" y="5.5" width="1.5" height="7.5" fill="#525C6F" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-center">
        <path d="M5 6.75H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M8 12H16" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 17.25L19 17.25" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-justify">
        <path
          d="M19.5 6.5H4.5"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 12L4.5 12"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M19.5 17.5H4.5"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-left">
        <path d="M5 6.75H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 12H13" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 17.25L19 17.25" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-mid">
        <path d="M9.25 16.5L12.0002 13.5L14.75 16.5H9.25Z" fill="#525C6F" />
        <path d="M9.25 7L12.0002 10L14.75 7L9.25 7Z" fill="#525C6F" />
        <rect x="5.5" y="11" width="13" height="1.5" fill="#525C6F" />
        <rect x="11.25" y="16" width="1.5" height="3.5" fill="#525C6F" />
        <rect x="11.25" y="4" width="1.5" height="3.5" fill="#525C6F" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-right">
        <path d="M5 6.75H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M11 12H19" stroke="#525C6F" strokeWidth="1.5" />
        <path d="M5 17.25L19 17.25" stroke="#525C6F" strokeWidth="1.5" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="align-top">
        <path d="M9.25 11L12.0002 8L14.75 11H9.25Z" fill="#525C6F" />
        <rect x="5.5" y="5.5" width="13" height="1.5" fill="#525C6F" />
        <rect x="11.25" y="10.5" width="1.5" height="7.5" fill="#525C6F" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="bold">
        <path
          d="M6.30566 5.07617V18.9992H12.4872C13.9107 18.9992 15.0417 18.7067 15.8607 18.1607C16.8162 17.4977 17.3037 16.4837 17.3037 15.1187C17.3037 14.1827 17.0307 13.4417 16.5237 12.8567C16.0167 12.2717 15.3147 11.8817 14.3982 11.7257C15.1002 11.4917 15.6657 11.1212 16.0947 10.6142C16.5042 10.0487 16.7187 9.36617 16.7187 8.58617C16.7187 7.49417 16.3482 6.63617 15.6072 6.01217C14.8467 5.38817 13.8132 5.07617 12.5262 5.07617H6.30566ZM7.90466 6.42167H12.1557C13.1307 6.42167 13.8717 6.59717 14.3787 6.98717C14.8857 7.37717 15.1392 7.96217 15.1392 8.74217C15.1392 9.54167 14.8662 10.1462 14.3592 10.5557C13.8522 10.9457 13.1112 11.1602 12.1362 11.1602H7.90466V6.42167ZM7.90466 12.4862H12.3507C13.4232 12.4862 14.2422 12.6812 14.8077 13.1102C15.3927 13.5392 15.7047 14.2022 15.7047 15.0992C15.7047 15.9962 15.3537 16.6787 14.6712 17.1077C14.0862 17.4587 13.3257 17.6537 12.3507 17.6537H7.90466V12.4862Z"
          fill="#394259"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-all">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-bottom">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="18.25"
          x2="19"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-color">
        <path
          d="M16 10.9106L18.9511 13.8617L14.5431 18.2697H11.592V15.3186L16 10.9106Z"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 6.5H17.5V9.84613H19V6.5V5H17.5H6.5H5V6.5V17.5V19H6.5H9.84616V17.5H6.5V6.5Z"
          fill="#535A68"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border_diagonal_down">
        <line
          x1="17.9697"
          y1="18.0303"
          x2="5.96967"
          y2="6.03033"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border_diagonal_up">
        <line
          y1="-0.75"
          x2="16.9706"
          y2="-0.75"
          transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 5.5 17.5)"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-inside">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-left">
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="5.75"
          y1="19"
          x2="5.75"
          y2="5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-none">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-outline">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-right">
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="18.25"
          y1="19"
          x2="18.25"
          y2="5"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-style">
        <line
          x1="5"
          y1="5.75"
          x2="19"
          y2="5.75"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="12.25"
          x2="7.5"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="8.8252"
          y1="12.25"
          x2="11.3252"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="12.6504"
          y1="12.25"
          x2="15.1504"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="16.4746"
          y1="12.25"
          x2="18.9746"
          y2="12.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="18.25"
          x2="6.5"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="7.08008"
          y1="18.25"
          x2="8.58008"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="9.16016"
          y1="18.25"
          x2="10.6602"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="11.2402"
          y1="18.25"
          x2="12.7402"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="13.3203"
          y1="18.25"
          x2="14.8203"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="15.4004"
          y1="18.25"
          x2="16.9004"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
        <line
          x1="17.4805"
          y1="18.25"
          x2="18.9805"
          y2="18.25"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="border-top">
        <rect
          x="5.75"
          y="5.75"
          width="12.5"
          height="12.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="6.5"
          y1="12"
          x2="17.5"
          y2="12"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="17.5"
          x2="12"
          y2="6.5"
          stroke="#CCCED2"
          strokeWidth="1.5"
        />
        <line
          x1="5"
          y1="5.75"
          x2="19"
          y2="5.75"
          stroke="#535A68"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 18 18" fill="none" id="close">
        <path
          d="M13.9255 5L5.00091 13.9246"
          stroke="#262A33"
          strokeOpacity="0.9"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M13.9255 13.9238L5.00091 4.9992"
          stroke="#262A33"
          strokeOpacity="0.9"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </symbol>
      <symbol viewBox="0 0 10 24" fill="none" id="combo-arrow">
        <path d="M8 10H2L5 14L8 10Z" fill="#A6A6A6" />
      </symbol>
      <symbol fill="none" viewBox="0 0 24 24" id="comment">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.968 15.7L12 17.956l2.032-2.258H18.5v-10h-13v10h4.468zm1.289 3.673L9.3 17.2H5.5A1.5 1.5 0 014 15.7v-10a1.5 1.5 0 011.5-1.5h13A1.5 1.5 0 0120 5.7v10a1.5 1.5 0 01-1.5 1.5h-3.8l-1.957 2.174a1 1 0 01-1.486 0z"
          fill="#525C6F"
        />
        <path d="M7 8.2h10v1.5H7V8.2zM7 11.699h6v1.5H7z" fill="#525C6F" />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="strike-through">
        <rect x="6" y="11.5" width="13" height="1.5" fill="#394259" />
        <path
          d="M9.00344 11.5C9.69342 11.9717 10.6431 12.3814 11.8525 12.729C13.071 13.0815 13.9121 13.4403 14.376 13.8052C14.8398 14.1639 15.0718 14.6742 15.0718 15.3359C15.0718 15.9977 14.8213 16.5203 14.3203 16.9038C13.8193 17.2873 13.0988 17.479 12.1587 17.479C11.1506 17.479 10.3434 17.244 9.7373 16.7739C9.13737 16.2977 8.8374 15.6514 8.8374 14.835H7.04688C7.04688 15.6204 7.26335 16.3224 7.69629 16.9409C8.13542 17.5594 8.757 18.048 9.56104 18.4067C10.3651 18.7593 11.231 18.9355 12.1587 18.9355C13.5874 18.9355 14.7285 18.6077 15.582 17.9521C16.4355 17.2904 16.8623 16.4121 16.8623 15.3174C16.8623 14.6309 16.7077 14.034 16.3984 13.5269C16.0954 13.0197 15.6253 12.5775 14.9883 12.2002C14.581 11.9526 14.0705 11.7192 13.457 11.5H9.00344Z"
          fill="#394259"
        />
        <path
          d="M7.71685 10C7.5547 9.61466 7.47363 9.19458 7.47363 8.73975C7.47363 7.67594 7.8973 6.79769 8.74463 6.10498C9.59814 5.40609 10.7052 5.05664 12.0659 5.05664C12.9937 5.05664 13.8193 5.236 14.543 5.59473C15.2728 5.95345 15.8356 6.44824 16.2314 7.0791C16.6335 7.70996 16.8345 8.39958 16.8345 9.14795H15.0439C15.0439 8.33154 14.7842 7.69141 14.2646 7.22754C13.7451 6.75749 13.0122 6.52246 12.0659 6.52246C11.1877 6.52246 10.5011 6.71729 10.0063 7.10693C9.51774 7.4904 9.27344 8.02539 9.27344 8.71191C9.27344 9.2095 9.46296 9.63887 9.84201 10H7.71685Z"
          fill="#394259"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="clear-format">
        <line
          x1="8"
          y1="18.25"
          x2="20"
          y2="18.25"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 7.12132L17.8787 11L10 18.8787L6.12132 15L14 7.12132ZM14 5L15.0607 6.06066L18.9393 9.93934L20 11L18.9393 12.0607L12 19L8 19L5.06066 16.0607L4 15L5.06066 13.9393L12.9393 6.06066L14 5Z"
          fill="#525C6F"
        />
        <rect
          x="13.9375"
          y="6.12316"
          width="6.98528"
          height="5.7265"
          transform="rotate(45 13.9375 6.12316)"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="image">
        <circle cx="8.75" cy="8.75" r="1.25" fill="#525C6F" />
        <rect
          x="4.75"
          y="5.25"
          width="14.5"
          height="13.5"
          rx="0.75"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          d="M7 19L12.984 11.8949C13.1659 11.6789 13.4905 11.6563 13.7006 11.845L19.5 17.0556"
          stroke="#525C6F"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="italic">
        <path d="M11 5H16V6.5H11V5Z" fill="#394259" />
        <path d="M9 17.5H14V19H9V17.5Z" fill="#394259" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7598 17.877L12.7598 5.87695L14.2394 6.12355L12.2394 18.1236L10.7598 17.877Z"
          fill="#394259"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="merge-cancel">
        <path d="M13 14.9998L16.5 11.9996L13 8.99982V14.9998Z" fill="#525C6F" />
        <path
          d="M11 14.9998L7.5 11.9996L11 8.99982L11 14.9998Z"
          fill="#525C6F"
        />
        <rect x="10" y="11.2498" width="4.5" height="1.5" fill="#525C6F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 6.49982H6.5L6.5 17.4998H9.5V15.4999H11V17.4998V18.9998H9.5H6.5H5V17.4998L5 6.49982V4.99982H6.5H9.5L11 4.99982V6.49982V8.49988H9.5V6.49982ZM13 15.4999V15.9998V17.4998V18.9998H14.5H17.5H19V17.4998V6.49982V4.99982H17.5H14.5H13V6.49982V7.99982V8.49988H14.5V7.99982V6.49982H17.5V17.4998H14.5L14.5 15.9998V15.4999H13Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="merge-horizontal">
        <path d="M11 15L14.5 11.9998L11 9V15Z" fill="#525C6F" />
        <rect x="5" y="11.25" width="8.5" height="1.5" fill="#525C6F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.5 6.5H7.5H9.5H11V5H9.5H6.5H5V6.5V17.5V19H6.5H9.5H11V17.5H9.5H7.5H6.5V6.5ZM13 16V15.5H14.5V16V17.5H17.5V6.5H14.5V8V8.5H13V8V6.5V5H14.5H17.5H19V6.5V17.5V19H17.5H14.5H13V17.5V16Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="merge-vertical">
        <path
          d="M9 10.9998L12.0002 14.4998L15 10.9998L9 10.9998Z"
          fill="#525C6F"
        />
        <rect
          x="12.75"
          y="4.99982"
          width="8.5"
          height="1.5"
          transform="rotate(90 12.75 4.99982)"
          fill="#525C6F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5 6.49982L17.5 7L17.5 10.9998H19V9.49982V6.49982V4.99982H17.5L6.5 4.99982H5V6.49982L5 9.49982V10.9998H6.5V9.49982L6.5 7L6.5 6.49982L17.5 6.49982ZM8 12.9998L8.5 12.9998V14.4998H8H6.5V17.4998H17.5V14.4998H16H15.5V12.9998H16H17.5H19L19 14.4998V17.4998V18.9998H17.5H6.5L5 18.9998L5 17.4998V14.4998V12.9998H6.5H8Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="merge-cell">
        <path
          d="M15.5 14.9998L12 11.9996L15.5 8.99982V14.9998Z"
          fill="#525C6F"
        />
        <path
          d="M8.5 14.9998L12 11.9996L8.5 8.99982L8.5 14.9998Z"
          fill="#525C6F"
        />
        <rect x="7" y="11.2498" width="2.5" height="1.5" fill="#525C6F" />
        <rect x="14.5" y="11.2498" width="2.5" height="1.5" fill="#525C6F" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 6.49982H6.5L6.5 17.4998H9.5V15.4999H11V17.4998V18.9998H9.5H6.5H5V17.4998L5 6.49982V4.99982H6.5H9.5L11 4.99982V6.49982V8.49988H9.5V6.49982ZM13 15.4999V15.9998V17.4998V18.9998H14.5H17.5H19V17.4998V6.49982V4.99982H17.5H14.5H13V6.49982V7.99982V8.49988H14.5V7.99982V6.49982H17.5V17.4998H14.5L14.5 15.9998V15.4999H13Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol fill="none" viewBox="0 0 16 16" id="plus">
        <path
          d="M8 1.715v12.571M1.714 8h12.572"
          stroke="#666"
          strokeWidth="1.714"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="text-background">
        <path
          id="text_background_color-indicator"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.9379 11.1425L11.4379 17.2675L6.62544 15.08L5.3125 19.0175H20.0004V11.1425H14.9379Z"
          fill="#FFE9A7"
        />
        <path
          id="text_background_color-diagonal"
          d="m13.5 14 6.322 4.15"
          stroke="rgba(255,255,255,0)"
        />
        <path
          id="text_background_color-border"
          clipRule="evenodd"
          d="m15.36 11.143-3.5 6.357-4.5-2.5-2.5 3.5H20v-7.357h-4.64z"
          stroke="rgba(255,255,255,0)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.12811 5L4.07124 13.7033L6.34903 15.0106L4 19H9.2763L9.87917 17.6896L10.1641 17.1989L12.0681 18.2913L17.125 9.58802L9.12811 5ZM10.8237 16.0641L7.53277 14.176L5.87323 13.2239L8.95133 7.92584L14.6634 11.2034L11.5853 16.5011L10.8237 16.0641ZM7.49845 15.67L9.02166 16.5439L8.36207 17.6791L6.19861 17.6891L7.49845 15.67ZM7.51166 12.1473L8.27371 12.5842L9.81276 9.9354L9.05071 9.49845L7.51166 12.1473Z"
          fill="#424A59"
          fillOpacity="0.9"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="text-color">
        <rect
          id="text_color_color-indicator"
          x="4"
          y="17"
          width="16"
          height="3"
          fill="#ED7171"
        />
        <path
          d="M14.3083 13.124H9.69165L8.65479 16H7.15625L11.3643 4.98047H12.6357L16.8513 16H15.3604L14.3083 13.124ZM10.1306 11.9282H13.877L12 6.77417L10.1306 11.9282Z"
          fill="#525C6F"
        />
        <path
          d="M14.3083 13.124L14.4117 13.0862L14.3852 13.014H14.3083V13.124ZM9.69165 13.124V13.014H9.61438L9.58817 13.0867L9.69165 13.124ZM8.65479 16V16.11H8.73206L8.75827 16.0373L8.65479 16ZM7.15625 16L7.05349 15.9608L6.9965 16.11H7.15625V16ZM11.3643 4.98047V4.87047H11.2885L11.2615 4.94123L11.3643 4.98047ZM12.6357 4.98047L12.7385 4.94117L12.7114 4.87047H12.6357V4.98047ZM16.8513 16V16.11H17.0112L16.9541 15.9607L16.8513 16ZM15.3604 16L15.257 16.0378L15.2835 16.11H15.3604V16ZM10.1306 11.9282L10.0272 11.8907L9.97371 12.0382H10.1306V11.9282ZM13.877 11.9282V12.0382H14.0341L13.9803 11.8906L13.877 11.9282ZM12 6.77417L12.1034 6.73653L11.9998 6.45213L11.8966 6.73666L12 6.77417ZM14.3083 13.014H9.69165V13.234H14.3083V13.014ZM9.58817 13.0867L8.5513 15.9627L8.75827 16.0373L9.79513 13.1613L9.58817 13.0867ZM8.65479 15.89H7.15625V16.11H8.65479V15.89ZM7.25901 16.0392L11.467 5.01971L11.2615 4.94123L7.05349 15.9608L7.25901 16.0392ZM11.3643 5.09047H12.6357V4.87047H11.3643V5.09047ZM12.533 5.01977L16.7486 16.0393L16.9541 15.9607L12.7385 4.94117L12.533 5.01977ZM16.8513 15.89H15.3604V16.11H16.8513V15.89ZM15.4637 15.9622L14.4117 13.0862L14.205 13.1618L15.257 16.0378L15.4637 15.9622ZM10.1306 12.0382H13.877V11.8182H10.1306V12.0382ZM13.9803 11.8906L12.1034 6.73653L11.8966 6.81181L13.7736 11.9659L13.9803 11.8906ZM11.8966 6.73666L10.0272 11.8907L10.234 11.9657L12.1034 6.81168L11.8966 6.73666Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="text_overflow">
        <path d="M16.5 15L20 11.9998L16.5 9V15Z" fill="#525C6F" />
        <rect x="7" y="11.25" width="9.5" height="1.5" fill="#525C6F" />
        <line
          x1="4.75"
          y1="5"
          x2="4.75"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <line
          x1="12.25"
          y1="5"
          x2="12.25"
          y2="9.5"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <line
          x1="12.25"
          y1="14.5"
          x2="12.25"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="text_wrap">
        <line
          x1="4.75"
          y1="5"
          x2="4.75"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <line
          x1="19.25"
          y1="5"
          x2="19.25"
          y2="19"
          stroke="#525C6F"
          strokeWidth="1.5"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.00001 16.2502L9.99 13.5V15.5H12.0005C13.9335 15.5 15.5005 13.933 15.5005 12C15.5005 10.067 13.9335 8.5 12.0005 8.5H7V7H12.0005C14.7619 7 17.0005 9.23857 17.0005 12C17.0005 14.7614 14.7619 17 12.0005 17H9.99V19L7.00001 16.2502Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="underline">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 19H7V17.5H17V19Z"
          fill="#394259"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.25 5V12.25C9.25 13.7688 10.4812 15 12 15C13.5188 15 14.75 13.7688 14.75 12.25V5H16.25V12.25C16.25 14.5972 14.3472 16.5 12 16.5C9.65278 16.5 7.75 14.5972 7.75 12.25V5H9.25Z"
          fill="#394259"
        />
      </symbol>
      <symbol viewBox="0 0 24 24" fill="none" id="undo">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 7.75001L7.2019 10.835V8.5H13.25C15.4591 8.5 17.25 10.2909 17.25 12.5C17.25 14.7091 15.4591 16.5 13.25 16.5H7V18H13.25C16.2876 18 18.75 15.5376 18.75 12.5C18.75 9.46244 16.2876 7 13.25 7H7.2019V4.66547L3.5 7.75001Z"
          fill="#525C6F"
        />
      </symbol>
      <symbol viewBox="0 0 1024 1024" id="fx">
        <path d="M841 370c3-3.3 2.7-8.3-0.6-11.3-1.5-1.3-3.4-2.1-5.3-2.1h-72.6c-2.4 0-4.6 1-6.1 2.8L633.5 504.6c-2.9 3.4-7.9 3.8-11.3 0.9-0.9-0.8-1.6-1.7-2.1-2.8l-63.5-141.3c-1.3-2.9-4.1-4.7-7.3-4.7H380.7l0.9-4.7 8-42.3c10.5-55.4 38-81.4 85.8-81.4 18.6 0 35.5 1.7 48.8 4.7l14.1-66.8c-22.6-4.7-35.2-6.1-54.9-6.1-103.3 0-156.4 44.3-175.9 147.3l-9.4 49.4h-97.6c-3.8 0-7.1 2.7-7.8 6.4L181.9 415c-0.9 4.3 1.9 8.6 6.2 9.5 0.5 0.1 1.1 0.2 1.6 0.2H284l-89 429.9c-0.9 4.3 1.9 8.6 6.2 9.5 0.5 0.1 1.1 0.2 1.6 0.2H269c3.8 0 7.1-2.7 7.8-6.4l89.7-433.1h135.8l68.2 139.1c1.4 2.9 1 6.4-1.2 8.8l-180.6 203c-2.9 3.3-2.6 8.4 0.7 11.3 1.5 1.3 3.4 2 5.3 2h72.7c2.4 0 4.6-1 6.1-2.8l123.7-146.7c2.8-3.4 7.9-3.8 11.3-1 0.9 0.8 1.6 1.7 2.1 2.8L676.4 784c1.3 2.8 4.1 4.7 7.3 4.7h64.6c4.4 0 8-3.6 8-8 0-1.2-0.3-2.4-0.8-3.5l-95.2-198.9c-1.4-2.9-0.9-6.4 1.3-8.8L841 370z" />
      </symbol>
    </defs>
  </svg>
);

export default SVGDefines;
