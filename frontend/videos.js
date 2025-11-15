// Video data for different categories
const videoData = {
    // Learning Zones
    telugu: [
        { title: "Telugu Alphabets 1", url: "https://www.youtube.com/embed/TQt7DtORoOo" },
        { title: "Telugu Alphabets 2", url: "https://www.youtube.com/embed/rf34i5n3kcA" },
        { title: "Telugu Alphabets 3", url: "https://www.youtube.com/embed/VsmS35KaUyk" },
        { title: "Telugu Alphabets 4", url: "https://www.youtube.com/embed/iXYleETEiYo" },
        { title: "Telugu Alphabets 5", url: "https://www.youtube.com/embed/DyCm_xBLe7U" }
    ],
    grammar: [
        { title: "English Grammar 1", url: "https://youtu.be/QahSR-a6raQ" },
        { title: "English Grammar 2", url: "https://youtu.be/f2638snImhI" },
        { title: "English Grammar 3", url: "https://youtu.be/-4CL3Xn-ycw" },
        { title: "English Grammar 4", url: "https://youtu.be/ccEpTTZW34g" }
    ],
    stories: [
        { title: "Kids Story 1", url: "https://youtu.be/DZAB2Dpztp4" },
        { title: "Kids Story 2", url: "https://youtu.be/IvBUX6JIv7w" },
        { title: "Kids Story 3", url: "https://youtu.be/f6_sBjLRi7E" },
        { title: "Kids Story 4", url: "https://youtu.be/i8-Qip64RNw" },
        { title: "Kids Story 5", url: "https://youtu.be/O5M6VXXaCdE" }
    ],
    maths: [
        { title: "Maths 1", url: "https://youtu.be/QcibLMpBDWg" },
        { title: "Maths 2", url: "https://youtu.be/hlVmO01LCRk" },
        { title: "Maths 3", url: "https://youtu.be/0UEzj2ta5Wo" },
        { title: "Maths 4", url: "https://youtu.be/garwCSnpNhI" }
    ],
    history: [], // No videos provided
    science: [
        { title: "Pre KG Science 1", url: "https://youtu.be/EO1IGi83LGg" },
        { title: "Pre KG Science 2", url: "https://youtu.be/cilFllzBQDk" },
        { title: "Pre KG Science 3", url: "https://youtu.be/CXKj7bm4Ops" },
        { title: "LKG Science 1", url: "https://youtu.be/P15rsMVtiFQ" },
        { title: "LKG Science 2", url: "https://youtu.be/NEG5NnLqlno" },
        { title: "LKG Science 3", url: "https://youtu.be/RJ7r6Iws7Nk" },
        { title: "LKG Science 4", url: "https://youtu.be/Rt1h0jcXgGA" },
        { title: "UKG Science 1", url: "https://youtu.be/KZn42zsbPN0" },
        { title: "UKG Science 2", url: "https://youtu.be/z5BMp48fzuM" },
        { title: "UKG Science 3", url: "https://youtu.be/tWvUJncy9aE" },
        { title: "UKG Science 4", url: "https://youtu.be/3QH9vm3F5Ys" },
        { title: "UKG Science 5", url: "https://youtu.be/omcGccw6c58" }
    ],
    ramayana: [], // No videos provided
    mahabharata: [], // No videos provided

    // Grade-wise Learning
    english: [
        { title: "Pre KG English 1", url: "https://www.youtube.com/embed/6g_fjnW77Fs" },
        { title: "Pre KG English 2", url: "https://www.youtube.com/embed/DR-cfDsHCGA" },
        { title: "Pre KG English 3", url: "https://www.youtube.com/embed/NvzvGvZT5V4" },
        { title: "Pre KG English 4", url: "https://www.youtube.com/embed/a-7jsy8wjAo" },
        { title: "Pre KG English 5", url: "https://www.youtube.com/embed/eaYFQaDtfFE" },
        { title: "LKG English 1", url: "https://www.youtube.com/embed/hQSBGyWOjNs" },
        { title: "LKG English 2", url: "https://www.youtube.com/embed/-FcFExciXa0" },
        { title: "LKG English 3", url: "https://www.youtube.com/embed/g9KzGmLzIHU" },
        { title: "LKG English 4", url: "https://www.youtube.com/embed/mVTQALwkmmg" },
        { title: "LKG English 5", url: "https://www.youtube.com/embed/i-ojOPOODO0" },
        { title: "UKG English 1", url: "https://www.youtube.com/embed/CRQdhS1TJdo" },
        { title: "UKG English 2", url: "https://www.youtube.com/embed/7J1OkxuyLD0" },
        { title: "UKG English 3", url: "https://www.youtube.com/embed/peSNdpGC14Q" },
        { title: "UKG English 4", url: "https://www.youtube.com/embed/iK9SsB2GvW8" },
        { title: "UKG English 5", url: "https://www.youtube.com/embed/58ckl4SaeYQ" }
    ],
    gk: [
        { title: "Pre KG GK 1", url: "https://www.youtube.com/embed/3mFOuEm7Vqw" },
        { title: "Pre KG GK 2", url: "https://www.youtube.com/embed/SUt8q0EKbms" },
        { title: "Pre KG GK 3", url: "https://www.youtube.com/embed/utwgf_G91Eo" },
        { title: "Pre KG GK 4", url: "https://www.youtube.com/embed/UUt7bAAYpBc" },
        { title: "Pre KG GK 5", url: "https://www.youtube.com/embed/M0F32rOXm3c" },
        { title: "Pre KG GK 6", url: "https://www.youtube.com/embed/hPZ6cqop1SE" },
        { title: "LKG GK 1", url: "https://www.youtube.com/embed/16bLbffpdfQ" },
        { title: "LKG GK 2", url: "https://www.youtube.com/embed/MYGU5HDXT6w" },
        { title: "LKG GK 3", url: "https://www.youtube.com/embed/o0e5A5hceUs" },
        { title: "UKG GK 1", url: "https://www.youtube.com/embed/o0e5A5hceUs" },
        { title: "UKG GK 2", url: "https://www.youtube.com/embed/KjcaCmIhcgI" },
        { title: "UKG GK 3", url: "https://www.youtube.com/embed/eGGwB93IGwo" }
    ],

    // Additional categories
    rhymes: [
        { title: "Pre KG Rhymes 1", url: "https://www.youtube.com/embed/AIIj0mBX1jU" },
        { title: "Pre KG Rhymes 2", url: "https://www.youtube.com/embed/EA_fbT6oN2k" },
        { title: "Pre KG Rhymes 3", url: "https://www.youtube.com/embed/1dttq5p0xUM" },
        { title: "Pre KG Rhymes 4", url: "https://www.youtube.com/embed/N5YSbaUl9Y4" },
        { title: "Pre KG Rhymes 5", url: "https://www.youtube.com/embed/1m8IyfG925Q" },
        { title: "Pre KG Rhymes 6", url: "https://www.youtube.com/embed/q28o1PNK844" },
        { title: "Pre KG Rhymes 7", url: "https://www.youtube.com/embed/hq3yfQnllfQ" },
        { title: "Pre KG Rhymes 8", url: "https://www.youtube.com/embed/VdhVZIc8bWE" },
        { title: "Pre KG Rhymes 9", url: "https://www.youtube.com/embed/QahSR-a6raQ" },
        { title: "LKG Rhymes 1", url: "https://www.youtube.com/embed/zhbC-3Fu77E" },
        { title: "LKG Rhymes 2", url: "https://www.youtube.com/embed/hqIf2RVdoIY" },
        { title: "LKG Rhymes 3", url: "https://www.youtube.com/embed/1o3m1A7Bud8" },
        { title: "LKG Rhymes 4", url: "https://www.youtube.com/embed/VdhVZIc8bWE" }
    ],
    creative: [
        { title: "LKG Creative Skills 1", url: "https://www.youtube.com/embed/Zu6o23Pu0Do" },
        { title: "LKG Creative Skills 2", url: "https://www.youtube.com/embed/paEBKVkQ8ZU" },
        { title: "LKG Creative Skills 3", url: "https://www.youtube.com/embed/nn9Tq7FruSI" }
    ]
};

// Function to get videos for a category
function getVideosForCategory(category) {
    return videoData[category] || [];
}
