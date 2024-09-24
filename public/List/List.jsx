import './list.css';
import { BsThreeDots } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { BsPlus } from "react-icons/bs";
import { useState, useRef, useCallback, useEffect } from 'react';

function List() {
    const [activeIndex, setActiveIndex] = useState(null);
    const optionsRef = useRef(null);

    // Toggle options menu visibility
    const toggleOptions = useCallback((index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }, []);

    // Close the options menu if clicking outside
    const handleClickOutside = useCallback((event) => {
        if (optionsRef.current && !optionsRef.current.contains(event.target)) {
            setActiveIndex(null);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [handleClickOutside]);
    

    return (
        <>
            <div className='NavigationBox'>
                <div className='Navigation'>
                    <div className='TextTitle'><h2>Сотрудники</h2></div>
                    <div className='search-bar-container'>
    <div className='search-input-wrapper'>
        <CiSearch className='SearchIcon' />
        <input 
            type="text"
            placeholder="Поиск"
            className="search-input"
            aria-label="Search"
        />
    </div>
    <button className="add-button"> 
        <BsPlus className='plus' />
        <p className='AddButtonText'>Добавить</p> 
    </button>
</div>

                </div>
            </div>

            <div className='body'>
                <div className='Main-List-Div'>
                    {[...Array(100)].map((_, index) => (
                        <div key={index}>
                            <div className='List-div'>
                                <div className='Main-item-div'>
                                    <p className='P-name'>ICHB</p>
                                    <p className='p-role'>ICHB</p>
                                </div>
                                <div className='Secondary-item-div'>
                                    <BsThreeDots
                                        className='ThreeDots'
                                        onClick={() => toggleOptions(index)}
                                        aria-haspopup="true"
                                        aria-expanded={activeIndex === index}
                                    />
                                    {activeIndex === index && (
                                        <div className='options' ref={optionsRef}>
                                            <div className='sticky-options'>
                                                <button className="edit-button">
                                                    <p className='ButtonText'>Edit</p>
                                                </button>
                                                <button className="delete-button">
                                                    <p className='ButtonText'>Delete</p>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className='Line'>
                                <hr />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default List;