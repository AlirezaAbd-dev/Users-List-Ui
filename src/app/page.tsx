import Cards from "@/components/cards/Cards";
import HamburgerMenu from "@/components/Menu";
import MenuList from "@/components/MenuList";
import SearchBox from "@/components/SearchBox";
import Title from "@/components/ui/Title";
import MainLayout from "@/layouts/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Title />
      <div className="flex justify-between space-x-10 sm:space-x-20 md:space-x-10 items-center">
        {/* Search Container */}
        <SearchBox />
        {/* Menu Container */}
        <div>
          {/* Mobile hamburger Menu */}
          <HamburgerMenu />

          {/* Menu List */}
          <MenuList />
        </div>
      </div>

      {/* User Cards */}
      <Cards />
    </MainLayout>
  );
}
