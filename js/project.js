function getProjectSlug() {
  const params = new URLSearchParams(window.location.search);
  return params.get("p");
}

function isVideoSrc(src) {
  return /\.(mp4|webm|mov)(\?.*)?$/i.test(src);
}

function renderPlaceholderImage(label, modifier) {
  return `<div class="project-case__placeholder project-case__placeholder--${modifier}" role="img" aria-label="${label}"><span>${label}</span></div>`;
}

function renderMedia(src, label, modifier) {
  if (!src) {
    return renderPlaceholderImage(label, modifier);
  }

  if (isVideoSrc(src)) {
    return `<video class="project-case__video project-case__video--${modifier}" src="${src}" autoplay muted loop playsinline disablepictureinpicture aria-label="${label}"></video>`;
  }

  return `<img class="project-case__image project-case__image--${modifier}" src="${src}" alt="${label}" />`;
}

function renderServicesList(services) {
  return services.map((item) => `<li>${item}</li>`).join("");
}

function renderGallery(items, title) {
  return items
    .map((item, index) => {
      if (typeof item === "object" && item.type === "text") {
        return `<div class="project-case__gallery-item project-case__gallery-item--text">${item.content}</div>`;
      }
      const src = item;
      const label = `${title} — media ${index + 1}`;
      const content = renderMedia(src, label, "gallery");
      return `<div class="project-case__gallery-item">${content}</div>`;
    })
    .join("");
}

function initProjectVideos(root) {
  root.querySelectorAll(".project-case__video").forEach((video) => {
    video.controls = false;
    video.setAttribute("controlsList", "nodownload nofullscreen noremoteplayback");
    video.setAttribute("disableRemotePlayback", "");
    const play = () => video.play().catch(() => {});
    play();
    video.addEventListener("click", (e) => {
      e.preventDefault();
    });
  });
}

function renderProject(project) {
  const root = document.getElementById("project-root");
  if (!root || !project) return;

  document.title = `${project.title} | Portfolio`;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.content = project.shortDescription;

  root.innerHTML = `
    <article class="project-case">
      <header class="project-case__header">
        <a href="work.html" class="project-case__back">← Back to Work</a>
        <h1 class="project-case__title">${project.title}</h1>
        <p class="project-case__lead">${project.shortDescription}</p>
      </header>

      <figure class="project-case__hero">
        ${renderMedia(project.heroImage, `${project.title} hero`, "hero")}
      </figure>

      <section class="project-case__split">
        <div class="project-case__overview">
          <p>${project.overview}</p>
          ${project.overviewLink ? `<a href="${project.overviewLink.url}" class="work-item__link" target="_blank" rel="noopener noreferrer"><strong>${project.overviewLink.label}</strong> →</a>` : ""}
        </div>
        <aside class="project-case__details">
          <table class="project-case__table">
            <tbody>
              <tr>
                <th scope="row">Services</th>
                <td>
                  <ul class="project-case__services">
                    ${renderServicesList(project.services)}
                  </ul>
                </td>
              </tr>
              <tr>
                <th scope="row">Industries</th>
                <td>${project.industries}</td>
              </tr>
              <tr>
                <th scope="row">Challenge</th>
                <td>${project.challenge}</td>
              </tr>
              <tr>
                <th scope="row">What I did</th>
                <td>${project.whatIDid}</td>
              </tr>
            </tbody>
          </table>
        </aside>
      </section>

      <section class="project-case__gallery" aria-label="Project gallery">
        ${renderGallery(project.gallery, project.title)}
      </section>
    </article>
  `;

  initProjectVideos(root);
}

function initProjectPage() {
  const slug = getProjectSlug();
  const project = slug && typeof PROJECTS !== "undefined" ? PROJECTS[slug] : null;
  const root = document.getElementById("project-root");

  if (!project) {
    if (root) {
      root.innerHTML = `
        <div class="project-case project-case--empty">
          <p class="project-case__lead">Project not found.</p>
          <a href="work.html" class="project-case__back">← Back to Work</a>
        </div>
      `;
    }
    return;
  }

  renderProject(project);
}

document.addEventListener("DOMContentLoaded", initProjectPage);
