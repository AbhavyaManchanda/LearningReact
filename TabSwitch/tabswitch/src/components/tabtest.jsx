import Tabs from "./tabs"


export default function Tabtest() {

    const tabs = [
        {
            label: 'tab1',
            content: <div>content for tab1</div>
        },
        {
            label: 'tab2',
            content: <div>content for tab2</div>
        },
        {
            label: 'tab3',
            content: <div>content for tab3</div>
       }
    ]

    function handleChange(currentTabIndex) {
        console.log(currentTabIndex);
        
    }


    return <Tabs tabscontent={tabs} onChange={handleChange} />
}