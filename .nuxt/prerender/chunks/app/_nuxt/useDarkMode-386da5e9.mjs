const useDarkMode = () => {
  const switchMode = (isChecked) => {
    document.body.classList.toggle("dark", isChecked);
  };
  return {
    switchMode
  };
};

export { useDarkMode as u };
//# sourceMappingURL=useDarkMode-386da5e9.mjs.map
