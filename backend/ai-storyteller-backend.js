// --- Import Gradio Client ---
import { client } from 'https://cdn.jsdelivr.net/npm/@gradio/client@latest/dist/index.min.js';

// --- Global variables ---
let appClient = null;
let clientPromise = null;

// --- Get HTML Elements ---
const inputSection = document.getElementById('input-section');
const generateButton = document.getElementById('generate-button');
const storyDisplay = document.getElementById('story-display');
const actionButtons = document.getElementById('action-buttons');
const continueButton = document.getElementById('continue-button');
const choiceButtons = document.getElementById('choice-buttons');
const choice1Button = document.getElementById('choice1-button');
const choice2Button = document.getElementById('choice2-button');
const finishButton = document.getElementById('finish-button');
const restartButton = document.getElementById('restart-button');

// --- Helper: Update Button Visibility (Handles 7 UI outputs) ---
// --- Helper: Update Button Visibility (REVISED LOGIC) ---
// --- Helper: Update Button Visibility (CORRECTED LOGIC V6 - Simplified) ---
// --- Helper: Update Button Visibility (CORRECTED LOGIC V13 - Element Check) ---
function updateButtonVisibility(outputs) {
    console.log("--- updateButtonVisibility V13 START ---");
    console.log("Raw outputs received:", JSON.stringify(outputs || {}, null, 2));

    // --- Ensure Elements Exist AT THE START ---
    // Re-fetch elements *inside* the function just in case they weren't ready initially.
    // Although DOMContentLoaded should handle this, let's be extra safe.
    const elements = {
        continueButton: document.getElementById('continue-button'),
        choiceButtons: document.getElementById('choice-buttons'), // The div containing choice buttons
        finishButton: document.getElementById('finish-button'),
        restartButton: document.getElementById('restart-button'),
        inputSection: document.getElementById('input-section'),
        generateButton: document.getElementById('generate-button'),
        actionButtons: document.getElementById('action-buttons') // The container div
    };
    let allElementsFound = true;
    for (const key in elements) {
        if (!elements[key]) {
            console.error(`CRITICAL ERROR: HTML element with ID '${key.replace('Button','-button').replace('Section','-section').replace('Buttons','-buttons')}' not found! Check your HTML.`);
            allElementsFound = false;
        }
    }
    // If critical elements are missing, we cannot update visibility.
    if (!allElementsFound || !elements.actionButtons) {
         console.error("Stopping visibility update due to missing elements.");
         // Optionally show a general error or just log it.
         return;
    }
    // --- End Element Check ---


    // Expected order from Python: [html(0), continue(1), choice(2), finish(3), restart(4), input(5), generate(6)]
    if (!outputs || !Array.isArray(outputs) || outputs.length < 7) {
        console.error("Error: Expected array[7+] for visibility, received:", outputs);
        // Fallback: Show only restart if state is invalid after story started
        elements.actionButtons.classList.remove('hidden');
        elements.inputSection.classList.add('hidden');
        elements.generateButton.classList.add('hidden');
        elements.continueButton.classList.add('hidden');
        elements.choiceButtons.classList.add('hidden');
        elements.finishButton.classList.add('hidden');
        elements.restartButton.classList.remove('hidden');
        console.log("--- updateButtonVisibility END (Error) ---");
        return;
    }

    // --- Logic V11: Visible if updated UNLESS explicitly hidden ---
    const getVisibility = (index) => {
        const componentUpdate = outputs[index];
        const updateExists = typeof componentUpdate === 'object' && componentUpdate !== null;
        const explicitlyHidden = componentUpdate?.__gradio_meta__?.visible === false;
        const isVisible = updateExists && !explicitlyHidden;
        console.log(`Index ${index}: UpdateExists=${updateExists}, ExplicitlyHidden=${explicitlyHidden} => Visible=${isVisible}`);
        return isVisible;
    };

    const continueVisible = getVisibility(1);
    const choiceVisible = getVisibility(2);
    const finishVisible = getVisibility(3);
    const restartVisible = getVisibility(4);
    const inputVisible = getVisibility(5);
    const generateVisible = getVisibility(6);
    // --- END Logic V11 ---

    console.log("Final Visibility Flags:", { continueVisible, choiceVisible, finishVisible, restartVisible, inputVisible, generateVisible });


    // Toggle visibility based on calculated flags
    elements.continueButton.classList.toggle('hidden', !continueVisible);
    elements.choiceButtons.classList.toggle('hidden', !choiceVisible);
    elements.finishButton.classList.toggle('hidden', !finishVisible);
    elements.restartButton.classList.toggle('hidden', !restartVisible);
    elements.inputSection.classList.toggle('hidden', !inputVisible);
    elements.generateButton.classList.toggle('hidden', !generateVisible);

    // Show/Hide the main action button container
    if (continueVisible || choiceVisible || finishVisible || restartVisible) {
        elements.actionButtons.classList.remove('hidden');
    } else {
         if (!inputVisible) { elements.actionButtons.classList.add('hidden'); }
         else { elements.actionButtons.classList.add('hidden'); }
    }
    console.log("--- updateButtonVisibility END ---");
}

// --- Make sure the rest of your script.js remains the same ---
// Including: import, globals(remove top-level getters), callGradioApi, event handlers, listeners, modal/navigate

// --- Make sure the rest of your script.js remains the same ---
// Including: import, globals, element getters, callGradioApi, event handlers, listeners, modal/navigate
// --- Helper: Handle API Calls ---
async function callGradioApi(endpoint, payload, buttonElement) {
    if (!clientPromise) {
        showCustomMessage("Error: Connecting... Please wait or click Generate again.");
        return;
    }
    let activeButton = buttonElement;
    const originalText = activeButton ? activeButton.innerText : '';
    if (activeButton) { activeButton.disabled = true; activeButton.innerText = 'Thinking...'; }
    [generateButton, continueButton, choice1Button, choice2Button, finishButton].forEach(btn => {
        if (btn && btn !== activeButton) btn.disabled = true; });
    if (!activeButton && storyDisplay) { storyDisplay.innerHTML += '<p style="text-align:center;">Processing...<span class="loading-dots"></span></p>'; }

    try {
        appClient = await clientPromise;
        console.log(`Calling ${endpoint}`, payload);
        const result = await appClient.predict(endpoint, payload); // Use predict
        console.log("API Result:", result);
        if (!result || !result.data || !Array.isArray(result.data)) { throw new Error("Invalid API response structure."); }
        const outputs = result.data; // This array should have 7 items for UI updates

        if (storyDisplay && typeof outputs[0] === 'string') {
            storyDisplay.innerHTML = outputs[0];
            storyDisplay.classList.remove('hidden');
        } else {
            console.warn("Expected HTML string", outputs[0]);
            if (storyDisplay) storyDisplay.innerHTML = "<p style='color:orange;'>Received unexpected data format.</p>";
        }
        updateButtonVisibility(outputs); // Update based on the received UI component data

    } catch (error) {
        console.error(`Error calling ${endpoint}:`, error);
        if (storyDisplay) { storyDisplay.innerHTML += `<p style='color:red;'>😔 Error: ${error.message}. Please try again or restart.</p>`; }
        if (restartButton) restartButton.classList.remove('hidden'); if (actionButtons) actionButtons.classList.remove('hidden');
        if (continueButton) continueButton.classList.add('hidden'); if (choiceButtons) choiceButtons.classList.add('hidden'); if (finishButton) finishButton.classList.add('hidden');
        if (inputSection) inputSection.classList.add('hidden'); if (generateButton) generateButton.classList.add('hidden');
    } finally {
        // Re-enable all relevant buttons that should be visible
        [generateButton, continueButton, choice1Button, choice2Button, finishButton].forEach(btn => {
           if (btn && !btn.classList.contains('hidden')) {
               btn.disabled = false;
               // Restore original text only if it was the one clicked
               if(btn === activeButton) btn.innerText = originalText;
               // Restore default texts otherwise
               else if (btn === generateButton) btn.innerText = "✨ Generate Story ✨";
               else if (btn === continueButton) btn.innerText = "➡️ Continue Story";
               else if (btn === finishButton) btn.innerText = "📜 See the Moral";
               else if (btn === choice1Button) btn.innerText = "Choose Option 1";
               else if (btn === choice2Button) btn.innerText = "Choose Option 2";
           }
        });
    }
}

// --- Event Handlers ---
async function handleGenerateStory(event) {
    const age = document.getElementById('story-age')?.value;
    const length = document.getElementById('story-length')?.value;
    const theme = document.getElementById('story-theme')?.value;
    const characters = document.getElementById('story-characters')?.value;
    if (!theme || !theme.trim()) { showCustomMessage('Please enter a Theme!'); return; }
    if (storyDisplay) { storyDisplay.innerHTML = 'Connecting & creating...<span class="loading-dots"></span>'; storyDisplay.classList.remove('hidden'); }
    if (inputSection) inputSection.classList.add('hidden');
    if (generateButton) { generateButton.disabled = true; generateButton.innerText = "Generating...";}

    appClient = null; clientPromise = null; // Reset connection for new story
    try {
         // --- Paste your HF Space URL here ---
         const hfSpaceUrl = "https://nagakarthikreddy-nagakarthikreddy.hf.space";

         console.log("Connecting...");
         clientPromise = client(hfSpaceUrl); // Initiate connection

        // Call the 'generate_story' API endpoint
        await callGradioApi("/generate_story",
            [ parseInt(age || '8'), theme, length || 'medium', characters || '' ], // Payload matches Python inputs
            event.target // Pass the button that was clicked
        );
    } catch (error) {
        console.error("Setup Error:", error);
         if (storyDisplay) storyDisplay.innerHTML = `😔 Setup Error: ${error.message}. Please restart.`;
         if (inputSection) inputSection.classList.remove('hidden'); // Show inputs again on error
         if (generateButton) { generateButton.disabled = false; generateButton.innerText = "✨ Generate Story ✨"; }
         clientPromise = null; // Reset connection promise
    }
}
async function handleContinueStory(event) { await callGradioApi("/continue_story", [], event.target); } // State handled by client
async function handleMakeChoice(choiceNum, event) { const endpoint = choiceNum === 1 ? "/make_choice_1" : "/make_choice_2"; await callGradioApi(endpoint, [], event.target); } // State handled by client
async function handleFinishStory(event) { await callGradioApi("/finish_story", [], event.target); } // State handled by client
function handleRestartStory() { window.location.reload(); }

// --- Attach Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Ready.");
    if (generateButton) generateButton.addEventListener('click', handleGenerateStory); else console.error("Generate button not found");
    if (continueButton) continueButton.addEventListener('click', handleContinueStory); else console.error("Continue button not found");
    if (choice1Button) choice1Button.addEventListener('click', (e) => handleMakeChoice(1, e)); else console.error("Choice 1 button not found");
    if (choice2Button) choice2Button.addEventListener('click', (e) => handleMakeChoice(2, e)); else console.error("Choice 2 button not found");
    if (finishButton) finishButton.addEventListener('click', handleFinishStory); else console.error("Finish button not found");
    if (restartButton) restartButton.addEventListener('click', handleRestartStory); else console.error("Restart button not found");
    // Initial UI state
    if(inputSection) inputSection.classList.remove('hidden');
    if(actionButtons) actionButtons.classList.add('hidden');
    if(storyDisplay) { storyDisplay.innerHTML = 'Enter story details & click Generate!'; storyDisplay.classList.add('hidden'); }
});

// --- Modal and Navigation Functions ---
function showCustomMessage(message, title = "Heads Up!") { const modal = document.getElementById('custom-message-modal'); const titleEl = document.getElementById('message-title'); const textEl = document.getElementById('custom-message-text'); if (modal && titleEl && textEl) { titleEl.textContent = title; textEl.textContent = message; modal.style.display = 'block'; } else { alert(message); }}
function closeModal(modalId) { const modal = document.getElementById(modalId); if (modal) { modal.style.display = 'none'; } }
function navigate(targetUrl) { window.location.href = targetUrl; }