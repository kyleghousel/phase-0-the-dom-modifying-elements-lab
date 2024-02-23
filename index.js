const mainID = document.getElementById("main");
mainID.remove()

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "Kyle is the champion"
document.body.append(newHeader);
