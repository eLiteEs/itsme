function openProject(name) {
    window.location.href = name + "/";
}

document.querySelectorAll("td").forEach(e => {
    let projectName = e.id;
    e.addEventListener('click', (e) => {
        openProject(projectName);
    })
})
