import React, {useEffect, useState} from 'react';
import Header from "../Header";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {getPreferredLanguage, setPreferredLanguage} from "../../utils/languageUtils";
import img from "../../assets/img/about_img.jpg";
import Fb from "../../assets/img/fb_icon.svg";
import Ig from "../../assets/img/ig_icon.svg";
import ChevUp from "../../assets/img/chev_up.svg";

const loadLanguage = async (language) => {
    const response = await fetch(`/locales/${language}.json`);
    return response.json();
};
const ProductCatalog = () => {

    const [loader, setLoader] = useState(true)
    const [data, setData] = useState([])
    const API_URL = `${process.env.REACT_APP_API_URL}`
    const navigate = useNavigate()
    const [category, setCategory] = useState([])
    const [selectedCategory, setSelectedCategory] = useState('all');


    const [language, setLanguage] = useState(getPreferredLanguage());
    const [translations, setTranslations] = useState({});

    useEffect(() => {
        const fetchData = () => {
            axios.get(`${API_URL}/product-data`)
                .then(response => {
                    setData(response.data)
                })
                .catch(error => {
                })
        }
        const fetchCategories = () => {
            axios.get(`${API_URL}/category-data`)
                .then(response => {
                    setCategory(response.data)
                    console.log(category)
                })
                .catch(error => {
                })
        }
        const fetchTranslations = async () => {
            const data = await loadLanguage(language);
            setTranslations(data);
        };

        fetchCategories()
        fetchData()
        fetchTranslations();
    }, [language]);

    const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
        setPreferredLanguage(newLanguage);
    };

    useEffect(() => {


    }, [])

    const openProduct = (name) => {
        navigate(`/product/${name}`)
    }


    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const filteredData = selectedCategory === 'all'
        ? data
        : data.filter(item => item.category[language] === selectedCategory);
    return (
        <>
            <Header currentLanguage={language} onChangeLanguage={handleChangeLanguage}/>
            <div className="flex justify-center  bg-gray-100">
                <div className="container mb-20 pt-10 px-2 min-h-screen w-full ">
                    <select
                        name=""
                        id=""
                        value={selectedCategory}
                        onChange={handleCategoryChange}
                        className="p-2 rounded-xl mb-4"
                    >
                        <option value="all">{translations.catalog_option_all}</option>
                        {category.map((item) => (
                            <option key={item.id} value={item[`category_name_${language}`]}>
                                {item[`category_name_${language}`]}
                            </option>
                        ))}
                    </select>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:grid-rows-2 grid-rows-1 gap-8">
                        {filteredData.map((item)=> (
                            <div className="bg-white rounded-xl" key={item.id}>
                                <img className="w-full h-[23rem] object-contain p-2 rounded-xl" src={item.main_img} alt=""/>
                                <div className="flex items-center justify-between mt-3 p-2">
                                    <h1 className="bg-white text-lg font-semibold rounded-xl"><span className="opacity-50">{item.category[`${language}`]} / </span>{item[`product_title_${language}`]}</h1>
                                    <button onClick={() => openProduct(item.product_title_lv)} className="admin-btn">{translations.catalog_btn_view}</button>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <footer id="contact" className="min-h-[20rem] border-t-[2px] border-gray-200 relative flex flex-col items-center justify-center">
                <h1 className="text-3xl text-center font-bold absolute top-[-35px] bg-white px-10 left-1/2 transform -translate-x-1/2 lg:px24 md:top-[-18px] lg:px-24">Glassy Expression</h1>
                <div className="footer-wrapper gap-8 mt-20 flex flex-col justify-between items-center container lg:flex-row lg:gap-0">
                    <div className="footer-info items-center flex flex-col gap-4 w-[20rem] lg:items-start">
                        <a href="tel:+37127909600">+371 27 909 600</a>
                        <a href="mailto:glassyexpression@gmail.com">glassyexpression@gmail.com</a>
                    </div>
                    <div className="footer-socials flex gap-10 items-center">
                        <a href="https://www.facebook.com/profile.php?id=100089113908817" target="_blank"><img className="h-[28px]" src={Fb} alt="Facebook icon"/></a>
                        <a href="https://www.instagram.com/glassyexpression" target="_blank"><img className="h-[32px]" src={Ig} alt="Instagram icon"/></a>
                    </div>
                    <div className="footer-nav mb-4 flex flex-col items-center gap-4 w-[20rem] lg:items-end lg:mb-0">
                        <a className="underline" href="/">{translations.footer_btn_home}</a>
                        <a className="underline" href="#about">{translations.footer_btn_about}</a>
                        <a className="underline" href="#work">{translations.footer_btn_work}</a>
                        <a className="underline" href="#contact">{translations.footer_btn_contact}</a>
                    </div>

                </div>
                <a  onClick={() => {window.scrollTo({top: 0, behavior: 'smooth'});}} className="mb-4 flex gap-2 items-center font-bold" href=""><p>{translations.footer_back_to_top}</p> <img className="h-[26px]" src={ChevUp} alt="Chevron up"/></a>
                <p className="text-center">© 2023. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default ProductCatalog;