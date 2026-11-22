
document.addEventListener("DOMContentLoaded", function () {

    const savedData = localStorage.getItem("signupData");

    if (!savedData) {
        return;
    }

    const account = JSON.parse(savedData);

    function fillField(fieldNames, value) {

        for (const name of fieldNames) {

            const field =
                document.querySelector(`[name="${name}"]`) ||
                document.getElementById(name);

            if (field && !field.value) {
                field.value = value || "";
                return;
            }
        }
    }

    fillField(["fullName", "full_name", "name"], account.fullName);
    fillField(["email"], account.email);
    fillField(["contact", "phone", "contactNumber"], account.contact);
    fillField(["username"], account.username);

});
