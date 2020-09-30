const langColors = {
  "JavaScript" : "yellow",
  "CSS" : 'violet',
  "TypeScript" : "blue",
  "HTML" : "red"
}

export const getColor = (lang) => langColors[lang] || "gray";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const getDate = (dateString) => {
  let date = new Date(dateString);
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
};

export const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);