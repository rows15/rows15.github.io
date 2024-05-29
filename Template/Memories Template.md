---
layout: post
title: <%* let title = await tp.system.prompt("Nome do Post") -%>
<% tp.file.rename(tp.date.now()+"-"+ title) %> <%title%>
date: <%*
let dateInput = await tp.system.prompt("Enter date (YYYYMMDD) or leave empty for current date");
if (!dateInput) {
    dateInput = tp.date.now("YYYY-MM-DD");
} else {
    dateInput = `${dateInput.substring(0, 4)}-${dateInput.substring(4, 6)}-${dateInput.substring(6, 8)}`;
}

let timeInput = await tp.system.prompt("Enter time (HHmmss) or leave empty for current time");
if (!timeInput) {
    timeInput = tp.date.now("HH:mm:ss");
} else {
    timeInput = `${timeInput.substring(0, 2)}:${timeInput.substring(2, 4)}:${timeInput.substring(4, 6)}`;
}

let dateTime = `${dateInput} ${timeInput} ${tp.date.now("ZZ")}`;
%> <%dateTime%>
categories: Memories
tags: <%* let tags = ["music", "code", "trips", "misc", "meta"];
let selectedTags = [];
selectedTags.push("memories")

let finalTagsString = "";
for (let tag of tags) {
    let includeTag = await tp.system.prompt(`Include tag "${tag}"? (yes/no)`);
    if (includeTag.toLowerCase() === "y") {
        selectedTags.push(tag);
    }
finalTagsString = "[" + selectedTags.join(", ") + "]";}
 %> <%finalTagsString%>
catbank: [Projetos,Memorias,Ideias,Blog,Misc,Meta]
tagbank: [music,code,trips,memories,misc,meta]
---

<!-- ![]() -->


