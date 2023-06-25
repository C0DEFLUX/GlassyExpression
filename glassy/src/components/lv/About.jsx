import React from 'react'
import AboutImg from '../../assets/img/about_img.jpg'


function About() {

    return (
        <section id="about" className="flex flex-col items-center">
            <div className="container min-h-screen flex pt-20 flex-wrap">
                <div className="about-text-wrapper flex flex-col gap-10 w-full lg:w-1/2 lg:mt-20">
                    <h2 className="text-5xl font-medium lg:mb-8">Mazliet par mums</h2>
                    <div className="flex gap-4 mb-16 lg:mb-0">
                        <div className="about-text-row w-[300px] h-[6px] bg-black mt-2"></div>
                        <div className="about-text flex flex-col gap-8 pr-0">
                            <p>Glassy Expression ir uzņēmums, kas izprot mūsu mīļoto piemiņas vietu nozīmi un to, cik svarīgi ir pieminēt aizgājušos.</p>
                            <p>Mūsu radošajā pieejā mēs apvienojam tradicionālās tehnoloģijas ar inovatīviem dizaina risinājumiem, lai radītu apbrīnojamus piemiņas vietu darbus, kas atspoguļo cilvēka garīgumu un izturību. Katrs stikla kapakmens un piemiņas vieta, ko mēs radām, ir apliecinājums mūsu neatlaidīgai kvalitātes prasībai. Mēs izmantojam tikai izcilus materiālus, lai nodrošinātu skaidrību un izturību. Mēs uzskatām, ka katrai piemiņas vietai vajadzētu būt tikpat unikālai kā tās pieminētajai personai.</p>
                            <p>Glassy Expression saprot, ka sēru process ir ļoti personisks un jūtīgs. Ar līdzjūtību un empatiju mūsu komanda ir šeit, lai jūs atbalstītu visā radīšanas procesā, piedāvājot atbalstu, sapratni un atvērtas ausis. Mēs uzskatām, ka atklāta komunikācija un sadarbība ir būtiskas, lai radītu piemiņas vietu, kas pārsniedz jūsu cerības un sniedz mieru šajos grūtajos laikos.</p>
                            <a className="underline" href="mailto:glassyexpression@gmail.com">glassyexpression@gmail.com</a>
                        </div>
                    </div>
                </div>
                <div className="about-image-container flex justify-end w-full mb-20 lg:w-1/2 lg:h-[45rem]">
                    <img className="h-auto object-contain lg:h-full" src={AboutImg} alt="About section image"/>
                </div>
            </div>
        </section>
    )

}

export default About;