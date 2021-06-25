function onSubmit(event) {
    event.preventDefault();

    const form = event.target;

    /** Get all of the form data */
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => data[key] = value);
    alert(JSON.stringify(data, null, 2));
    return;
}

(() => {
    let form = document.getElementById('testForm');
    if (null === form) {
        alert('could not find form');
    }
    else {
        form.addEventListener('submit', onSubmit);
    }
})();