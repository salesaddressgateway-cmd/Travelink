/**
 * Travelink - Live Logo & Profile Media Uploader
 * Allows Akshay to upload and preview his official logo and profile photo live.
 */

document.addEventListener('DOMContentLoaded', () => {
  const customizerToggleBtn = document.getElementById('customizerToggleBtn');
  const customizerDrawer = document.getElementById('customizerDrawer');
  const closeCustomizerBtn = document.getElementById('closeCustomizerBtn');
  const logoFileInput = document.getElementById('logoFileInput');
  const profileFileInput = document.getElementById('profileFileInput');
  const resetMediaBtn = document.getElementById('resetMediaBtn');

  // Drawer Toggle
  if (customizerToggleBtn && customizerDrawer) {
    customizerToggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      customizerDrawer.classList.toggle('active');
    });

    if (closeCustomizerBtn) {
      closeCustomizerBtn.addEventListener('click', () => {
        customizerDrawer.classList.remove('active');
      });
    }

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!customizerDrawer.contains(e.target) && e.target !== customizerToggleBtn) {
        customizerDrawer.classList.remove('active');
      }
    });
  }

  // Load saved custom media from localStorage if present
  loadSavedMedia();

  // Logo Upload Handler
  if (logoFileInput) {
    logoFileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          const customLogoUrl = evt.target.result;
          applyCustomLogo(customLogoUrl);
          localStorage.setItem('travelink_custom_logo', customLogoUrl);
          showToast('Custom logo applied successfully!');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Profile Photo Upload Handler
  if (profileFileInput) {
    profileFileInput.addEventListener('change', function(e) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function(evt) {
          const customProfileUrl = evt.target.result;
          applyCustomProfile(customProfileUrl);
          localStorage.setItem('travelink_custom_profile', customProfileUrl);
          showToast('Akshay profile photo updated successfully!');
        };
        reader.readAsDataURL(file);
      }
    });
  }

  // Reset to default placeholder images
  if (resetMediaBtn) {
    resetMediaBtn.addEventListener('click', () => {
      localStorage.removeItem('travelink_custom_logo');
      localStorage.removeItem('travelink_custom_profile');
      location.reload();
    });
  }

  function applyCustomLogo(url) {
    const logoImgs = document.querySelectorAll('.brand-logo-img, .footer-logo-img');
    logoImgs.forEach(img => {
      img.src = url;
    });
  }

  function applyCustomProfile(url) {
    const profileImgs = document.querySelectorAll('.profile-avatar-img, .about-profile-img');
    profileImgs.forEach(img => {
      img.src = url;
    });
  }

  function loadSavedMedia() {
    const savedLogo = localStorage.getItem('travelink_custom_logo');
    const savedProfile = localStorage.getItem('travelink_custom_profile');

    if (savedLogo) applyCustomLogo(savedLogo);
    if (savedProfile) applyCustomProfile(savedProfile);
  }
});
