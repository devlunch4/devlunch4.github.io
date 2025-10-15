const pages = [
    //portfolio
    { url: "https://devlunch4.github.io/portfolio/", title: "Portfolio - Blog List type" },

    // quick
    { url: "https://quickblog-mern.vercel.app/", title: "Quick-BLOG: MERN AI BLOG - client & server" },
    { url: "https://quickai-pern-v2.vercel.app/", title: "Quick-AI: PERN AI IMAGE - client & server" },
    { url: "https://quickstay-cli-srv-frontend.vercel.app/", title: "Quick-Stay: MERN HOTEL - client & server" },

    //
    { url: "https://trippy-react-app.web.app/", title: "trippy-react-app: Frontend" },
    { url: "https://weather-react-app-d391c.web.app/", title: "Weather-app" },
    { url: "https://nwitter-v2.web.app/", title: "Twitter-Clone" },
    // safe issue { url: "https://react-fb-chat-app-8d8c2.web.app/", title: "Chat-app1" },
    { url: "https://lunch-chat.web.app/", title: "Chat-app2" },

    // Training gov Java Web Course Project
    { url: "https://github.com/devlunch4/midProject_webHotelManage", title: "TeamProject_webHotelManage_2021" },
    { url: "https://github.com/devlunch4/3TeamFinalProject", title: "TeamProject_smartFarm_2021" },

    // devlunch4 tools
    { url: "https://devlunch4.github.io/my-text-analyzer/", title: "my-text-analyzer" },
    { url: "https://devlunch4.github.io/dir2md/", title: "dir2md: Dir Tree to MD Util" },
    { url: "https://devlunch4.github.io/IBM_course_Develop_an_Interactive_Task_List_Web-Page/", title: "Take_List/Todo_List" },

    //no
    { url: "https://devlunch4.github.io/nomadcoders_javascript-for-beginners/", title: "nomadcoders_javascript-for-beginners" },

    // util sort 
    { url: "https://devlunch4.github.io/utility/html-structure-analyzer.html", title: "html-structure-analyzer" },
    { url: "https://devlunch4.github.io/utility/counting_korean_characters.html", title: "Counting_Korean_Characters" },
    { url: "https://devlunch4.github.io/utility/normalize-line-breaks.html", title: "normalize-line-breaks" },
    { url: "https://devlunch4.github.io/utility/text-to-excel-with-delimiter.html", title: "text-to-excel-with-delimiter" },
    //usedin Local
    // { url: "https://devlunch4.github.io/utility/calc-blog-visitor.html", title: "calc-blog-visitor" },
    //
    { url: "https://devlunch4.github.io/get-github-repos-web/", title: "get-github-repos-web" },

    // free
    { url: "https://devlunch4.github.io/snake-game-js/", title: "snake-game-js" },

    // nomad learn
    { url: "https://devlunch4.github.io/react-for-beginners_202501/", title: "Movie App" },
    { url: "https://play.unity.com/en/games/caee619b-0ed2-417d-b3c8-985ca023be4f/kimchi-run-by-devlunch4", title: "Unity6 Game Kimchi-Run" },

    //practice
    { url: "https://devlunch4.github.io/image-track-practice/index.html", title: "image-track-practice" },

    // front mentor
    { url: "https://devlunch4.github.io/results-summary-component_frontend_mentor/index.html", title: "results-summary-component" },
    { url: "https://devlunch4.github.io/product-preview-card-component_frontend_mentor/", title: "product-preview-card-component" },
    { url: "https://devlunch4.github.io/order-summary-component_frontend_mentor/index.html", title: "order-summary-component" },
    { url: "https://devlunch4.github.io/four-card-feature-section_frontend_mentor/index.html", title: "four-card-feature-section" },
    { url: "https://devlunch4.github.io/faq-accordion_frontend_mentor/index.html", title: "faq-accordion" },
];

const grid = document.getElementById('projectGrid');

pages.forEach((p, idx) => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.innerHTML = `
        <h3>${idx + 1}. ${p.title}</h3>
        <a href="${p.url}" target="_blank">${p.url}</a>
    `;

    // 카드 전체 클릭 시 링크로 이동
    card.addEventListener('click', () => {
        window.open(p.url, '_blank');
    });

    // 카드 안의 a 태그 클릭 시 중복 이벤트 방지
    card.querySelector('a').addEventListener('click', e => {
        e.stopPropagation();
    });

    grid.appendChild(card);
});
