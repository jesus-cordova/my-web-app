const skills = [
  {
    imgPath: "images/javascript-logo.png",
    skill: "JavaScript",
  },
  {
    imgPath: "images/sql-logo.png",
    skill: "SQL",
  },
  {
    imgPath: "images/react-logo.png",
    skill: "React",
  },
  {
    imgPath: "images/java-logo.png",
    skill: "Java",
  },
  {
    imgPath: "images/html-logo.png",
    skill: "HTML",
  },
  {
    imgPath: "images/aws-logo.png",
    skill: "AWS",
  },
  {
    imgPath: "images/git-logo.png",
    skill: "Git",
  },
  {
    imgPath: "images/kubernetes-logo.png",
    skill: "Kubernetes",
  },
  {
    imgPath: "images/angular-logo.png",
    skill: "Angular",
  },
  {
    imgPath: "images/css-logo.png",
    skill: "CSS",
  },
];

const links = document.querySelectorAll(".nav-links");
const pathname = window.location.pathname;
links.forEach((el) => {
  if (el.href.includes(pathname)) {
    console.log("test");
    console.log();
    el.classList.add("selected");
  }
});

const container = document.querySelector(".skills-card-container");
const addCards = () => {
  skills.map((skill) => {
    const element = document.createElement("div");
    element.classList.add("skills-card");
    console.log("hello");
    element.innerHTML = `
        <img src="${skill.imgPath}">
        <p>${skill.skill}</p>
    `;
    container.appendChild(element);
  });
};

addCards();

const smallSections = document.querySelectorAll(
  ".navbar-container, .about-container ",
);
const largeSections = document.querySelectorAll(
  ".skills-container, .experience-container, .contact-container",
);

const callbackObserver = (entries) => {
  entries.forEach((entry) => {
    let currenDot = document.querySelector(
      `.section-indicators a[href='#${entry.target.id}']`,
    );
    if (entry.isIntersecting) {
      currenDot.classList.add("active");
    } else {
      currenDot.classList.remove("active");
    }
  });
};
const observerSmall = new IntersectionObserver(callbackObserver, {
  threshold: 0.6,
});
const observerLarge = new IntersectionObserver(callbackObserver, {
  threshold: 0.4,
});
smallSections.forEach((section) => {
  observerSmall.observe(section);
});
largeSections.forEach((section) => {
  observerLarge.observe(section);
});

const animation = document.querySelectorAll(
  ".timeline-section-right, .timeline-section-left",
);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
      } else {
        entry.target.classList.remove("animate");
      }
    });
  },
  {
    threshold: 0.5,
  },
);

for (let i = 0; i < animation.length; i++) {
  const el = animation[i];
  observer.observe(el);
}
