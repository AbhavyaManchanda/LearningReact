import Tabs from "./tabs"
import Content from "./content"


export default function Tabtest() {
  //array create ho ri hai jisme react k elements hain
  //jo abhi sirf javascript ke object hai

    //React elements as data: content: <div>...</div> actual DOM nahi, ek lightweight React element object hota hai. Child jab use render karta hai tab woh DOM banta hai.
    
    //content me hm alag component bhi render kr skte hai

  const tabs = [
    { label: "tab1", content: "content for tab1" },
    { label: "tab2", content:  <Content/> },
    { label: "tab3", content: <div>content for tab3</div> },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  //Callback upward: Child parent ko sirf function call karke inform karta hai (yahi onChange hai).

  return <Tabs tabscontent={tabs} onChange={handleChange} />;
  //child component me data pass krra hai
  //tabs array me do components hai... lekin hm tabs me do alag cheeje pass krre hai.. dono diff hai
}