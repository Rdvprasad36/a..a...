// --- CONFIG ---
// Video data for each category
const VIDEO_DATA = {
    'telugu': [
        { id: 'iXYleETEiYo', title: 'Telugu Alphabets Part 1' },
        { id: 'DyCm_xBLe7U', title: 'Telugu Alphabets Part 2' }
    ],
    'grammar': [
        { id: 'QahSR-a6raQ', title: 'Basic English Grammar' },
        { id: 'f2638snImhI', title: 'Grammar for Kids' },
        { id: '-4CL3Xn-ycw', title: 'English Sentences' },
        { id: 'ccEpTTZW34g', title: 'Fun with Grammar' }
    ],
    'stories': [
        { id: 'DZAB2Dpztp4', title: 'Moral Stories for Kids' },
        { id: 'IvBUX6JIv7w', title: 'Bedtime Stories' },
        { id: 'f6_sBjLRi7E', title: 'Animal Stories' },
        { id: 'i8-Qip64RNw', title: 'Fairy Tales' },
        { id: 'O5M6VXXaCdE', title: 'Adventure Stories' }
    ],
    'maths': [
        { id: 'QcibLMpBDWg', title: 'Basic Counting' },
        { id: 'hlVmO01LCRk', title: 'Addition for Kids' },
        { id: '0UEzj2ta5Wo', title: 'Subtraction Fun' },
        { id: 'garwCSnpNhI', title: 'Shapes and Patterns' }
    ],
    'history': [
        { id: 'Dntu8vy4G7c', title: 'Ancient Civilizations' },
        { id: '4S-eQIL8xVQ', title: 'Great Kings of India' },
        { id: '3auYQuu_XnA', title: 'Historical Monuments' },
        { id: 'cLJRs3YOlL8', title: 'Freedom Fighters' },
        { id: 'Bo7JvJMQR2Q', title: 'Indian Culture Heritage' }
    ],
    'science': [
        { id: '3FwJjsJQLT8', title: 'Fun Science Experiments' },
        { id: 'hT3IVdwsvJM', title: 'Solar System Adventure' },
        { id: 'E45BSndrhuo', title: 'Amazing Animals' },
        { id: 'jFsZ4QNIxNY', title: 'Water Cycle Magic' },
        { id: 'aUDENstXRFM', title: 'Plant Life Cycle' }
    ],
    'ramayana': [
        { id: '1UYLjVPgNPc', title: 'Birth of Lord Rama' },
        { id: 'iWpq9Nc5B6g', title: 'Rama and Sita Story' },
        { id: 'Vk_OYQ3aNBI', title: 'Hanuman Adventures' },
        { id: 'THhn4NOG3tM', title: 'Battle of Lanka' },
        { id: '9zzu2qVpOUY', title: 'Return to Ayodhya' }
    ],
    'mahabharata': [
        { id: 'HMHrnD8nAjA', title: 'Pandavas and Kauravas' },
        { id: 'HJsLqLzPa6k', title: 'Bhagavad Gita Lessons' },
        { id: '2-9XC-YPGvM', title: 'Great Warriors' },
        { id: 'XNmw-NgAPco', title: 'Kurukshetra War' },
        { id: 'Ph4MfownyXY', title: 'Moral Stories' }
    ],
    'elearning': [
        { id: 'iXYleETEiYo', title: 'Interactive Learning' },
        { id: 'QahSR-a6raQ', title: 'Digital Classroom' },
        { id: 'DZAB2Dpztp4', title: 'Online Education' },
        { id: 'QcibLMpBDWg', title: 'E-Learning Tools' }
    ],
    'prekg_english': [
        { id: '6g_fjnW77Fs', title: 'Pre KG English 1' },
        { id: 'DR-cfDsHCGA', title: 'Pre KG English 2' },
        { id: 'NvzvGvZT5V4', title: 'Pre KG English 3' },
        { id: 'a-7jsy8wjAo', title: 'Pre KG English 4' },
        { id: 'eaYFQaDtfFE', title: 'Pre KG English 5' }
    ],
    'prekg_gk': [
        { id: '3mFOuEm7Vqw', title: 'Pre KG GK 1' },
        { id: 'SUt8q0EKbms', title: 'Pre KG GK 2' },
        { id: 'utwgf_G91Eo', title: 'Pre KG GK 3' },
        { id: 'UUt7bAAYpBc', title: 'Pre KG GK 4' },
        { id: 'M0F32rOXm3c', title: 'Pre KG GK 5' },
        { id: 'hPZ6cqop1SE', title: 'Pre KG GK 6' }
    ],
    'prekg_science': [
        { id: 'EO1IGi83LGg', title: 'Pre KG Science 1' },
        { id: 'cilFllzBQDk', title: 'Pre KG Science 2' },
        { id: 'CXKj7bm4Ops', title: 'Pre KG Science 3' }
    ],
    'prekg_telugu': [
        { id: 'TQt7DtORoOo', title: 'Pre KG Telugu 1' },
        { id: 'rf34i5n3kcA', title: 'Pre KG Telugu 2' },
        { id: 'VsmS35KaUyk', title: 'Pre KG Telugu 3' }
    ],
    'prekg_rhymes': [
        { id: 'AIIj0mBX1jU', title: 'Pre KG Rhymes 1' },
        { id: 'EA_fbT6oN2k', title: 'Pre KG Rhymes 2' },
        { id: '1dttq5p0xUM', title: 'Pre KG Rhymes 3' },
        { id: 'N5YSbaUl9Y4', title: 'Pre KG Rhymes 4' },
        { id: '1m8IyfG925Q', title: 'Pre KG Rhymes 5' },
        { id: 'q28o1PNK844', title: 'Pre KG Rhymes 6' },
        { id: 'hq3yfQnllfQ', title: 'Pre KG Rhymes 7' },
        { id: 'VdhVZIc8bWE', title: 'Pre KG Rhymes 8' },
        { id: 'QahSR-a6raQ', title: 'Pre KG Rhymes 9' }
    ],
    'lkg_english': [
        { id: 'hQSBGyWOjNs', title: 'LKG English 1' },
        { id: '-FcFExciXa0', title: 'LKG English 2' },
        { id: 'g9KzGmLzIHU', title: 'LKG English 3' },
        { id: 'mVTQALwkmmg', title: 'LKG English 4' },
        { id: 'i-ojOPOODO0', title: 'LKG English 5' }
    ],
    'lkg_maths': [
        { id: 'bOaxFL8d91k', title: 'LKG Maths 1' },
        { id: 'o0w7jHVzXMY', title: 'LKG Maths 2' },
        { id: 'flA57wFCOPA', title: 'LKG Maths 3' },
        { id: '_kYu_HTQ6YM', title: 'LKG Maths 4' },
        { id: 'RL0JSHQfZ84', title: 'LKG Maths 5' },
        { id: 'yPqRqjM8MOQ', title: 'LKG Maths 6' },
        { id: 'O1S8WzwLPlM', title: 'LKG Maths 7' }
    ],
    'lkg_science': [
        { id: 'P15rsMVtiFQ', title: 'LKG Science 1' },
        { id: 'NEG5NnLqlno', title: 'LKG Science 2' },
        { id: 'RJ7r6Iws7Nk', title: 'LKG Science 3' },
        { id: 'Rt1h0jcXgGA', title: 'LKG Science 4' }
    ],
    'lkg_gk': [
        { id: '16bLbffpdfQ', title: 'LKG GK 1' },
        { id: 'MYGU5HDXT6w', title: 'LKG GK 2' },
        { id: 'o0e5A5hceUs', title: 'LKG GK 3' }
    ],
    'lkg_creative': [
        { id: 'Zu6o23Pu0Do', title: 'LKG Creative Skills 1' },
        { id: 'paEBKVkQ8ZU', title: 'LKG Creative Skills 2' },
        { id: 'nn9Tq7FruSI', title: 'LKG Creative Skills 3' }
    ],
    'lkg_rhymes': [
        { id: 'zhbC-3Fu77E', title: 'LKG Rhymes 1' },
        { id: 'hqIf2RVdoIY', title: 'LKG Rhymes 2' },
        { id: '1o3m1A7Bud8', title: 'LKG Rhymes 3' },
        { id: 'VdhVZIc8bWE', title: 'LKG Rhymes 4' }
    ],
    'ukg_english': [
        { id: 'CRQdhS1TJdo', title: 'UKG English 1' },
        { id: '7J1OkxuyLD0', title: 'UKG English 2' },
        { id: 'peSNdpGC14Q', title: 'UKG English 3' },
        { id: 'iK9SsB2GvW8', title: 'UKG English 4' },
        { id: '58ckl4SaeYQ', title: 'UKG English 5' }
    ],
    'ukg_maths': [
        { id: 'uprCwut8pRM', title: 'UKG Maths 1' },
        { id: 'Nptzw5ToBlk', title: 'UKG Maths 2' },
        { id: 'LBlzDpAixEs', title: 'UKG Maths 3' },
        { id: 'DAs7lqce1cI', title: 'UKG Maths 4' }
    ],
    'ukg_science': [
        { id: 'KZn42zsbPN0', title: 'UKG Science 1' },
        { id: 'z5BMp48fzuM', title: 'UKG Science 2' },
        { id: 'tWvUJncy9aE', title: 'UKG Science 3' },
        { id: '3QH9vm3F5Ys', title: 'UKG Science 4' },
        { id: 'omcGccw6c58', title: 'UKG Science 5' }
    ],
    'ukg_gk': [
        { id: 'o0e5A5hceUs', title: 'UKG GK 1' },
        { id: 'KjcaCmIhcgI', title: 'UKG GK 2' },
        { id: 'eGGwB93IGwo', title: 'UKG GK 3' }
    ],
    'ukg_creative': [
        { id: 'Zu6o23Pu0Do', title: 'UKG Creative Skills 1' },
        { id: 'paEBKVkQ8ZU', title: 'UKG Creative Skills 2' },
        { id: 'nn9Tq7FruSI', title: 'UKG Creative Skills 3' }
    ],
    'telugu_alphabets': [
        { id: 'iXYleETEiYo', title: 'Telugu Alphabets 1' },
        { id: 'DyCm_xBLe7U', title: 'Telugu Alphabets 2' }
    ],
    'english_grammar': [
        { id: 'QahSR-a6raQ', title: 'English Grammar 1' },
        { id: 'f2638snImhI', title: 'English Grammar 2' },
        { id: '-4CL3Xn-ycw', title: 'English Grammar 3' },
        { id: 'ccEpTTZW34g', title: 'English Grammar 4' }
    ],
    'kid_stories': [
        { id: 'DZAB2Dpztp4', title: 'Kid Stories 1' },
        { id: 'IvBUX6JIv7w', title: 'Kid Stories 2' },
        { id: 'f6_sBjLRi7E', title: 'Kid Stories 3' },
        { id: 'i8-Qip64RNw', title: 'Kid Stories 4' },
        { id: 'O5M6VXXaCdE', title: 'Kid Stories 5' }
    ],
    'maths_videos': [
        { id: 'QcibLMpBDWg', title: 'Maths 1' },
        { id: 'hlVmO01LCRk', title: 'Maths 2' },
        { id: '0UEzj2ta5Wo', title: 'Maths 3' },
        { id: 'garwCSnpNhI', title: 'Maths 4' }
    ]
};

// IMPORTANT: These are placeholder IDs/Configurations.
const PLAYLIST_CONFIG = {
    // Original Learning Zones
    'telugu': { screenId: 'video-gallery.html?category=telugu', title: 'Telugu Alphabets', type: 'page' },
    'grammar': { screenId: 'video-gallery.html?category=grammar', title: 'English Grammar', type: 'page' },
    'stories': { screenId: 'video-gallery.html?category=stories', title: 'Kids Stories', type: 'page' },
    'maths': { screenId: 'video-gallery.html?category=maths', title: 'Maths', type: 'page' },
    'history': { screenId: 'video-gallery.html?category=history', title: 'History', type: 'page' },
    'science': { screenId: 'video-gallery.html?category=science', title: 'Science', type: 'page' },
    'ramayana': { screenId: 'video-gallery.html?category=ramayana', title: 'Ramayana', type: 'page' },
    'mahabharata': { screenId: 'video-gallery.html?category=mahabharata', title: 'Mahabharata', type: 'page' },
    // Grade-wise Learning
    'prekg_english': { screenId: 'video-gallery.html?category=prekg_english', title: 'Pre KG English', type: 'page' },
    'prekg_gk': { screenId: 'video-gallery.html?category=prekg_gk', title: 'Pre KG GK', type: 'page' },
    'prekg_science': { screenId: 'video-gallery.html?category=prekg_science', title: 'Pre KG Science', type: 'page' },
    'prekg_telugu': { screenId: 'video-gallery.html?category=prekg_telugu', title: 'Pre KG Telugu', type: 'page' },
    'prekg_rhymes': { screenId: 'video-gallery.html?category=prekg_rhymes', title: 'Pre KG Rhymes', type: 'page' },
    'lkg_english': { screenId: 'video-gallery.html?category=lkg_english', title: 'LKG English', type: 'page' },
    'lkg_maths': { screenId: 'video-gallery.html?category=lkg_maths', title: 'LKG Maths', type: 'page' },
    'lkg_science': { screenId: 'video-gallery.html?category=lkg_science', title: 'LKG Science', type: 'page' },
    'lkg_gk': { screenId: 'video-gallery.html?category=lkg_gk', title: 'LKG GK', type: 'page' },
    'lkg_creative': { screenId: 'video-gallery.html?category=lkg_creative', title: 'LKG Creative Skills', type: 'page' },
    'lkg_rhymes': { screenId: 'video-gallery.html?category=lkg_rhymes', title: 'LKG Rhymes', type: 'page' },
    'ukg_english': { screenId: 'video-gallery.html?category=ukg_english', title: 'UKG English', type: 'page' },
    'ukg_maths': { screenId: 'video-gallery.html?category=ukg_maths', title: 'UKG Maths', type: 'page' },
    'ukg_science': { screenId: 'video-gallery.html?category=ukg_science', title: 'UKG Science', type: 'page' },
    'ukg_gk': { screenId: 'video-gallery.html?category=ukg_gk', title: 'UKG GK', type: 'page' },
    'ukg_creative': { screenId: 'video-gallery.html?category=ukg_creative', title: 'UKG Creative Skills', type: 'page' },
    // Other sections
    'elearning': { screenId: 'elearning.html', title: 'E-Learning', type: 'page' },
    'ai_storyteller': { screenId: 'ai-story.html', title: 'AI Storyteller', type: 'page' },
    'puzzles_games': { screenId: 'games.html', title: 'Puzzles & Games', type: 'page' },
    'drawing': { screenId: 'drawing.html', title: 'Drawing', type: 'page' },
    'featured': { id: 'S2pP-5gXp1M', title: "Today's Featured", type: 'video', isPlaylist: false }
};

// User data storage
let userData = JSON.parse(localStorage.getItem('kidspace_current_user')) || null;
let parentPassword = localStorage.getItem('kidspace_parent_password') || "1234";

// API Base URL
const API_BASE = 'http://localhost:3001/api';

// Activity tracking
const trackActivity = async (activityType, details = {}) => {
    try {
        const response = await fetch(`${API_BASE}/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: userData?.id || null,
                activity_type: activityType,
                details,
                page_url: window.location.href
            })
        });

        if (!response.ok) {
            console.error('Activity tracking failed:', response.statusText);
        }
    } catch (error) {
        console.error('Failed to track activity:', error);
    }
};

// --- NAVIGATION ---
// Modified for multi-page navigation
const navigate = (targetUrl) => {
    window.location.href = targetUrl;
};

// --- LOAD VIDEOS ---
// Modified to work with URL parameter
const loadVideosForCategory = (category) => {
    const videoGrid = document.getElementById(`${category}-video-grid`);
    const videos = VIDEO_DATA[category];

    if (videoGrid && videos) {
        videoGrid.innerHTML = '';
        videos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            videoItem.innerHTML = `
                <div class="video-thumbnail">
                    <iframe
                        src="https://www.youtube.com/embed/${video.id}"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                    </iframe>
                </div>
                <h3 class="video-title">${video.title}</h3>
            `;
            videoGrid.appendChild(videoItem);
        });
    }
};

// --- TAB SWITCHING ---
const switchTab = (tab) => {
    console.log('switchTab called with:', tab);
    const parentChildForm = document.getElementById('parent-child-form');
    const adminForm = document.getElementById('admin-form');
    const parentChildTab = document.querySelector('.tab-buttons button:nth-child(1)');
    const adminTab = document.querySelector('.tab-buttons button:nth-child(2)');

    if (tab === 'login') {
        parentChildForm.style.display = 'block';
        adminForm.style.display = 'none';
        parentChildTab.classList.add('active-tab');
        adminTab.classList.remove('active-tab');
    } else if (tab === 'admin') {
        parentChildForm.style.display = 'none';
        adminForm.style.display = 'block';
        parentChildTab.classList.remove('active-tab');
        adminTab.classList.add('active-tab');
    }
};

// --- SUB TAB SWITCHING ---
const switchSubTab = (subTab) => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const loginSubTab = document.querySelector('.sub-tab-buttons button:nth-child(1)');
    const signupSubTab = document.querySelector('.sub-tab-buttons button:nth-child(2)');

    if (subTab === 'login') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        loginSubTab.classList.add('active-tab');
        signupSubTab.classList.remove('active-tab');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        loginSubTab.classList.remove('active-tab');
        signupSubTab.classList.add('active-tab');
    }
};

// --- CUSTOM MODAL HANDLERS ---
const showCustomMessage = (message) => {
    document.getElementById('custom-message-text').textContent = message;
    showModal('custom-message-modal');
};

const showModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('visible');
    }
};

const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('visible');
    }
};

// --- PHOTO UPLOAD ---
const previewPhoto = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const preview = document.getElementById('photo-preview');
            preview.innerHTML = `<img src="${e.target.result}" alt="Child photo">`;
        };
        reader.readAsDataURL(file);
    }
};

// --- FORGOT PASSWORD/PARENT GATE ---
const showForgotPassword = () => {
    closeModal('passcode-modal');
    showModal('forgot-password-modal');
};

const showForgotParentGate = () => {
    closeModal('passcode-modal');
    showModal('forgot-parentgate-modal');
};

const handlePasswordReset = () => {
    const email = document.getElementById('reset-email').value;
    if (email) {
        document.getElementById('reset-success').style.display = 'block';
        setTimeout(() => {
            closeModal('forgot-password-modal');
            showCustomMessage('Password reset instructions have been sent to your email.');
        }, 1000);
    }
};

const handleParentGateReset = () => {
    const email = document.getElementById('parentgate-email').value;
    if (email) {
        document.getElementById('parentgate-success').style.display = 'block';
        setTimeout(() => {
            closeModal('forgot-parentgate-modal');
            showCustomMessage('Parent Gate reset instructions have been sent to your email.');
        }, 1000);
    }
};

// --- VIDEO / ACTIVITY LAUNCHER ---
const openVideoOrPlaylistModal = (id, isPlaylist = true) => {
    const iframe = document.getElementById('video-iframe');
    let embedUrl = '';

    if (isPlaylist) {
        embedUrl = `https://www.youtube.com/embed/videoseries?list=${id}&autoplay=1`;
    } else {
        embedUrl = `https://www.youtube.com/embed/${id}?autoplay=1`;
    }

    iframe.src = embedUrl;
    showModal('video-modal');
};

const openActivity = (categoryKey) => {
    const config = PLAYLIST_CONFIG[categoryKey];
    if (!config) {
         showCustomMessage('The content for this activity zone is currently unavailable.');
         return;
    }

    if (config.type === 'video') {
        const isPlaylist = config.isPlaylist !== false;
        openVideoOrPlaylistModal(config.id, isPlaylist);
    } else if (config.type === 'page') {
        navigate(config.screenId);
    } else {
        showCustomMessage(`The activity type '${config.type}' is not supported.`);
    }
};

// --- AI STORYTELLER ---
const generateStory = async () => {
    const prompt = document.getElementById('story-prompt').value;
    const output = document.getElementById('story-output');

    if (!prompt.trim()) {
        showCustomMessage('Please enter a story idea!');
        return;
    }

    output.innerHTML = 'Creating your magical story<span class="loading-dots"></span>';

    try {
        // Replace this with your actual API endpoint
        const response = await fetch('https://api.example.com/generate-story', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_API_KEY'
            },
            body: JSON.stringify({
                prompt: prompt,
                childAge: userData?.age || 6,
                maxLength: 500
            })
        });

        if (response.ok) {
            const data = await response.json();
            output.innerHTML = data.story;
        } else {
            throw new Error('API request failed');
        }
    } catch (error) {
        // Fallback to demo story if API fails
        output.innerHTML = getDemoStory(prompt);
    }
};

const getDemoStory = (prompt) => {
    const stories = [
        `Once upon a time, there was a brave little adventurer who loved ${prompt}. They went on an amazing journey through enchanted forests and met magical creatures who became their friends. Together, they learned the importance of kindness and courage.`,

        `In a land far away, a curious explorer discovered ${prompt}. This discovery led to the most wonderful adventure, filled with laughter, friendship, and valuable lessons about sharing and caring for others.`,

        `There once was a magical friend who could create ${prompt} with just a wave of their hand! They used this special power to bring joy to everyone around them and teach important lessons about using gifts wisely.`
    ];

    return stories[Math.floor(Math.random() * stories.length)];
};

// --- DRAWING CANVAS LOGIC ---
const initDrawingCanvas = () => {
     const canvas = document.getElementById('drawing-canvas');
     if (!canvas) return;

     const container = canvas.parentElement;
     canvas.width = container.clientWidth;
     canvas.height = container.clientHeight;

     const ctx = canvas.getContext('2d');

     ctx.fillStyle = '#ffffff';
     ctx.fillRect(0, 0, canvas.width, canvas.height);

     ctx.font = '24px Quicksand';
     ctx.fillStyle = '#999';
     ctx.textAlign = 'center';
     ctx.fillText('Start Drawing Here! (Tap/Click to draw)', canvas.width / 2, canvas.height / 2);

     let isDrawing = false;

     const startDrawing = (e) => {
         isDrawing = true;
         ctx.lineWidth = 10;
         ctx.lineCap = 'round';
         ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--color-orange');

         const rect = canvas.getBoundingClientRect();
         const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
         const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;
         ctx.beginPath();
         ctx.moveTo(x, y);
         draw(e);
     };

     const stopDrawing = () => {
         isDrawing = false;
         ctx.beginPath();
     };

     const draw = (e) => {
         if (!isDrawing) return;

         const rect = canvas.getBoundingClientRect();
         const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
         const y = (e.clientY || (e.touches && e.touches[0].clientY)) - rect.top;

         ctx.lineTo(x, y);
         ctx.stroke();
         ctx.beginPath();
         ctx.moveTo(x, y);
     };

     canvas.addEventListener('mousedown', startDrawing);
     window.addEventListener('mouseup', stopDrawing);
     canvas.addEventListener('mousemove', draw);

     canvas.addEventListener('touchstart', (e) => { e.preventDefault(); startDrawing(e); });
     window.addEventListener('touchend', stopDrawing);
     canvas.addEventListener('touchmove', (e) => { e.preventDefault(); draw(e); });

     window.addEventListener('resize', () => {
        initDrawingCanvas();
     });
};

// --- AUTHENTICATION LOGIC ---

// Login Form
document.addEventListener('DOMContentLoaded', () => {
    // Tab switching event listeners (fallback for onclick)
    const parentChildTabBtn = document.querySelector('.tab-buttons button:nth-child(1)');
    const adminTabBtn = document.querySelector('.tab-buttons button:nth-child(2)');
    if (parentChildTabBtn) {
        parentChildTabBtn.addEventListener('click', () => {
            console.log('Parent/Child tab clicked');
            switchTab('login');
        });
    }
    if (adminTabBtn) {
        adminTabBtn.addEventListener('click', () => {
            console.log('Admin tab clicked');
            switchTab('admin');
        });
    }

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const email = document.getElementById('login-email').value;
            const password = document.getElementById('login-password').value;
            const errorElement = document.getElementById('login-error-message');

            try {
                // Use backend API for login
                const response = await fetch(`${API_BASE}/auth/login`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email, password })
                });

                const data = await response.json();

                if (!response.ok) {
                    errorElement.style.display = 'block';
                    errorElement.textContent = data.error || 'Login failed';
                    return;
                }

                errorElement.style.display = 'none';
                userData = data.user;
                localStorage.setItem('kidspace_current_user', JSON.stringify(userData));

                // Track login activity
                await trackActivity('login', { method: 'email' });

                setTimeout(() => {
                    navigate('child-home.html');
                }, 500);
            } catch (error) {
                console.error('Login error:', error);
                errorElement.style.display = 'block';
                errorElement.textContent = 'Login failed. Please try again.';
            }
        });
    }

    // Signup Form
    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', async function(event) {
            event.preventDefault();
            const password = document.getElementById('signup-password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const errorElement = document.getElementById('signup-error-message');

            if (password !== confirmPassword) {
                errorElement.style.display = 'block';
                return;
            }

            errorElement.style.display = 'none';

            const parentEmail = document.getElementById('parent-email').value;

            try {
                // Use backend API for signup
                const response = await fetch(`${API_BASE}/auth/signup`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: parentEmail,
                        password: password,
                        childName: document.getElementById('child-name').value,
                        age: parseInt(document.getElementById('child-age').value),
                        grade: document.getElementById('child-grade').value,
                        photo: document.getElementById('photo-preview').querySelector('img')?.src || null
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    showCustomMessage('Signup failed: ' + (data.error || 'Unknown error'));
                    return;
                }

                userData = data.user;
                localStorage.setItem('kidspace_current_user', JSON.stringify(userData));
                localStorage.setItem('kidspace_parent_password', password);

                // Track signup activity
                await trackActivity('signup', { method: 'email' });

                showCustomMessage('Account created successfully! Please check your email to verify your account.');

                setTimeout(() => {
                    navigate('child-home.html');
                }, 2000);
            } catch (error) {
                console.error('Signup error:', error);
                showCustomMessage('Signup failed. Please try again.');
            }
        });
    }

    // Admin Login Form
    const adminForm = document.getElementById('admin-form');
    if (adminForm) {
        adminForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log('Admin login form submitted');
            const email = document.getElementById('admin-email').value;
            const password = document.getElementById('admin-password').value;
            const errorElement = document.getElementById('admin-error-message');

            console.log('Entered email:', email, 'password:', password);

            // Simple admin credentials (in production, use secure authentication)
            if (email === 'aaavignan@gmail.com' && password === 'Vignan@123') {
                console.log('Admin credentials valid');
                errorElement.style.display = 'none';
                localStorage.setItem('kidspace_admin_logged_in', 'true');
                localStorage.setItem('kidspace_admin_email', email);
                console.log('localStorage set, navigating to admin-dashboard.html');
                navigate('admin-dashboard.html');
            } else {
                console.log('Invalid admin credentials');
                errorElement.style.display = 'block';
            }
        });
    }

    // Parent Password Gate
    const parentPasswordBtn = document.getElementById('parent-password-btn');
    if (parentPasswordBtn) {
        parentPasswordBtn.addEventListener('click', () => {
            const input = document.getElementById('parent-password-input');
            const error = document.getElementById('passcode-error');

            if (input.value === parentPassword) {
                closeModal('passcode-modal');
                navigate('parent-dashboard.html');
            } else {
                error.style.display = 'block';
            }
        });
    }

    // Load current user data for pages that need it
    const currentUser = JSON.parse(localStorage.getItem('kidspace_current_user'));
    if (currentUser) {
        userData = currentUser;
        const greetingElement = document.getElementById('child-greeting');
        if (greetingElement) {
            greetingElement.textContent = userData.childName;
        }
    }

    // Display admin credentials on admin dashboard
    const adminEmail = localStorage.getItem('kidspace_admin_email');
    const adminLoggedIn = localStorage.getItem('kidspace_admin_logged_in') === 'true';
    if (adminLoggedIn && adminEmail && window.location.pathname.endsWith('admin-dashboard.html')) {
        const adminGreeting = document.getElementById('admin-greeting');
        if (adminGreeting) {
            adminGreeting.textContent = `Welcome, Admin! Logged in with email: ${adminEmail}`;
        }
    }

    // Initialize drawing canvas if on drawing page
    if (document.getElementById('drawing-canvas')) {
        initDrawingCanvas();
    }

    // Handle intro video on index.html
    if (document.getElementById('intro-video')) {
        const video = document.getElementById('intro-video');

        video.playbackRate = 2; // 2x speed
        video.play(); // Start playing the video

        // Navigate to login page when video ends
        video.addEventListener('ended', () => {
            navigate('login.html');
        });
    }

    // Load videos if on video gallery page
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category && VIDEO_DATA[category]) {
        loadVideosForCategory(category);
    } else if (category && !VIDEO_DATA[category]) {
        // Handle missing category data
        const grid = document.getElementById('video-gallery-grid');
        if (grid) {
            grid.innerHTML = '<div class="no-videos">Videos for this category are coming soon! 🎥</div>';
        }
    }

    // Populate user table on admin dashboard
    if (window.location.pathname.endsWith('admin-dashboard.html')) {
        (async () => {
            try {
                const { data: users, error } = await supabase
                    .from('users')
                    .select('*')
                    .order('signupdate', { ascending: false });

                if (error) {
                    console.error('Error fetching users:', error);
                    return;
                }

                const tableBody = document.getElementById('users-table-body');
                if (tableBody) {
                    tableBody.innerHTML = '';
                    if (users && users.length > 0) {
                        users.forEach(user => {
                            const date = new Date(user.signupdate).toLocaleDateString();
                            const tableRow = document.createElement('tr');
                            tableRow.innerHTML = `
                                <td>${user.childName}</td>
                                <td>${user.age}</td>
                                <td>${user.grade}</td>
                                <td>${user.parentEmail}</td>
                                <td>${date}</td>
                                <td>${user.photo ? `<img src="${user.photo}" alt="Photo" style="width: 50px; height: 50px; object-fit: cover; border-radius: 50%;">` : 'No photo'}</td>
                                <td>Protected</td>
                            `;
                            tableBody.appendChild(tableRow);
                        });
                    }
                }
            } catch (error) {
                console.error('Failed to load users for admin dashboard:', error);
            }
        })();
    }
});

// Parent Password Gate
const promptParentPassword = () => {
    showModal('passcode-modal');
};

const handlePasscodeSubmit = () => {
    const input = document.getElementById('parent-password-input');
    const error = document.getElementById('passcode-error');

    if (input.value === parentPassword) {
        closeModal('passcode-modal');
        navigate('parent-dashboard.html');
    } else {
        error.style.display = 'block';
    }
};

// Logout function
const logout = () => {
    localStorage.removeItem('kidspace_current_user');
    localStorage.removeItem('kidspace_admin_logged_in');
    localStorage.removeItem('kidspace_admin_email');
    userData = null;
    navigate('login.html');
};

// Parent Dashboard Functions
const loadParentDashboard = async () => {
    if (!userData) return;

    try {
        // Load parent/child details
        const detailsResponse = await fetch(`${API_BASE}/parent/details/${userData.id}`);
        const details = await detailsResponse.json();
        displayParentChildDetails(details);

        // Load child streak
        const streakResponse = await fetch(`${API_BASE}/parent/streak/${userData.id}`);
        const streak = await streakResponse.json();
        displayChildStreak(streak);

        // Load recent activities
        const activitiesResponse = await fetch(`${API_BASE}/parent/activities/${userData.id}`);
        const activities = await activitiesResponse.json();
        displayRecentActivities(activities);

        // Load messages (suggestions from admin and parent messages)
        const messagesResponse = await fetch(`${API_BASE}/parent/messages/${userData.id}`);
        const messages = await messagesResponse.json();
        displayMessages(messages);

        // Load daily plan
        const planResponse = await fetch(`${API_BASE}/parent/plan/${userData.id}`);
        const plan = await planResponse.json();
        displayDailyPlan(plan);

        // Load feedback
        const feedbackResponse = await fetch(`${API_BASE}/parent/feedback/${userData.id}`);
        const feedback = await feedbackResponse.json();
        displayFeedback(feedback);

        // Update streak on page load
        await updateChildStreak();

    } catch (error) {
        console.error('Error loading parent dashboard:', error);
    }
};

const displayParentChildDetails = (details) => {
    const container = document.getElementById('parent-child-details');
    if (!container) return;

    container.innerHTML = `
        <div class="detail-card">
            <h3>Parent & Child Information</h3>
            <div class="detail-row">
                <span class="label">Child Name:</span>
                <span class="value">${details.childname || 'N/A'}</span>
            </div>
            <div class="detail-row">
                <span class="label">Age:</span>
                <span class="value">${details.age || 'N/A'}</span>
            </div>
            <div class="detail-row">
                <span class="label">Grade:</span>
                <span class="value">${details.grade || 'N/A'}</span>
            </div>
            <div class="detail-row">
                <span class="label">Parent Email:</span>
                <span class="value">${details.parentemail || 'N/A'}</span>
            </div>
            <div class="detail-row">
                <span class="label">Signup Date:</span>
                <span class="value">${new Date(details.signupdate).toLocaleDateString()}</span>
            </div>
            ${details.photo ? `<div class="detail-row"><img src="${details.photo}" alt="Child Photo" class="child-photo"></div>` : ''}
        </div>
    `;
};

const displayChildStreak = (streak) => {
    const container = document.getElementById('child-streak');
    if (!container) return;

    container.innerHTML = `
        <div class="streak-card">
            <h3>Child Login Streak</h3>
            <div class="streak-display">
                <div class="streak-number">${streak.current_streak || 0}</div>
                <div class="streak-label">Days</div>
            </div>
            <div class="streak-info">
                <p>Last Login: ${streak.last_login ? new Date(streak.last_login).toLocaleDateString() : 'Never'}</p>
                <p>Total Logins: ${streak.total_logins || 0}</p>
            </div>
        </div>
    `;
};

const displayRecentActivities = (activities) => {
    const container = document.getElementById('recent-activities');
    if (!container) return;

    if (activities.length === 0) {
        container.innerHTML = '<p>No recent activities found.</p>';
        return;
    }

    container.innerHTML = `
        <h3>Recent Child Activities</h3>
        <div class="activities-list">
            ${activities.map(activity => `
                <div class="activity-item">
                    <div class="activity-name">${activity.activity}</div>
                    <div class="activity-time">${new Date(activity.timestamp).toLocaleString()}</div>
                    ${activity.duration_minutes ? `<div class="activity-duration">${activity.duration_minutes} minutes</div>` : ''}
                </div>
            `).join('')}
        </div>
    `;
};

const displayMessages = (messages) => {
    const adminMessagesContainer = document.getElementById('admin-messages-list');
    const parentMessagesContainer = document.getElementById('parent-messages-list');

    if (adminMessagesContainer) {
        const adminMessages = messages.filter(msg => msg.is_from_admin);
        adminMessagesContainer.innerHTML = adminMessages.length === 0 ? '<p>No messages from admin yet.</p>' :
            adminMessages.map(msg => `
                <div class="message-item admin-message">
                    <div class="message-content">${msg.message}</div>
                    <div class="message-time">${new Date(msg.timestamp).toLocaleString()}</div>
                </div>
            `).join('');
    }

    if (parentMessagesContainer) {
        const parentMessages = messages.filter(msg => !msg.is_from_admin);
        parentMessagesContainer.innerHTML = parentMessages.map(msg => `
            <div class="message-item parent-message">
                <div class="message-content">${msg.message}</div>
                <div class="message-time">${new Date(msg.timestamp).toLocaleString()}</div>
            </div>
        `).join('');
    }
};

const displayDailyPlan = (plan) => {
    const container = document.getElementById('daily-plan');
    if (!container) return;

    container.innerHTML = `
        <h3>Today's Plan for Child</h3>
        <div class="plan-content">
            ${plan.plan_details || 'No plan set for today.'}
        </div>
    `;
};

const displayFeedback = (feedback) => {
    const container = document.getElementById('parent-feedback');
    if (!container) return;

    if (feedback.length === 0) {
        container.innerHTML = '<p>No feedback available.</p>';
        return;
    }

    container.innerHTML = `
        <h3>Parent Feedback</h3>
        <div class="feedback-list">
            ${feedback.map(item => `
                <div class="feedback-item">
                    <div class="feedback-content">${item.feedback}</div>
                    <div class="feedback-time">${new Date(item.timestamp).toLocaleString()}</div>
                </div>
            `).join('')}
        </div>
    `;
};

const sendMessageToAdmin = async () => {
    const messageInput = document.getElementById('parent-message-input');
    const message = messageInput.value.trim();

    if (!message) {
        alert('Please enter a message.');
        return;
    }

    try {
        const response = await fetch(`${API_BASE}/parent/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                sender_id: userData.id,
                message,
                type: 'general'
            })
        });

        if (response.ok) {
            messageInput.value = '';
            alert('Message sent to admin successfully!');
            // Reload messages
            const messagesResponse = await fetch(`${API_BASE}/parent/messages/${userData.id}`);
            const messages = await messagesResponse.json();
            displayMessages(messages);
        } else {
            alert('Failed to send message. Please try again.');
        }
    } catch (error) {
        console.error('Error sending message:', error);
        alert('Error sending message. Please try again.');
    }
};

const updateChildStreak = async () => {
    if (!userData) return;

    try {
        const response = await fetch(`${API_BASE}/parent/streak`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                child_id: userData.id
            })
        });

        if (response.ok) {
            const streak = await response.json();
            displayChildStreak(streak);
        }
    } catch (error) {
        console.error('Error updating streak:', error);
    }
};

const trackChildActivity = async (activity, duration = 0) => {
    if (!userData) return;

    try {
        await fetch(`${API_BASE}/parent/activities`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                child_id: userData.id,
                activity,
                duration_minutes: duration
            })
        });
    } catch (error) {
        console.error('Error tracking activity:', error);
    }
};

// Initialize
window.onload = () => {
    // Check if user is already logged in (for index.html)
    const currentUser = JSON.parse(localStorage.getItem('kidspace_current_user'));
    const adminLoggedIn = localStorage.getItem('kidspace_admin_logged_in') === 'true';
    if (currentUser && window.location.pathname.endsWith('index.html')) {
        userData = currentUser;
        navigate('child-home.html');
    } else if (!currentUser && !adminLoggedIn && !window.location.pathname.endsWith('index.html') && !window.location.pathname.endsWith('login.html') && !window.location.pathname.endsWith('admin-dashboard.html')) {
        // Redirect to login if not logged in (child or admin) and not on splash/login/admin-dashboard
        navigate('login.html');
    }

    // Load parent dashboard if on parent dashboard page
    if (window.location.pathname.endsWith('parent-dashboard.html')) {
        const currentUser = JSON.parse(localStorage.getItem('kidspace_current_user'));
        if (currentUser) {
            userData = currentUser;
            loadParentDashboard();
        }
    }
};
