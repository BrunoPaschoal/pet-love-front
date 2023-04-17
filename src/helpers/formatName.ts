export const formatName = (name: string) => {
  const words = name.toLowerCase().split(" ");

  const formattedWords = words.map((word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  const formattedName = formattedWords.join(" ");

  return formattedName;
};
