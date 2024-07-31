const { ref } = require("vue");

export default function useAlert(startingVisiblility = false) {
    const alertIsVisible = ref(startingVisiblility);

    function showAlert() {
        alertIsVisible.value = true;
    }
    function hideAlert() {
        alertIsVisible.value = false;
    }

    return [
        alertIsVisible,
        showAlert,
        hideAlert
    ];
}