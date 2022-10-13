const newNotification = document.querySelectorAll(".new_notification");
const notificationNumber = document.getElementById("newNotificationNumber");
const buttonRead = document.getElementById("readAll");

buttonRead.addEventListener("click", () => {
  newNotification.forEach((e) => {
    e.classList.remove("new_notification");
  });
  notificationNumber.innerHTML = 0;
});
