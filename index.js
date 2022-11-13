const unreadMessages = document.querySelectorAll(".unread");
const unread = document.getElementById("countNotify");
const markAll = document.getElementById("statusCheck");

// To show the unread messages count
unread.innerText = unreadMessages.length;

unreadMessages.forEach((message) => {
    message.addEventListener("click", () => {
        message.classList.remove("unread");
        const newUnreadMessages = document.querySelectorAll(".unread");
        unread.innerText = newUnreadMessages.length;
    })
})
markAll.addEventListener("click", () => {
    unreadMessages.forEach(message => message.classList.remove("unread"))
    const newUnreadMessages = document.querySelectorAll(".unread");
    unread.innerText = newUnreadMessages.length;
    markAll.innerText = "No new Messages";
})

