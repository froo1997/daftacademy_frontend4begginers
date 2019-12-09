const hamb = document.querySelector('.page-hamb');
const nav = document.querySelector(".page-navigation");
const link = document.querySelectorAll('.page-navigation__link');

hamb.addEventListener("click", () => {
    nav.classList.toggle("page-navigation-mobile-active");
})

link.forEach(item => {
    item.addEventListener('click', event => {
        nav.classList.remove("page-navigation-mobile-active");
    })
})


const tick = document.querySelectorAll(".concerts__button");

tick.forEach(item => {
    item.addEventListener('click', event => {
        item.innerHTML = "HAVE FUN!";
    })
})

{
    const submit = document.querySelector(".button__contact");

    submit.addEventListener("click", () => {
        const mail = document.querySelector("#email");
        const topic = document.querySelector("#topic");
        console.log(mail.value, topic.value);
    })
}
