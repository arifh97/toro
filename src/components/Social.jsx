import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";


export default function Social({ className }) {
  const socialIcons = [

    {
      name: 'twitter',
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
  <mask id="path-2-inside-1_85_98" fill="white">
    <path d="M33.1349 5.82104H38.5383L26.7334 20.7475L40.6209 41.0591H29.7471L21.2304 28.7402L11.4853 41.0591H6.07862L18.7051 25.0936L5.38281 5.82104H16.5326L24.231 17.081L33.1349 5.82104ZM31.2385 37.4811H34.2325L14.9058 9.21111H11.6928L31.2385 37.4811Z"/>
  </mask>
  <path d="M33.1349 5.82104H38.5383L26.7334 20.7475L40.6209 41.0591H29.7471L21.2304 28.7402L11.4853 41.0591H6.07862L18.7051 25.0936L5.38281 5.82104H16.5326L24.231 17.081L33.1349 5.82104ZM31.2385 37.4811H34.2325L14.9058 9.21111H11.6928L31.2385 37.4811Z" fill="#62281F"/>
  <path d="M33.1349 5.82104V0.821045H30.7143L29.2129 2.71972L33.1349 5.82104ZM38.5383 5.82104L42.46 8.92263L48.8673 0.821045L38.5383 0.821045V5.82104ZM26.7334 20.7475L22.8117 17.6459L20.5291 20.5321L22.606 23.5696L26.7334 20.7475ZM40.6209 41.0591V46.0591H50.0965L44.7484 38.2371L40.6209 41.0591ZM29.7471 41.0591L25.6343 43.9025L27.1253 46.0591H29.7471V41.0591ZM21.2304 28.7402L25.3432 25.8968L21.5008 20.3391L17.309 25.6382L21.2304 28.7402ZM11.4853 41.0591V46.0591H13.9053L15.4067 44.1612L11.4853 41.0591ZM6.07862 41.0591L2.15685 37.9576L-4.25034 46.0591H6.07862V41.0591ZM18.7051 25.0936L22.6269 28.1951L24.9217 25.2935L22.8181 22.2504L18.7051 25.0936ZM5.38281 5.82104V0.821045H-4.15181L1.26984 8.66418L5.38281 5.82104ZM16.5326 5.82104L20.6601 2.99907L19.171 0.821045H16.5326V5.82104ZM24.231 17.081L20.1034 19.903L23.9384 25.5121L28.1529 20.1823L24.231 17.081ZM31.2385 37.4811L27.1258 40.3246L28.6167 42.4811H31.2385V37.4811ZM34.2325 37.4811V42.4811H43.7075L38.3601 34.6592L34.2325 37.4811ZM14.9058 9.21111L19.0334 6.38927L17.5443 4.21111H14.9058V9.21111ZM11.6928 9.21111V4.21111H2.15708L7.58004 12.0546L11.6928 9.21111ZM33.1349 10.821H38.5383V0.821045H33.1349V10.821ZM34.6165 2.71946L22.8117 17.6459L30.6552 23.8491L42.46 8.92263L34.6165 2.71946ZM22.606 23.5696L36.4934 43.8812L44.7484 38.2371L30.8609 17.9255L22.606 23.5696ZM40.6209 36.0591H29.7471V46.0591H40.6209V36.0591ZM33.8599 38.2157L25.3432 25.8968L17.1176 31.5836L25.6343 43.9025L33.8599 38.2157ZM17.309 25.6382L7.56396 37.9571L15.4067 44.1612L25.1518 31.8423L17.309 25.6382ZM11.4853 36.0591H6.07862V46.0591H11.4853V36.0591ZM10.0004 44.1607L22.6269 28.1951L14.7834 21.992L2.15685 37.9576L10.0004 44.1607ZM22.8181 22.2504L9.49579 2.97791L1.26984 8.66418L14.5922 27.9367L22.8181 22.2504ZM5.38281 10.821H16.5326V0.821045H5.38281V10.821ZM12.405 8.64302L20.1034 19.903L28.3585 14.259L20.6601 2.99907L12.405 8.64302ZM28.1529 20.1823L37.0568 8.92237L29.2129 2.71972L20.309 13.9797L28.1529 20.1823ZM31.2385 42.4811H34.2325V32.4811H31.2385V42.4811ZM38.3601 34.6592L19.0334 6.38927L10.7782 12.0329L30.1049 40.3029L38.3601 34.6592ZM14.9058 4.21111H11.6928V14.2111H14.9058V4.21111ZM7.58004 12.0546L27.1258 40.3246L35.3512 34.6376L15.8055 6.3676L7.58004 12.0546Z" fill="#62281F" mask="url(#path-2-inside-1_85_98)"/>
</svg>`,
      url: 'https://x.com/degentoro?s=11&t=NFOye6ceGwdYI3RZA5tBtQ'
    },
    {
      name: 'telegram',
      icon: `<svg width="42" height="41" viewBox="0 0 42 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.7003 17.2449L29.7002 17.245C29.1527 17.7881 28.5507 18.3803 27.9178 19.0028C26.2301 20.663 24.3235 22.5384 22.65 24.2711C21.4999 25.4619 20.4682 26.5767 19.6991 27.5004C19.3142 27.9625 19.001 28.3698 18.7731 28.71C18.5367 29.0629 18.4218 29.3007 18.389 29.4331C18.3065 29.7689 18.4002 30.2006 18.7114 30.7319C19.0184 31.2559 19.4974 31.8077 20.0559 32.3448C21.1707 33.4167 22.5223 34.3547 23.198 34.8076C25.9023 36.6182 28.9136 38.3565 30.9456 39.4871C33.0529 40.6594 35.6075 39.3255 35.9971 36.9202L29.7003 17.2449ZM29.7003 17.2449C30.1181 16.83 30.4134 16.4311 30.5722 16.073C30.7126 15.7565 30.8233 15.2784 30.5054 14.9221C30.1883 14.5666 29.6995 14.6191 29.3607 14.723C28.9784 14.8402 28.5316 15.091 28.0418 15.4699M29.7003 17.2449L28.0418 15.4699M28.0418 15.4699C23.4353 19.0321 16.0588 24.4339 13.6377 25.9437C12.5769 26.6049 11.8039 26.9699 11.1527 27.1481C10.5156 27.3225 9.97335 27.3241 9.36057 27.2195L9.36044 27.2194C6.9389 26.8067 4.70247 26.1688 2.88748 25.3976L2.88741 25.3975C0.807993 24.5143 0.882094 21.5548 2.88794 20.6895C2.88796 20.6895 2.88797 20.6895 2.88798 20.6895L37.1008 5.93467C37.5116 5.75758 37.9606 5.69672 38.4013 5.75789C38.8421 5.81906 39.26 6.00026 39.6113 6.28395C39.9626 6.56773 40.2346 6.94389 40.3975 7.37417C40.5605 7.80446 40.608 8.27215 40.5348 8.72821C40.5348 8.72826 40.5348 8.72832 40.5348 8.72838L35.9972 36.9198L28.0418 15.4699Z" fill="#62281F" stroke="#62281F"/>
</svg>
`,
      url: 'https://t.me/DegenToroInoueCTO'
    },
    {
      name: 'twitter',
      icon: `<svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_85_107)">
<path d="M20.7817 13.217L20.7811 13.2172C20.6391 13.2498 20.4901 13.2698 20.3366 13.2757C20.8416 12.9709 21.374 12.6232 21.9162 12.2299C21.9077 12.2938 21.8936 12.3513 21.8759 12.4025C21.8182 12.5682 21.704 12.7295 21.5295 12.87C21.3366 13.0249 21.0814 13.1484 20.7817 13.217ZM13.4884 18.3301L13.4884 18.3299C13.4264 16.993 13.5758 16.087 13.8244 15.4471C14.0678 14.8208 14.4201 14.4132 14.8361 14.0897C15.091 13.8918 15.3391 13.8143 15.5561 13.8143C15.7732 13.8143 16.0212 13.8918 16.2763 14.0897C16.6923 14.4132 17.0446 14.8208 17.288 15.4471C17.5366 16.087 17.686 16.993 17.624 18.3299L17.624 18.3301C17.6108 18.6177 17.687 18.9033 17.8434 19.1461C17.9882 19.371 18.1956 19.5492 18.4408 19.6575L18.8943 19.9247C17.1018 21.3301 16.2219 23.3318 15.5562 25.3306C14.8904 23.3318 14.0105 21.3301 12.2181 19.9247L12.6716 19.6575C12.9168 19.5492 13.1242 19.371 13.269 19.1461C13.4254 18.9033 13.5016 18.6177 13.4884 18.3301ZM22.5487 4.03671L22.5488 4.03678C22.8985 4.32654 23.1893 4.60848 23.5233 4.9478L23.7113 5.13883L23.9792 5.14828C24.2467 5.15771 24.5191 5.10879 24.7854 5.02157C24.1782 5.84649 23.435 6.67485 22.6122 7.46463C20.9959 9.01613 19.1441 10.3504 17.5928 11.1519C16.9625 10.7543 16.2653 10.5472 15.5561 10.5472C14.847 10.5472 14.1498 10.7543 13.5196 11.1519C11.9682 10.3504 10.1164 9.01614 8.50012 7.46463C7.67736 6.67487 6.9342 5.84652 6.327 5.02161C6.59328 5.1088 6.86561 5.15771 7.13305 5.14828L7.4008 5.13883L7.58882 4.94797C7.92317 4.60856 8.21394 4.32648 8.56358 4.03671L8.56358 4.03671C9.34923 3.38557 10.2146 2.84292 11.1393 2.43299C12.4613 1.84779 14.0021 1.53879 15.5561 1.49414C17.1103 1.53879 18.6511 1.8478 19.973 2.43299C20.8976 2.84292 21.7631 3.38557 22.5487 4.03671ZM13.1744 11.394C13.1743 11.394 13.1742 11.3941 13.1741 11.3942L13.1722 11.3957L13.1707 11.3968L13.1703 11.3971L13.1702 11.3972L13.1702 11.3972L13.1702 11.3972L13.1744 11.394ZM10.3313 13.2172L10.3307 13.217C10.0312 13.1485 9.77606 13.0251 9.58299 12.8702C9.4085 12.7296 9.29415 12.5683 9.23634 12.4024C9.21872 12.3512 9.20465 12.2938 9.19612 12.2299C9.73835 12.6232 10.2708 12.9709 10.7757 13.2757C10.6223 13.2697 10.4733 13.2498 10.3313 13.2172Z" fill="#62281F" stroke="#62281F" stroke-width="1.34615"/>
<path d="M26.6954 18.1521C26.745 21.3158 27.2754 24.5189 28.4288 27.5726L26.6065 26.0737L26.0053 25.5793L25.6028 26.2455L23.1894 30.2401L20.8039 27.9495L20.1968 27.3666L19.7616 28.0869L16.3323 33.7633C16.4863 33.2491 16.6466 32.6836 16.8166 32.0836C17.1846 30.7848 17.5985 29.3244 18.0944 27.8724C18.4843 26.731 18.9121 25.6375 19.3842 24.7012C19.8561 23.7654 20.3515 23.029 20.8636 22.5552C21.0399 22.4121 21.2271 22.2839 21.4234 22.1717L21.4234 22.1717L24.354 20.4961L25.3607 19.9205L24.3615 19.3319L20.888 17.2856C20.8798 17.0367 20.8645 16.7886 20.8409 16.542C21.0619 16.5185 21.2826 16.4818 21.5016 16.4315L21.5016 16.4315C22.2361 16.2628 22.9477 15.9395 23.5553 15.4509C24.1827 14.9465 24.6778 14.2789 24.9501 13.4917L24.4024 13.3022L24.9501 13.4917C25.3742 12.2658 25.1825 11.0063 24.6722 9.92487L24.6722 9.92485L24.6342 9.84446C25.0012 9.44343 25.3432 9.02967 25.6558 8.62434C26.3345 10.1482 26.6809 11.67 26.6809 13.3636C26.6809 13.3637 26.6809 13.3639 26.6809 13.364L26.6791 16.51H26.679L26.6791 16.5172L26.6954 18.1482L26.6954 18.1521ZM14.295 32.0844C14.465 32.6845 14.6252 33.25 14.7793 33.7642L11.3494 28.0871L10.9142 27.3667L10.3072 27.9496L7.92171 30.2402L5.50834 26.2456L5.10584 25.5794L4.50469 26.0738L2.68221 27.5728C3.83563 24.5191 4.36604 21.316 4.41574 18.1522H4.41575L4.41579 18.1484L4.43206 16.5173L4.4321 16.5173L4.4321 16.5102L4.43024 13.3641C4.43024 11.6703 4.77655 10.1483 5.45532 8.6245C5.76793 9.02981 6.11 9.44356 6.47696 9.84462L6.43913 9.92478C6.43912 9.9248 6.43911 9.92482 6.4391 9.92485C5.92858 11.0062 5.73707 12.2659 6.16101 13.4916L6.16107 13.4918C6.4335 14.2788 6.92834 14.9464 7.55593 15.4509C8.16361 15.9394 8.87505 16.2628 9.60966 16.4315L9.60971 16.4315C9.82869 16.4818 10.0493 16.5185 10.2704 16.542C10.2468 16.7886 10.2314 17.0367 10.2232 17.2856L6.74985 19.3319L5.75069 19.9205L6.75741 20.4961L9.68791 22.1717C9.68793 22.1717 9.68795 22.1717 9.68796 22.1717C9.88422 22.2839 10.0715 22.4122 10.2478 22.5552C10.7598 23.029 11.2552 23.7654 11.7271 24.7012C12.1992 25.6375 12.627 26.731 13.0169 27.8724C13.5129 29.3246 13.9269 30.7854 14.295 32.0844Z" fill="#62281F" stroke="#62281F" stroke-width="1.34615"/>
</g>
<defs>
<clipPath id="clip0_85_107">
<rect width="29.2985" height="35.5769" fill="white" transform="translate(0.90625 0.820801)"/>
</clipPath>
</defs>
</svg>
`,
      url: ''
    },
    {
      name: 'twitter',
      icon: `<svg width="31" height="37" viewBox="0 0 31 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_85_112)">
<path d="M10.6641 4.53217C10.729 4.56514 10.7941 4.5982 10.8593 4.63124C11.5008 4.95607 12.1438 5.27566 12.6342 5.51207C12.7358 5.56106 12.8293 5.60574 12.9138 5.64565C13.1049 5.55481 13.3325 5.44235 13.5702 5.32005L13.5704 5.31996L14.7436 4.71651L15.4021 4.37781L16.0607 4.71633L17.342 5.37496L17.3422 5.37503L18.007 5.71682L19.473 5.05807C19.473 5.05807 19.473 5.05807 19.473 5.05807C19.7928 4.91434 20.083 4.78388 20.3461 4.6654C19.8411 4.39817 19.2465 4.08451 18.5519 3.71882L18.5519 3.71881C17.2194 3.0173 15.8974 2.31511 15.4319 2.06135C15.2771 2.13962 15.0961 2.23161 14.8928 2.33548C14.1841 2.69754 13.2157 3.19752 12.1595 3.74772L10.6641 4.53217ZM10.6641 4.53217C10.091 4.24085 9.53868 3.95514 9.11853 3.73168C9.11574 3.73019 9.11295 3.72871 9.11016 3.72723C9.7669 3.37579 10.5959 2.9384 11.4941 2.47047M10.6641 4.53217L22.0028 3.91425C21.3405 3.56129 20.4316 3.08088 19.2228 2.44448C17.7358 1.66161 16.2926 0.894019 16.0155 0.738698C15.7385 0.583377 15.474 0.458431 15.4278 0.46085C15.3816 0.463269 13.6114 1.36761 11.4941 2.47047M10.6641 4.53217C11.1234 4.28938 11.629 4.02407 12.1594 3.74774M10.6641 4.53217L12.1594 3.74774M11.4941 2.47047L12.1594 3.74774M11.4941 2.47047L12.1594 3.74774M6.26355 11.8391C7.04878 12.2663 7.83443 12.6927 8.6205 13.1183M6.26355 11.8391L2.20799 7.27915C3.42022 6.65295 4.50447 6.13599 4.61745 6.13021C4.73043 6.12443 7.18019 7.33027 10.0614 8.80982M6.26355 11.8391V11.1393L6.65847 10.4144L6.65799 10.4142M6.26355 11.8391L4.8234 16.3213M8.6205 13.1183L10.1254 13.9331M8.6205 13.1183L9.30622 11.8519M8.6205 13.1183L9.30619 11.8519L9.30622 11.8519M10.1254 13.9331L10.7951 13.6303M10.1254 13.9331L9.53204 12.6209L10.1829 12.3266M10.1254 13.9331L10.5647 13.1217L10.7951 13.6303M10.7951 13.6303C11.2151 13.4401 11.6342 13.248 12.0525 13.0541M10.7951 13.6303L10.5649 13.1214L10.8111 12.6667L10.2129 12.3428M12.0525 13.0541C12.3494 12.9158 13.0431 12.603 13.6553 12.331C13.5742 12.285 13.4835 12.2343 13.3825 12.1785C13.0394 11.9889 12.602 11.7541 12.0589 11.4681M12.0525 13.0541L11.4468 11.7475C11.4464 11.7477 11.446 11.7479 11.4456 11.7481M12.0525 13.0541L11.4445 11.7486C11.4449 11.7484 11.4452 11.7483 11.4456 11.7481M12.0589 11.4681C12.42 11.305 12.8528 11.1112 13.2323 10.9431C13.4026 10.8676 13.5685 10.7924 13.7207 10.722C12.9057 10.2805 11.7117 9.65729 10.0614 8.80982M12.0589 11.4681C11.3579 11.0988 10.4808 10.6441 9.40348 10.0909L10.0614 8.80982M12.0589 11.4681C11.804 11.5833 11.5849 11.6832 11.4456 11.7481M10.0614 8.80982L9.40347 10.0909C7.96804 9.3538 6.64285 8.68629 5.66532 8.20513C5.23543 7.99352 4.87773 7.82041 4.60955 7.69406C4.5582 7.71811 4.50322 7.7441 4.44479 7.77196C4.02485 7.9722 3.46474 8.25091 2.86895 8.55868L2.86891 8.55869L1.44413 9.29464M1.44413 9.29464L10.2017 12.3181M1.44413 9.29464V13.414C1.44413 14.4651 1.44838 15.4413 1.45559 16.2442M1.44413 9.29464L10.2116 12.3421M11.4456 11.7481C11.0318 11.9399 10.6172 12.1299 10.2017 12.3181M10.2017 12.3181L10.2129 12.3428M10.2017 12.3181L10.2129 12.3428M10.2129 12.3428L10.2116 12.3421M10.2116 12.3421L10.2009 12.3184L10.1829 12.3266M10.2116 12.3421L10.1829 12.3266M10.1829 12.3266L9.30622 11.8519M9.30622 11.8519C8.42294 11.3736 7.5402 10.8944 6.65799 10.4142M6.65799 10.4142L5.5124 9.79005L3.38324 8.63005V11.0547V15.3862M6.65799 10.4142L6.26355 11.1388V11.0547H4.8234L4.1344 12.3193L4.8234 12.6947V16.3213M3.38324 15.3862L1.89215 16.0503C1.74335 16.1165 1.59739 16.1814 1.45559 16.2442M3.38324 15.3862L4.23746 15.0057L4.8234 16.3213M3.38324 15.3862V16.3213H4.8234M1.45559 16.2442C1.45777 16.4877 1.46023 16.7153 1.46292 16.9242C1.46752 17.2813 1.47277 17.5798 1.47839 17.8084L0.021991 16.8721C0.08583 16.8446 0.155314 16.8146 0.230008 16.7822C0.561272 16.6386 0.985655 16.4524 1.45559 16.2442ZM27.755 21.0312L27.7548 21.0312L27.5901 21.1064L27.5753 22.8005V22.8006C27.5689 23.5304 27.5523 24.2 27.5299 24.6931C27.5189 24.9361 27.5058 25.1544 27.4899 25.3212C27.4827 25.3973 27.4713 25.5016 27.4521 25.603C27.4449 25.6411 27.4229 25.7561 27.3725 25.8878C27.3518 25.9419 27.2867 26.1078 27.1469 26.2826C27.0287 26.4302 26.5722 26.9214 25.8101 26.8104L25.8059 26.8098C25.675 26.7903 25.5728 26.7561 25.5465 26.7473L25.5448 26.7467C25.5023 26.7325 25.466 26.7185 25.4418 26.7088C25.3923 26.6891 25.3431 26.6674 25.3015 26.6486C25.2158 26.6099 25.1107 26.5597 24.9951 26.5033C24.7613 26.389 24.4479 26.231 24.0854 26.045C23.3584 25.6722 22.412 25.1759 21.4643 24.6681L27.755 21.0312ZM27.755 21.0312C28.2818 20.7908 29.0314 20.4525 29.4533 20.2644M27.755 21.0312L29.4533 20.2644M29.4533 20.2644C29.4622 21.0655 29.4672 22.0125 29.4681 22.9652C29.4693 24.1948 29.4636 25.4265 29.451 26.3582C29.4468 26.6668 29.4418 26.939 29.4362 27.1654C29.4262 27.171 29.4161 27.1766 29.4059 27.1823C28.9954 27.4101 28.4334 27.7106 27.8213 28.0272L28.4638 29.2692L27.8213 28.0272L26.2248 28.8531L21.598 26.4505L21.0084 27.5858L21.598 26.4505C20.6124 25.9387 19.6937 25.4555 18.913 25.0395C19.6151 24.7287 20.2751 24.4336 20.6731 24.2521C20.6798 24.2555 20.6867 24.2589 20.6937 24.2624C20.8782 24.3552 21.1218 24.4846 21.4642 24.668L29.4533 20.2644ZM8.90036 3.83972C8.12988 4.25372 7.64489 4.52453 7.64508 4.54462C7.64539 4.57631 8.17725 4.867 8.90284 5.2456C8.91086 5.23124 8.91888 5.2163 8.92684 5.20078L8.90036 3.83972ZM15.0558 11.5036C14.8975 11.3828 14.5378 11.1689 13.9362 10.8394C13.8332 11.0001 13.7574 11.1893 13.7264 11.4024C13.6746 11.7594 13.7701 12.0385 13.8326 12.1793C13.8418 12.2001 13.8514 12.2202 13.8612 12.2396C14.49 11.9598 15.0626 11.6836 15.1455 11.6195C15.1658 11.6037 15.1378 11.5662 15.0559 11.5037C15.0559 11.5037 15.0558 11.5036 15.0558 11.5036ZM5.82377 27.2763C5.97577 27.3584 6.16099 27.4621 6.35422 27.5738C6.26485 27.6144 6.17417 27.6555 6.08239 27.6969L6.08233 27.6969L3.97958 28.6459L2.62474 27.9556L1.44961 27.3568L1.47148 25.3089C1.48219 24.3052 1.49399 23.6596 1.51216 23.2417C1.64189 23.1819 1.79911 23.1098 1.98864 23.0231C2.75892 22.6711 3.99815 22.109 5.94629 21.2271L5.94659 21.2269C6.10919 21.1533 7.35102 20.5919 8.87705 19.9021L9.76578 19.5003L9.76583 19.5003L17.3475 16.0732L17.3476 16.0732C19.6103 15.0504 22.3469 13.8145 23.429 13.3268L23.4292 13.3268C23.979 13.0789 24.4838 12.8438 24.8559 12.6635C25.0398 12.5744 25.2027 12.4931 25.3258 12.4278C25.3836 12.3971 25.4547 12.3584 25.5208 12.3177C25.5486 12.3006 25.6127 12.2606 25.6834 12.2053C25.7143 12.1811 25.7921 12.119 25.8757 12.0259C25.9174 11.9794 25.9911 11.8916 26.061 11.7674C26.1231 11.6569 26.2464 11.4056 26.2464 11.0596C26.2464 10.7456 26.1442 10.5144 26.0938 10.4136C26.0361 10.2981 25.9747 10.2142 25.9388 10.1683C25.8674 10.0769 25.8 10.0135 25.7719 9.98763C25.7088 9.92962 25.651 9.88631 25.6251 9.86719C25.5643 9.82225 25.4986 9.77868 25.445 9.74401C25.331 9.67024 25.1801 9.57779 25.01 9.47616C24.7942 9.34728 24.5303 9.19335 24.2381 9.02621C24.3216 8.98835 24.4062 8.95007 24.4917 8.91145L24.4919 8.91138C25.2389 8.57404 25.9261 8.26793 26.4308 8.04677C26.5239 8.00597 26.6102 7.96831 26.6891 7.93407C26.704 7.94134 26.7192 7.94876 26.7346 7.95633C27.1031 8.13678 27.6046 8.38869 28.1486 8.66787C28.1486 8.66789 28.1486 8.6679 28.1487 8.66792L29.3557 9.28747L29.3336 11.3718V11.3718L29.3119 13.4328L28.7319 13.6986C27.9601 14.0522 25.8211 15.022 23.9787 15.8536L23.9786 15.8537C21.8818 16.8003 19.7853 17.7475 17.6891 18.6952L17.689 18.6953C13.0026 20.8146 10.8214 21.7968 7.97107 23.0711L7.971 23.0712C7.22964 23.4027 6.55109 23.7145 6.05373 23.9508C5.8069 24.0681 5.59507 24.1713 5.43971 24.2509C5.36528 24.2891 5.28517 24.3313 5.21547 24.3719C5.18544 24.3894 5.12506 24.4251 5.05977 24.4719C5.03182 24.4919 4.95962 24.5445 4.87995 24.6226C4.84116 24.6607 4.76573 24.7384 4.69009 24.851C4.63173 24.9379 4.46346 25.2032 4.44599 25.5916L4.44592 25.5932C4.42292 26.1177 4.67974 26.4719 4.7754 26.5913C4.89725 26.7435 5.02584 26.8453 5.10987 26.9048C5.26111 27.012 5.42157 27.0903 5.57254 27.1454C5.57934 27.1487 5.58793 27.1529 5.59846 27.1581C5.65151 27.1846 5.72766 27.2243 5.82377 27.2763ZM5.5551 27.1371C5.54905 27.1345 5.54808 27.1339 5.55331 27.1363C5.55377 27.1365 5.55437 27.1368 5.5551 27.1371ZM8.27881 28.2706C8.27892 28.2705 8.27903 28.2705 8.27914 28.2704L8.57965 27.6972L8.79058 27.2949L8.57954 27.6972L8.27881 28.2706ZM21.0355 24.0834C21.0354 24.0836 21.0312 24.0856 21.0235 24.0889C21.0318 24.0849 21.0356 24.0832 21.0355 24.0834ZM18.2635 31.1466L18.2638 31.1465L18.5858 31.008L20.4281 31.9398C19.0995 32.588 17.3401 33.4505 16.4519 33.889L15.4332 34.3919L12.1221 32.7218C11.6136 32.4653 11.1665 32.2379 10.7756 32.0367C11.3816 31.7609 11.956 31.501 12.3974 31.3024C12.5558 31.2311 12.6964 31.1681 12.8149 31.1152C12.9751 31.1835 13.2015 31.289 13.5191 31.4472C13.6126 31.4937 13.7055 31.5405 13.7958 31.586C14.0061 31.692 14.2021 31.7909 14.3583 31.8622C14.5889 31.9676 14.9211 32.1058 15.3196 32.1348C15.7507 32.1662 16.1026 32.0607 16.3563 31.9654C16.5073 31.9087 16.7006 31.8233 16.8845 31.7421C16.9555 31.7108 17.0251 31.6801 17.0903 31.6519C17.4813 31.4832 17.8723 31.3148 18.2635 31.1466ZM5.03277 7.50555C5.03339 7.50532 5.0337 7.50521 5.03373 7.5052C5.03376 7.50519 5.03328 7.50537 5.03232 7.50572C5.03247 7.50566 5.03262 7.5056 5.03277 7.50555Z" fill="#62281F" stroke="#62281F" stroke-width="2.88031"/>
</g>
<defs>
<clipPath id="clip0_85_112">
<rect width="30.9404" height="35.58" fill="white" transform="translate(0 0.439941)"/>
</clipPath>
</defs>
</svg>

`,
      url: ''
    },
  ];
  return (
    <ul className={`social-list flex items-center flex-wrap gap-2 justify-center md:justify-start md:gap-[18px] ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} dangerouslySetInnerHTML={{__html:item.icon}} target="_blank" className="social-link flex items-center justify-center ml-1">
            
          </a>
        </li>
      ))}
    </ul>
  )
}