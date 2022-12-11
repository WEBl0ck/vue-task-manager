// this hook handle auto height for textarea
export const useAutoResize = () => {
  const autoResize = (el: any) => {
    el.style.height = "auto";
    el.style.height = `${el.scrollHeight}px`;
  };

  return { autoResize };
};
