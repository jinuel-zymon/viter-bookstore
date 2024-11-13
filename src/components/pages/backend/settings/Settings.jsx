import React from 'react'
import Footer from '../partials/Footer'
import Heading from '../partials/Heading'
import Navigation from '../partials/Navigation'
import Category from './category/Category'
import Mop from './mop/Mop'
import BookType from './booktype/BookType'
import Genre from './genre/Genre'

const Settings = () => {
    const [currentSettings, setCurrentSettings] = React.useState(0)
    const settingsTable = [<BookType/>, <Category/>, <Genre/>, <Mop/>]
    const handleSettingTab = (index) => setCurrentSettings(index)
    return (
    <>
      <section className='flex  min-h-screen bg-secondary'>
        <aside className='bg-primary text-dark basis-[200px]'>
          <Navigation/>
        </aside>
        <main className='basis-[calc(100%-200px)] min-h-[100vh] grid grid-rows-[auto_1fr_auto]'>
          <Heading/>
            <div className='m-8'>
                <nav className='mb-10'>
                    <ul className='flex gap-10  mb-3 border-b border-line'>
                        <li><button onClick={()=>handleSettingTab(0)} className={`tab-link ${currentSettings === 0 ? "active" : ""}`}>Book Type</button></li>
                        <li><button onClick={()=>handleSettingTab(1)} className={`tab-link ${currentSettings === 1 ? "active" : ""}`}>Category</button></li>
                        <li><button onClick={()=>handleSettingTab(2)} className={`tab-link ${currentSettings === 2 ? "active" : ""}`}>Genre</button></li>
                        <li><button onClick={()=>handleSettingTab(3)} className={`tab-link ${currentSettings === 3 ? "active" : ""}`}>MOP</button></li>
                    </ul>
                </nav>

                {settingsTable[currentSettings]}
                
            </div>
          <Footer/>
        </main>
      </section>
       
    </>
    )
}

export default Settings