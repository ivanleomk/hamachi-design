import React from "react";

type ArticleTag = {
  tag: string;
  emphasis: boolean;
  onClick: () => void;
};

const styles = {
  "no-emphasis":
    "mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer",
  emphasis:
    "mr-3 text-sm font-medium text-blue-500 uppercase hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer underline",
};

const ArticleTag = ({ tag, onClick, emphasis }: ArticleTag) => {
  return (
    <p
      className={emphasis ? styles.emphasis : styles["no-emphasis"]}
      onClick={() => onClick()}
    >
      {tag}
    </p>
  );
};

export default ArticleTag;
