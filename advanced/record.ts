{
  type PageInfo = {
    title: string;
    subtitle?: string;
  };
  type Page = "home" | "about" | "contact";

  const nav: Record<Page, PageInfo> = {
    home: {
      title: "home",
    },
    about: { title: "about" },
    contact: { title: "contact" },
  };
}
