import { useState } from "react";
import "./tabs.css";

export default function Tabs({ tabscontent ,onChange }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(1);

  function handleOnClick(CurrentIndex) {
    setCurrentTabIndex(CurrentIndex);
    onChange(CurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {/* ye function teen alag alag divs bna ra hai..mtlb array ke har component k liye */}

        {tabscontent.map((tabitem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabitem.label} //ye reconciliation me help karta hai; labels unique rakhna best practice
            //With key: React har element ko permanently identify kar pata hai. Agar tum reorder ya remove karo to React samajh jata hai kaunsa element “same” hai aur kaunsa “new”.
          >
            <span className="label"> {tabitem.label} </span>
          </div>
        ))}
      </div>

      <div className="content" style={{ color: "red" }}>
        {tabscontent[currentTabIndex] && tabscontent[currentTabIndex].content}
        {/* React diffing karke sirf zaroori DOM changes apply karta hai (efficient reconciliation) */}
      </div>
    </div>
  );
}
