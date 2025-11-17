import ArticleLayout from "@/components/article-layout";
import Categories from "@/components/categories";
import InterfaceLayout from "@/components/interface-layout";

export default function Home() {
  return (
    <InterfaceLayout>

        <Categories />
      <ArticleLayout />
    </InterfaceLayout>
  );
}
