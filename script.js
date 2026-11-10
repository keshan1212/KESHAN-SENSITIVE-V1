
/* ==================================
   KESHAN SENSITIVE
   MAIN JAVASCRIPT
================================== */

let currentLanguage = "en";

// Phone sensitivity data
// These are sample starting recommendations,
// not guaranteed optimal settings.

const phoneSettings = {
  "iphone": {
    name: "Apple iPhone",
    general: 180,
    redDot: 175,
    scope2x: 165,
    scope4x: 150,
    sniper: 100,
    freeLook: 135
  },

  "samsung": {
    name: "Samsung Galaxy",
    general: 175,
    redDot: 170,
    scope2x: 160,
    scope4x: 145,
    sniper: 95,
    freeLook: 130
  },

  "redmi": {
    name: "Xiaomi Redmi",
    general: 185,
    redDot: 180,
    scope2x: 165,
    scope4x: 150,
    sniper: 100,
    freeLook: 140
  },

  "xiaomi": {
    name: "Xiaomi",
    general: 185,
    redDot: 180,
    scope2x: 165,
    scope4x: 150,
    sniper: 100,
    freeLook: 140
  },

  "oppo": {
    name: "OPPO",
    general: 175,
    redDot: 170,
    scope2x: 160,
    scope4x: 145,
    sniper: 95,
    freeLook: 130
  },

  "vivo": {
    name: "Vivo",
    general: 180,
    redDot: 175,
    scope2x: 160,
    scope4x: 145,
    sniper: 95,
    freeLook: 135
  },

  "realme": {
    name: "Realme",
    general: 180,
    redDot: 175,
    scope2x: 160,
    scope4x: 150,
    sniper: 100,
    freeLook: 135
  },

  "tecno": {
    name: "Tecno",
    general: 175,
    redDot: 170,
    scope2x: 155,
    scope4x: 140,
    sniper: 90,
    freeLook: 130
  },

  "infinix": {
    name: "Infinix",
    general: 180,
    redDot: 175,
    scope2x: 160,
    scope4x: 145,
    sniper: 95,
    freeLook: 135
  },

  "huawei": {
    name: "Huawei",
    general: 175,
    redDot: 170,
    scope2x: 160,
    scope4x: 145,
    sniper: 95,
    freeLook: 130
  }
};

// Search phone
function searchPhone() {
  const input = document
    .getElementById("phoneSearch")
    .value
    .toLowerCase()
    .trim();

  const result = document.getElementById("result");

  if (input === "") {
    result.innerHTML = `
      <p>
        Please enter your phone model.
        <br>
        කරුණාකර ඔයාගේ Phone Model එක ඇතුළත් කරන්න.
      </p>
    `;
    return;
  }

  let selectedPhone = null;

  for (const brand in phoneSettings) {
    if (input.includes(brand)) {
      selectedPhone = phoneSettings[brand];
      break;
    }
  }

  if (selectedPhone) {
    displaySettings(selectedPhone);
  } else {
    result.innerHTML = `
      <h3>📱 ${input.toUpperCase()}</h3>

      <p>
        Recommended starting settings are not available
        for this model yet.
      </p>

      <p>
        මේ Phone Model එකට settings තවම එකතු කරලා නැහැ.
      </p>
    `;
  }
}

// Display settings
function displaySettings(phone) {
  const result = document.getElementById("result");

  const title = currentLanguage === "en"
    ? "Sensitivity Settings"
    : "Sensitivity සැකසුම්";

  result.innerHTML = `
    <h3>⚡ ${phone.name}</h3>

    <h3>${title}</h3>

    <p>
      General:
      <span class="sensitivity-value">
        ${phone.general}
      </span>
    </p>

    <p>
      Red Dot:
      <span class="sensitivity-value">
        ${phone.redDot}
      </span>
    </p>

    <p>
      2x Scope:
      <span class="sensitivity-value">
        ${phone.scope2x}
      </span>
    </p>

    <p>
      4x Scope:
      <span class="sensitivity-value">
        ${phone.scope4x}
      </span>
    </p>

    <p>
      Sniper Scope:
      <span class="sensitivity-value">
        ${phone.sniper}
      </span>
    </p>

    <p>
      Free Look:
      <span class="sensitivity-value">
        ${phone.freeLook}
      </span>
    </p>

    <p>
      🇱🇰 These are sample starting values.
      Adjust them in-game based on your comfort.
    </p>
  `;
}

// Scroll to sensitivity section
function showSettings() {
  document.getElementById("settings").scrollIntoView({
    behavior: "smooth"
  });
}

// Sinhala / English language switch
function toggleLanguage() {
  const heroText = document.getElementById("heroText");
  const settingsTitle = document.getElementById("settingsTitle");
  const searchText = document.getElementById("searchText");
  const socialTitle = document.getElementById("socialTitle");
  const languageBtn = document.getElementById("languageBtn");

  if (currentLanguage === "en") {
    currentLanguage = "si";

    heroText.innerText =
      "ඔයාගේ Phone එකට ගැළපෙන Sensitivity Settings සොයාගන්න.";

    settingsTitle.innerText =
      "📱 Phone Sensitivity Settings";

    searchText.innerText =
      "ඔයාගේ Phone Model එක Search කරන්න.";

    socialTitle.innerText =
      "🌐 අපගේ Channels Follow කරන්න";

    languageBtn.innerText = "EN / සිං";
  } else {
    currentLanguage = "en";

    heroText.innerText =
      "Find your best sensitivity settings for your mobile phone.";

    settingsTitle.innerText =
      "📱 Phone Sensitivity Settings";

    searchText.innerText =
      "Search your phone model";

    socialTitle.innerText =
      "🌐 FOLLOW OUR CHANNELS";

    languageBtn.innerText = "සිං / EN";
  }
}

// Connect language button
document
  .getElementById("languageBtn")
  .addEventListener("click", toggleLanguage);

// Enter key search
document
  .getElementById("phoneSearch")
  .addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      searchPhone();
    }
  });

console.log("KESHAN SENSITIVE loaded successfully!");
