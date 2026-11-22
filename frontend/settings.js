
// ===================================
// SAVE AND LOAD SETTINGS
// ===================================

// Save all checkbox settings
const checkboxes = document.querySelectorAll(
    '.toggle input[type="checkbox"]'
);

checkboxes.forEach((checkbox, index) => {

    const savedValue = localStorage.getItem(
        'setting_checkbox_' + index
    );

    if (savedValue !== null) {
        checkbox.checked = savedValue === 'true';
    }

    checkbox.addEventListener('change', function () {

        localStorage.setItem(
            'setting_checkbox_' + index,
            checkbox.checked
        );

    });

});


// ===================================
// SAVE DROPDOWN PREFERENCES
// ===================================

const dropdowns = document.querySelectorAll(
    '.preference-control select'
);

dropdowns.forEach((dropdown, index) => {

    const savedValue = localStorage.getItem(
        'setting_dropdown_' + index
    );

    if (savedValue !== null) {
        dropdown.value = savedValue;
    }

    dropdown.addEventListener('change', function () {

        localStorage.setItem(
            'setting_dropdown_' + index,
            dropdown.value
        );

    });

});


// ===================================
// CHANGE PASSWORD BUTTON
// ===================================

const changePasswordButton = document.querySelector(
    '.security-row .outline-button'
);

if (changePasswordButton) {

    changePasswordButton.addEventListener('click', function () {

        alert(
            'Password change functionality will be available after backend integration.'
        );

    });

}


// ===================================
// DELETE ACCOUNT BUTTON
// ===================================

const deleteAccountButton = document.querySelector(
    '.danger-button'
);

if (deleteAccountButton) {

    deleteAccountButton.addEventListener('click', function () {

        const confirmation = confirm(
            'Are you sure you want to delete your account? This action cannot be undone.'
        );

        if (confirmation) {

            alert(
                'Account deletion will be available after backend integration.'
            );

        }

    });

}
