export type FeatureType = {
  title: string;
  subtitle: string;
  image: string;
  points: string[];
};

export type FooterLinkItem = {
  title: string;
  path: string;
};

export type HeaderLinkItem = {
  path: string;
  title: string;
};

export type PostData = {
  frontMatter: {
    date: string;
    description: string;
    tags: string[];
    thumbnailUrl: string;
    title: string;
  };
  slug: string;
};
