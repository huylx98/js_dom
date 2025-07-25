const title = document.querySelector("#title");
const detail = document.querySelector("#detail");

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get("id");
const item = mockData.find((item) => item.id == id);

title.append(item.title);

detail.innerHTML = `
    <div>${item.description}</div>
`;
