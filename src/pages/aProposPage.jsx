import banner from '../assets/banner-about.png'
import "../css/banner.css"
import "../css/aProposPage.css"
import Collapse from '../components/collapse'
import about from "../data/about"


function About() {
    return (
        <div className='page-about'>
            <div className="banner about"  style={{
                backgroundImage: `url(${banner})`,
                }}> 
            </div>

                <section className="collapse-about">
                    <Collapse
                        title="Fiabilité"
                        content={about.fiability}    
                    />

                    <Collapse
                        title="Respect"
                        content={about.respect}    
                    />

                    <Collapse
                        title="Service" 
                        content={about.service}
                    />
                    
                    <Collapse 
                        title="Responsabilité"
                        content={about.responsability}
                    />
                </section>
        </div>
    )
}

export default About
