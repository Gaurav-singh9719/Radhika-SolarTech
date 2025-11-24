// src/utils/meta.js
export function setPageMeta(title, description = "") {
  if (title) document.title = `${title} | Radhika SolarTech`;

  let descTag = document.querySelector('meta[name="description"]');
  if (!descTag) {
    descTag = document.createElement("meta");
    descTag.name = "description";
    document.head.appendChild(descTag);
  }
  descTag.content = description;

  // Open Graph (basic)
  let ogTitle = document.querySelector('meta[property="og:title"]');
  if (!ogTitle) {
    ogTitle = document.createElement("meta");
    ogTitle.setAttribute("property", "og:title");
    document.head.appendChild(ogTitle);
  }
  ogTitle.content = `${title} | Radhika SolarTech`;

  let ogDesc = document.querySelector('meta[property="og:description"]');
  if (!ogDesc) {
    ogDesc = document.createElement("meta");
    ogDesc.setAttribute("property", "og:description");
    document.head.appendChild(ogDesc);
  }
  ogDesc.content = description;
}
