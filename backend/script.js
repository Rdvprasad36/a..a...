// --- CONFIG ---
// Video data for each category
const VIDEO_DATA = {
    'telugu': [
        { id: 'iXYleETEiYo', title: 'Telugu Alphabets Part 1' },
        { id: 'DyCm_xBLe7U', title: 'Telugu Alphabets Part 2' },
        { id: 'DyCm_xBLe7U', title: 'Telugu Writing Practice' }
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
    ]
};

// IMPORTANT: These are placeholder IDs/Configurations.
const PLAYLIST_CONFIG = {
    'telugu': { screenId: 'video-gallery.html?category=telugu', title: 'Telugu Alphabets', type: 'page' },
    'grammar': { screenId: 'video-gallery.html?category=grammar', title: 'English Grammar', type: 'page' },
    'stories': { screenId: 'video-gallery.html?category=stories', title: 'Kids Stories', type: 'page' },
    'maths': { screenId: 'video-gallery.html?category=maths', title: 'Maths', type: 'page' },
    'history': { screenId: 'video-gallery.html?category=history', title: 'History', type: 'page' },
    'science': { screenId: 'video-gallery.html?category=science', title: 'Science', type: 'page' },
    'ramayana': { screenId: 'video-gallery.html?category=ramayana', title: 'Ramayana', type: 'page' },
    'mahabharata': { screenId: 'video-gallery.html?category=mahabharata', title: 'Mahabharata', type: 'page' },
    'elearning': { screenId: 'elearning.html', title: 'E-Learning', type: 'page' },
    'ai_storyteller': { screenId: 'ai-story.html', title: 'AI Storyteller', type: 'page' },
    'puzzles_games': { screenId: 'games.html', title: 'Puzzles & Games', type: 'page' },
    'drawing': { screenId: 'drawing.html', title: 'Drawing', type: 'page' },
    'featured': { id: 'S2pP-5gXp1M', title: "Today's Featured", type: 'video', isPlaylist: false }
};

// User data storage
let userData = JSON.parse(localStorage.getItem('kidspace_user')) || null;
let parentPassword = localStorage.getItem('kidspace_parent_password') || "1234";

// Activity tracking
const trackActivity = async (activityType, details = {}) => {
    try {
        const { data, error } = await supabase
            .from('user_activities')
            .insert([{
                user_id: userData?.id || null,
                activity_type: activityType,
                details: JSON.stringify(details),
                timestamp: new Date().toISOString(),
                page_url: window.location.href
            }]);

        if (error) console.error('Activity tracking error:', error);
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
                const { data, error } = await supabase.auth.signInWithPassword({
                    email: email,
                    password: password
                });

                if (error) {
                    errorElement.style.display = 'block';
                    return;
                }

                // Get user profile from users table
                const { data: profile, error: profileError } = await supabase
                    .from('users')
                    .select('*')
                    .eq('id', data.user.id)
                    .single();

                if (profileError) {
                    showCustomMessage('Login successful but profile not found.');
                    return;
                }

                errorElement.style.display = 'none';
                userData = profile;
                localStorage.setItem('kidspace_current_user', JSON.stringify(userData));

                // Track login activity
                await trackActivity('login', { method: 'email' });

                setTimeout(() => {
                    navigate('child-home.html');
                }, 500);
            } catch (error) {
                console.error('Login error:', error);
                showCustomMessage('Login failed. Please try again.');
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
                // Create auth user
                const { data: authData, error: authError } = await supabase.auth.signUp({
                    email: parentEmail,
                    password: password
                });

                if (authError) {
                    showCustomMessage('Signup failed: ' + authError.message);
                    return;
                }

                // Create user profile
                const { data: profileData, error: profileError } = await supabase
                    .from('users')
                    .insert([{
                        id: authData.user.id,
                        childName: document.getElementById('child-name').value,
                        age: parseInt(document.getElementById('child-age').value),
                        grade: document.getElementById('child-grade').value,
                        parentEmail: parentEmail,
                        photo: document.getElementById('photo-preview').querySelector('img')?.src || null,
                        signupdate: new Date().toISOString()
                    }]);

                if (profileError) {
                    console.error('Profile creation error:', profileError);
                    showCustomMessage('Account created but profile setup failed.');
                    return;
                }

                userData = profileData[0];
                localStorage.setItem('kidspace_current_user', JSON.stringify(userData));

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

    // Load videos if on video gallery page
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    if (category && VIDEO_DATA[category]) {
        loadVideosForCategory(category);
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
};
