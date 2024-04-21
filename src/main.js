import "./main.css";
import Main2 from "./main2";
import Main1 from "./main1";
import MainSearch from "./mainSearch";
import MainInfo from "./mainInfo";
import MainFooter from "./mainFooter";
export default function Main() {
  return (
    <div>
      <Main1 />
      <div className="vv"></div>
      <MainSearch />
      <Main2 />
      <div className="vv"></div>
      <MainInfo />
      <div className="vv"></div>
      <MainFooter/>
    </div>
  );
}
